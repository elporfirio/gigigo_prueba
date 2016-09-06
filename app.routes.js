/**
 * Created by elporfirio on 05/09/16.
 */
angular
    .module('tiendita')
    .config(configRoutes);

function configRoutes($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/inicio');

    var inicioState = {
        name: 'inicio',
        url: '/inicio',
        templateUrl: 'modules/inicio/inicio.view.html',
        controller: 'AuthController',
        controllerAs: 'authctrl'
    };

    var logOutState = {
        name: 'logout',
        url: '/logout',
        templateUrl: 'modules/auth/logout.view.html',
        controller: 'AuthController',
        controllerAs: 'authctrl'
    };

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'modules/home/home.view.html',
        controller: 'TiendaController',
        controllerAs: 'tiendactrl'
    };

    $stateProvider.state(inicioState);
    $stateProvider.state(logOutState);
    $stateProvider.state(homeState);
}
