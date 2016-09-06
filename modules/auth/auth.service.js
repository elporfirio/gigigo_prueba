/**
 * Created by elporfirio on 05/09/16.
 */
(function () {
    'use strict';

    angular
        .module('tiendita')
        .service('AuthService', authService);

    authService.$inject = ['$http', 'postRequestFix','$window', 'env'];

    /* @ngInject */
    function authService($http, postRequestFix, $window, env) {
        this.doLogin = doLogin;
        this.doLogOut = doLogOut;

        ////////////////

        function doLogin(userData) {

            var form = new FormData();
            form.append("email", userData.email);
            form.append("password", userData.password);

            return $http.post(env.api + 'login', form, postRequestFix)
                .then(doLoginSuccess)
                .catch(doLoginFailed);

            function doLoginSuccess(response){
                if(response.data.code === 200){
                    $window.localStorage.email = response.data.user.email;
                    $window.localStorage.token = response.data.user.token;
                    return {success: true, response: response.data};
                } else {
                    return {success: false, response: response.data}
                }
            }

            function doLoginFailed(error){
                return {success: false, error: error};
            }
        }

        function doLogOut() {
           return $http.get(env.api + 'logout?token=' + $window.localStorage.token )
                .then(doLoginSuccess)
                .catch(doLoginFailed);

            function doLoginSuccess(response){
                if(response.data.code === 200){
                    delete $window.localStorage.email;
                    delete $window.localStorage.token;
                    return {success: true, response: response.data};
                } else {
                    return {success: false, response: response.data}
                }
            }

            function doLoginFailed(error){
                return {success: false, error: error};
            }
        }
    }

})();

