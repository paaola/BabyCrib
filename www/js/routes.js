angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.rock', {
    url: '/rocking',
    views: {
      'tab1': {
        templateUrl: 'templates/rock.html',
        controller: 'movimientoCtrl'
      }
    }
  })

  .state('tabsController.puertas', {
    url: '/puertas',
    views: {
      'tab2': {
        templateUrl: 'templates/puertas.html',
        controller: 'puertasCtrl'
      }
    }
  })

  .state('tabsController.prox', {
    url: '/proximidad',
    views: {
      'tab3': {
        templateUrl: 'templates/proximidad.html',
        controller: 'proxCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/menu',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('registro', {
    url: '/signup',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});