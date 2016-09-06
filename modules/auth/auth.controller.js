/**
 * Created by elporfirio on 05/09/16.
 */
(function () {
    'use strict';

    angular
        .module('tiendita')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['AuthService', '$state'];

    /* @ngInject */
    function AuthController(AuthService, $state) {
        var vm = this;
        vm.title = 'AuthController';

        //PROPERTIES
        vm.user = {
            email: 'admin@gigigo.com',
            password: 'gigigo'
        };

        vm.sendLogin = sendLogin;
        vm.sendLogOut = sendLogOut;
        activate();

        ////////////////

        function sendLogin(){
            AuthService.doLogin(vm.user)
                .then(function(result){
                    if(result.success){
                        $state.go('home');
                    }
                });
        }

        function sendLogOut() {
            AuthService.doLogOut()
                .then(function(result){
                    if(result.success){
                        $state.go('inicio');
                    }
                });
        }

        function activate() {
            if($state.includes("logout")){
                vm.sendLogOut();
            }
        }
    }

})();

