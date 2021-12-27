<h4><u>Setting Up Your Working Directory (Mac)</u></h4>

<pre>
&gt; getwd()
"/Users/neilthawani"
</pre>

<p>A file must be under your working directory if you want to read data from it.</p>

<p><span class="code">dir()</span> lists all the files in the working directory.</p>

<h4><u>R Console Input and Evaluation</u></h4>
<p><span class="code"><-</span> is the assignment operator</p>
<pre>
&gt; x <- 1
</pre>

<p><span class="code">print</span> explicitly prints an object</p>
<pre>
&gt; print(x)
[1] 1
</pre>

<p>Typing 'x' auto-prints it.</p>

<pre>
&gt; x
[1] 1
</pre>

<p>x is a <u>numeric vector</u> where the first element is 1.</p>

<p><span class="code">#</span> indicates comments.</p>

<p>To create integer sequences:</p>

<pre>
&gt; x <- 1:20
&gt; x
[1] 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
[16] 16 17 18 19 20
</pre>
