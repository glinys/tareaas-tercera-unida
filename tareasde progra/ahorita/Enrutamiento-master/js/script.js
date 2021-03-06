var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homePage.html'
        })

        // Info Vies
        .state('about', {
            url: '/about',
            templateUrl: 'templates/info.html'
        })
      .state('mispasatiempo', {
            url: '/mispasatiempo',
            templateUrl: 'templates/mispasatiempo.html'
        })

        // Info Vies
        .state('mifuturo', {
            url: '/mifuturo',
            templateUrl: 'templates/mifuturo.html'
        })
.state('beberlyn', {
            url: '/beberlyn',
            templateUrl: 'templates/beberlyn.html'
        })

});
