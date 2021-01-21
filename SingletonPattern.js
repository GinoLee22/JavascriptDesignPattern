var mySingleton = (function () {
  var instance;

  function init() {
    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function () {
        return privateRandomNumber;
      }
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log('Random number should be same because it is 1 instance: ', singleA.getRandomNumber() === singleB.getRandomNumber());

