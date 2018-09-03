;(function () {
    'use strict';

    angular
        .module('app')
        .controller('citiesHistoryController', citiesHistoryController);

    citiesHistoryController.$inject = ['data', 'cities', 'NgTableParams'];

    function citiesHistoryController(data, cities, NgTableParams) {
        var vm = this;
        var showBtn = document.getElementById('infoShow');
        var hideBtn = document.getElementById('hideButton');
        //console.log(hideBtn);
        var hideContent = document.getElementById('hideTable');
        //console.log(hideContent);
        var showCity = document.getElementById('showCity');
        vm.getInfoValue = getInfoValue;
        vm.citiesInfoArray = data.content.split('\n');
        vm.content = vm.citiesInfoArray.slice(8);
        vm.infoData = vm.getInfoValue(vm.content);
        vm.cities = cities;
        vm.valueCity = data.cityName;
        vm.tableParams = new NgTableParams({}, {dataset: vm.infoData});
        showBtn.addEventListener('click',function () {
            if(showCity.style.display === 'block')
            {
                showCity.style.display = 'none';
                //hideContent.style.display = 'none';
            }else {
                showCity.style.display = 'block';
                hideContent.style.display = 'none';
            }
        });
        hideBtn.addEventListener('click',function () {
            if(showCity.style.display === 'block')
            {
                showCity.style.display = 'none';
                hideContent.style.display = 'block';
            }else {
                showCity.style.display = 'block';
            }
        });
        function getInfoValue(content) {
            var i = 1;
            return content.map(function (datas) {
                var citiesInfoArray = datas.trim().split(/\s+/);
                return {
                    i: i++,
                    year: citiesInfoArray[0],
                    month: citiesInfoArray[1],
                    tempMax: citiesInfoArray[2],
                    tempMin: citiesInfoArray[3],
                    af: citiesInfoArray[4],
                    rain: citiesInfoArray[5],
                    sun: citiesInfoArray[6],
                    comment: citiesInfoArray[7]
                };
            });
        }
    }
})();
