/**
 * Created by elporfirio on 05/09/16.
 */
angular
    .module('tiendita')
    .config(configRoutes);

function configRoutes($stateProvider) {

    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'modules/auth/login.view.html',
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

    $stateProvider.state(loginState);
    $stateProvider.state(logOutState);
    $stateProvider.state(homeState);
}
