// Register the "template" Angular module.
// "tempalte" also appears as the ng-app attribute value in index.html.
// The second parameter contains a list of dependencies for this module.
// Currently this template module depends on a module that contains
// Angular controllers for each tab.
angular.module("template", ["ionic", "template.controllers"])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Place app initialization code here
        navigator.splashscreen.hide();
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
            url: "/home",
            views: {
                "tab-home": {
                    templateUrl: "templates/home.html",
                    controller: "HomeCtrl"
                }
            }
        })
        .state("tab.settings", {
            url: "/settings",
            views: {
                "tab-settings": {
                    templateUrl: "templates/settings.html",
                    controller: "SettingsCtrl"
                }
            }
        })
        .state("tab.contacts", {
            url: "/contacts",
            views: {
                "tab-contacts": {
                templateUrl: 'templates/contacts.html',
                controller: 'ContactsCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise("/tab/home");
});
