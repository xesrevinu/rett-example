/* Polyfill service v3.34.0
* For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
* 
* Features requested: Map,Object.entries,Object.setPrototypeOf,Promise,Set,WeakMap
* 
* - _ESAbstract.ArrayCreate, License: CC0 (required by "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map")
* - _ESAbstract.Call, License: CC0 (required by "WeakMap", "_ESAbstract.GetIterator", "Map", "Set", "_ESAbstract.IteratorClose", "_ESAbstract.IteratorNext", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Array.prototype.filter", "Array.prototype.map", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString", "_ESAbstract.OrdinaryToPrimitive")
* - _ESAbstract.Get, License: CC0 (required by "WeakMap", "_ESAbstract.IteratorComplete", "Map", "Set", "_ESAbstract.IteratorValue", "_ESAbstract.EnumerableOwnProperties", "Object.entries", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "_ESAbstract.GetPrototypeFromConstructor", "_ESAbstract.OrdinaryCreateFromConstructor", "Array.prototype.filter", "Array.prototype.map", "Object.defineProperties", "Object.create", "_ESAbstract.GetIterator", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.OrdinaryToPrimitive", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString")
* - _ESAbstract.HasProperty, License: CC0 (required by "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.filter", "Array.prototype.map")
* - _ESAbstract.IsArray, License: CC0 (required by "WeakMap", "Array.isArray", "Map", "Set", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Array.prototype.map")
* - _ESAbstract.IsCallable, License: CC0 (required by "Map", "Set", "WeakMap", "_ESAbstract.GetMethod", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Array.prototype.filter", "Array.prototype.map", "Function.prototype.bind", "Object.getOwnPropertyDescriptor", "_ESAbstract.EnumerableOwnProperties", "Object.entries", "_ESAbstract.OrdinaryToPrimitive", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString")
* - _ESAbstract.SameValueNonNumber, License: CC0 (required by "_ESAbstract.SameValueZero", "Map", "Set", "_ESAbstract.SameValue", "WeakMap")
* - _ESAbstract.ToBoolean, License: CC0 (required by "_ESAbstract.IteratorComplete", "Map", "Set", "Array.prototype.filter", "Symbol", "WeakMap")
* - _ESAbstract.ToInteger, License: CC0 (required by "_ESAbstract.ToLength", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.filter", "Array.prototype.map")
* - _ESAbstract.ToLength, License: CC0 (required by "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.filter", "Array.prototype.map")
* - _ESAbstract.ToObject, License: CC0 (required by "Object.entries", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "_ESAbstract.GetV", "_ESAbstract.GetMethod", "_ESAbstract.GetIterator", "Array.prototype.filter", "Array.prototype.map", "Object.defineProperties", "Object.create", "_ESAbstract.OrdinaryCreateFromConstructor")
* - _ESAbstract.GetV, License: CC0 (required by "_ESAbstract.GetMethod", "Map", "Set", "_ESAbstract.GetIterator", "WeakMap")
* - _ESAbstract.GetMethod, License: CC0 (required by "Map", "Set", "_ESAbstract.GetIterator", "WeakMap", "_ESAbstract.IteratorClose", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Array.prototype.filter", "Array.prototype.map", "_ESAbstract.IsConstructor", "_ESAbstract.ArraySpeciesCreate")
* - _ESAbstract.Type, License: CC0 (required by "Map", "WeakMap", "_ESAbstract.CreateIterResultObject", "Set", "_ESAbstract.GetIterator", "_ESAbstract.IteratorClose", "_ESAbstract.IteratorComplete", "_ESAbstract.IteratorNext", "_ESAbstract.IteratorValue", "_ESAbstract.SameValueZero", "Object.create", "Object.setPrototypeOf", "_ESAbstract.OrdinaryCreateFromConstructor", "Symbol", "_ESAbstract.EnumerableOwnProperties", "Object.entries", "_ESAbstract.SameValue", "_ESAbstract.GetPrototypeFromConstructor", "Object.defineProperties", "_ESAbstract.ToString", "Array.prototype.forEach", "Array.prototype.filter", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.ToPrimitive", "_ESAbstract.IsConstructor", "_ESAbstract.OrdinaryToPrimitive")
* - _ESAbstract.GetPrototypeFromConstructor, License: CC0 (required by "_ESAbstract.OrdinaryCreateFromConstructor", "Map", "Set", "WeakMap")
* - _ESAbstract.IsConstructor, License: CC0 (required by "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map", "_ESAbstract.Construct")
* - _ESAbstract.IteratorClose, License: CC0 (required by "Map", "Set", "WeakMap")
* - _ESAbstract.IteratorComplete, License: CC0 (required by "Map", "Set", "_ESAbstract.IteratorStep", "WeakMap")
* - _ESAbstract.IteratorNext, License: CC0 (required by "Map", "Set", "_ESAbstract.IteratorStep", "WeakMap")
* - _ESAbstract.IteratorStep, License: CC0 (required by "Map", "Set", "WeakMap")
* - _ESAbstract.IteratorValue, License: CC0 (required by "Map", "Set", "WeakMap")
* - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "_ESAbstract.ToPrimitive", "_ESAbstract.ToString", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.filter", "Array.prototype.map")
* - _ESAbstract.SameValue, License: CC0 (required by "WeakMap")
* - _ESAbstract.SameValueZero, License: CC0 (required by "Map", "Set")
* - _ESAbstract.ToPrimitive, License: CC0 (required by "_ESAbstract.ToString", "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.filter", "Array.prototype.map")
* - _ESAbstract.ToString, License: CC0 (required by "Array.prototype.forEach", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.filter", "Array.prototype.map")
* - Object.defineProperty, License: CC0 (required by "Map", "Object.setPrototypeOf", "Set", "WeakMap", "_ESAbstract.CreateMethodProperty", "Object.entries", "_ESAbstract.OrdinaryCreateFromConstructor", "Symbol", "Symbol.iterator", "Symbol.species", "_ESAbstract.CreateDataProperty", "_ESAbstract.CreateIterResultObject", "Object.defineProperties", "Object.create", "_ESAbstract.GetIterator")
* - _ESAbstract.CreateDataProperty, License: CC0 (required by "_ESAbstract.CreateIterResultObject", "Map", "Set", "_ESAbstract.CreateDataPropertyOrThrow", "Array.prototype.filter", "Symbol", "WeakMap", "Array.prototype.map")
* - _ESAbstract.CreateDataPropertyOrThrow, License: CC0 (required by "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map")
* - _ESAbstract.CreateIterResultObject, License: CC0 (required by "Map", "Set")
* - _ESAbstract.CreateMethodProperty, License: CC0 (required by "Map", "Object.entries", "Object.setPrototypeOf", "Set", "WeakMap", "Array.isArray", "Object.create", "_ESAbstract.GetIterator", "_ESAbstract.OrdinaryCreateFromConstructor", "Symbol", "Array.prototype.forEach", "Object.getPrototypeOf", "Object.getOwnPropertyNames", "Object.getOwnPropertyDescriptor", "_ESAbstract.EnumerableOwnProperties", "Array.prototype.filter", "Array.prototype.map", "Object.freeze", "Object.keys", "Object.defineProperties", "Function.prototype.bind")
* - Array.isArray, License: CC0 (required by "Map", "Set", "WeakMap")
* - Array.prototype.forEach, License: CC0 (required by "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap")
* - Function.prototype.bind, License: MIT (required by "Object.getOwnPropertyDescriptor", "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "_ESAbstract.EnumerableOwnProperties", "Object.entries", "_ESAbstract.Construct", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Array.prototype.map")
* - Object.freeze, License: CC0 (required by "Symbol", "Map", "Set", "WeakMap")
* - Object.getOwnPropertyDescriptor, License: CC0 (required by "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap", "_ESAbstract.EnumerableOwnProperties", "Object.entries", "Object.defineProperties", "Object.create", "_ESAbstract.GetIterator", "_ESAbstract.OrdinaryCreateFromConstructor")
* - _ESAbstract.EnumerableOwnProperties, License: CC0 (required by "Object.entries")
* - Object.entries, License: CC0
* - Object.getOwnPropertyNames, License: CC0 (required by "Object.setPrototypeOf", "Symbol", "Map", "Set", "WeakMap")
* - Object.getPrototypeOf, License: CC0 (required by "Object.setPrototypeOf", "_ESAbstract.OrdinaryCreateFromConstructor", "Map", "Set", "WeakMap")
* - Object.keys, License: MIT (required by "Symbol", "Map", "Set", "WeakMap", "Object.defineProperties", "Object.create", "Object.setPrototypeOf", "_ESAbstract.GetIterator", "_ESAbstract.OrdinaryCreateFromConstructor")
* - Object.defineProperties, License: CC0 (required by "Object.create", "Map", "Object.setPrototypeOf", "Set", "_ESAbstract.GetIterator", "WeakMap", "_ESAbstract.OrdinaryCreateFromConstructor", "Symbol")
* - Object.create, License: CC0 (required by "Map", "Object.setPrototypeOf", "Set", "_ESAbstract.GetIterator", "WeakMap", "_ESAbstract.OrdinaryCreateFromConstructor", "Symbol")
* - _ESAbstract.GetIterator, License: CC0 (required by "Map", "Set", "WeakMap")
* - _ESAbstract.OrdinaryCreateFromConstructor, License: CC0 (required by "Map", "Set", "WeakMap", "_ESAbstract.Construct", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Array.prototype.map")
* - _ESAbstract.Construct, License: CC0 (required by "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map")
* - _ESAbstract.ArraySpeciesCreate, License: CC0 (required by "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map")
* - Array.prototype.filter, License: CC0 (required by "Symbol", "Map", "Set", "WeakMap")
* - Array.prototype.map, License: CC0 (required by "Symbol", "Map", "Set", "WeakMap")
* - Object.setPrototypeOf, License: MIT
* - Promise, License: MIT
* - Symbol, License: MIT (required by "Map", "Set", "WeakMap", "Symbol.iterator", "Symbol.species")
* - Symbol.iterator, License: MIT (required by "Map", "Set")
* - Symbol.species, License: MIT (required by "Map", "Set")
* - Map, License: CC0
* - Set, License: CC0
* - WeakMap, License: MIT */

(function(undefined) {

// _ESAbstract.ArrayCreate
// 9.4.2.2. ArrayCreate ( length [ , proto ] )
function ArrayCreate(length /* [, proto] */) { // eslint-disable-line no-unused-vars
// 1. Assert: length is an integer Number ≥ 0.
// 2. If length is -0, set length to +0.
if (1 / length === -Infinity) {
length = 0;
}
// 3. If length>2^32-1, throw a RangeError exception.
if (length > (Math.pow(2, 32) - 1)) {
throw new RangeError('Invalid array length');
}
// 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
// 5. Let A be a newly created Array exotic object.
var A = [];
// 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
// 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
// 8. Set A.[[Prototype]] to proto.
// 9. Set A.[[Extensible]] to true.
// 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor{[[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
A.length = length;
// 11. Return A.
return A;
}

// _ESAbstract.Call
/* global IsCallable */
// 7.3.12. Call ( F, V [ , argumentsList ] )
function Call(F, V /* [, argumentsList] */) { // eslint-disable-line no-unused-vars
// 1. If argumentsList is not present, set argumentsList to a new empty List.
var argumentsList = arguments.length > 2 ? arguments[2] : [];
// 2. If IsCallable(F) is false, throw a TypeError exception.
if (IsCallable(F) === false) {
throw new TypeError(Object.prototype.toString.call(F) + 'is not a function.');
}
// 3. Return ? F.[[Call]](V, argumentsList).
return F.apply(V, argumentsList);
}

// _ESAbstract.Get
// 7.3.1. Get ( O, P )
function Get(O, P) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Return ? O.[[Get]](P, O).
return O[P];
}

// _ESAbstract.HasProperty
// 7.3.10. HasProperty ( O, P )
function HasProperty(O, P) { // eslint-disable-line no-unused-vars
// Assert: Type(O) is Object.
// Assert: IsPropertyKey(P) is true.
// Return ? O.[[HasProperty]](P).
return P in O;
}

// _ESAbstract.IsArray
// 7.2.2. IsArray ( argument )
function IsArray(argument) { // eslint-disable-line no-unused-vars
// 1. If Type(argument) is not Object, return false.
// 2. If argument is an Array exotic object, return true.
// 3. If argument is a Proxy exotic object, then
// a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
// b. Let target be argument.[[ProxyTarget]].
// c. Return ? IsArray(target).
// 4. Return false.

// Polyfill.io - We can skip all the above steps and check the string returned from Object.prototype.toString().
return Object.prototype.toString.call(argument) === '[object Array]';
}

// _ESAbstract.IsCallable
// 7.2.3. IsCallable ( argument )
function IsCallable(argument) { // eslint-disable-line no-unused-vars
// 1. If Type(argument) is not Object, return false.
// 2. If argument has a [[Call]] internal method, return true.
// 3. Return false.

// Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
return typeof argument === 'function';
}

// _ESAbstract.SameValueNonNumber
// 7.2.12. SameValueNonNumber ( x, y )
function SameValueNonNumber(x, y) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(x) is not Number.
// 2. Assert: Type(x) is the same as Type(y).
// 3. If Type(x) is Undefined, return true.
// 4. If Type(x) is Null, return true.
// 5. If Type(x) is String, then
// a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
// 6. If Type(x) is Boolean, then
// a. If x and y are both true or both false, return true; otherwise, return false.
// 7. If Type(x) is Symbol, then
// a. If x and y are both the same Symbol value, return true; otherwise, return false.
// 8. If x and y are the same Object value, return true. Otherwise, return false.

// Polyfill.io - We can skip all above steps because the === operator does it all for us.
return x === y;
}

