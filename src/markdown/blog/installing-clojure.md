<p>I first did:</p>

<p><span class="code">&gt; brew install clojure</span></p>

<p>but got:</p>

<pre><code>Error: No available formula for clojure
Clojure isn't really a program but a library managed as part of a project and Leiningen is the user interface to that library.

To install Clojure you should install Leiningen:
  brew install leiningen
and then follow the tutorial:
  https://github.com/technomancy/leiningen/blob/stable/doc/TUTORIAL.md</code></pre>

<p>To install homebrew, <a href='http://brew.sh/' target='_blank'>visit the website</a>.</p>

<p>Then, in Terminal, do:</p>

<p><span class="code">&gt; brew install leiningen</span></p>

<p><span class="code">&gt; lein new app learn-clojure</span></p>

<p><span class="code">No Java runtime present, requesting install.</span></p>

<p>After doing a search for 'Java for OS X' and a stop by stackoverflow, I found the JRE on apple.com. After a modest 63.8 mb download, in Terminal:</p>

<p><span class="code">&gt; lein new app learn-clojure</span></p>

<p>Generating a project called learn-clojure based on the 'app' template.</p>

<p>Success!</p>