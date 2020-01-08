<h4><u>Objects and Attributes</u></h4>

<p>R has five basic or "atomic" classes of objects:</p>
<ul>
<li>character</li>
<li>numeric (real numbers)</li>
<li>integer</li>
<li>complex</li>
<li>logical (True/False)</li>
</ul>

<p>The most basic object is a <u>vector</u>.</p>

<p>A vector can only contain objects of the same class. The one exception to this rule is a list, which is represented as a vector but can contain objects of different classes.</p>

<p><span class="code">vector()</span> creates an empty vector</p>
<p>Two arguments: class of the object in the vector, length of the vector</p>

<p>Numbers</p>
<ul>
<li>generally treated as double precision real numbers</li>
<li>to explicitly define an integer, specify the "L" suffix</li>
<li>Inf represents infinity</li>
<li>NaN represents not a number</li>
</ul>

<p>R objects can have attributes.</p>
<ul>
<li>names, dimnames</li>
<li>dimensions (e.g., matrices, arrays)</li>
<li>class</li>
<li>length</li>
<li>other user-defined attributes/metadata</li>
</ul>

<p>Attributes of an object can be accessed using the <span class="code">attributes()</span> function.</p>

<h4><u>Vectors and Lists</u></h4>

<p>Creating Vectors</p>

<p><span class="code">c()</span> can be used to create vectors of objects</p>

<pre>
&gt; x <- c(0.5, 0.6) # numeric
&gt; x <- c(T, F) # logical
&gt; x <- 9:29 # integer
&gt; x <- c(1+0i, 2+4i) # complex
</pre>

<pre>
&gt; x <- vector("numeric", length = 10)
&gt; x
[1] 0 0 0 0 0 0 0 0 0 0
</pre>

<p><u>Mixing Objects</u></p>
<pre>
&gt; y <- c(1.7, "a") # character
&gt; y <- c(TRUE, 2) # numeric
&gt; y <- c("a", TRUE) # character
</pre>

<p><u>coercion</u> - every element in a mixed vector becomes of the same class</p>

<p><u>Explicit Coercion</u></p>

<p>Objects can be explicitly coerced from one class to another using the <span class="code">as.*</span> functions, if available.</p>

<pre>
&gt; x <- 0:6
&gt; class(x)
[1] "integer"
&gt; as.numeric(x)
[1] 0 1 2 3 4 5 6
&gt; as.logical(x)
[1] FALSE TRUE TRUE TRUE TRUE TRUE TRUE 
&gt; as.character(x)
[1] "0" "1" "2" "3" "4" "5" "6"
</pre>

<p>Nonsensical coercion results in NAs.</p>

<pre>
&gt; x <- c("a", "b", "c")
&gt; as.numeric(x)
[1] NA NA NA
Warning message:
As introduced by coercion
&gt; as.logical(x)
[1] NA NA NA
</pre>

<p><u>Lists</u></p>
<pre>
&gt; x <- list(1, "a", TRUE, 1+4i)
&gt; x
[[1]]
[1] 1

[[2]]
[1] "a"

[[3]]
[1] TRUE

[[4]]
[1] 1+4i
</pre>

<p>Elements of a list have double-brackets around them. Elements of a vector have single-brackets around them.</p>

<h4><u>Matrices</u></h4>

<p><u>matrix</u> - a vector with a <u>dimension</u> attribute</p>

<p><u>dimension</u> - an attribute with an integer vector of length 2 (nrow, ncol)</p>

<pre>
&gt; m <- matrix(nrow = 2, ncol = 3)
&gt; dim(m)
[1] 2 3
&gt; attributes(m)
$dim
[1] 2 3
</pre>

<p>Matrices are constructed column-wise, so entries start in the top-left of the first column and run down the columns.</p>

<pre>
&gt; m <- matrix(1:6, nrow = 2, ncol = 3)
&gt; m
\t[,1]\t[,2]\t[,3]
[1,]\t1\t3\t5
[2,]\t2\t4\t6
</pre>

<p>Matrices can also be created directly from vectors by adding a dimension attribute.</p>