// _ESAbstract.ToBoolean
// 7.1.2. ToBoolean ( argument )
// The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
/*
--------------------------------------------------------------------------------------------------------------
| Argument Type | Result                                                                                     |
--------------------------------------------------------------------------------------------------------------
| Undefined     | Return false.                                                                              |
| Null          | Return false.                                                                              |
| Boolean       | Return argument.                                                                           |
| Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
| String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
| Symbol        | Return true.                                                                               |
| Object        | Return true.                                                                               |
--------------------------------------------------------------------------------------------------------------
*/
function ToBoolean(argument) { // eslint-disable-line no-unused-vars
return Boolean(argument);
}

// _ESAbstract.ToInteger
// 7.1.4. ToInteger ( argument )
function ToInteger(argument) { // eslint-disable-line no-unused-vars
// 1. Let number be ? ToNumber(argument).
var number = Number(argument);
// 2. If number is NaN, return +0.
if (isNaN(number)) {
return 0;
}
// 3. If number is +0, -0, +∞, or -∞, return number.
if (1/number === Infinity || 1/number === -Infinity || number === Infinity || number === -Infinity) {
return number;
}
// 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
return ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
}

// _ESAbstract.ToLength
/* global ToInteger */
// 7.1.15. ToLength ( argument )
function ToLength(argument) { // eslint-disable-line no-unused-vars
// 1. Let len be ? ToInteger(argument).
var len = ToInteger(argument);
// 2. If len ≤ +0, return +0.
if (len <= 0) {
return 0;
}
// 3. Return min(len, 253-1).
return Math.min(len, Math.pow(2, 53) -1);
}

// _ESAbstract.ToObject
// 7.1.13 ToObject ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:
// Table 12: ToObject Conversions
/*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
| Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
| String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
| Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
function ToObject(argument) { // eslint-disable-line no-unused-vars
if (argument === null || argument === undefined) {
throw TypeError();
}
return Object(argument);
}

// _ESAbstract.GetV
/* global ToObject */
// 7.3.2 GetV (V, P)
function GetV(v, p) { // eslint-disable-line no-unused-vars
// 1. Assert: IsPropertyKey(P) is true.
// 2. Let O be ? ToObject(V).
var o = ToObject(v);
// 3. Return ? O.[[Get]](P, V).
return o[p];
}

// _ESAbstract.GetMethod
/* global GetV, IsCallable */
// 7.3.9. GetMethod ( V, P )
function GetMethod(V, P) { // eslint-disable-line no-unused-vars
// 1. Assert: IsPropertyKey(P) is true.
// 2. Let func be ? GetV(V, P).
var func = GetV(V, P);
// 3. If func is either undefined or null, return undefined.
if (func === null || func === undefined) {
return undefined;
}
// 4. If IsCallable(func) is false, throw a TypeError exception.
if (IsCallable(func) === false) {
throw new TypeError('Method not callable: ' + P);
}
// 5. Return func.
return func;
}

// _ESAbstract.Type
// "Type(x)" is used as shorthand for "the type of x"...
function Type(x) { // eslint-disable-line no-unused-vars
switch (typeof x) {
case 'undefined':
return 'undefined';
case 'boolean':
return 'boolean';
case 'number':
return 'number';
case 'string':
return 'string';
case 'symbol':
return 'symbol';
default:
// typeof null is 'object'
if (x === null) return 'null';
// Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
if ('Symbol' in this && x instanceof this.Symbol) return 'symbol';
return 'object';
}
}

// _ESAbstract.GetPrototypeFromConstructor
/* global Get, Type */
// 9.1.14. GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )
function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
// 2. Assert: IsCallable(constructor) is true.
// 3. Let proto be ? Get(constructor, "prototype").
var proto = Get(constructor, "prototype");
// 4. If Type(proto) is not Object, then
if (Type(proto) !== 'object') {
// a. Let realm be ? GetFunctionRealm(constructor).
// b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
proto = intrinsicDefaultProto;
}
// 5. Return proto.
return proto;
}

// _ESAbstract.IsConstructor
/* global Type */
// 7.2.4. IsConstructor ( argument )
function IsConstructor(argument) { // eslint-disable-line no-unused-vars
// 1. If Type(argument) is not Object, return false.
if (Type(argument) !== 'object') {
return false;
}
// 2. If argument has a [[Construct]] internal method, return true.
// 3. Return false.

// Polyfill.io - `new argument` is the only way  to truly test if a function is a constructor.
// We choose to not use`new argument` because the argument could have side effects when called.
// Instead we check to see if the argument is a function and if it has a prototype.
// Arrow functions do not have a [[Construct]] internal method, nor do they have a prototype.
return typeof argument === 'function' && !!argument.prototype;
}

// _ESAbstract.IteratorClose
/* global GetMethod, Type, Call */
// 7.4.6. IteratorClose ( iteratorRecord, completion )
function IteratorClose(iteratorRecord, completion) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
if (Type(iteratorRecord['[[Iterator]]']) !== 'object') {
throw new Error(Object.prototype.toString.call(iteratorRecord['[[Iterator]]']) + 'is not an Object.');
}
// 2. Assert: completion is a Completion Record.
// Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.

// 3. Let iterator be iteratorRecord.[[Iterator]].
var iterator = iteratorRecord['[[Iterator]]'];
// 4. Let return be ? GetMethod(iterator, "return").
// Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
var returnMethod = GetMethod(iterator, "return");
// 5. If return is undefined, return Completion(completion).
if (returnMethod === undefined) {
return completion;
}
// 6. Let innerResult be Call(return, iterator, « »).
try {
var innerResult = Call(returnMethod, iterator);
} catch (error) {
var innerException = error;
}
// 7. If completion.[[Type]] is throw, return Completion(completion).
if (completion) {
return completion;
}
// 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
if (innerException) {
throw innerException;
}
// 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
if (Type(innerResult) !== 'object') {
throw new TypeError("Iterator's return method returned a non-object.");
}
// 10. Return Completion(completion).
return completion;
}

// _ESAbstract.IteratorComplete
/* global Type, ToBoolean, Get */
// 7.4.3 IteratorComplete ( iterResult )
function IteratorComplete(iterResult) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(iterResult) is Object.
if (Type(iterResult) !== 'object') {
throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
}
// 2. Return ToBoolean(? Get(iterResult, "done")).
return ToBoolean(Get(iterResult, "done"));
}

// _ESAbstract.IteratorNext
/* global Call, Type */
// 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
function IteratorNext(iteratorRecord /* [, value] */) { // eslint-disable-line no-unused-vars
// 1. If value is not present, then
if (arguments.length < 2) {
// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
var result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']);
// 2. Else,
} else {
// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]);
}
// 3. If Type(result) is not Object, throw a TypeError exception.
if (Type(result) !== 'object') {
throw new TypeError('bad iterator');
}
// 4. Return result.
return result;
}

// _ESAbstract.IteratorStep
/* global IteratorNext, IteratorComplete */
// 7.4.5. IteratorStep ( iteratorRecord )
function IteratorStep(iteratorRecord) { // eslint-disable-line no-unused-vars
// 1. Let result be ? IteratorNext(iteratorRecord).
var result = IteratorNext(iteratorRecord);
// 2. Let done be ? IteratorComplete(result).
var done = IteratorComplete(result);
// 3. If done is true, return false.
if (done === true) {
return false;
}
// 4. Return result.
return result;
}

// _ESAbstract.IteratorValue
/* global Type, Get */
// 7.4.4 IteratorValue ( iterResult )
function IteratorValue(iterResult) { // eslint-disable-line no-unused-vars
// Assert: Type(iterResult) is Object.
if (Type(iterResult) !== 'object') {
throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
}
// Return ? Get(iterResult, "value").
return Get(iterResult, "value");
}

// _ESAbstract.OrdinaryToPrimitive
/* global Get, IsCallable, Call, Type */
// 7.1.1.1. OrdinaryToPrimitive ( O, hint )
function OrdinaryToPrimitive(O, hint) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(O) is Object.
// 2. Assert: Type(hint) is String and its value is either "string" or "number".
// 3. If hint is "string", then
if (hint === 'string') {
// a. Let methodNames be « "toString", "valueOf" ».
var methodNames = ['toString', 'valueOf'];
// 4. Else,
} else {
// a. Let methodNames be « "valueOf", "toString" ».
methodNames = ['valueOf', 'toString'];
}
// 5. For each name in methodNames in List order, do
for (var i = 0; i < methodNames.length; ++i) {
var name = methodNames[i];
// a. Let method be ? Get(O, name).
var method = Get(O, name);
// b. If IsCallable(method) is true, then
if (IsCallable(method)) {
// i. Let result be ? Call(method, O).
var result = Call(method, O);
// ii. If Type(result) is not Object, return result.
if (Type(result) !== 'object') {
  return result;
}
}
}
// 6. Throw a TypeError exception.
throw new TypeError('Cannot convert to primitive.');
}

// _ESAbstract.SameValue
/* global Type, SameValueNonNumber */
// 7.2.10. SameValue ( x, y )
function SameValue(x, y) { // eslint-disable-line no-unused-vars
// 1. If Type(x) is different from Type(y), return false.
if (Type(x) !== Type(y)) {
return false;
}
// 2. If Type(x) is Number, then
if (Type(x) === 'number') {
// a. If x is NaN and y is NaN, return true.
if (isNaN(x) && isNaN(y)) {
return true;
}
// Polyfill.io - 0 === -0 is true, but they are not the same value.
// b. If x is +0 and y is -0, return false.
// c. If x is -0 and y is +0, return false.
if (x === 0 && y === 0 && 1/x !== 1/y) {
return false;
}
// d. If x is the same Number value as y, return true.
if (x === y) {
return true;
}
// e. Return false.
return false;
}
// 3. Return SameValueNonNumber(x, y).
return SameValueNonNumber(x, y);
}

// _ESAbstract.SameValueZero
/* global Type, SameValueNonNumber */
// 7.2.11. SameValueZero ( x, y )
function SameValueZero (x, y) { // eslint-disable-line no-unused-vars
// 1. If Type(x) is different from Type(y), return false.
if (Type(x) !== Type(y)) {
return false;
}
// 2. If Type(x) is Number, then
if (Type(x) === 'number') {
// a. If x is NaN and y is NaN, return true.
if (isNaN(x) && isNaN(y)) {
return true;
}
// b. If x is +0 and y is -0, return true.
if (1/x === Infinity && 1/y === -Infinity) {
return true;
}
// c. If x is -0 and y is +0, return true.
if (1/x === -Infinity && 1/y === Infinity) {
return true;
}
// d. If x is the same Number value as y, return true.
if (x === y) {
return true;
}
// e. Return false.
return false;
}
// 3. Return SameValueNonNumber(x, y).
return SameValueNonNumber(x, y);
}

// _ESAbstract.ToPrimitive
/* global Type, GetMethod, Call, OrdinaryToPrimitive */
// 7.1.1. ToPrimitive ( input [ , PreferredType ] )
function ToPrimitive(input /* [, PreferredType] */) { // eslint-disable-line no-unused-vars
var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
// 1. Assert: input is an ECMAScript language value.
// 2. If Type(input) is Object, then
if (Type(input) === 'object') {
// a. If PreferredType is not present, let hint be "default".
if (arguments.length < 2) {
var hint = 'default';
// b. Else if PreferredType is hint String, let hint be "string".
} else if (PreferredType === String) {
hint = 'string';
// c. Else PreferredType is hint Number, let hint be "number".
} else if (PreferredType === Number) {
hint = 'number';
}
// d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
var exoticToPrim = typeof this.Symbol === 'function' && typeof this.Symbol.toPrimitive === 'symbol' ? GetMethod(input, this.Symbol.toPrimitive) : undefined;
// e. If exoticToPrim is not undefined, then
if (exoticToPrim !== undefined) {
// i. Let result be ? Call(exoticToPrim, input, « hint »).
var result = Call(exoticToPrim, input, [hint]);
// ii. If Type(result) is not Object, return result.
if (Type(result) !== 'object') {
  return result;
}
// iii. Throw a TypeError exception.
throw new TypeError('Cannot convert exotic object to primitive.');
}
// f. If hint is "default", set hint to "number".
if (hint === 'default') {
hint = 'number';
}
// g. Return ? OrdinaryToPrimitive(input, hint).
return OrdinaryToPrimitive(input, hint);
}
// 3. Return input
return input;
}

// _ESAbstract.ToString
/* global Type, ToPrimitive */
// 7.1.12. ToString ( argument )
// The abstract operation ToString converts argument to a value of type String according to Table 11:
// Table 11: ToString Conversions
/*
|---------------|--------------------------------------------------------|
| Argument Type | Result                                                 |
|---------------|--------------------------------------------------------|
| Undefined     | Return "undefined".                                    |
|---------------|--------------------------------------------------------|
| Null	        | Return "null".                                         |
|---------------|--------------------------------------------------------|
| Boolean       | If argument is true, return "true".                    |
|               | If argument is false, return "false".                  |
|---------------|--------------------------------------------------------|
| Number        | Return NumberToString(argument).                       |
|---------------|--------------------------------------------------------|
| String        | Return argument.                                       |
|---------------|--------------------------------------------------------|
| Symbol        | Throw a TypeError exception.                           |
|---------------|--------------------------------------------------------|
| Object        | Apply the following steps:                             |
|               | Let primValue be ? ToPrimitive(argument, hint String). |
|               | Return ? ToString(primValue).                          |
|---------------|--------------------------------------------------------|
*/
function ToString(argument) { // eslint-disable-line no-unused-vars
switch(Type(argument)) {
case 'symbol':
throw new TypeError('Cannot convert a Symbol value to a string');
break;
case 'object':
var primValue = ToPrimitive(argument, 'string');
return ToString(primValue);
default:
return String(argument);
}
}

