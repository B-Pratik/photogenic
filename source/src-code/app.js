/**
 * Created by Pratik on 6/28/2016.
 */

import '../assets/index.scss';

import defaultController from './controller/default-controller';

angular.module('photogenic', [])
    .controller('default-controller', defaultController);