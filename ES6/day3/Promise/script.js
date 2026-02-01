const apiUrl = "https://jsonplaceholder.typicode.com/users";


function fetchUserData(apiUrl) {
  fetch(apiUrl).then((response) => {
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((usersData) => {
    if(!usersData || usersData.length ===0) {
      console.log("The response is empty")
    } else {
      const tableBody = document.getElementById("tableBody");
      const table = document.getElementById("userTableData")
      const statusElem = document.getElementById("status");

      usersData.forEach(user => {
        const tRow = document.createElement("tr");

        const data = [
          user.id,
          user.name, 
          user.username, 
          user.email, 
          user.address.city,
          user.company.name
        ]

        data.forEach(text => {
          const cell = document.createElement("td");
          cell.textContent = text;
          tRow.appendChild(cell);
        });

        tableBody.appendChild(tRow);
      });
      statusElem.style.display = "none";
      table.style.display = "table";
    }
  })
  .catch(error => {
  console.error("Error fetching data:", error);
  document.getElementById("status").textContent = "Failed to load data. Check console for details.";
  document.getElementById("status").style.color = "red";
  });
} 

fetchUserData(apiUrl);