// Object.defineProperty
(function (nativeDefineProperty) {

var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

// Polyfill.io - This does not use CreateMethodProperty because our CreateMethodProperty function uses Object.defineProperty.
Object['defineProperty'] = function defineProperty(object, property, descriptor) {

// Where native support exists, assume it
if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
return nativeDefineProperty(object, property, descriptor);
}

if (object === null || !(object instanceof Object || typeof object === 'object')) {
throw new TypeError('Object.defineProperty called on non-object');
}

if (!(descriptor instanceof Object)) {
throw new TypeError('Property description must be an object');
}

var propertyString = String(property);
var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
var getterType = 'get' in descriptor && typeof descriptor.get;
var setterType = 'set' in descriptor && typeof descriptor.set;

// handle descriptor.get
if (getterType) {
if (getterType !== 'function') {
  throw new TypeError('Getter must be a function');
}
if (!supportsAccessors) {
  throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
}
if (hasValueOrWritable) {
  throw new TypeError(ERR_VALUE_ACCESSORS);
}
Object.__defineGetter__.call(object, propertyString, descriptor.get);
} else {
object[propertyString] = descriptor.value;
}

// handle descriptor.set
if (setterType) {
if (setterType !== 'function') {
  throw new TypeError('Setter must be a function');
}
if (!supportsAccessors) {
  throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
}
if (hasValueOrWritable) {
  throw new TypeError(ERR_VALUE_ACCESSORS);
}
Object.__defineSetter__.call(object, propertyString, descriptor.set);
}

// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
if ('value' in descriptor) {
object[propertyString] = descriptor.value;
}

return object;
};
}(Object.defineProperty));

// _ESAbstract.CreateDataProperty
// 7.3.4. CreateDataProperty ( O, P, V )
// NOTE
// This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
// Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
function CreateDataProperty(O, P, V) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
var newDesc = {
value: V,
writable: true,
enumerable: true,
configurable: true
};
// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
try {
Object.defineProperty(O, P, newDesc);
return true;
} catch (e) {
return false;
}
}

// _ESAbstract.CreateDataPropertyOrThrow
/* global CreateDataProperty */
// 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
function CreateDataPropertyOrThrow(O, P, V) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let success be ? CreateDataProperty(O, P, V).
var success = CreateDataProperty(O, P, V);
// 4. If success is false, throw a TypeError exception.
if (!success) {
throw new TypeError('Cannot assign value `' + Object.prototype.toString.call(V) + '` to property `' + Object.prototype.toString.call(P) + '` on object `' + Object.prototype.toString.call(O) + '`');
}
// 5. Return success.
return success;
}

// _ESAbstract.CreateIterResultObject
/* global Type, CreateDataProperty */
// 7.4.7. CreateIterResultObject ( value, done )
function CreateIterResultObject(value, done) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(done) is Boolean.
if (Type(done) !== 'boolean') {
throw new Error();
}
// 2. Let obj be ObjectCreate(%ObjectPrototype%).
var obj = {};
// 3. Perform CreateDataProperty(obj, "value", value).
CreateDataProperty(obj, "value", value);
// 4. Perform CreateDataProperty(obj, "done", done).
CreateDataProperty(obj, "done", done);
// 5. Return obj.
return obj;
}

// _ESAbstract.CreateMethodProperty
// 7.3.5. CreateMethodProperty ( O, P, V )
function CreateMethodProperty(O, P, V) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(O) is Object.
// 2. Assert: IsPropertyKey(P) is true.
// 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
var newDesc = {
value: V,
writable: true,
enumerable: false,
configurable: true
};
// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
Object.defineProperty(O, P, newDesc);
}

// Array.isArray
/* global CreateMethodProperty, IsArray */
// 22.1.2.2. Array.isArray ( arg )
CreateMethodProperty(Array, 'isArray', function isArray(arg) {
// 1. Return ? IsArray(arg).
return IsArray(arg);
});

// Array.prototype.forEach
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.10. Array.prototype.forEach ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'forEach', function forEach(callbackfn /* [ , thisArg ] */) {
// 1. Let O be ? ToObject(this value).
var O = ToObject(this);
// Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
// We will use arrayLike in place of O when we are iterating through the list.
var arraylike = O instanceof String ? O.split('') : O;
// 2. Let len be ? ToLength(? Get(O, "length")).
var len = ToLength(Get(O, "length"));
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
if (IsCallable(callbackfn) === false) {
throw new TypeError(callbackfn + ' is not a function');
}
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
var T = arguments.length > 1 ? arguments[1] : undefined;
// 5. Let k be 0.
var k = 0;
// 6. Repeat, while k < len
while (k < len) {
// a. Let Pk be ! ToString(k).
var Pk = ToString(k);
// b. Let kPresent be ? HasProperty(O, Pk).
var kPresent = HasProperty(arraylike, Pk);
// c. If kPresent is true, then
if (kPresent) {
// i. Let kValue be ? Get(O, Pk).
var kValue = Get(arraylike, Pk);
// ii. Perform ? Call(callbackfn, T, « kValue, k, O »).
Call(callbackfn, T, [kValue, k, O]);
}
// d. Increase k by 1.
k = k + 1;
}
// 7. Return undefined.
return undefined;
});

// Function.prototype.bind
/* global CreateMethodProperty, IsCallable */
// 19.2.3.2. Function.prototype.bind ( thisArg, ...args )
// https://github.com/es-shims/es5-shim/blob/d6d7ff1b131c7ba14c798cafc598bb6780d37d3b/es5-shim.js#L182
CreateMethodProperty(Function.prototype, 'bind', function bind(that) { // .length is 1
// add necessary es5-shim utilities
var $Array = Array;
var $Object = Object;
var ArrayPrototype = $Array.prototype;
var Empty = function Empty() { };
var array_slice = ArrayPrototype.slice;
var array_concat = ArrayPrototype.concat;
var array_push = ArrayPrototype.push;
var max = Math.max;
// /add necessary es5-shim utilities

// 1. Let Target be the this value.
var target = this;
// 2. If IsCallable(Target) is false, throw a TypeError exception.
if (!IsCallable(target)) {
throw new TypeError('Function.prototype.bind called on incompatible ' + target);
}
// 3. Let A be a new (possibly empty) internal list of all of the
//   argument values provided after thisArg (arg1, arg2 etc), in order.
// XXX slicedArgs will stand in for "A" if used
var args = array_slice.call(arguments, 1); // for normal call
// 4. Let F be a new native ECMAScript object.
// 11. Set the [[Prototype]] internal property of F to the standard
//   built-in Function prototype object as specified in 15.3.3.1.
// 12. Set the [[Call]] internal property of F as described in
//   15.3.4.5.1.
// 13. Set the [[Construct]] internal property of F as described in
//   15.3.4.5.2.
// 14. Set the [[HasInstance]] internal property of F as described in
//   15.3.4.5.3.
var bound;
var binder = function () {

if (this instanceof bound) {
// 15.3.4.5.2 [[Construct]]
// When the [[Construct]] internal method of a function object,
// F that was created using the bind function is called with a
// list of arguments ExtraArgs, the following steps are taken:
// 1. Let target be the value of F's [[TargetFunction]]
//   internal property.
// 2. If target has no [[Construct]] internal method, a
//   TypeError exception is thrown.
// 3. Let boundArgs be the value of F's [[BoundArgs]] internal
//   property.
// 4. Let args be a new list containing the same values as the
//   list boundArgs in the same order followed by the same
//   values as the list ExtraArgs in the same order.
// 5. Return the result of calling the [[Construct]] internal
//   method of target providing args as the arguments.

var result = target.apply(
  this,
  array_concat.call(args, array_slice.call(arguments))
);
if ($Object(result) === result) {
  return result;
}
return this;

} else {
// 15.3.4.5.1 [[Call]]
// When the [[Call]] internal method of a function object, F,
// which was created using the bind function is called with a
// this value and a list of arguments ExtraArgs, the following
// steps are taken:
// 1. Let boundArgs be the value of F's [[BoundArgs]] internal
//   property.
// 2. Let boundThis be the value of F's [[BoundThis]] internal
//   property.
// 3. Let target be the value of F's [[TargetFunction]] internal
//   property.
// 4. Let args be a new list containing the same values as the
//   list boundArgs in the same order followed by the same
//   values as the list ExtraArgs in the same order.
// 5. Return the result of calling the [[Call]] internal method
//   of target providing boundThis as the this value and
//   providing args as the arguments.

// equiv: target.call(this, ...boundArgs, ...args)
return target.apply(
  that,
  array_concat.call(args, array_slice.call(arguments))
);

}

};

// 15. If the [[Class]] internal property of Target is "Function", then
//     a. Let L be the length property of Target minus the length of A.
//     b. Set the length own property of F to either 0 or L, whichever is
//       larger.
// 16. Else set the length own property of F to 0.

var boundLength = max(0, target.length - args.length);

// 17. Set the attributes of the length own property of F to the values
//   specified in 15.3.5.1.
var boundArgs = [];
for (var i = 0; i < boundLength; i++) {
array_push.call(boundArgs, '$' + i);
}

// XXX Build a dynamic function with desired amount of arguments is the only
// way to set the length property of a function.
// In environments where Content Security Policies enabled (Chrome extensions,
// for ex.) all use of eval or Function costructor throws an exception.
// However in all of these environments Function.prototype.bind exists
// and so this code will never be executed.
bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

if (target.prototype) {
Empty.prototype = target.prototype;
bound.prototype = new Empty();
// Clean up dangling references.
Empty.prototype = null;
}

// TODO
// 18. Set the [[Extensible]] internal property of F to true.

// TODO
// 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
// 20. Call the [[DefineOwnProperty]] internal method of F with
//   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
//   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
//   false.
// 21. Call the [[DefineOwnProperty]] internal method of F with
//   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
//   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
//   and false.

// TODO
// NOTE Function objects created using Function.prototype.bind do not
// have a prototype property or the [[Code]], [[FormalParameters]], and
// [[Scope]] internal properties.
// XXX can't delete prototype in pure-js.

// 22. Return F.
return bound;
});

// Object.freeze
/* global CreateMethodProperty */
// 19.1.2.6. Object.freeze ( O )
CreateMethodProperty(Object, 'freeze', function freeze(O) {
// This feature cannot be implemented fully as a polyfill.
// We choose to silently fail which allows "securable" code
// to "gracefully" degrade to working but insecure code.
return O;
});

// Object.getOwnPropertyDescriptor
/* global CreateMethodProperty */
(function () {
var call = Function.prototype.call;
var prototypeOfObject = Object.prototype;
var owns = call.bind(prototypeOfObject.hasOwnProperty);

var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}
function doesGetOwnPropertyDescriptorWork(object) {
try {
    object.sentinel = 0;
    return Object.getOwnPropertyDescriptor(
        object,
        "sentinel"
    ).value === 0;
} catch (exception) {
    // returns falsy
}
}
// check whether getOwnPropertyDescriptor works if it's given. Otherwise,
// shim partially.
if (Object.defineProperty) {
var getOwnPropertyDescriptorWorksOnObject =
    doesGetOwnPropertyDescriptorWork({});
var getOwnPropertyDescriptorWorksOnDom = typeof document == "undefined" ||
    doesGetOwnPropertyDescriptorWork(document.createElement("div"));
if (!getOwnPropertyDescriptorWorksOnDom ||
    !getOwnPropertyDescriptorWorksOnObject
) {
    var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
}
}

if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a non-object: ";

CreateMethodProperty(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(object, property) {
    if ((typeof object != "object" && typeof object != "function") || object === null) {
        throw new TypeError(ERR_NON_OBJECT + object);
    }

    // make a valiant attempt to use the real getOwnPropertyDescriptor
    // for I8's DOM elements.
    if (getOwnPropertyDescriptorFallback) {
        try {
            return getOwnPropertyDescriptorFallback.call(Object, object, property);
        } catch (exception) {
            // try the shim if the real one doesn't work
        }
    }

    // If object does not owns property return undefined immediately.
    if (!owns(object, property)) {
        return;
    }

    // If object has a property then it's for sure both `enumerable` and
    // `configurable`.
    var descriptor = { enumerable: true, configurable: true };

    // If JS engine supports accessor properties then property may be a
    // getter or setter.
    if (supportsAccessors) {
        // Unfortunately `__lookupGetter__` will return a getter even
        // if object has own non getter property along with a same named
        // inherited getter. To avoid misbehavior we temporary remove
        // `__proto__` so that `__lookupGetter__` will return getter only
        // if it's owned by an object.
        var prototype = object.__proto__;
        object.__proto__ = prototypeOfObject;

        var getter = lookupGetter(object, property);
        var setter = lookupSetter(object, property);

        // Once we have getter and setter we can put values back.
        object.__proto__ = prototype;

        if (getter || setter) {
            if (getter) {
                descriptor.get = getter;
            }
            if (setter) {
                descriptor.set = setter;
            }
            // If it was accessor property we're done and return here
            // in order to avoid adding `value` to the descriptor.
            return descriptor;
        }
    }

    // If we got this far we know that object has an own property that is
    // not an accessor so we set it as a value and return descriptor.
    descriptor.value = object[property];
descriptor.writable = true;
    return descriptor;
});
}
}());

