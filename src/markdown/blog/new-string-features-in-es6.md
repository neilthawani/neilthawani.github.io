<p>New string methods:</p>

<pre>
> "string".startsWith("str", position = 0)
true
> "string".endsWith("ing", endPosition = arg1.length)
true
> "string".includes("rin", position = 0)
true
> "string".repeat(3)
"stringstringstring"
</pre>

<p>Each of these methods has an optional second parameter, which specifies where the string to be searched starts or ends:</p>

<pre>
> "string".startsWith("tri", 1)
true
> "string".endsWith("in", 5)
true
> "string".includes("tri", 1)
true
> "string".includes("tri", 2)
false
</pre>

<p>ES6 has a new type of string literal called a template literal:</p>

<pre>
const first = 'Neil';
const last = 'Thawani';

console.log(`Hello ${first} ${last}.`);
</pre>

<p>Template literals can also be used to create multi-line strings.</p>

<pre>
const multiLine = `This
is
a
multi-line
string.`;
</pre>

<p>Template literals are also 'raw' if you prefix them with the tag String.raw.</p>

<pre>
const str = String.raw`Not a newline: \
`;
console.log(str === 'Not a newline: \\\
'); // true
</pre>

<p>Escape characters are not interpreted.</p>

<p>Strings are iterable. You can use for of to iterate over their characters.</p>

<pre>
> for (const ch of 'abc') { console.log(ch); }
a
b
c
</pre>

<p>You can use the spread operator to turn strings into Arrays.</p>

<pre>
> const chars = [...'abc'];
['a', 'b', 'c']
</pre>

<hr />
<p>Source: <a href="http://www.exploringjs.com" target="_blank">Exploring ES6</a> by <a href="http://www.rauschma.de" target="_blank">Dr. Axel Rauschmayer</a>.</p>