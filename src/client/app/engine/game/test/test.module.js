(function() {
  'use strict';

  angular
    .module('app.engine.game.test', [
      'app.core', 'app.widgets',
      'app.engine.communication'
    ])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'gameTest',
        config: {
          url: '/game-test',
          templateUrl: 'app/engine/game/test/test.html',
          controller: 'GameTestController',
          controllerAs: 'vm',
          title: 'test',
          settings: {
            nav: 50,
            icon: 'gameStart',
            target: 'gameTest'
          }
        }
      }
    ];
  }
})();