// _ESAbstract.EnumerableOwnProperties
/* globals Type, Get */
// 7.3.21. EnumerableOwnProperties ( O, kind )
function EnumerableOwnProperties(O, kind) { // eslint-disable-line no-unused-vars
// 1. Assert: Type(O) is Object.
// 2. Let ownKeys be ? O.[[OwnPropertyKeys]]().
var ownKeys = Object.keys(O);
// 3. Let properties be a new empty List.
var properties = [];
// 4. For each element key of ownKeys in List order, do
var length = ownKeys.length;
for (var i = 0; i < length; i++) {
var key = ownKeys[i];
// a. If Type(key) is String, then
if (Type(key) === 'string') {
// i. Let desc be ? O.[[GetOwnProperty]](key).
var desc = Object.getOwnPropertyDescriptor(O, key);
// ii. If desc is not undefined and desc.[[Enumerable]] is true, then
if (desc && desc.enumerable) {
  // 1. If kind is "key", append key to properties.
  if (kind === 'key') {
    properties.push(key);
    // 2. Else,
  } else {
    // a. Let value be ? Get(O, key).
    var value = Get(O, key);
    // b. If kind is "value", append value to properties.
    if (kind === 'value') {
      properties.push(value);
      // c. Else,
    } else {
      // i. Assert: kind is "key+value".
      // ii. Let entry be CreateArrayFromList(« key, value »).
      var entry = [key, value];
      // iii. Append entry to properties.
      properties.push(entry);
    }
  }
}
}
}
// 5. Order the elements of properties so they are in the same relative order as would be produced by the Iterator that would be returned if the EnumerateObjectProperties internal method were invoked with O.
// 6. Return properties.
return properties;
}

// Object.entries
/* global CreateMethodProperty, EnumerableOwnProperties, ToObject */
// 19.1.2.5. Object.entries ( O )
CreateMethodProperty(Object, 'entries', function entries(O) {
// 1. Let obj be ? ToObject(O).
var obj = ToObject(O);
// 2. Let nameList be ? EnumerableOwnProperties(obj, "key+value").
var nameList = EnumerableOwnProperties(obj, "key+value");
// 3. Return CreateArrayFromList(nameList).
// Polyfill.io - nameList is already an array.
return nameList;
});

// Object.getOwnPropertyNames
/* global CreateMethodProperty */

var toString = ({}).toString;
var split = ''.split;

CreateMethodProperty(Object, 'getOwnPropertyNames', function getOwnPropertyNames(object) {
var buffer = [];
var key;

// Non-enumerable properties cannot be discovered but can be checked for by name.
// Define those used internally by JS to allow an incomplete solution
var commonProps = ['length', "name", "arguments", "caller", "prototype", "observe", "unobserve"];

if (typeof object === 'undefined' || object === null) {
throw new TypeError('Cannot convert undefined or null to object');
}

// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
object = toString.call(object) == '[object String]' ? split.call(object, '') : Object(object);

// Enumerable properties only
for (key in object) {
if (Object.prototype.hasOwnProperty.call(object, key)) {
buffer.push(key);
}
}

// Check for and add the common non-enumerable properties
for (var i=0, s=commonProps.length; i<s; i++) {
if (commonProps[i] in object) buffer.push(commonProps[i]);
}

return buffer;
});

// Object.getPrototypeOf
/* global CreateMethodProperty */
// Based on: https://github.com/es-shims/es5-shim/blob/master/es5-sham.js

// https://github.com/es-shims/es5-shim/issues#issue/2
// http://ejohn.org/blog/objectgetprototypeof/
// recommended by fschaefer on github
//
// sure, and webreflection says ^_^
// ... this will nerever possibly return null
// ... Opera Mini breaks here with infinite loops
CreateMethodProperty(Object, 'getPrototypeOf', function getPrototypeOf(object) {
if (object !== Object(object)) {
throw new TypeError('Object.getPrototypeOf called on non-object');
}
var proto = object.__proto__;
if (proto || proto === null) {
return proto;
} else if (typeof object.constructor == 'function' && object instanceof object.constructor) {
return object.constructor.prototype;
} else if (object instanceof Object) {
return Object.prototype;
} else {
// Correctly return null for Objects created with `Object.create(null)`
// (shammed or native) or `{ __proto__: null}`.  Also returns null for
// cross-realm objects on browsers that lack `__proto__` support (like
// IE <11), but that's the best we can do.
return null;
}
});

// Object.keys
/* global CreateMethodProperty */
CreateMethodProperty(Object, "keys", (function() {
'use strict';

// modified from https://github.com/es-shims/object-keys

var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
'toString',
'toLocaleString',
'valueOf',
'hasOwnProperty',
'isPrototypeOf',
'propertyIsEnumerable',
'constructor'
];
var equalsConstructorPrototype = function (o) {
var ctor = o.constructor;
return ctor && ctor.prototype === o;
};
var excludedKeys = {
$console: true,
$external: true,
$frame: true,
$frameElement: true,
$frames: true,
$innerHeight: true,
$innerWidth: true,
$outerHeight: true,
$outerWidth: true,
$pageXOffset: true,
$pageYOffset: true,
$parent: true,
$scrollLeft: true,
$scrollTop: true,
$scrollX: true,
$scrollY: true,
$self: true,
$webkitIndexedDB: true,
$webkitStorageInfo: true,
$window: true
};
var hasAutomationEqualityBug = (function () {
/* global window */
if (typeof window === 'undefined') { return false; }
for (var k in window) {
try {
  if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
    try {
      equalsConstructorPrototype(window[k]);
    } catch (e) {
      return true;
    }
  }
} catch (e) {
  return true;
}
}
return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
/* global window */
if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
return equalsConstructorPrototype(o);
}
try {
return equalsConstructorPrototype(o);
} catch (e) {
return false;
}
};

function isArgumentsObject(value) {
var str = toStr.call(value);
var isArgs = str === '[object Arguments]';
if (!isArgs) {
isArgs = str !== '[object Array]' &&
  value !== null &&
  typeof value === 'object' &&
  typeof value.length === 'number' &&
  value.length >= 0 &&
  toStr.call(value.callee) === '[object Function]';
}
return isArgs;
}

return function keys(object) {
var isFunction = toStr.call(object) === '[object Function]';
var isArguments = isArgumentsObject(object);
var isString = toStr.call(object) === '[object String]';
var theKeys = [];

if (object === undefined || object === null) {
throw new TypeError('Cannot convert undefined or null to object');
}

var skipProto = hasProtoEnumBug && isFunction;
if (isString && object.length > 0 && !has.call(object, 0)) {
for (var i = 0; i < object.length; ++i) {
  theKeys.push(String(i));
}
}

if (isArguments && object.length > 0) {
for (var j = 0; j < object.length; ++j) {
  theKeys.push(String(j));
}
} else {
for (var name in object) {
  if (!(skipProto && name === 'prototype') && has.call(object, name)) {
    theKeys.push(String(name));
  }
}
}

if (hasDontEnumBug) {
var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

for (var k = 0; k < dontEnums.length; ++k) {
  if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
    theKeys.push(dontEnums[k]);
  }
}
}
return theKeys;
};
}()));

// Object.defineProperties
/* global CreateMethodProperty, Get, ToObject, Type */
// 19.1.2.3. Object.defineProperties ( O, Properties )
CreateMethodProperty(Object, 'defineProperties', function defineProperties(O, Properties) {
// 1. If Type(O) is not Object, throw a TypeError exception.
if (Type(O) !== 'object') {
throw new TypeError('Object.defineProperties called on non-object');
}
// 2. Let props be ? ToObject(Properties).
var props = ToObject(Properties);
// 3. Let keys be ? props.[[OwnPropertyKeys]]().
/*
Polyfill.io - This step in our polyfill is not complying with the specification.
[[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
*/
var keys = Object.keys(props);
// 4. Let descriptors be a new empty List.
var descriptors = [];
// 5. For each element nextKey of keys in List order, do
for (var i = 0; i < keys.length; i++) {
var nextKey = keys[i];
// a. Let propDesc be ? props.[[GetOwnProperty]](nextKey).
var propDesc = Object.getOwnPropertyDescriptor(props, nextKey);
// b. If propDesc is not undefined and propDesc.[[Enumerable]] is true, then
if (propDesc !== undefined && propDesc.enumerable) {
// i. Let descObj be ? Get(props, nextKey).
var descObj = Get(props, nextKey);
// ii. Let desc be ? ToPropertyDescriptor(descObj).
// Polyfill.io - We skip this step because Object.defineProperty deals with it.
// TODO: Implement this step?
var desc = descObj;
// iii. Append the pair (a two element List) consisting of nextKey and desc to the end of descriptors.
descriptors.push([nextKey, desc]);
}
}
// 6. For each pair from descriptors in list order, do
for (var i = 0; i < descriptors.length; i++){
// a. Let P be the first element of pair.
var P = descriptors[i][0];
// b. Let desc be the second element of pair.
var desc = descriptors[i][1];
// c. Perform ? DefinePropertyOrThrow(O, P, desc).
Object.defineProperty(O, P, desc);
}
// 7. Return O.
return O;
});

// Object.create
/* global CreateMethodProperty, Type */
CreateMethodProperty(Object, 'create', function create(O, properties) {
// 1. If Type(O) is neither Object nor Null, throw a TypeError exception.
if (Type(O) !== 'object' && Type(O) !== 'null') {
throw new TypeError('Object prototype may only be an Object or null');
}
// 2. Let obj be ObjectCreate(O).
var obj = new Function('e', 'function Object() {}Object.prototype=e;return new Object')(O);

obj.constructor.prototype = O;

// 3. If Properties is not undefined, then
if (1 in arguments) {
// a. Return ? ObjectDefineProperties(obj, Properties).
return Object.defineProperties(obj, properties);
}

return obj;
});

// _ESAbstract.GetIterator
/* global GetMethod, Symbol, Call, Type, GetV */
// 7.4.1. GetIterator ( obj [ , method ] )
// The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
function GetIterator(obj /*, method */) { // eslint-disable-line no-unused-vars
// 1. If method is not present, then
// a. Set method to ? GetMethod(obj, @@iterator).
var method = arguments.length > 1 ? arguments[1] : GetMethod(obj, Symbol.iterator);
// 2. Let iterator be ? Call(method, obj).
var iterator = Call(method, obj);
// 3. If Type(iterator) is not Object, throw a TypeError exception.
if (Type(iterator) !== 'object') {
throw new TypeError('bad iterator');
}
// 4. Let nextMethod be ? GetV(iterator, "next").
var nextMethod = GetV(iterator, "next");
// 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
var iteratorRecord = Object.create(null);
iteratorRecord['[[Iterator]]'] = iterator;
iteratorRecord['[[NextMethod]]'] = nextMethod;
iteratorRecord['[[Done]]'] = false;
// 6. Return iteratorRecord.
return iteratorRecord;
}

// _ESAbstract.OrdinaryCreateFromConstructor
/* global GetPrototypeFromConstructor */
// 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
function OrdinaryCreateFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
var internalSlotsList = arguments[2] || {};
// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
// The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.

// 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
var proto = GetPrototypeFromConstructor(constructor, intrinsicDefaultProto);

// 3. Return ObjectCreate(proto, internalSlotsList).
// Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does not use the default ordinary object definitions specified in 9.1.
var obj = Object.create(proto);
for (var name in internalSlotsList) {
if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
Object.defineProperty(obj, name, {
  configurable: true,
  enumerable: false,
  writable: true,
  value: internalSlotsList[name]
});
}
}
return obj;
}

// _ESAbstract.Construct
/* global IsConstructor, OrdinaryCreateFromConstructor, Call */
// 7.3.13. Construct ( F [ , argumentsList [ , newTarget ]] )
function Construct(F /* [ , argumentsList [ , newTarget ]] */) { // eslint-disable-line no-unused-vars
// 1. If newTarget is not present, set newTarget to F.
var newTarget = arguments.length > 2 ? arguments[2] : F;

// 2. If argumentsList is not present, set argumentsList to a new empty List.
var argumentsList = arguments.length > 1 ? arguments[1] : [];

// 3. Assert: IsConstructor(F) is true.
if (!IsConstructor(F)) {
throw new TypeError('F must be a constructor.');
}

// 4. Assert: IsConstructor(newTarget) is true.
if (!IsConstructor(newTarget)) {
throw new TypeError('newTarget must be a constructor.');
}

// 5. Return ? F.[[Construct]](argumentsList, newTarget).
// Polyfill.io - If newTarget is the same as F, it is equivalent to new F(...argumentsList).
if (newTarget === F) {
return new (Function.prototype.bind.apply(F, [null].concat(argumentsList)))();
} else {
// Polyfill.io - This is mimicking section 9.2.2 step 5.a.
var obj = OrdinaryCreateFromConstructor(newTarget, Object.prototype);
return Call(F, obj, argumentsList);
}
}

// _ESAbstract.ArraySpeciesCreate
/* global IsArray, ArrayCreate, Get, Type, IsConstructor, Construct */
// 9.4.2.3. ArraySpeciesCreate ( originalArray, length )
function ArraySpeciesCreate(originalArray, length) { // eslint-disable-line no-unused-vars
// 1. Assert: length is an integer Number ≥ 0.
// 2. If length is -0, set length to +0.
if (1/length === -Infinity) {
length = 0;
}

// 3. Let isArray be ? IsArray(originalArray).
var isArray = IsArray(originalArray);

// 4. If isArray is false, return ? ArrayCreate(length).
if (isArray === false) {
return ArrayCreate(length);
}

// 5. Let C be ? Get(originalArray, "constructor").
var C = Get(originalArray, 'constructor');

// Polyfill.io - We skip this section as not sure how to make a cross-realm normal Array, a same-realm Array.
// 6. If IsConstructor(C) is true, then
// if (IsConstructor(C)) {
// a. Let thisRealm be the current Realm Record.
// b. Let realmC be ? GetFunctionRealm(C).
// c. If thisRealm and realmC are not the same Realm Record, then
// i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
// }
// 7. If Type(C) is Object, then
if (Type(C) === 'object') {
// a. Set C to ? Get(C, @@species).
C = 'Symbol' in this && 'species' in this.Symbol ? Get(C, this.Symbol.species) : undefined;
// b. If C is null, set C to undefined.
if (C === null) {
C = undefined;
}
}
// 8. If C is undefined, return ? ArrayCreate(length).
if (C === undefined) {
return ArrayCreate(length);
}
// 9. If IsConstructor(C) is false, throw a TypeError exception.
if (!IsConstructor(C)) {
throw new TypeError('C must be a constructor');
}
// 10. Return ? Construct(C, « length »).
return Construct(C, [length]);
}

