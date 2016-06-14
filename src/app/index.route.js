export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
      .state('main', {
        templateUrl: 'app/main/layout.html',
          controller: 'MainController',
          controllerAs: 'main'
      })

      .state('home', {
          url: '/',
          parent: 'main',
          views: {
              content:{
                  templateUrl: 'app/components/home/home.html'
              }
          },
      })

      .state('page2', {
          url: '/page2',
          parent: 'main',
          views: {
              content:{
                  templateUrl: 'app/components/home/page2.html'
              }
          },
      });

  $urlRouterProvider.otherwise('/');
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}
