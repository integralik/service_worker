if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service_worker/sw.js', { scope: '/service_worker/' }).then(function(reg) {
    // регистрация сработала
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // регистрация прошла неудачно
    console.log('Registration failed with ' + error);
  });
};