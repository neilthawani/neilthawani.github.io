<h4><u>Basics</u></h4>

<p>There are a number of operators that can be used to extract subsets of R objects.</p>

<p>[ - always returns an object of the same class as the original, can be used to select more than one element</p>
<p>[ [ - used to extract elements of a list or data frame. can only be used to extract a single element and the class of the returned object will not necessarily be a list or data frame</p>
<p>$ - used to extract elements of a list or data frame by name; semantics are similar to that of [ [</p>

<pre>
&gt; x <- c("a", "b", "c", "c", "d", "a")
&gt; x[1]
[1] "a"
&gt; x[2]
[1] "b"
&gt; x[1:4]
[1] "a" "b" "c" "c"
&gt; x[x > "a"]
[1] "b" "c" "c" "d"
&gt; u <- x > "a"
&gt; u
[1] FALSE TRUE TRUE TRUE TRUE FALSE
&gt; x[u]
[1] "b" "c" "c" "d"
</pre>

<h4><u>Lists</u></h4>

<pre>
&gt; x <- list(foo = 1:4, bar = 0.6)
</pre>

<p>First element is foo. Second element is bar.</p>

<pre>
&gt; x[1] # returns list with sequence
$foo
[1] 1 2 3 4

&gt; x[[1]] # returns sequence from list
[1] 1 2 3 4
</pre>

<p>If you can't remember the position of "bar" in the list, you can access it using its name rather than its index.</p>

<pre>
&gt; x$bar # returns element associated with "bar"
[1] 0.6

&gt; x[["bar"]] # equivalent to above
[1] 0.6

&gt; x["bar"] # returns list with element
$bar
[1] 0.6
</pre>

<p>To extract multiple elements from a list, use the [] operator.</p>

<pre>
&gt; x <- list(foo = 1:4, bar = 0.6, baz = "hello")
&gt; x[c(1, 3)]
$foo
[1] 1 2 3 4

$baz
[1] "hello"
</pre>

<p>You can't use the [[]] or $ operators to extract multiple elements from a list.</p>

<p>The [[]] operator can be used with indices; $ can only be used with literal names.</p>

<pre>
&gt; x <- list(foo = 1:4, bar = 0.6, baz = "hello")
&gt; name <- "foo"
&gt; x[[name]]
[1] 1 2 3 4
&gt; x$name
NULL
&gt; x$foo
[1] 1 2 3 4
</pre>

<p>[[]] can take an integer sequence.</p>

<pre>
&gt; x <- list(a = list(10, 12, 14), b = c(3.14, 2.81))
&gt; x[[c(1, 3)]]
[1] 14
&gt; x[[1]][[3]]
[1] 14
&gt; x[[c(2, 1)]]
[1] 3.14
</pre>

<h4><u>Matrices</u></h4>

<pre>
&gt; x <- matrix(1:6, 2, 3)
&gt; x
\t[ ,1]\t[ ,2]\t[ ,3]
[1, ]\t1\t3\t5
[2, ]\t2\t4\t6

&gt; x[1, 2]
[1] 3
&gt; x[2, 1]
[1] 2
</pre>

<p>Indices can also be missing.</p>

<pre>
&gt; x[1, ]
[1] 1 3 5
&gt; x[, 2]
[1] 3 4
</pre>

<p>By default, when a single element from a matrix is retrieved, it is returned as a vector of length 1 rather than a 1 x 1 matrix. This behavior can be turned off by setting drop = FALSE.</p>

<pre>
&gt; x[1, 2, drop = FALSE]
\t[ ,1]
[1, ]\t3

&gt; x[1, , drop = FALSE]
\t[ ,1]\t[ ,2]\t[ ,3]
[1, ]\t1\t3\t5
</pre>

<h4><u>Partial Matching</u></h4>

<p>Partial matching of names is allowed with [[]] and $.</p>

<p>$ looks for a name in the list that matches the letter "a"</p>

<pre>
&gt; x <- list(aardvark = 1:5)
&gt; x$a
[1] 1 2 3 4 5
</pre>

<p>[[]] looks for a name that's an exact match.</p>

<pre>
&gt; x[["a"]]
NULL
</pre>

<p>The exact = FALSE argument drops the exactness requirement.</p>

<pre>
&gt; x[["a", exact = FALSE]]
[1] 1 2 3 4 5
</pre>

<h4><u>Removing Missing (NA) Values</u></h4>

<pre>
&gt; x <- c(1, 2, NA, 4, NA, 5)
&gt; bad <- is.na(x)
&gt; x[!bad]
[1] 1 2 4 5
&gt; y <- c("a", "b", NA, "d", NA, "f")
&gt; good <- complete.cases(x, y)
&gt; good
[1] TRUE TRUE FALSE TRUE FALSE TRUE
&gt; x[good]
[1] 1 2 4 5
&gt; y[good]
"a" "b" "d" "f"
</pre>

<p>You can also use complete.cases to remove missing values from data frames. To get the rows of a data frame where all the values are not missing:</p>

<pre>
&gt; good <- complete.cases(dataframename)
&gt; dataframename[good, ]
</pre>