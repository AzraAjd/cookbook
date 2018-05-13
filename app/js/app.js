'use strict';

// Declare app level module which depends on views, and components
angular
    .module('cookBookApp', [
        'ngResource',
        'cookBookApp.controllers',
        'cookBookApp.services',
        'cookBookApp.version',
        'ui.router'
    ])
    .constant("config", {
        BASE_URL: "http://localhost:3000"
    })
    .config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
        $locationProvider.hashPrefix('!');

        $stateProvider.state('recipes', { // state for showing all recipes
            url: '/recipes',
            templateUrl: '../views/partials/recipes.html',
            controller: 'RecipeController'
        });
    }])
    .run(function ($state) {
        $state.go('recipes');
    });