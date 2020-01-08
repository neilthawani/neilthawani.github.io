<h4><u>Reading Tabular Data</u></h4>
<p><u>read.table, read.cv</u> - used for reading tabular data</p>
<p><u>readLines</u> - used for reading lines of a text file</p>
<p><u>source</u> - used for reading in R code files (inverse of dump)</p>
<p><u>dget</u> - used for reading in R code files (inverse of dput)</p>
<p><u>load</u> - used for reading in saved workspaces</p>
<p><u>unserialize</u> - used for reading single R objects in binary form</p>

<h4><u>Writing Data</u></h4>
<ul>
<li>write.table</li>
<li>writeLines</li>
<li>dump</li>
<li>dput</li>
<li>save</li>
<li>serialize</li>
</ul>

<h4><u>Reading Data Files with read.table</u></h4>

<p>Arguments:</p>
<li><u>file</u> - the name of a file, or a connection</li>
<li><u>header</u> - the logical indicating if the file has a header line</li>
<li><u>sep</u> - a string indicating how the columns are separated</li>
<li><u>colClasses</u> - a character vector indicating the class of each column in the dataset</li>
<li><u>nrows</u> - the number of rows in the dataset</li>
<li><u>comment.char</u> - a character string indicating the comment character</li>
<li><u>skip</u> - the number of lines to skip from the beginning</li>
<li><u>stringsAsFactors</u> - should character variables be coded as factors?</li>

<p>For small to moderately sized datasets, you can call read.table without any other arguments.</p>

<pre>
&gt; data <- read.table("foo.txt")
</pre>

<p>R will automatically</p>
<ul>
<li>skip lines that begin with #</li>
<li>figure out how many rows there are and how much memory needs to be allocated</li>
<li>figure out what type of variable is in each column - explicitly stating this makes R run faster</li>
</ul>

<p><span class="code">read.csv</span> is identical to <span class="code">read.table</span>, except the default separator is a comma</p>

<h4><u>Reading Large Tables</u></h4>

<p>The help page for <span class="code">read.table</span> contains many hints. Memorizing it is advised.</p>

<p>Make a rough calculation of the memory required to store your dataset. If N > the amount of RAM on your computer, it won't be possible.</p>

<p>Set <span class="code">comment.char = " "</span> if there are no commented lines in your file.</p>

<h4><u>Reading in Larger Datasets with read.table</u></h4>

<p>Specifying the <span class="code">colClasses</span> argument can make read.table run significantly faster. To figure out the classes of each column:</p>

<pre>
&gt; initial <- read.table("datatable.txt", nrows = 100) # or 1000
&gt; classes <- sapply(initial, class)
&gt; tabAll <- read.table("datatable.txt", colClasses = classes)
</pre>

<p>Set <span class="code">nrows</span>. Use the Unix tool wc to calculate the number of lines in a file.</p>

<p>When using R with larger data sets, it helps to know:</p>
<ul>
<li>how much memory is available?</li>
<li>what other applications are in use?</li>
<li>are there other users logged on to the same system?</li>
<li>what OS?</li>
<li>is the OS 32- or 64-bit?</li>
</ul>

<p>e.g., Calculating Memory Requirements
<br />
A data frame has 1,500,000 rows and 120 columns, all of which are numeric data. Roughly how much memory is required to store this data?</p>

<p>1,500,000 rows * 120 columns * 8 bytes/numeric = 1,440,000,000 bytes / 1,024 bytes/kb / 1,024 kb/mb / 1,024 mb/gb = 1.34 gigabytes = N</p>

<p>Note: There are 2^20 bytes/mb, since 2^10 = 1,024.</p>

<p><u>A rule of thumb:</u> You'll need 2N RAM to read in a dataset that requires N memory.</p>

<h4><u>Textual Data Formats: dput() and dump()</u></h4>

<p>dumping and dputing are useful because the resulting textual format is editable (and recoverable in case of corruption)</p>
<p>dump and dput preserve the metadata (unlike write.table or writeLines) so that the user doesn't have to specify it again</p>
<p>textual data formats can work better with version control programs (like subversion or git), which can only track meaningful changes in text files</p>

<p><span class="code">dput</span> takes an arbitrary R object and will create some R code that will reconstruct the object in R.</p>
<p>y has two columns: a and b. dput constructs some R code with a list with two elements, the row names and the class. This metadata (row names, class) is not particularly useful, but can be output to a file to reconstruct it later.</p>

<pre>
&gt; y <- data.frame(a = 1, b = "a")
&gt; dput(y)
structure(list(a = 1,
\t\tb = structure(1L, .Label = "a",
\t\t\t\tclass = "factor")),
\t.Names = c("a", "b"), row.names = c(NA, -1L),
\tclass = "data.frame")
&gt; dput(y, file = "y.R")
&gt; new.y <- dget("y.R")
&gt; new.y
\ta\tb
1\t1\ta
</pre>

<p><span class="code">dget</span> can only be used on a single R object, whereas <span class="code">dump</span> can be used on multiple R objects.</p>

<pre>
&gt; x <- "foo"
&gt; y <- data.frame(a = 1, b = "a")
&gt; dump(c("x", "y"), file = "data.R")
&gt; rm(x, y)
&gt; source("data.R")
&gt; y
\ta\tb
1\t1\ta
&gt; a
[1] "foo"
</pre>

<h4><u>R Connections - Interfaces to the Outside World</u></h4>

<p>Data are read in using <u>connection</u> interfaces. Connections can be made to files or to other, more exotic things.</p>

<p><u>file</u> - opens a connection to a file</p>
<p><u>gzfile</u> - opens a connection to a file compressed with gzip</p>
<p><u>bzfile</u> - opens a connection to a file compressed with bzip2</p>
<p><u>url</u> - opens a connection to a webpage</p>

<p><u>File connections</u></p>

<pre>
&gt; str(file)
function (description = "", open = "", blocking = TRUE, encoding = getOption("encoding"))
</pre>

<p>description is the name of the file</p>
<p>open is a code indicating:</p>
<ul>
<li>r - read only</li>
<li>w - writing (and initializing a new file)</li>
<li>a - appending</li>
<li>rb, wb, ab - reading, writing or appending in binary mode (Windows)</li>
</ul>

<p>In general, we often don't need to deal with the connection interface directly.</p>

<pre>
&gt; con <- file("foo.txt", "r")
&gt; data <- read.csv(con)
&gt; close(con)
</pre>

<p>is the same as</p>

<pre>&gt; data <- read.csv("foo.txt")</pre>

<p><u>Reading Lines of a Text File</u></p>

<pre>
&gt; con <- gzfile("words.gz")
&gt; x <- readLines(con, 10)
&gt; x
[1]\t"a"\t"d"\t"g"
[5]\t"b"\t"e"\t"h"
[9]\t"c"\t"f"
</pre>

<p><span class="code">writeLines</span> takes a character vector and writes each element one line at a time to a text file.</p>

<p><span class="code">readLines</span> can be useful for reading in lines of webpages.</p>

<pre>
&gt; con <- url("http://www.jhsph.edu", "r")
&gt; x <- readLines(con)
&gt; head(x)
# prints out HTML of the webpage, line by line
</pre>