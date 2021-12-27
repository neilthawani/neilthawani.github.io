Symbols are a new primitive type in ES6.

They are mainly used as unique property keys in conjunction with `Symbol.iterator` - a symbol never clashes with any other property key (symbol or string).

Previously, strings were used to represent concepts such as colors. In ES6, symbols ensure constants are always unique.

Symbols are not subject to type coercion with concatenation (`+`) or interpolation (`${}`), but can be converted explicitly using `String(var)` or `.toString()`.

The following operations are aware of symbols as property keys:

* `Reflect.ownKeys()`
* `Property access via []`
* `Object.assign()`

The following operations ignore symbols as property keys:

* `Object.keys()`
* `Object.getOwnPropertyNames()`
* `for-in` loop

### A New Primitive Type
Symbols are tokens that serve as unique IDs.

```javascript
const symbol1 = Symbol('symb');
```

A string-valued description parameter can be passed into the constructor and is used when the symbol is converted to a string.

```javascript
> String(symbol1)
'Symbol(symb)'

> typeof symbol1
'symbol'
```

Symbols can be used as property keys:

```javascript
> const MY_KEY = Symbol();
> const obj = {};
> obj[MY_KEY] = 123;
> console.log(obj[MY_KEY]);
123
```

Classes and object literals have a featured called computed property keys. Computed property keys are specified using square brackets.

```javascript
> const MY_KEY = Symbol();
> const obj = {
    [MY_KEY]: 123
};
```

A method definition can also have a computed key:

```javascript
> const FOO = Symbol();
> const obj = {
    [FOO]() {
        return 'bar';
    }
};
> console.log(obj[FOO]());
bar
```

In ES6, since symbols can become the key of a property, these definitions are necessary:

* Property keys are either strings or symbols.
* String-valued property keys are called property names.
* Symbol-valued property keys are called property symbols.

### Using Symbols to Represent Concepts

Because symbols have unique IDs, even if their assigned values are the same, they cannot be confused with each other.

```javascript
> var COLOR_RED = 'red';
> var MOOD_ANGRY = 'red';
> COLOR_RED === MOOD_ANGRY
true

> const COLOR_RED = Symbol('red');
> const MOOD_ANGRY = Symbol('red');
> COLOR_RED === MOOD_ANGRY
false
```

Representing non-clashing keys as symbols is useful:

* for non-public properties in inheritance hierarchies
* to keep meta-level properties from clashing with base-level properties

As keys of non-public properties, symbols are not exempt from unauthorized access since you can find out all own property keys, including symbols, of an object using `Reflect.ownKeys()`.

You can add iterability to an object via the property key `Symbol.iterator` and it won't clash with anything. 

### Converting symbols to other primitive types

You can explicitly convert a symbol to:
* boolean (`Boolean(sym)`)
* string (`String(sym)`, `sym.toString()`)

```javascript
> const sym = Symbol('hello');
> String(sym)
'Symbol(hello)'
```

If no value is passed into the constructor, only `Symbol()` is returned.

If you want to use concatenation or template literals with symbol values, you must use explicit conversion.

You can implicitly convert a symbol to:
* boolean (`!sym`)

String coercion is forbidden (using +) because symbols should not be coerced to string-value property keys.

Number coercion is forbidden (using mathematical operators) because they should not be coerced to number-value property keys. In addition, `Number.parseInt(sym)`, which returns a string value, throws a `TypeError`.

### JSON and symbols

To pass a symbol into `JSON.stringify`, 

```javascript
> const MY_SYMBOL = Symbol.for('http://example.com/my_symbol');
> const obj = { myKey: MY_SYMBOL };

> const str = JSON.stringify(obj, '@@' + Symbol.keyFor(symbolReplacer) + '@@');
> console.log(str);
{"myKey":"@@http://example.com/my_symbol@@"}
```

A symbol is encoded as a string by putting `'@@'` before and after the symbol's key. Only symbols created using `Symbol.for()` have a key.

Likewise, you can reverse this process using `JSON.parse` on the JSON object after obtaining the symbol for the key.

### Wrapper Objects for Symbols

To convert objects to symbols,

```javascript
> const sym = Symbol();
> const wrapper = Object(sym);
> typeof wrapper
'object'
> wrapper instanceof symbol
true
```
---
Source: [Exploring ES6](http://www.exploringjs.com) by [Dr. Axel Rauschmayer](http://www.rauschma.de).