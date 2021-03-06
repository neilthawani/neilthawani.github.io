<p>The following is from <a href="http://learnxinyminutes.com/docs/clojure/" target="_blank">Learn clojure in Y minutes</a>.</p>

<p><u>array maps</u> and <u>hash maps</u> share the <u>map</u> interface.</p>

<p><u>array maps</u> - less fast lookup, retains key order</p>
<p><u>hash maps</u> - fast lookup, doesn't retain key order</p>

<pre>&gt; (class {:a 1 :b 2 :c 3})
clojure.lang.PersistentArrayMap

&gt; (class (hash-map :a 1 :b 2 :c 3))
clojure.lang.PersistentHashMap</pre>

<p>Array maps eventually become hash maps after they get sufficiently large.</p>

<p><u>keyword</u> - like strings, but with efficiency bonuses</p>

<p>Maps can use any hashable type as a key, but usually keywords are best.</p>

<pre>&gt; (class :a)
clojure.lang.Keyword

&gt; (def stringmap {"a" 1 "b" 2 "c" 3})
#'learn-clojure.core/stringmap

&gt; (def keymap {:a 1 :b 2 :c 3})
#'learn-clojure.core/keymap</pre>

<p><u>Note:</u> Commas in a map are treated the same as whitespace.</p>

<p>You can retrieve a value from a map by calling it as a function.</p>

<pre>&gt; (stringmap "a")
1

&gt; (keymap :b)
2</pre>

<p>This operation is commutative with keywords, but not with strings.</p>

<pre>&gt; (:b keymap)
2</pre>

<p><u>Note:</u> A non-existent key in a map yields nil.</p>

<p><u>assoc</u> - used to add new keys to hash maps</p>

<p><u>dissoc</u> - used to remove keys from hash maps</p>

<pre>&gt; (def newkeymap (assoc keymap :d 4))
#'learn-clojure.core/newkeymap

&gt; newkeymap
{:c 3, :b 2, :d 4, :a 1}

&gt; (dissoc keymap :b)
{:b 2, :a 1}</pre>

<p>Don't forget that clojure types are immutable.</p>

<pre>&gt; keymap
{:c 3, :b 2, :a 1}</pre>