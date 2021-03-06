<p>The following is from <a href="http://learnxinyminutes.com/docs/clojure/" target="_blank">Learn clojure in Y minutes</a>.</p>

<p>The hashtag with brackets indicates a persistent hash set.</p>

<pre>&gt; (class #{1 2 3})
clojure.lang.PersistentHashSet</pre>

<p><u>set</u> - gets the set of values in a collection</p>

<pre>&gt; (set [1 2 3 1 2 3 3 2 2 1 3])
#{1 2 3}</pre>

<p><u>conj</u> - adds a member to a set</p>

<pre>&gt; (conj #{1 2 3} 4)
#{1 2 3 4}</pre>

<p><u>disj</u> - removes a member from a set</p>

<pre>&gt; (disj #{1 2 3} 1)
{2 3}</pre>

<p>To test for existence of an item in a set, use the set as a function.</p>

<pre>&gt; (#{1 2 3} 1)
1

&gt; (#{1 2 3} 4)
nil</pre>

<p>There are <a href="http://clojure.org/data_structures#Data%20Structures-Sets" target="_blank">plenty more functions</a> in the <span class="code">clojure.sets</span> namespace.</p>