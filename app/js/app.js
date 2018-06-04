'use strict';

// Declare app level module which depends on views, and components
angular
    .module('cookBookApp', [
        'ngResource',
        'ngStorage',
        'cookBookApp.controllers',
        'cookBookApp.services',
        'ui.router',
        'angularUtils.directives.dirPagination'
    ])
    .constant("config", {
        BASE_URL: "https://whispering-chamber-70370.herokuapp.com/api"
    })
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $locationProvider.hashPrefix('!');

        $stateProvider.state('recipes', {
            url: '/recipes',
            templateUrl: '../views/partials/recipes.html',
            controller: 'RecipeListController'
        }).state('addrecipe', {
            url: '/add-recipe',
            templateUrl: '../views/partials/add-recipe.html',
            controller: 'RecipeAddController'
        }).state('users', {
            url: '/users',
            templateUrl: '../views/partials/users.html',
            controller: 'UserListController'
        });
    }])
    .run(['$rootScope', '$http', '$location', '$localStorage', '$state', function ($rootScope, $http, $location, $localStorage, $state) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login', '/recipes', '/add-recipe'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $state.go('recipes');
            }
        });
    }]);