// Array.prototype.filter
/* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, ToString, HasProperty, ToBoolean, Call, CreateDataPropertyOrThrow */
// 22.1.3.7. Array.prototype.filter ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'filter', function filter(callbackfn /* [ , thisArg ] */) {
// 1. Let O be ? ToObject(this value).
var O = ToObject(this);
// 2. Let len be ? ToLength(? Get(O, "length")).
var len = ToLength(Get(O, "length"));
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
if (IsCallable(callbackfn) === false) {
throw new TypeError(callbackfn + ' is not a function');
}
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
var T = arguments.length > 1 ? arguments[1] : undefined;
// 5. Let A be ? ArraySpeciesCreate(O, 0).
var A = ArraySpeciesCreate(O, 0);
// 6. Let k be 0.
var k = 0;
// 7. Let to be 0.
var to = 0;
// 8. Repeat, while k < len
while (k < len) {
// a. Let Pk be ! ToString(k).
var Pk = ToString(k);
// b. Let kPresent be ? HasProperty(O, Pk).
var kPresent = HasProperty(O, Pk);
// c. If kPresent is true, then
if (kPresent) {
// i. Let kValue be ? Get(O, Pk).
var kValue = Get(O, Pk);
// ii. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
var selected = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
// iii. If selected is true, then
if (selected) {
  // 1. Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue)
  CreateDataPropertyOrThrow(A, ToString(to), kValue);
  // 2. Increase to by 1.
  to = to + 1;
}

}
// d. Increase k by 1.
k = k + 1;
}
// 9. Return A.
return A;
});

// Array.prototype.map
/* global ArraySpeciesCreate, Call, CreateDataPropertyOrThrow, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
/* global CreateMethodProperty, ToObject, ToLength, Get, ArraySpeciesCreate, ToString, HasProperty, Call, CreateDataPropertyOrThrow */
// 22.1.3.16. Array.prototype.map ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'map', function map(callbackfn /* [ , thisArg ] */) {
// 1. Let O be ? ToObject(this value).
var O = ToObject(this);
// 2. Let len be ? ToLength(? Get(O, "length")).
var len = ToLength(Get(O, "length"));
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
if (IsCallable(callbackfn) === false) {
throw new TypeError(callbackfn + ' is not a function');
}
// 4. If thisArg is present, let T be thisArg; else let T be undefined.
var T = arguments.length > 1 ? arguments[1] : undefined;
// 5. Let A be ? ArraySpeciesCreate(O, len).
var A = ArraySpeciesCreate(O, len);
// 6. Let k be 0.
var k = 0;
// 7. Repeat, while k < len
while (k < len) {
// a. Let Pk be ! ToString(k).
var Pk = ToString(k);
// b. Let kPresent be ? HasProperty(O, Pk).
var kPresent = HasProperty(O, Pk);
// c. If kPresent is true, then
if (kPresent) {
// i. Let kValue be ? Get(O, Pk).
var kValue = Get(O, Pk);
// ii. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
var mappedValue = Call(callbackfn, T, [kValue, k, O]);
// iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
CreateDataPropertyOrThrow(A, Pk, mappedValue);
}
// d. Increase k by 1.
k = k + 1;
}
// 8. Return A.
return A;
});

// Object.setPrototypeOf
/* global CreateMethodProperty */
// ES6-shim 0.16.0 (c) 2013-2014 Paul Miller (http://paulmillr.com)
// ES6-shim may be freely distributed under the MIT license.
// For more details and documentation:
// https://github.com/paulmillr/es6-shim/

// NOTE:  This versions needs object ownership
//        because every promoted object needs to be reassigned
//        otherwise uncompatible browsers cannot work as expected
//
// NOTE:  This might need es5-shim or polyfills upfront
//        because it's based on ES5 API.
//        (probably just an IE <= 8 problem)
//
// NOTE:  nodejs is fine in version 0.8, 0.10, and future versions.
(function () {
if (Object.setPrototypeOf) { return; }

/*jshint proto: true */
// @author    Andrea Giammarchi - @WebReflection

var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var create = Object.create;
var defineProperty = Object.defineProperty;
var getPrototypeOf = Object.getPrototypeOf;
var objProto = Object.prototype;

var copyDescriptors = function (target, source) {
// define into target descriptors from source
getOwnPropertyNames(source).forEach(function (key) {
defineProperty(
  target,
  key,
  getOwnPropertyDescriptor(source, key)
);
});
return target;
};
// used as fallback when no promotion is possible
var createAndCopy = function setPrototypeOf(origin, proto) {
return copyDescriptors(create(proto), origin);
};
var set, sPOf;
try {
// this might fail for various reasons
// ignore if Chrome cought it at runtime
set = getOwnPropertyDescriptor(objProto, '__proto__').set;
set.call({}, null);
// setter not poisoned, it can promote
// Firefox, Chrome
sPOf = function setPrototypeOf(origin, proto) {
set.call(origin, proto);
return origin;
};
} catch (e) {
// do one or more feature detections
set = { __proto__: null };
// if proto does not work, needs to fallback
// some Opera, Rhino, ducktape
if (set instanceof Object) {
sPOf = createAndCopy;
} else {
// verify if null objects are buggy
/* eslint-disable no-proto */
set.__proto__ = objProto;
/* eslint-enable no-proto */
// if null objects are buggy
// nodejs 0.8 to 0.10
if (set instanceof Object) {
  sPOf = function setPrototypeOf(origin, proto) {
    // use such bug to promote
    /* eslint-disable no-proto */
    origin.__proto__ = proto;
    /* eslint-enable no-proto */
    return origin;
  };
} else {
  // try to use proto or fallback
  // Safari, old Firefox, many others
  sPOf = function setPrototypeOf(origin, proto) {
    // if proto is not null
    if (getPrototypeOf(origin)) {
      // use __proto__ to promote
      /* eslint-disable no-proto */
      origin.__proto__ = proto;
      /* eslint-enable no-proto */
      return origin;
    } else {
      // otherwise unable to promote: fallback
      return createAndCopy(origin, proto);
    }
  };
}
}
}
CreateMethodProperty(Object, 'setPrototypeOf', sPOf);
}());

// Promise
!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=100)}({100:/*!***********************!*\
!*** ./src/global.js ***!
\***********************/
function(n,t,e){(function(n){var t=e(/*! ./yaku */5);try{n.Promise=t,window.Promise=t}catch(r){}}).call(t,e(/*! ./../~/webpack/buildin/global.js */2))},2:/*!***********************************!*\
!*** (webpack)/buildin/global.js ***!
\***********************************/
function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(r){"object"==typeof window&&(e=window)}n.exports=e},5:/*!*********************!*\
!*** ./src/yaku.js ***!
\*********************/
function(n,t,e){(function(t){!function(){"use strict";function e(){return rn[q][B]||D}function r(n){return n&&"object"==typeof n}function o(n){return"function"==typeof n}function i(n,t){return n instanceof t}function u(n){return i(n,M)}function c(n,t,e){if(!t(n))throw h(e)}function f(){try{return R.apply(S,arguments)}catch(n){return nn.e=n,nn}}function s(n,t){return R=n,S=t,f}function a(n,t){function e(){for(var e=0;e<o;)t(r[e],r[e+1]),r[e++]=P,r[e++]=P;o=0,r.length>n&&(r.length=n)}var r=A(n),o=0;return function(n,t){r[o++]=n,r[o++]=t,2===o&&rn.nextTick(e)}}function l(n,t){var e,r,u,c,f=0;if(!n)throw h(Q);var a=n[rn[q][z]];if(o(a))r=a.call(n);else{if(!o(n.next)){if(i(n,A)){for(e=n.length;f<e;)t(n[f],f++);return f}throw h(Q)}r=n}for(;!(u=r.next()).done;)if((c=s(t)(u.value,f++))===nn)throw o(r[G])&&r[G](),c.e;return f}function h(n){return new TypeError(n)}function v(n){return(n?"":V)+(new M).stack}function _(n,t){var e="on"+n.toLowerCase(),r=O[e];H&&H.listeners(n).length?n===Z?H.emit(n,t._v,t):H.emit(n,t):r?r({reason:t._v,promise:t}):rn[n](t._v,t)}function p(n){return n&&n._s}function d(n){if(p(n))return new n(tn);var t,e,r;return t=new n(function(n,o){if(t)throw h();e=n,r=o}),c(e,o),c(r,o),t}function w(n,t){var e=!1;return function(r){e||(e=!0,L&&(n[N]=v(!0)),t===Y?k(n,r):x(n,t,r))}}function y(n,t,e,r){return o(e)&&(t._onFulfilled=e),o(r)&&(n[J]&&_(X,n),t._onRejected=r),L&&(t._p=n),n[n._c++]=t,n._s!==$&&on(n,t),t}function m(n){if(n._umark)return!0;n._umark=!0;for(var t,e=0,r=n._c;e<r;)if(t=n[e++],t._onRejected||m(t))return!0}function j(n,t){function e(n){return r.push(n.replace(/^\s+|\s+$/g,""))}var r=[];return L&&(t[N]&&e(t[N]),function o(n){n&&K in n&&(o(n._next),e(n[K]+""),o(n._p))}(t)),(n&&n.stack?n.stack:n)+("\n"+r.join("\n")).replace(en,"")}function g(n,t){return n(t)}function x(n,t,e){var r=0,o=n._c;if(n._s===$)for(n._s=t,n._v=e,t===U&&(L&&u(e)&&(e.longStack=j(e,n)),un(n));r<o;)on(n,n[r++]);return n}function k(n,t){if(t===n&&t)return x(n,U,h(W)),n;if(t!==C&&(o(t)||r(t))){var e=s(b)(t);if(e===nn)return x(n,U,e.e),n;o(e)?(L&&p(t)&&(n._next=t),p(t)?T(n,t,e):rn.nextTick(function(){T(n,t,e)})):x(n,Y,t)}else x(n,Y,t);return n}function b(n){return n.then}function T(n,t,e){var r=s(e,t)(function(e){t&&(t=C,k(n,e))},function(e){t&&(t=C,x(n,U,e))});r===nn&&t&&(x(n,U,r.e),t=C)}var P,R,S,C=null,F="object"==typeof self,O=F?self:t,E=O.Promise,H=O.process,I=O.console,L=!1,A=Array,M=Error,U=1,Y=2,$=3,q="Symbol",z="iterator",B="species",D=q+"("+B+")",G="return",J="_uh",K="_pt",N="_st",Q="Invalid argument",V="\nFrom previous ",W="Chaining cycle detected for promise",X="rejectionHandled",Z="unhandledRejection",nn={e:C},tn=function(){},en=/^.+\/node_modules\/yaku\/.+\n?/gm,rn=function(n){var t,e=this;if(!r(e)||e._s!==P)throw h("Invalid this");if(e._s=$,L&&(e[K]=v()),n!==tn){if(!o(n))throw h(Q);t=s(n)(w(e,Y),w(e,U)),t===nn&&x(e,U,t.e)}};rn["default"]=rn,function(n,t){for(var e in t)n[e]=t[e]}(rn.prototype,{then:function(n,t){if(this._s===undefined)throw h();return y(this,d(rn.speciesConstructor(this,rn)),n,t)},"catch":function(n){return this.then(P,n)},"finally":function(n){return this.then(function(t){return rn.resolve(n()).then(function(){return t})},function(t){return rn.resolve(n()).then(function(){throw t})})},_c:0,_p:C}),rn.resolve=function(n){return p(n)?n:k(d(this),n)},rn.reject=function(n){return x(d(this),U,n)},rn.race=function(n){var t=this,e=d(t),r=function(n){x(e,Y,n)},o=function(n){x(e,U,n)},i=s(l)(n,function(n){t.resolve(n).then(r,o)});return i===nn?t.reject(i.e):e},rn.all=function(n){function t(n){x(o,U,n)}var e,r=this,o=d(r),i=[];return(e=s(l)(n,function(n,u){r.resolve(n).then(function(n){i[u]=n,--e||x(o,Y,i)},t)}))===nn?r.reject(e.e):(e||x(o,Y,[]),o)},rn.Symbol=O[q]||{},s(function(){Object.defineProperty(rn,e(),{get:function(){return this}})})(),rn.speciesConstructor=function(n,t){var r=n.constructor;return r?r[e()]||t:t},rn.unhandledRejection=function(n,t){I&&I.error("Uncaught (in promise)",L?t.longStack:j(n,t))},rn.rejectionHandled=tn,rn.enableLongStackTrace=function(){L=!0},rn.nextTick=F?function(n){E?new E(function(n){n()}).then(n):setTimeout(n)}:H.nextTick,rn._s=1;var on=a(999,function(n,t){var e,r;return(r=n._s!==U?t._onFulfilled:t._onRejected)===P?void x(t,n._s,n._v):(e=s(g)(r,n._v))===nn?void x(t,U,e.e):void k(t,e)}),un=a(9,function(n){m(n)||(n[J]=1,_(Z,n))});try{n.exports=rn}catch(cn){O.Yaku=rn}}()}).call(t,e(/*! ./../~/webpack/buildin/global.js */2))}});
// Symbol
// A modification of https://github.com/WebReflection/get-own-property-symbols
// (C) Andrea Giammarchi - MIT Licensed

