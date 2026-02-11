self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.open("/")
  )
})