(function () {
  'use strict';

  angular
    .module('app.engine.communication')
    .service('communicationService', communication);

  communication.$inject = [];
  /* @ngInject */
  function communication() {
    var client = deepstream('localhost:6020');
    client.login({username: 'user' + client.getUid()});
    return client;
  }
})();

