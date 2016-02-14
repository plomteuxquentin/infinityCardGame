(function() {
  'use strict';

  angular
    .module('app.entities.list', [])
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'entities.list',
        config: {
          url: '/list',
          templateUrl: 'app/entities/list/entities.list.html',
          controller: 'EntitiesListController',
          controllerAs: 'vm',
          title: 'entities list'
        }
      }
    ];
  }
})();
