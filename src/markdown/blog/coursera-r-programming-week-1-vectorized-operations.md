<pre>
&gt; x <- 1:4, y <- 6:9
&gt; x + y
[1] 7 9 11 13
&gt; x > 2
[1] FALSE FALSE TRUE TRUE
</pre>

<h4><u>Vectorized Matrix Operations</u></h4>

<pre>
&gt; x <- matrix(1:4, 2, 2); y <- matrix(rep(10, 4), 2, 2)
</pre>

<p>rep creates a 2x2 matrix of 10s</p>

<p>True matrix multiplication is performed using %*%:</p>

<pre>
&gt; x %*% y
\t[ ,1]\t[ ,2]
[1, ]\t40\t40
[2, ]\t60\t60
</pre>