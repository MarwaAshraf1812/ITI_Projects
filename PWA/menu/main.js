if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then((registration) => {
    console.log('Step 1: Registration Successful!');
    console.log('Scope of this worker is:', registration.scope);
  }) .catch((err) => {
    console.log('Registration Failed!', err);
  })
}


let deferredPrompt;
const installBtn = document.getElementById('installApp');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log(e)

  installBtn.style.display = 'inline-block';

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((res) => {
      if(res.outcome === 'accepted'){
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      installBtn.style.display = 'none';
      deferredPrompt = null;
    })
  })
})

Notification.requestPermission().then(perm=> {
  if(perm === "granted") {
    console.log("Notification permission allowed", perm);
    navigator.serviceWorker.ready.then((registration) => {
      var  options = {
          body: "notification from sushi menu",
          icon: 'images/icon192.png',
          badge: 'images/icon192.png',
          renotify: true,
          tag:"sushi-menu-notification",
          actions: [
          {action: 'open', title: 'open'},
          {action: 'close', title: 'close'}
        ]
        }
      registration.showNotification("New notification from sushi menu", options)
    })
  }
})
