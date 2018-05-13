'use strict';

angular.module('cookBookApp.version', [
  'cookBookApp.version.interpolate-filter',
  'cookBookApp.version.version-directive'
])

.value('version', '0.1');
