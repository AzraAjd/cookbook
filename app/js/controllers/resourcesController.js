'use strict';

angular.module('cookBookApp.controllers', [])
    .controller('RecipeListController', function ($scope, Recipe) {
        $scope.recipes = Recipe.query();
    }).controller('UserListController', function ($scope, User) {
        $scope.users = User.query();
    });