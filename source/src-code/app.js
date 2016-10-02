/**
 * Created by Pratik on 6/28/2016.
 */

import '../assets/index.scss';

import photoComponent from './component/index';

import defaultController from './controller/default-controller';

angular.module('photogenic', [])
  .component('photo', photoComponent)
  .controller('default-controller', defaultController);