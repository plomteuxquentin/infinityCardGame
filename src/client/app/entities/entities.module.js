(function() {
  'use strict';

  angular
    .module('app.entities', [
      'app.entities.list'
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
        state: 'entities',
        config: {
          url: '/entities',
          template: '<ui-view ></ui-view>',
          title: 'entities',
          settings: {
            nav: 10,
            icon: 'members',
            target: 'entities.list'
          }
        }
      }
    ];
  }
})();
