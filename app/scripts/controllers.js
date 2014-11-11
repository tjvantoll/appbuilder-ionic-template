angular.module("starter.controllers", [])

.controller("HomeCtrl", function($scope) {
    // Initialization code for the Home tab
})
.controller("SettingsCtrl", function($scope) {
    // Initialization code for the Home tab
})
.controller("ContactsCtrl", function($scope) {
    $scope.contacts = [
        "TJ VanToll",
        "Burke Holland",
        "Jen Looper",
        "Rob Lauer"
    ]
});
