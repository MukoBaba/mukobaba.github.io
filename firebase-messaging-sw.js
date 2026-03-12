importScripts("https://www.gstatic.com/firebasejs/12.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCQ8EoCKdkTbRtLolmyEzE8XXlIMBVSN9M",
  authDomain: "mukocanchat.firebaseapp.com",
  projectId: "mukocanchat",
  storageBucket: "mukocanchat.firebasestorage.app",
  messagingSenderId: "17850418068",
  appId: "1:17850418068:web:0852341553c821de0a8581"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || "MukoCan Chat";
  const body = payload.notification?.body || "Yeni mesaj var!";
  self.registration.showNotification(title, {
    body: body,
    icon: "/favicon.ico"
  });
});
