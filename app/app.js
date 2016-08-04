var myApp = angular.module('myApp',[]);

myApp.controller('controller',function($scope){
    $scope.sections = [
        {
            title: 'About Me'
        },
        {
            title: 'Education'
        },
        {
            title: 'Skills'
        }
    ];
});
