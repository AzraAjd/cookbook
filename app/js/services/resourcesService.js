'use strict';

(function () {
    angular.module('cookBookApp.services', [])
        .factory('Recipe', function ($resource, config) {
            return $resource(config.BASE_URL + '/recipes/:recipeId', {recipeId: '@_id'}, {
                update: {
                    method: 'PUT'
                }
            });
        })
        .factory('User', function ($resource, config) {
            return $resource(config.BASE_URL + '/users/:userId', {userId: '@_id'}, {
                update: {
                    method: 'PUT'
                }
            });
        });
})();