<p>The following is from <a href="http://learnxinyminutes.com/docs/clojure/" target="_blank">Learn clojure in Y minutes</a>.</p>

<p><span class="code">; Comments start with semicolons.</span></p>

<p>Clojure is written in <u>forms</u>.</p>

<p><u>forms</u> - lists of things inside parentheses, separated by whitespace</p>

<p>Assume:
<ol>
<li>The first thing is a function or macro to call.</li>
<li>The rest are arguments.</li>
</ol>
</p>

<p>The first call in a file should be "ns" to set the namespace:</p>

<p><span class="code">&gt; (ns learnclojure)</span></p>

<p>To create a string:</p>

<p><span class="code">(str "Hello" " " "World")</span></p>

<p>Math uses <a href="http://en.wikipedia.org/wiki/Polish_notation" target="_blank">prefix notation</a>.</p>

<pre>&gt; (+ 1 1)
2

&gt; (- 2 1)
1

&gt; (* 2 2)
4

&gt; (/ 2 1)
2
</pre>

<p>Unlike Java or JavaScript, equality is just a single equals:</p>

<pre>&gt; (= 1 1)
true

&gt; (= 0 1)
false
</pre>

<p>The negation operator is "not":</p>

<pre>&gt; (not true)
false
</pre>

<p>Nested arithmetic operations use the normal PEMDAS order of operations convention:</p>

<pre>&gt; (/ 14 (+ 3 4))
2
</pre>