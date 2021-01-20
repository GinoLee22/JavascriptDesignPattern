// Use object literal to define a module
// Problem: other code can access property for example 'myProperty' outside the module
var myModule = {

  myProperty: "someValue",

  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // a very basic method
  saySomething: function () {
    console.log("Where in the world is Paul Irish today?");
  },

  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
  },

  // override the current configuration
  updateMyConfig: function (newConfig) {

    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  }
};

// Module Pattern explained by a template
var myNamespace = (function () {
  var myPrivateVar, myPrivateMethod;
  myPrivateVar = 0;
  myPrivateMethod = function (foo) {
    console.log(foo);
  };

  return {
    myPublicVar: "foo",
    myPublicFunction: function (bar) {
      myPrivateVar++;
      myPrivateMethod(bar);

    }
  };
})();

// Module Pattern Variations
// 1. Import mixins: demonstrates how globals can be passed in as arguments to our module
var myModule = (function (jQ, _) {

  function privateMethod1() {
    jQ(".container").html("test");
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]));
  }

  return {
    publicMethod: function () {
      privateMethod1();
    }
  };

  // Pull in jQuery and Underscore
})(jQuery, _);

myModule.publicMethod();

// Revealing Module Pattern
var myRevealingModule = (function () {

  var privateVar = "Ben Cherry",
    publicVar = "Hey there!";

  function privateFunction() {
    console.log("Name:" + privateVar);
  }

  function publicSetName(strName) {
    privateVar = strName;
  }

  function publicGetName() {
    privateFunction();
  }

  // Reveal public pointers to
  // private functions and properties
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();

myRevealingModule.setName("Paul Kinlan");