(function (Object, GOPS, global) {

var	setDescriptor;
var id = 0;
var random = '' + Math.random();
var prefix = '__\x01symbol:';
var prefixLength = prefix.length;
var internalSymbol = '__\x01symbol@@' + random;
var DP = 'defineProperty';
var DPies = 'defineProperties';
var GOPN = 'getOwnPropertyNames';
var GOPD = 'getOwnPropertyDescriptor';
var PIE = 'propertyIsEnumerable';
var ObjectProto = Object.prototype;
var hOP = ObjectProto.hasOwnProperty;
var pIE = ObjectProto[PIE];
var toString = ObjectProto.toString;
var concat = Array.prototype.concat;
var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
var nGOPN = Object[GOPN];
var gOPN = function getOwnPropertyNames (obj) {
if (toString.call(obj) === '[object Window]') {
try {
  return nGOPN(obj);
} catch (e) {
  // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
  return concat.call([], cachedWindowNames);
}
}
return nGOPN(obj);
};
var gOPD = Object[GOPD];
var create = Object.create;
var keys = Object.keys;
var freeze = Object.freeze || Object;
var defineProperty = Object[DP];
var $defineProperties = Object[DPies];
var descriptor = gOPD(Object, GOPN);
var addInternalIfNeeded = function (o, uid, enumerable) {
if (!hOP.call(o, internalSymbol)) {
try {
  defineProperty(o, internalSymbol, {
    enumerable: false,
    configurable: false,
    writable: false,
    value: {}
  });
} catch (e) {
  o[internalSymbol] = {};
}
}
o[internalSymbol]['@@' + uid] = enumerable;
};
var createWithSymbols = function (proto, descriptors) {
var self = create(proto);
gOPN(descriptors).forEach(function (key) {
if (propertyIsEnumerable.call(descriptors, key)) {
  $defineProperty(self, key, descriptors[key]);
}
});
return self;
};
var copyAsNonEnumerable = function (descriptor) {
var newDescriptor = create(descriptor);
newDescriptor.enumerable = false;
return newDescriptor;
};
var get = function get(){};
var onlyNonSymbols = function (name) {
return name != internalSymbol &&
!hOP.call(source, name);
};
var onlySymbols = function (name) {
return name != internalSymbol &&
hOP.call(source, name);
};
var propertyIsEnumerable = function propertyIsEnumerable(key) {
var uid = '' + key;
return onlySymbols(uid) ? (
hOP.call(this, uid) &&
this[internalSymbol]['@@' + uid]
) : pIE.call(this, key);
};
var setAndGetSymbol = function (uid) {
var descriptor = {
enumerable: false,
configurable: true,
get: get,
set: function (value) {
setDescriptor(this, uid, {
  enumerable: false,
  configurable: true,
  writable: true,
  value: value
});
addInternalIfNeeded(this, uid, true);
}
};
try {
defineProperty(ObjectProto, uid, descriptor);
} catch (e) {
ObjectProto[uid] = descriptor.value;
}
return freeze(source[uid] = defineProperty(
Object(uid),
'constructor',
sourceConstructor
));
};
var Symbol = function Symbol() {
var description = arguments[0];
if (this instanceof Symbol) {
throw new TypeError('Symbol is not a constructor');
}
return setAndGetSymbol(
prefix.concat(description || '', random, ++id)
);
};
var source = create(null);
var sourceConstructor = {value: Symbol};
var sourceMap = function (uid) {
return source[uid];
};
var $defineProperty = function defineProp(o, key, descriptor) {
var uid = '' + key;
if (onlySymbols(uid)) {
setDescriptor(o, uid, descriptor.enumerable ?
  copyAsNonEnumerable(descriptor) : descriptor);
addInternalIfNeeded(o, uid, !!descriptor.enumerable);
} else {
defineProperty(o, key, descriptor);
}
return o;
};

var onlyInternalSymbols = function (obj) {
return function (name) {
return hOP.call(obj, internalSymbol) && hOP.call(obj[internalSymbol], '@@' + name);
};
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
return gOPN(o).filter(o === ObjectProto ? onlyInternalSymbols(o) : onlySymbols).map(sourceMap);
}
;

descriptor.value = $defineProperty;
defineProperty(Object, DP, descriptor);

descriptor.value = $getOwnPropertySymbols;
defineProperty(Object, GOPS, descriptor);

descriptor.value = function getOwnPropertyNames(o) {
return gOPN(o).filter(onlyNonSymbols);
};
defineProperty(Object, GOPN, descriptor);

descriptor.value = function defineProperties(o, descriptors) {
var symbols = $getOwnPropertySymbols(descriptors);
if (symbols.length) {
keys(descriptors).concat(symbols).forEach(function (uid) {
if (propertyIsEnumerable.call(descriptors, uid)) {
$defineProperty(o, uid, descriptors[uid]);
}
});
} else {
$defineProperties(o, descriptors);
}
return o;
};
defineProperty(Object, DPies, descriptor);

descriptor.value = propertyIsEnumerable;
defineProperty(ObjectProto, PIE, descriptor);

descriptor.value = Symbol;
defineProperty(global, 'Symbol', descriptor);

// defining `Symbol.for(key)`
descriptor.value = function (key) {
var uid = prefix.concat(prefix, key, random);
return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
};
defineProperty(Symbol, 'for', descriptor);

// defining `Symbol.keyFor(symbol)`
descriptor.value = function (symbol) {
if (onlyNonSymbols(symbol))
throw new TypeError(symbol + ' is not a symbol');
return hOP.call(source, symbol) ?
symbol.slice(prefixLength * 2, -random.length) :
void 0
;
};
defineProperty(Symbol, 'keyFor', descriptor);

descriptor.value = function getOwnPropertyDescriptor(o, key) {
var descriptor = gOPD(o, key);
if (descriptor && onlySymbols(key)) {
descriptor.enumerable = propertyIsEnumerable.call(o, key);
}
return descriptor;
};
defineProperty(Object, GOPD, descriptor);

descriptor.value = function (proto, descriptors) {
return arguments.length === 1 || typeof descriptors === "undefined" ?
create(proto) :
createWithSymbols(proto, descriptors);
};
defineProperty(Object, 'create', descriptor);

descriptor.value = function () {
var str = toString.call(this);
return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
};
defineProperty(ObjectProto, 'toString', descriptor);


setDescriptor = function (o, key, descriptor) {
var protoDescriptor = gOPD(ObjectProto, key);
delete ObjectProto[key];
defineProperty(o, key, descriptor);
if (o !== ObjectProto) {
defineProperty(ObjectProto, key, protoDescriptor);
}
};

}(Object, 'getOwnPropertySymbols', this));

// Symbol.iterator
/* global Symbol */
Object.defineProperty(Symbol, 'iterator', { value: Symbol('iterator') });

// Symbol.species
/* global Symbol */
Object.defineProperty(Symbol, 'species', { value: Symbol('species') });

// Map
/* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Type, Symbol */
(function (global) {
var supportsGetters = (function () {
try {
var a = {};
Object.defineProperty(a, 't', {
  configurable: true,
  enumerable: false,
  get: function () {
    return true;
  },
  set: undefined
});
return !!a.t;
} catch (e) {
return false;
}
}());

// Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
var undefMarker = Symbol('undef');
// 23.1.1.1 Map ( [ iterable ] )
var Map = function Map(/* iterable */) {
// 1. If NewTarget is undefined, throw a TypeError exception.
if (!(this instanceof Map)) {
throw new TypeError('Constructor Map requires "new"');
}
// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »).
var map = OrdinaryCreateFromConstructor(this, Map.prototype, {
_keys: [],
_values: [],
_size: 0,
_es6Map: true
});

// 3. Set map.[[MapData]] to a new empty List.
// Polyfill.io - This step was done as part of step two.

// Some old engines do not support ES5 getters/setters.  Since Map only requires these for the size property, we can fall back to setting the size property statically each time the size of the map changes.
if (!supportsGetters) {
Object.defineProperty(map, 'size', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: 0
});
}

// 4. If iterable is not present, let iterable be undefined.
var iterable = arguments.length > 0 ? arguments[0] : undefined;

// 5. If iterable is either undefined or null, return map.
if (iterable === null || iterable === undefined) {
return map;
}

// 6. Let adder be ? Get(map, "set").
var adder = map.set;

// 7. If IsCallable(adder) is false, throw a TypeError exception.
if (!IsCallable(adder)) {
throw new TypeError("Map.prototype.set is not a function");
}

// 8. Let iteratorRecord be ? GetIterator(iterable).
try {
var iteratorRecord = GetIterator(iterable);
// 9. Repeat,
while (true) {
  // a. Let next be ? IteratorStep(iteratorRecord).
  var next = IteratorStep(iteratorRecord);
  // b. If next is false, return map.
  if (next === false) {
    return map;
  }
  // c. Let nextItem be ? IteratorValue(next).
  var nextItem = IteratorValue(next);
  // d. If Type(nextItem) is not Object, then
  if (Type(nextItem) !== 'object') {
    // i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
    try {
      throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
    } catch (error) {
      // ii. Return ? IteratorClose(iteratorRecord, error).
      return IteratorClose(iteratorRecord, error);
    }
  }
  try {
    // Polyfill.io - The try catch accounts for steps: f, h, and j.

    // e. Let k be Get(nextItem, "0").
    var k = nextItem[0];
    // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
    // g. Let v be Get(nextItem, "1").
    var v = nextItem[1];
    // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
    // i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
    adder.call(map, k, v);
  } catch (e) {
    // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
    return IteratorClose(iteratorRecord, e);
  }
}
} catch (e) {
// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
if (Array.isArray(iterable) ||
  Object.prototype.toString.call(iterable) === '[object Arguments]' ||
  // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
  (!!iterable.callee)) {
  var index;
  var length = iterable.length;
  for (index = 0; index < length; index++) {
    adder.call(map, iterable[index][0], iterable[index][1]);
  }
}
}
return map;
};

// 23.1.2.1. Map.prototype
// The initial value of Map.prototype is the intrinsic object %MapPrototype%.
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Map, 'prototype', {
configurable: false,
enumerable: false,
writable: false,
value: {}
});

// 23.1.2.2 get Map [ @@species ]
if (supportsGetters) {
Object.defineProperty(Map, Symbol.species, {
configurable: true,
enumerable: false,
get: function () {
  // 1. Return the this value.
  return this;
},
set: undefined
});
} else {
CreateMethodProperty(Map, Symbol.species, Map);
}

// 23.1.3.1 Map.prototype.clear ( )
CreateMethodProperty(Map.prototype, 'clear', function clear() {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
  throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
if (M._es6Map !== true) {
  throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[MapData]].
var entries = M._keys;
// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  // 5.a. Set p.[[Key]] to empty.
  M._keys[i] = undefMarker;
  // 5.b. Set p.[[Value]] to empty.
  M._values[i] = undefMarker;
}
this._size = 0;
if (!supportsGetters) {
  this.size = this._size;
}
// 6. Return undefined.
return undefined;
}
);

// 23.1.3.2. Map.prototype.constructor
CreateMethodProperty(Map.prototype, 'constructor', Map);

// 23.1.3.3. Map.prototype.delete ( key )
CreateMethodProperty(Map.prototype, 'delete', function (key) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
  throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
if (M._es6Map !== true) {
  throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[MapData]].
var entries = M._keys;
// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
  if (M._keys[i] !== undefMarker && SameValueZero(M._keys[i], key)) {
    // i. Set p.[[Key]] to empty.
    this._keys[i] = undefMarker;
    // ii. Set p.[[Value]] to empty.
    this._values[i] = undefMarker;
    this._size = --this._size;
    if (!supportsGetters) {
      this.size = this._size;
    }
    // iii. Return true.
    return true;
  }
}
// 6. Return false.
return false;
}
);

// 23.1.3.4. Map.prototype.entries ( )
CreateMethodProperty(Map.prototype, 'entries', function entries () {
// 1. Let M be the this value.
var M = this;
// 2. Return ? CreateMapIterator(M, "key+value").
return CreateMapIterator(M, 'key+value');
}
);

// 23.1.3.5. Map.prototype.forEach ( callbackfn [ , thisArg ] )
CreateMethodProperty(Map.prototype, 'forEach', function (callbackFn) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
  throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
if (M._es6Map !== true) {
  throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
if (!IsCallable(callbackFn)) {
  throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
}
// 5. If thisArg is present, let T be thisArg; else let T be undefined.
if (arguments[1]) {
  var T = arguments[1];
}
// 6. Let entries be the List that is M.[[MapData]].
var entries = M._keys;
// 7. For each Record {[[Key]], [[Value]]} e that is an element of entries, in original key insertion order, do
for (var i = 0; i < entries.length; i++) {
  // a. If e.[[Key]] is not empty, then
  if (M._keys[i] !== undefMarker && M._values[i] !== undefMarker ) {
    // i. Perform ? Call(callbackfn, T, « e.[[Value]], e.[[Key]], M »).
    callbackFn.call(T, M._values[i], M._keys[i], M);
  }
}
// 8. Return undefined.
return undefined;
}
);

// 23.1.3.6. Map.prototype.get ( key )
CreateMethodProperty(Map.prototype, 'get', function get(key) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
  throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
if (M._es6Map !== true) {
  throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[MapData]].
var entries = M._keys;
// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return p.[[Value]].
  if (M._keys[i] !== undefMarker && SameValueZero(M._keys[i], key)) {
    return M._values[i];
  }
}
// 6. Return undefined.
return undefined;
});

// 23.1.3.7. Map.prototype.has ( key )
CreateMethodProperty(Map.prototype, 'has', function has (key) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (typeof M !== 'object') {
  throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
if (M._es6Map !== true) {
  throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[MapData]].
var entries = M._keys;
// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return true.
  if (M._keys[i] !== undefMarker && SameValueZero(M._keys[i], key)) {
    return true;
  }
}
// 6. Return false.
return false;
});

// 23.1.3.8. Map.prototype.keys ( )
CreateMethodProperty(Map.prototype, 'keys', function keys () {
// 1. Let M be the this value.
var M = this;
// 2. Return ? CreateMapIterator(M, "key").
return CreateMapIterator(M, "key");
});

