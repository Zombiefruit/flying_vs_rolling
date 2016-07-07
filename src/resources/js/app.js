var flyingButton = document.getElementById('flying-vote');
var rollingButton = document.getElementById('rolling-vote');
var opinionContainer = document.getElementById('opinion');

// Thanks David! These two functions taken from: https://jsfiddle.net/DRSDavidSoft/zb4ft1qq/2/
function maxLengthCheck(object) {
  if (object.value.length > object.max.length)
    object.value = object.value.slice(0, object.max.length)
}

function isNumeric (evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode (key);
  var regex = /[1-9]/;
  if ( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

// function disableFocus() {
//   if (document.activeElement != document.body) document.activeElement.blur();
// };

function disableThing(toBeDisabled) {
  toBeDisabled.className = "disabled";
};

flyingButton.addEventListener('click', function(e) {
  disableThing(rollingButton);
  disableThing(flyingButton);
  opinionContainer.setAttribute("class", "increase-size");
});

rollingButton.addEventListener('click', function(e) {
  disableThing(rollingButton);
  disableThing(flyingButton);
  opinionContainer.setAttribute("class", "increase-size");
});

angular.module('cityPoll', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

angular.factory('cityPollFactory', function(){

})
