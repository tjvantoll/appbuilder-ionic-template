// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module("template", ["ionic", "starter.controllers"])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Place app initialization code here
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        // Setup the tabs themselves
        .state("tab", {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })

        // Setup routes for the app's three tabs
        .state("tab.home", {
            url: "/dash",
            views: {
                "tab-home": {
                    templateUrl: "templates/tab-dash.html",
                    controller: "HomeCtrl"
                }
            }
        })
        .state("tab.settings", {
            url: "/account",
            views: {
                "tab-settings": {
                    templateUrl: "templates/tab-account.html",
                    controller: "SettingsCtrl"
                }
            }
        })
        .state("tab.contacts", {
            url: "/friends",
            views: {
                "tab-contacts": {
                templateUrl: 'templates/tab-friends.html',
                controller: 'ContactsCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise("/tab/dash");
});
