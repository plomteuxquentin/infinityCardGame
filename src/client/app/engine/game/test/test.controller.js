(function () {
  'use strict';

  angular
    .module('app.engine.game.test')
    .controller('GameTestController', GameTestController);

  GameTestController.$inject = ['communicationService', '$scope'];
  /* @ngInject */
  function GameTestController(communicationService, scope) {
    var vm = this;
    var playerRecord;

    vm.player = {
      _id: undefined,
      name: undefined,
      deck: null
    };
    vm.opponent = null;
    vm.decks = [
      {_id: 'deck1', name: 'deck blanc'},
      {_id: 'deck2', name: 'deck noir'}
    ];

    vm.getStatus = getStatus;
    vm.updatePlayer = updatePlayer;

    activate();

    function activate() {
      var playersList;

      vm.player._id = 'player/' + communicationService.getUid();
      playerRecord = communicationService.record.getRecord(vm.player._id);

      playersList = communicationService.record.getList('players');
      playersList.subscribe(onPlayersChanged);
      playersList.addEntry(vm.player._id);

      playerRecord.whenReady(function () {
        playerRecord.set({name: undefined, deck: undefined, ready: false});
      });

      scope.$watch('vm.player', updatePlayer, true);
    }

    function getStatus(player) {
      return (player.ready ? 'Ready' : 'Waiting');
    }

    function onPlayersChanged (players) {
      if (players.length > 1) {
        console.log(players.length + ' players already in lobby');
        players.forEach(function (playerId) {
          var opponent;
          if (playerId === vm.player._id) {
            console.log('it s me');
            return;
          }
          console.log(playerId);
          opponent = communicationService.record.getRecord(playerId);
          opponent.whenReady(function () {
            opponent.subscribe(onOpponentChanged, true);
            console.log('subscribe to ' + playerId);
          });
        });
      } else {
        console.log('You are the first player to register');
      }
    }

    function onOpponentChanged (opponent) {
      console.log('op changed : ' + opponent);
      scope.$apply(function() {
        console.log('opponent changed: ' + opponent._id);
        vm.opponent = opponent;
      });
    }

    function updatePlayer(attribut,value) {
      console.log('update player');
      playerRecord.set(attribut,value);
    }
  }
})();