// 23.1.3.9. Map.prototype.set ( key, value )
CreateMethodProperty(Map.prototype, 'set', function set(key, value) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
  throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
if (M._es6Map !== true) {
  throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[MapData]].
var entries = M._keys;
// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
  if (M._keys[i] !== undefMarker && SameValueZero(M._keys[i], key)) {
    // i. Set p.[[Value]] to value.
    M._values[i] = value;
    // Return M.
    return M;
  }
}
// 6. If key is -0, let key be +0.
if (key === -0) {
  key = 0;
}
// 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
var p = {};
p['[[Key]]'] = key;
p['[[Value]]'] = value;
// 8. Append p as the last element of entries.
M._keys.push(p['[[Key]]']);
M._values.push(p['[[Value]]']);
++M._size;
if (!supportsGetters) {
  M.size = M._size;
}
// 9. Return M.
return M;
});

// 23.1.3.10. get Map.prototype.size
if (supportsGetters) {
Object.defineProperty(Map.prototype, 'size', {
configurable: true,
enumerable: false,
get: function () {
  // 1. Let M be the this value.
  var M = this;
  // 2. If Type(M) is not Object, throw a TypeError exception.
  if (Type(M) !== 'object') {
    throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
  }
  // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
  if (M._es6Map !== true) {
    throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
  }
  // 4. Let entries be the List that is M.[[MapData]].
  var entries = M._keys;
  // 5. Let count be 0.
  var count = 0;
  // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
  for (var i = 0; i < entries.length; i++) {
    // a. If p.[[Key]] is not empty, set count to count+1.
    if (M._keys[i] !== undefMarker) {
      count = count + 1;
    }
  }
  // 7. Return count.
  return count;
},
set: undefined
});
}

// 23.1.3.11. Map.prototype.values ( )
CreateMethodProperty(Map.prototype, 'values', function values () {
// 1. Let M be the this value.
var M = this;
// 2. Return ? CreateMapIterator(M, "value").
return CreateMapIterator(M, 'value');
}
);

// 23.1.3.12. Map.prototype [ @@iterator ] ( )
// The initial value of the @@iterator property is the same function object as the initial value of the entries property.
CreateMethodProperty(Map.prototype, Symbol.iterator, Map.prototype.entries);

// 23.1.3.13. Map.prototype [ @@toStringTag ]
// The initial value of the @@toStringTag property is the String value "Map".
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

// Polyfill.io - Safari 8 implements Map.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
if (!('name' in Map)) {
// 19.2.4.2 name
Object.defineProperty(Map, 'name', {
configurable: true,
enumerable: false,
writable: false,
value: 'Map'
});
}

// 23.1.5.1. CreateMapIterator ( map, kind )
function CreateMapIterator(map, kind) {
// 1. If Type(map) is not Object, throw a TypeError exception.
if (Type(map) !== 'object') {
throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
}
// 2. If map does not have a [[MapData]] internal slot, throw a TypeError exception.
if (map._es6Map !== true) {
throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
}
// 3. Let iterator be ObjectCreate(%MapIteratorPrototype%, « [[Map]], [[MapNextIndex]], [[MapIterationKind]] »).
var iterator = Object.create(MapIteratorPrototype);
// 4. Set iterator.[[Map]] to map.
Object.defineProperty(iterator, '[[Map]]', {
configurable: true,
enumerable: false,
writable: true,
value: map
});
// 5. Set iterator.[[MapNextIndex]] to 0.
Object.defineProperty(iterator, '[[MapNextIndex]]', {
configurable: true,
enumerable: false,
writable: true,
value: 0
});
// 6. Set iterator.[[MapIterationKind]] to kind.
Object.defineProperty(iterator, '[[MapIterationKind]]', {
configurable: true,
enumerable: false,
writable: true,
value: kind
});
// 7. Return iterator.
return iterator;
}

// 23.1.5.2. The %MapIteratorPrototype% Object
var MapIteratorPrototype = {};
// Polyfill.io - We use this as a quick way to check if an object is a Map Iterator instance.
Object.defineProperty(MapIteratorPrototype, 'isMapIterator', {
configurable: false,
enumerable: false,
writable: false,
value: true
});

// 23.1.5.2.1. %MapIteratorPrototype%.next ( )
CreateMethodProperty(MapIteratorPrototype, 'next', function next() {
// 1. Let O be the this value.
var O = this;
// 2. If Type(O) is not Object, throw a TypeError exception.
if (Type(O) !== 'object') {
  throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
}
// 3. If O does not have all of the internal slots of a Map Iterator Instance (23.1.5.3), throw a TypeError exception.
if (!O.isMapIterator) {
  throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
}
// 4. Let m be O.[[Map]].
var m = O['[[Map]]'];
// 5. Let index be O.[[MapNextIndex]].
var index = O['[[MapNextIndex]]'];
// 6. Let itemKind be O.[[MapIterationKind]].
var itemKind = O['[[MapIterationKind]]'];
// 7. If m is undefined, return CreateIterResultObject(undefined, true).
if (m === undefined) {
  return CreateIterResultObject(undefined, true);
}
// 8. Assert: m has a [[MapData]] internal slot.
if (!m._es6Map) {
  throw new Error(Object.prototype.toString.call(m) + ' has a [[MapData]] internal slot.');
}
// 9. Let entries be the List that is m.[[MapData]].
var entries = m._keys;
// 10. Let numEntries be the number of elements of entries.
var numEntries = entries.length;
// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
// 12. Repeat, while index is less than numEntries,
while (index < numEntries) {
  // a. Let e be the Record {[[Key]], [[Value]]} that is the value of entries[index].
  var e = Object.create(null);
  e['[[Key]]'] = m._keys[index];
  e['[[Value]]'] = m._values[index];
  // b. Set index to index+1.
  index = index + 1;
  // c. Set O.[[MapNextIndex]] to index.
  O['[[MapNextIndex]]'] = index;
  // d. If e.[[Key]] is not empty, then
  if (e['[[Key]]'] !== undefMarker) {
    // i. If itemKind is "key", let result be e.[[Key]].
    if (itemKind === 'key') {
      var result = e['[[Key]]'];
      // ii. Else if itemKind is "value", let result be e.[[Value]].
    } else if (itemKind === 'value') {
      result = e['[[Value]]'];
      // iii. Else,
    } else {
      // 1. Assert: itemKind is "key+value".
      if (itemKind !== 'key+value') {
        throw new Error();
      }
      // 2. Let result be CreateArrayFromList(« e.[[Key]], e.[[Value]] »).
      result = [
        e['[[Key]]'],
        e['[[Value]]']
      ];
    }
    // iv. Return CreateIterResultObject(result, false).
    return CreateIterResultObject(result, false);
  }
}
// 13. Set O.[[Map]] to undefined.
O['[[Map]]'] = undefined;
// 14. Return CreateIterResultObject(undefined, true).
return CreateIterResultObject(undefined, true);
}
);

// 23.1.5.2.2 %MapIteratorPrototype% [ @@toStringTag ]
// The initial value of the @@toStringTag property is the String value "Map Iterator".
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

CreateMethodProperty(MapIteratorPrototype, Symbol.iterator, function iterator() {
return this;
}
);

// Export the object
try {
CreateMethodProperty(global, 'Map', Map);
} catch (e) {
// IE8 throws an error here if we set enumerable to false.
// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
global['Map'] = Map;
}
}(this));

// Set
/* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Symbol */
(function (global) {
var supportsGetters = (function () {
try {
var a = {};
Object.defineProperty(a, 't', {
  configurable: true,
  enumerable: false,
  get: function () {
    return true;
  },
  set: undefined
});
return !!a.t;
} catch (e) {
return false;
}
}());

// Deleted set items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
var undefMarker = Symbol('undef');
// 23.2.1.1. Set ( [ iterable ] )
var Set = function Set(/* iterable */) {
// 1. If NewTarget is undefined, throw a TypeError exception.
if (!(this instanceof Set)) {
throw new TypeError('Constructor Set requires "new"');
}
// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »).
var set = OrdinaryCreateFromConstructor(this, Set.prototype, {
_values: [],
_size: 0,
_es6Set: true
});

// 3. Set set.[[SetData]] to a new empty List.
// Polyfill.io - This step was done as part of step two.

// Some old engines do not support ES5 getters/setters.  Since Set only requires these for the size property, we can fall back to setting the size property statically each time the size of the set changes.
if (!supportsGetters) {
Object.defineProperty(set, 'size', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: 0
});
}

// 4. If iterable is not present, let iterable be undefined.
var iterable = arguments.length > 0 ? arguments[0] : undefined;

// 5. If iterable is either undefined or null, return set.
if (iterable === null || iterable === undefined) {
return set;
}

// 6. Let adder be ? Get(set, "add").
var adder = set.add;
// 7. If IsCallable(adder) is false, throw a TypeError exception.
if (!IsCallable(adder)) {
throw new TypeError("Set.prototype.add is not a function");
}

try {
// 8. Let iteratorRecord be ? GetIterator(iterable).
var iteratorRecord = GetIterator(iterable);
// 9. Repeat,
while (true) {
  // a. Let next be ? IteratorStep(iteratorRecord).
  var next = IteratorStep(iteratorRecord);
  // b. If next is false, return set.
  if (next === false) {
    return set;
  }
  // c. Let nextValue be ? IteratorValue(next).
  var nextValue = IteratorValue(next);
  // d. Let status be Call(adder, set, « nextValue.[[Value]] »).
  try {
    adder.call(set, nextValue);
  } catch (e) {
    // e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
    return IteratorClose(iteratorRecord, e);
  }
}
} catch (e) {
// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
if (Array.isArray(iterable) ||
  Object.prototype.toString.call(iterable) === '[object Arguments]' ||
  // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
  (!!iterable.callee)) {
  var index;
  var length = iterable.length;
  for (index = 0; index < length; index++) {
    adder.call(set, iterable[index]);
  }
} else {
  throw (e);
}
}
return set;
};

// 23.2.2.1. Set.prototype
// The initial value of Set.prototype is the intrinsic %SetPrototype% object.
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Set, 'prototype', {
configurable: false,
enumerable: false,
writable: false,
value: {}
});

// 23.2.2.2 get Set [ @@species ]
if (supportsGetters) {
Object.defineProperty(Set, Symbol.species, {
configurable: true,
enumerable: false,
get: function () {
  // 1. Return the this value.
  return this;
},
set: undefined
});
} else {
CreateMethodProperty(Set, Symbol.species, Set);
}

