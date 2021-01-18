// Following code suffers from some problems
// 1. Make inheritance difficult
// 2. toString() function are redefined for each new objects 
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log('function reference is not equal: ', civic.toString === mondeo.toString);

// Optimized by using prototype
function CarOptimized(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

CarOptimized.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
var civicOptimized = new CarOptimized("Honda Civic", 2009, 20000);
var mondeoOptimized = new CarOptimized("Ford Mondeo", 2010, 5000);
console.log('function reference is equal: ', civicOptimized.toString === mondeoOptimized.toString);
