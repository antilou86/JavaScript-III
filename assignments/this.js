/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding - on the global scope this refers to the entire window or console. which is considered an object. (because Javascript.)

* 2. implicit binding - when a function is called with dot-notation, whatever the function is called on is what 'this' is referencing. so if i had an object called gluteousMaximus and with function called passGas() called on that like so gluteousMaximus.passGas(); 'this' would refer to the gluteousMaximus scope/lexical environment

* 3. new binding - when a constructor function creates a new object 'this' refers to whatever the new object is. this is how information/value is passed from constructor to the new object without explicitly stating what a value might be every single time you write related objects.

* 4. explicit binding - when you actually want to define/override what 'this' is referring to explicitly, using call (or apply for arrays.)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function noOneWillEverDoThisIRL () {
    console.log(this);
    };
// Principle 2

// code example for Implicit Binding
const someObject = {
    anyKey: 'value within the object',
    aFunc: function(variableThing){
        console.log(`this refers to ${variableThing} it was created in, and not the ${this.anyKey}, which is why we have to name the key we're searching for after the dot`);
    }
}
someObject.aFunc('the object');

// Principle 3

// code example for New Binding
function ConstructorFunc(passedValue) {
    this.key = 'something';
    this.passedValue = passedValue;
    this.func = function() {
        console.log(this.key + ' ' + this.passedValue + ' here');
    };
}
const missingBit = new ConstructorFunc('happened');
missingBit.func();

// Principle 4

// code example for Explicit Binding
//so if i wanted to change missingBit from above to something else, i would need to first define the change, then tell js what to change it to with call.
const aDifferentBit = new ConstructorFunc(`did not happen`);
missingBit.func.call(aDifferentBit);