(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('cgCard', cgCard);

  /* @ngInject */
  function cgCard() {
    return {
      restrict: 'E',
      scope: {
        card: '=card'
      },
      templateUrl: 'app/core/directives/card/card.directive.html'
    };
  }
})();
