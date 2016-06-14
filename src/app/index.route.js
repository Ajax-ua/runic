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
      })

      .state('page3', {
          url: '/page3',
          parent: 'main',
          views: {
              content:{
                  templateUrl: 'app/components/home/page3.html'
              }
          },
      })

      .state('page4', {
          url: '/page4',
          parent: 'main',
          views: {
              content:{
                  templateUrl: 'app/components/home/page4.html'
              }
          },
      })

      .state('page5', {
          url: '/page5',
          parent: 'main',
          views: {
              content:{
                  templateUrl: 'app/components/home/page5.html'
              }
          },
      })

      .state('page6', {
          url: '/page6',
          parent: 'main',
          views: {
              content:{
                  templateUrl: 'app/components/home/page6.html'
              }
          },
      })

      .state('page7', {
          url: '/page7',
          parent: 'main',
          views: {
              content:{
                  templateUrl: 'app/components/home/page7.html'
              }
          },
      });

  $urlRouterProvider.otherwise('/');
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}
