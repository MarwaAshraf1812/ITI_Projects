const dbPromise = idb.open("todo-db", 1, (upgradeDB) => {
  if (!upgradeDB.objectStoreNames.contains("tasks")) {
    upgradeDB.createObjectStore("tasks", { keyPath: "id" });
  }
});

function addTask(taskData) {
  return dbPromise.then((db) => {
    const tx = db.transaction("tasks", "readwrite");
    tx.objectStore("tasks").add(taskData);
    return tx.complete;
  });
}

function getTasks() {
  return dbPromise
    .then((db) => {
      return db.transaction("tasks", "readonly").objectStore("tasks").getAll();
    })
    .then((tasks) => {
      console.log(tasks);
      return tasks;
    });
}

document.getElementById("addBtn").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const hour = parseInt(document.getElementById("hour").value) || 0;
  const minute = parseInt(document.getElementById("minute").value) || 0;
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const dueDate = new Date(year, month - 1, day, hour, minute);
  const dueTime = dueDate.getTime();
  const now = Date.now();

  const isPast = dueTime <= now;

  console.log("Due Date Object:", dueDate);
  console.log("Due Time (ms):", dueTime);
  console.log("Current Time (ms):", now);
  if (dueTime <= now) {
    alert(
      `Past task! Due: ${dueDate.toLocaleString()} | Now: ${new Date(now).toLocaleString()}`,
    );
    return;
  }

  const task = {
    id: crypto.randomUUID(),
    title: title,
    completed: isPast,
    createdAt: now,
    notified: false,
    dueDate: dueTime,
  };

  addTask(task).then(() => {
    renderTasks();
  });
});

function renderTasks() {
  getTasks().then((tasks) => {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-start";

      if (task.completed) {
        li.style.opacity = "0.6";
        li.style.textDecoration = "line-through";
      }

      const realDate = new Date(task.dueDate);

      const hour = String(realDate.getHours()).padStart(2, "0");
      const minute = String(realDate.getMinutes()).padStart(2, "0");
      const day = realDate.getDate();
      const month = realDate.getMonth() + 1;
      const year = realDate.getFullYear();

      li.innerHTML = `
        <div class="ms-2 me-auto">
          <div class="fw-bold">${task.title}</div>
          <small class="text-muted">
            ${hour}:${minute} - ${day}/${month}/${year}
          </small>
        </div>
        <div>
          <button class="btn btn-sm btn-outline-success me-2 completeBtn">
          ✓
        </button>
        </div>

        <div>
          <button class="btn btn-sm btn-outline-danger deleteBtn">
            ✕
          </button>
        </div>
      `;

      const deleteBtn = li.querySelector(".deleteBtn");
      const completeBtn = li.querySelector(".completeBtn");
      deleteBtn.addEventListener("click", () => {
        deleteTask(task.id).then(() => {
          renderTasks();
        });
      });

      completeBtn.addEventListener("click", () => {
        completeTask(task.id).then(() => {
          renderTasks();
        });
      });

      list.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});

function deleteTask(id) {
  return dbPromise.then((db) => {
    const tx = db.transaction("tasks", "readwrite");
    tx.objectStore("tasks").delete(id);
    return tx.complete;
  });
}

function completeTask(id) {
  return dbPromise.then((db) => {
    const tx = db.transaction("tasks", "readwrite");
    const store = tx.objectStore("tasks");
    return store
      .get(id)
      .then((task) => {
        task.completed = true;
        return store.put(task);
      })
      .then(() => {
        return tx.complete;
      });
  });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => console.log("SW Registered", reg))
    .catch((err) => console.log("sw Errors", err));
}

Notification.requestPermission().then((perm) => {
  console.log("Permission:", perm);
});

function showNotification(task) {
  navigator.serviceWorker.ready.then((reg) => {
    reg.showNotification("Task Reminder ⏰", {
      body: task.title,
      tag: task.id,
    });
  });
}

setInterval(() => {
  dbPromise
    .then((db) => {
      return db.transaction("tasks").objectStore("tasks").getAll();
    })
    .then((tasks) => {
      const now = Date.now();
      let updated = false;

      tasks.forEach((task) => {
        if (!task.completed && !task.notified && task.dueDate <= now) {
          // 👇 لازم نناديها
          showNotification(task);

          task.completed = true;
          task.notified = true;

          dbPromise.then((db) => {
            const tx = db.transaction("tasks", "readwrite");
            tx.objectStore("tasks").put(task);
            return tx.complete;
          });

          updated = true;
        }
      });

      if (updated) renderTasks();
    });
}, 60000);