// 23.2.3.1. Set.prototype.add ( value )
CreateMethodProperty(Set.prototype, 'add', function add(value) {
// 1. Let S be the this value.
var S = this;
// 2. If Type(S) is not Object, throw a TypeError exception.
if (typeof S !== 'object') {
  throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
if (S._es6Set !== true) {
  throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 4. Let entries be the List that is S.[[SetData]].
var entries = S._values;
// 5. For each e that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  var e = entries[i];
  // a. If e is not empty and SameValueZero(e, value) is true, then
  if (e !== undefMarker && SameValueZero(e, value)) {
    // i. Return S.
    return S;
  }
}
// 6. If value is -0, let value be +0.
if (1/value === -Infinity) {
  value = 0;
}
// 7. Append value as the last element of entries.
S._values.push(value);

this._size = ++this._size;
if (!supportsGetters) {
  this.size = this._size;
}
// 8. Return S.
return S;
});

// 23.2.3.2. Set.prototype.clear ( )
CreateMethodProperty(Set.prototype, 'clear', function clear() {
// 1. Let S be the this value.
var S = this;
// 2. If Type(S) is not Object, throw a TypeError exception.
if (typeof S !== 'object') {
  throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
if (S._es6Set !== true) {
  throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 4. Let entries be the List that is S.[[SetData]].
var entries = S._values;
// 5. For each e that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  // a. Replace the element of entries whose value is e with an element whose value is empty.
  entries[i] = undefMarker;
}
this._size = 0;
if (!supportsGetters) {
  this.size = this._size;
}
// 6. Return undefined.
return undefined;
});

// 23.2.3.3. Set.prototype.constructor
CreateMethodProperty(Set.prototype, 'constructor', Set);

// 23.2.3.4. Set.prototype.delete ( value )
CreateMethodProperty(Set.prototype, 'delete', function (value) {
// 1. Let S be the this value.
var S = this;
// 2. If Type(S) is not Object, throw a TypeError exception.
if (typeof S !== 'object') {
  throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
if (S._es6Set !== true) {
  throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 4. Let entries be the List that is S.[[SetData]].
var entries = S._values;
// 5. For each e that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  var e = entries[i];
  // a. If e is not empty and SameValueZero(e, value) is true, then
  if (e !== undefMarker && SameValueZero(e, value)) {
    // i. Replace the element of entries whose value is e with an element whose value is empty.
    entries[i] = undefMarker;

    this._size = --this._size;
    if (!supportsGetters) {
      this.size = this._size;
    }
    // ii. Return true.
    return true;
  }
}
// 6. Return false.
return false;
}
);

// 23.2.3.5. Set.prototype.entries ( )
CreateMethodProperty(Set.prototype, 'entries', function entries() {
// 1. Let S be the this value.
var S = this;
// 2. Return ? CreateSetIterator(S, "key+value").
return CreateSetIterator(S, 'key+value');
}
);

// 23.2.3.6. Set.prototype.forEach ( callbackfn [ , thisArg ] )
CreateMethodProperty(Set.prototype, 'forEach', function forEach(callbackFn /*[ , thisArg ]*/) {
// 1. Let S be the this value.
var S = this;
// 2. If Type(S) is not Object, throw a TypeError exception.
if (typeof S !== 'object') {
  throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
if (S._es6Set !== true) {
  throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
if (!IsCallable(callbackFn)) {
  throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
}
// 5. If thisArg is present, let T be thisArg; else let T be undefined.
if (arguments[1]) {
  var T = arguments[1];
}
// 6. Let entries be the List that is S.[[SetData]].
var entries = S._values;
// 7. For each e that is an element of entries, in original insertion order, do
for (var i = 0; i < entries.length; i++) {
  var e = entries[i];
  // a. If e is not empty, then
  if (e !== undefMarker) {
    // i. Perform ? Call(callbackfn, T, « e, e, S »).
    callbackFn.call(T, e, e, S);
  }
}
// 8. Return undefined.
return undefined;
}
);

// 23.2.3.7. Set.prototype.has ( value )
CreateMethodProperty(Set.prototype, 'has', function has(value) {
// 1. Let S be the this value.
var S = this;
// 2. If Type(S) is not Object, throw a TypeError exception.
if (typeof S !== 'object') {
  throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
if (S._es6Set !== true) {
  throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
}
// 4. Let entries be the List that is S.[[SetData]].
var entries = S._values;
// 5. For each e that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
  var e = entries[i];
  // a. If e is not empty and SameValueZero(e, value) is true, return true.
  if (e !== undefMarker && SameValueZero(e, value)) {
    return true;
  }
}
// 6. Return false.
return false;
}
);

// Polyfill.io - We need to define Set.prototype.values before Set.prototype.keys because keys is a reference to values.
// 23.2.3.10. Set.prototype.values()
var values = function values() {
// 1. Let S be the this value.
var S = this;
// 2. Return ? CreateSetIterator(S, "value").
return CreateSetIterator(S, "value");
};
CreateMethodProperty(Set.prototype, 'values', values);

// 23.2.3.8 Set.prototype.keys ( )
// The initial value of the keys property is the same function object as the initial value of the values property.
CreateMethodProperty(Set.prototype, 'keys', values);

// 23.2.3.9. get Set.prototype.size
if (supportsGetters) {
Object.defineProperty(Set.prototype, 'size', {
configurable: true,
enumerable: false,
get: function () {
  // 1. Let S be the this value.
  var S = this;
  // 2. If Type(S) is not Object, throw a TypeError exception.
  if (typeof S !== 'object') {
    throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
  }
  // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
  if (S._es6Set !== true) {
    throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
  }
  // 4. Let entries be the List that is S.[[SetData]].
  var entries = S._values;
  // 5. Let count be 0.
  var count = 0;
  // 6. For each e that is an element of entries, do
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i];
    // a. If e is not empty, set count to count+1.
    if (e !== undefMarker) {
      count = count + 1;
    }
  }
  // 7. Return count.
  return count;
},
set: undefined
});
}

// 23.2.3.11. Set.prototype [ @@iterator ] ( )
// The initial value of the @@iterator property is the same function object as the initial value of the values property.
CreateMethodProperty(Set.prototype, Symbol.iterator, values);

// 23.2.3.12. Set.prototype [ @@toStringTag ]
// The initial value of the @@toStringTag property is the String value "Set".
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

// Polyfill.io - Safari 8 implements Set.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
if (!('name' in Set)) {
// 19.2.4.2 name
Object.defineProperty(Set, 'name', {
configurable: true,
enumerable: false,
writable: false,
value: 'Set'
});
}

// 23.2.5.1. CreateSetIterator ( set, kind )
function CreateSetIterator(set, kind) {
// 1. If Type(set) is not Object, throw a TypeError exception.
if (typeof set !== 'object') {
throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
}
// 2. If set does not have a [[SetData]] internal slot, throw a TypeError exception.
if (set._es6Set !== true) {
throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
}
// 3. Let iterator be ObjectCreate(%SetIteratorPrototype%, « [[IteratedSet]], [[SetNextIndex]], [[SetIterationKind]] »).
var iterator = Object.create(SetIteratorPrototype);
// 4. Set iterator.[[IteratedSet]] to set.
Object.defineProperty(iterator, '[[IteratedSet]]', {
configurable: true,
enumerable: false,
writable: true,
value: set
});
// 5. Set iterator.[[SetNextIndex]] to 0.
Object.defineProperty(iterator, '[[SetNextIndex]]', {
configurable: true,
enumerable: false,
writable: true,
value: 0
});
// 6. Set iterator.[[SetIterationKind]] to kind.
Object.defineProperty(iterator, '[[SetIterationKind]]', {
configurable: true,
enumerable: false,
writable: true,
value: kind
});
// 7. Return iterator.
return iterator;
}

// 23.2.5.2. The %SetIteratorPrototype% Object
var SetIteratorPrototype = {};
//Polyfill.io - We add this property to help us identify what is a set iterator.
Object.defineProperty(SetIteratorPrototype, 'isSetIterator', {
configurable: false,
enumerable: false,
writable: false,
value: true
});

// 23.2.5.2.1. %SetIteratorPrototype%.next ( )
CreateMethodProperty(SetIteratorPrototype, 'next', function next() {
// 1. Let O be the this value.
var O = this;
// 2. If Type(O) is not Object, throw a TypeError exception.
if (typeof O !== 'object') {
throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
}
// 3. If O does not have all of the internal slots of a Set Iterator Instance (23.2.5.3), throw a TypeError exception.
if (!O.isSetIterator) {
throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
}
// 4. Let s be O.[[IteratedSet]].
var s = O['[[IteratedSet]]'];
// 5. Let index be O.[[SetNextIndex]].
var index = O['[[SetNextIndex]]'];
// 6. Let itemKind be O.[[SetIterationKind]].
var itemKind = O['[[SetIterationKind]]'];
// 7. If s is undefined, return CreateIterResultObject(undefined, true).
if (s === undefined) {
return CreateIterResultObject(undefined, true);
}
// 8. Assert: s has a [[SetData]] internal slot.
if (!s._es6Set) {
throw new Error(Object.prototype.toString.call(s) + ' does not have [[SetData]] internal slot.');
}
// 9. Let entries be the List that is s.[[SetData]].
var entries = s._values;
// 10. Let numEntries be the number of elements of entries.
var numEntries = entries.length;
// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
// 12. Repeat, while index is less than numEntries,
while (index < numEntries) {
// a. Let e be entries[index].
var e = entries[index];
// b. Set index to index+1.
index = index + 1;
// c. Set O.[[SetNextIndex]] to index.
O['[[SetNextIndex]]'] = index;
// d. If e is not empty, then
if (e !== undefMarker) {
  // i. If itemKind is "key+value", then
  if (itemKind === 'key+value') {
    // 1. Return CreateIterResultObject(CreateArrayFromList(« e, e »), false).
    return CreateIterResultObject([e, e], false);
  }
  // ii. Return CreateIterResultObject(e, false).
  return CreateIterResultObject(e, false);
}
}
// 13. Set O.[[IteratedSet]] to undefined.
O['[[IteratedSet]]'] = undefined;
// 14. Return CreateIterResultObject(undefined, true).
return CreateIterResultObject(undefined, true);
});

// 23.2.5.2.2. %SetIteratorPrototype% [ @@toStringTag ]
// The initial value of the @@toStringTag property is the String value "Set Iterator".
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

CreateMethodProperty(SetIteratorPrototype, Symbol.iterator, function iterator() {
return this;
}
);

// Export the object
try {
CreateMethodProperty(global, 'Set', Set);
} catch (e) {
// IE8 throws an error here if we set enumerable to false.
// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
global['Set'] = Set;
}

}(this));

// WeakMap
/* globals Symbol, OrdinaryCreateFromConstructor, IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, CreateMethodProperty, Type, SameValue */
(function (global) {
// Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
var undefMarker = Symbol('undef');
// 23.3.1.1 WeakMap ( [ iterable ] )
var WeakMap = function WeakMap(/* iterable */) {
// 1. If NewTarget is undefined, throw a TypeError exception.
if (!(this instanceof WeakMap)) {
throw new TypeError('Constructor WeakMap requires "new"');
}
// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakMapPrototype%", « [[WeakMapData]] »).
var map = OrdinaryCreateFromConstructor(this, WeakMap.prototype, {
_keys: [],
_values: [],
_es6WeakMap: true
});

// 3. Set map.[[WeakMapData]] to a new empty List.
// Polyfill.io - This step was done as part of step two.

// 4. If iterable is not present, let iterable be undefined.
var iterable = arguments.length > 0 ? arguments[0] : undefined;

// 5. If iterable is either undefined or null, return map.
if (iterable === null || iterable === undefined) {
return map;
}

// 6. Let adder be ? Get(map, "set").
var adder = Get(map, "set");

// 7. If IsCallable(adder) is false, throw a TypeError exception.
if (!IsCallable(adder)) {
throw new TypeError("WeakMap.prototype.set is not a function");
}

// 8. Let iteratorRecord be ? GetIterator(iterable).
try {
var iteratorRecord = GetIterator(iterable);
// 9. Repeat,
while (true) {
  // a. Let next be ? IteratorStep(iteratorRecord).
  var next = IteratorStep(iteratorRecord);
  // b. If next is false, return map.
  if (next === false) {
    return map;
  }
  // c. Let nextItem be ? IteratorValue(next).
  var nextItem = IteratorValue(next);
  // d. If Type(nextItem) is not Object, then
  if (Type(nextItem) !== 'object') {
    // i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
    try {
      throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
    } catch (error) {
      // ii. Return ? IteratorClose(iteratorRecord, error).
      return IteratorClose(iteratorRecord, error);
    }
  }
  try {
    // Polyfill.io - The try catch accounts for steps: f, h, and j.

    // e. Let k be Get(nextItem, "0").
    var k = Get(nextItem, "0");
    // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
    // g. Let v be Get(nextItem, "1").
    var v = Get(nextItem, "1");
    // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
    // i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
    Call(adder, map, [k, v]);
  } catch (e) {
    // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
    return IteratorClose(iteratorRecord, e);
  }
}
} catch (e) {
// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
if (Array.isArray(iterable) ||
  Object.prototype.toString.call(iterable) === '[object Arguments]' ||
  // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
  (!!iterable.callee)) {
  var index;
  var length = iterable.length;
  for (index = 0; index < length; index++) {
    var k = iterable[index][0];
    var v = iterable[index][1];
    Call(adder, map, [k, v]);
  }
}
}
return map;
};

// 23.3.2.1 WeakMap.prototype
// The initial value of WeakMap.prototype is the intrinsic object %WeakMapPrototype%.
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(WeakMap, 'prototype', {
configurable: false,
enumerable: false,
writable: false,
value: {}
});

// 23.3.3.1 WeakMap.prototype.constructor
CreateMethodProperty(WeakMap.prototype, 'constructor', WeakMap);

// 23.3.3.2 WeakMap.prototype.delete ( key )
CreateMethodProperty(WeakMap.prototype, 'delete', function (key) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
if (M._es6WeakMap !== true) {
throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[WeakMapData]].
var entries = M._keys;
// 5. If Type(key) is not Object, return false.
if (Type(key) !== 'object') {
return false;
}
// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
  // i. Set p.[[Key]] to empty.
  this._keys[i] = undefMarker;
  // ii. Set p.[[Value]] to empty.
  this._values[i] = undefMarker;
  this._size = --this._size;
  // iii. Return true.
  return true;
}
}
// 7. Return false.
return false;
});

// 23.3.3.3 WeakMap.prototype.get ( key )
CreateMethodProperty(WeakMap.prototype, 'get', function get(key) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
if (M._es6WeakMap !== true) {
throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[WeakMapData]].
var entries = M._keys;
// 5. If Type(key) is not Object, return undefined.
if (Type(key) !== 'object') {
return undefined;
}
// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
  return M._values[i];
}
}
// 7. Return undefined.
return undefined;
});

// 23.3.3.4 WeakMap.prototype.has ( key )
CreateMethodProperty(WeakMap.prototype, 'has', function has(key) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (typeof M !== 'object') {
throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
if (M._es6WeakMap !== true) {
throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[WeakMapData]].
var entries = M._keys;
// 5. If Type(key) is not Object, return false.
if (Type(key) !== 'object') {
return false;
}
// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return true.
if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
  return true;
}
}
// 7. Return false.
return false;
});

// 23.3.3.5 WeakMap.prototype.set ( key, value )
CreateMethodProperty(WeakMap.prototype, 'set', function set(key, value) {
// 1. Let M be the this value.
var M = this;
// 2. If Type(M) is not Object, throw a TypeError exception.
if (Type(M) !== 'object') {
throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
if (M._es6WeakMap !== true) {
throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
}
// 4. Let entries be the List that is M.[[WeakMapData]].
var entries = M._keys;
// 5. If Type(key) is not Object, throw a TypeError exception.
if (Type(key) !== 'object') {
throw new TypeError("Invalid value used as weak map key");
}
// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
for (var i = 0; i < entries.length; i++) {
// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
  // i. Set p.[[Value]] to value.
  M._values[i] = value;
  // ii. Return M.
  return M;
}
}
// 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
var p = {
'[[Key]]': key,
'[[Value]]': value
};
// 8. Append p as the last element of entries.
M._keys.push(p['[[Key]]']);
M._values.push(p['[[Value]]']);
// 9. Return M.
return M;
});

// 23.3.3.6 WeakMap.prototype [ @@toStringTag ]
// The initial value of the @@toStringTag property is the String value "WeakMap".
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

// Polyfill.io - Safari 8 implements WeakMap.name but as a non-writable property, which means it would throw an error if we try and write to it here.
if (!('name' in WeakMap)) {
// 19.2.4.2 name
Object.defineProperty(WeakMap, 'name', {
configurable: true,
enumerable: false,
writable: false,
value: 'WeakMap'
});
}

// Export the object
try {
CreateMethodProperty(global, 'WeakMap', WeakMap);
} catch (e) {
// IE8 throws an error here if we set enumerable to false.
// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
global['WeakMap'] = WeakMap;
}
}(this));
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});