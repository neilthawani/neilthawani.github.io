<p>The following is from <a href="http://learnxinyminutes.com/docs/clojure/" target="_blank">Learn clojure in Y minutes</a>.</p>

<p><u>fn</u> - used to create a new function</p>

<pre>&gt; (fn [] "Hello World")
#&lt;core$eval1256$fn__1257 learn_clojure.core$eval1256$fn__1257@590a8143&gt;

&gt; ((fn [] "Hello World"))
"Hello World"</pre>

<p><u>def</u> - used to create a var</p>

<pre>
&gt; (def x 1)
#'learn-clojure.core/x

&gt; x
1

&gt; (def hello-world (fn [] "Hello World"))
#'learn-clojure.core/hello-world

&gt; hello-world
#&lt;core$hello_world learn_clojure.core$hello_world@4511e86f&gt;

&gt; (hello-world)
"Hello World"

&gt; (defn hello-world [] "Hello World")
#'learn-clojure.core/hello-world</pre>

<p><u>[]</u> - defines the list of arguments for the function</p>

<pre>
&gt; (defn hello [name] 
\t(str "Hello " name))
#'learn-clojure.core/hello</pre>

<p>While tabs are not always necessary in Clojure, they aid readability.</p>

<pre>
&gt; (hello)
ArityException Wrong number of args (0) passed to: core/hello  clojure.lang.AFn.throwArity (AFn.java:429)

&gt; (hello "Neil")
"Hello Neil"</pre>

<p>This is another way of defining functions:</p>

<pre>
&gt; (def hello-again #(str "Hello " %1))
#'learn-clojure.core/hello

&gt; (hello-again "Neil")
"Hello Neil"</pre>

<p>Clojure allows <a href="http://en.wikipedia.org/wiki/Variadic_function" target="_blank">variadic functions</a>.<p>
 
<pre>
&gt; (def hello-someone
\t([] "Hello World")
\t([name] (str "Hello " name)))
#'learn-clojure.core/hello-someone

&gt; (hello-someone)
"Hello World"

&gt; (hello-someone "Neil")
"Hello Neil")</pre>

<p>Another way of defining a variadic function is by using the & operator to define packed arguments:</p>

<pre>
&gt; (defn count-args [& args]
\t(str "You passed " (count args) " args: " args))
#'learn-clojure.core/count-args

&gt; (count-args 1 2 3)
You passed 3 args: (1 2 3)</pre>

<p>You can mix regular arguments with packed arguments:</p>

<pre>
&gt; (defn hello-count [name & args]
\t(str "Hello " name ", you passed " (count args) " args"))
#'learn-clojure.core/hello-count

&gt; (hello-count "Neil" 1 2 3)
"Hello Neil, you passed 3 args"</pre>