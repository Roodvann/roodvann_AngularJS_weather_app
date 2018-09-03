;(function () {

    'use strict';

    angular.module('service.getData', [])
        .service('getData', getData);


    getData.$inject = ['$http', 'url'];

    function getData($http, url) {


        return {
            get: get
        };

        /**
         * Function for getting cities list with basic info
         * @returns {*}
         */
        function get(cityName) {
            return $http.get(url.getInfo(cityName))
                .then(function (res) {
                    return res.data;
                });
        }
    }
})();
