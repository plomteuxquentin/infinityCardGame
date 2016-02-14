(function () {
  'use strict';

  angular
    .module('app.engine.game.test')
    .controller('GameTestController', GameTestController);

  GameTestController.$inject = ['communicationService'];
  /* @ngInject */
  function GameTestController(communicationService) {
    var vm = this;
    var record;

    vm.input = '';

    vm.inputChange = inputChange;

    activate();

    function activate() {
      record = communicationService.record.getRecord('someUser');

      record.subscribe('firstname', function(value) {
        vm.input = value;
        console.log('subscribe');
      });
    }

    function inputChange() {
      console.log('inputchange');
      record.set('firstname', vm.input);
    }
  }
})();
