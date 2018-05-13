'use strict';

// Declare app level module which depends on views, and components
angular
    .module('cookBookApp', [
        'ngResource',
        'cookBookApp.controllers',
        'cookBookApp.services',
        'ui.router'
    ])
    .constant("config", {
        BASE_URL: "http://localhost:3000"
    })
    .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
        $locationProvider.hashPrefix('!');

        $stateProvider.state('recipes', {
            url: '/recipes',
            templateUrl: '../views/partials/recipes.html',
            controller: 'RecipeListController'
        }).state('users', {
            url: '/users',
            templateUrl: '../views/partials/users.html',
            controller: 'UserListController'
        });
    }])
    .run(function ($state) {
        $state.go('recipes');
    });