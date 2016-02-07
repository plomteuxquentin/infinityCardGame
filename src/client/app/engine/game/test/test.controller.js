(function () {
  'use strict';

  angular
    .module('engine.game.test')
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

      record.subscribe('firstname', function(value){
        vm.input = value;
      });
    }

    function inputChange() {
      record.set('firstname', vm.input);
    }
  }
})();
