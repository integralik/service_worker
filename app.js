if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service_worker/sw.js', { scope: '/service_worker/' }).then(function(reg) {
    // ����������� ���������
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // ����������� ������ ��������
    console.log('Registration failed with ' + error);
  });
};