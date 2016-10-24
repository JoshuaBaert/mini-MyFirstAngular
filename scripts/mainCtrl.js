/**
 * Created by Joshua Baert on 10/24/2016.
 */

angular.module('friendList').controller('mainCtrl', function ($scope) {
    $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];

    $scope.addFriend = function(newfriend) {
        $scope.friends.push(newfriend);
    }
});