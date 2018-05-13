'use strict';

angular.module('cookBookApp.controllers', []).controller('RecipeController', function ($scope, Recipe) {
    $scope.recipes = Recipe.query();

    // Recipe.query(function (data) {
    //     $scope.recipes = data;
    // });
});