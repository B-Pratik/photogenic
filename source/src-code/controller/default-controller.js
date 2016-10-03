/**
 * Created by Pratik on 10/2/2016.
 */

export default function defaultController($scope, $timeout) {
  'ngInject';

  $scope.images = [];

  var imageArr = [{title: 'full-title', url: '/images/1.jpg'}, {
    title: 'full-title',
    url: '/images/2.jpg'
  }, {title: 'full-title', url: '/images/3.jpg'}, {title: 'full-title', url: '/images/4.jpg'},
    {title: 'full-title', url: '/images/5.jpg'}, {title: 'full-title', url: '/images/6.jpg'}, {
      title: 'full-title',
      url: '/images/7.jpg'
    }, {title: 'full-title', url: '/images/8.jpg'},
    {title: 'full-title', url: '/images/9.jpg'}, {title: 'full-title', url: '/images/10.jpg'}, {
      title: 'full-title',
      url: '/images/11.jpg'
    }, {title: 'full-title', url: '/images/12.jpg'},
    {title: 'full-title', url: '/images/13.jpg'}, {title: 'full-title', url: '/images/14.jpg'}, {
      title: 'full-title',
      url: '/images/15.jpg'
    }, {title: 'full-title', url: '/images/16.jpg'},
    {title: 'full-title', url: '/images/17.jpg'}, {title: 'full-title', url: '/images/18.jpg'}, {
      title: 'full-title',
      url: '/images/19.jpg'
    }, {title: 'full-title', url: '/images/20.jpg'},
    {title: 'full-title', url: '/images/21.jpg'}];

  var _dummyFullDetail = 'this is detialed title,for this superhero.used common .dahjsdasdsd flsdhfj hdsfbsdnfsdbf' +
    'bsdfbsd fbsdfsbdfsd fsdfsdkjfsdkfjs   dfhsdfjhdskjfhsdkjhfkjsdhfj' +
    'sdhfkjsdbhfbxchbkjshfkjdsfh sdhjkfgcxjhsdufhds fsiujsdlfnsdkn';

  imageArr.forEach(function (e, i) {
    $timeout(function () {
      $scope.images.push(e);
    }, i * 500);
  });

  var currentElement = null;

  $scope.imageClicked = function (event, index, currentObj) {
    angular.element(document.querySelector('.detailed-photo')).remove();
    if (currentElement === index) {
      return;
    }
    var contentTr = angular.element('<div class="detailed-photo fadeInDown"><hr>' +
      '<div class="title">' + currentObj.title + '</div>' +
      '<div class="detail">' + _dummyFullDetail + '</div>' +
      '<img src="' + currentObj.url + '">' +
      '<hr></div>');

    angular.element(event.currentTarget).after(contentTr);
    currentElement = index;
  };
}