;(function () {
        'use strict';

        angular
            .module('app')
            .config(mainConfig);

        mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

        function mainConfig($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/citiesHistory/');

            $stateProvider
                .state('citiesHistory', {
                    url: '/citiesHistory/:citiesHistory',
                    templateUrl: 'templates/citiesHistory/citiesHistory.html',
                    controller: 'citiesHistoryController',
                    controllerAs: 'vm',
                    resolve: {
                        data: getData,
                        cities: getCities
                    },
                    params : {
                        citiesParam : {city: 'Bradford', state: 'open', url: 'bradforddata.txt'}
                    }
                });
        }
        function getCities(getData) {
            return getData.get();
        }

        function getData($q, $stateParams, cities, getData) {
            var citiesParam = $stateParams.citiesParam;
            return $q.all({
                cityName: citiesParam.city,
                content: getData.get(citiesParam.url)
            });
        }
    }

)();
