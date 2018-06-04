'use strict';

angular.module('cookBookApp.controllers', [])
    .controller('RecipeListController', function ($scope, $state, $http, config, Recipe) {
        $scope.filterRecipeCategories = {};
        $scope.recipes = Recipe.query();
        $http({
            method: 'GET',
            url: config.BASE_URL + '/recipe-categories'
        }).then(function (response) {
            $scope.recipeCategories = response.data;
        });
        $scope.addrecipe = function() {
            $state.go('addrecipe');
        };
    }).controller('RecipeAddController', function ($scope, $state, config, Recipe) {
        $scope.recipe = new Recipe();
        $scope.dosubmit = function() {
            Recipe.save({}, $scope.recipe);
            $state.go('recipes');
        };
    }).controller('UserListController', function ($scope, $state, User) {
        $scope.users = User.query();
        $scope.addrecipe = function() {
            $state.go('addrecipe');
        };
    });