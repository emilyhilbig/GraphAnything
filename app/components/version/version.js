'use strict';

angular.module('graphAnything.version', [
  'graphAnything.version.interpolate-filter',
  'graphAnything.version.version-directive'
])

.value('version', '0.1');
