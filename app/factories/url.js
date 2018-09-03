;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    url.$inject = [];

    function url() {
        var openFile = {};
        openFile.getInfo = getInfo;

        function getInfo(cityName) {
            var baseUrl = 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/';
            if(cityName){
                return baseUrl + 'stationdata/' + cityName;
            }else {
                return baseUrl + 'historic/historic.json';
            }
        }

        return openFile;
    }

})();
