/**
 * Created by Pratik on 10/2/2016.
 */

export default function defaultController($scope) {
    'ngInject';

    $scope.isActive = false;
    $scope.activeButton = function () {
        $scope.isActive = !$scope.isActive;
    }
    $scope.products = ['Milk', 'Bread', 'Cheese'];
}