<pre>
&gt; m <- 1:10
&gt; m
[1] 1 2 3 4 5 6 7 8 9 10
&gt; dim(m) <- c(2, 5)
&gt; m
\t[,1]\t[,2]\t[,3]\t[,4]\t[,5]
[1,]\t1\t3\t5\t7\t9
[2,]\t2\t4\t6\t8\t10
</pre>

<p><u>cbind()</u> - column-binding method of creating a matrix</p>
<p><u>rbind()</u> - row-binding method of creating a matrix</p>

<pre>
&gt; x <- 1:3
&gt; y <- 10:12
&gt; cbind(x, y)
\tx\ty
[1,]\t1\t10
[2,]\t2\t11
[3,]\t3\t12
&gt; rbind(x, y)
\t[,1]\t[,2]\t[,3]
x\t1\t2\t3
y\t10\t11\t12
</pre>

<h4><u>Factors</u></h4>

<p><u>factor</u> - used to represent categorical data in an <u>ordered</u> or <u>unordered</u> fashion. an integer vector where each integer has a <u>label</u>. Input into the factor function is a character vector.</p>

<pre>
&gt; x <- factor(c("yes", "no", "yes", "yes", "no"))
&gt; x
[1] yes no yes yes no
Levels: no yes
&gt; table(x)
x
no\tyes
2\t3
&gt; unclass(x)
[1] 2 1 2 2 1
attr(,"levels")
[1] "no" "yes"
</pre>

<p>The order of the levels can be set using the <span class="code">levels</span> argument to <span class="code">factor()</span>. This can be important in linear modeling because the first level is used as the baseline level.</p>

<pre>
&gt; x <- factor(c("yes", "yes", "no", "yes", "no"), levels = c("yes", "no"))
&gt; x
[1] yes yes no yes no
Levels: yes no
</pre>

<p>The default ordering of levels is by alphabetical order.</p>

<h4><u>Missing Values</u></h4>

<p>Missing values are NA or NaN for undefined mathematical operations.</p>

<p><span class="code">is.na()</span> is used to test objects if they are NA</p>

<p><span class="code">is.nan()</span> is used to test for NaN</p>

<p>NA values have a class too, so there are integer NAs, character NAs, etc. While an NaN value is also NA, an NA value is not NaN.</p>

<h4><u>Data Frames</u></h4>

<p>Data Frames</p>
<ul>
<li>used to store different classes of objects in tabular data</li>
<li>represented as a special type of list, where every element of the list has the same length</li>
<li>each element of the list can be thought of as a column, and the length of each element is the number of rows</li>
<li>have a special attribute called <span class="code">row.names</span></li>
<li>usually created by calling <span class="code">read.table()</span> or <span class="code">read.csv()</span></li>
<li>can be converted to a matrix using <span class="code">data.matrix()</span></li>
</ul>

<pre>
&gt; x <- data.frame(foo = 1:4, bar = c(T, T, F, F))
&gt; x
\tfoo\tbar
1\t1\tTRUE
2\t2\tTRUE
3\t3\tFALSE
4\t4\tFALSE
&gt; nrow(x)
[1] 4
&gt; ncol(x)
[1] 2
</pre>

<h4><u>Names Attribute</u></h4>

<p>R objects can also have names, which is very useful for writing readable code and self-describing objects.</p>

<pre>
&gt; x <- 1:3
&gt; names(x)
NULL
&gt; names(x) <- c("foo", "bar", "baz")
&gt; x
foo\tbar\tbaz
1\t2\t3
&gt; names(x)
[1] "foo" "bar" "baz"
</pre>

<p>Lists can also have names.</p>

<pre>
&gt; x <- list(a = 1, b = 2, c = 3)
&gt; x
$a
[1] 1

$b
[1] 2

$c
[1] 3
</pre>

<p>Matrices can also have names.</p>

<pre>
&gt; m <- matrix(1:4, nrow = 2, ncol = 2)
&gt; dimnames(m) <- list(c("a", "b"), c("c", "d"))
&gt; m
\tc\td
a\t1\t3
b\t2\t4
</pre>

<h4><u>Summary of Data Types in R</u></h4>

<ul>
<li>atomic classes: numeric, logical, character, integer, complex</li>
<li>vectors, lists</li>
<li>factors</li>
<li>missing values</li>
<li>data frames</li>
<li>names</li>
</ul>