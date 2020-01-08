<p>The following is from <a href="http://learnxinyminutes.com/docs/clojure/" target="_blank">Learn clojure in Y minutes</a>.</p>

<p>The three object types used in Clojure are:</p>
<ol>
<li>booleans</li>
<li>strings</li>
<li>numbers</li>
</ol>

<p>You can use the <span class="code">class</span> function to inspect objects:</p>

<pre>&gt; (class 1)
java.lang.Long

&gt; (class 1.)
java.lang.Double

&gt; (class (""))
java.lang.String

&gt; (class false)
java.lang.Boolean

&gt; (class nil)
nil</pre>

<p>To create a literal list of data:</p>
<pre>&gt; '(+ 1 2)
(+ 1 2)

&gt; (quote (+ (1 2)))
(+ 1 2)</pre>

<p>The <span class="code">'</span> character prevents the form from being evaluated.</p>

<p>The opposite of <span class="code">'</span> is eval:</p>
<pre>&gt; (eval '(+ 1 2))
3</pre>