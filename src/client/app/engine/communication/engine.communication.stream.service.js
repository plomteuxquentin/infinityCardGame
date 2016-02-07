(function () {
  'use strict';

  angular
    .module('engine.communication')
    .factory('communicationService', communication);

  communication.$inject = ['deepstream'];
  /* @ngInject */
  function communication(deepstream) {
    var client = deepstream('localhost:6020');
    client.login({username: 'ds-simple-input-' + client.getUid()});
    return client;
  }
})();

