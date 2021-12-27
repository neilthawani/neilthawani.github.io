<p><u>Reading Local Files</u></p>

<p>Loading flat files - read.table()</p>
<ul>
<li>this is the main function for reading data into R</li>
<li>reads the data into RAM - large data sets can cause problems</li>
<li>important parameters: file, header, sep, row.names, nrows</li>
<li>Related methods: read.csv(), read.csv2()</li>
</ul>

<p><u>Some more important parameters</u></p>
<p><u>quote</u> - you can tell R whether there are any quoted values; quote="" means no quotes</p>
<p><u>na.strings</u> - set the character that represents a missing value</p>
<p><u>nrows</u> - how many rows to read from the file</p>
<p><u>skip</u> - number of lines to skip before starting to read</p>

<p><u>Reading Excel Files</u></p>

<p>read.xlsx, read.xlsx2 are in library(xlsx)</p>

<p>write.xslx() will write out an Excel file with similar arguments</p>
<p>The XLConnect package (link to XLConnect Vignette) has more options for writing and manipulating Excel files.</p>
<p>In general, it is advised that you store your data in either a database, .txt, or .csv file, since they are easier to distribute.</p>

<p><u>Reading XML</u></p>

<p><u>library(XML)</u> - the XML library</p>
<pre>
doc <- xmlTreeParse(fileUrl, useInternal = TRUE)
rootNode <- xmlRoot(doc)
</pre>
<p><u>xmlName(rootNode)</u> - gets the name of the root node</p>

<p>Get the names of the nested elements under the root node: names(rootNode)</p>

<p>You can access parts of the XML document similar to how you access a list.</p>

<p><u>rootNode[[1]]</u> - access the first element and its children</p>

<p><u>rootNode[[1]][[1]]</u> - access the first child of the first element</p>

<p><u>xmlSApply(rootNode, xmlValue)</u> - programmatically extract parts of the file; gets all the text from the document</p>

<p>You can access information directly using <a href="http://www.stat.berkeley.edu/~statcur/Workshop2/Presentations/XML.pdf" target="_blank">XPath</a>.</p>

<p>extract specific nodes using XPath: <span class="code">xmlSApply(rootNode, "//nodeName", xmlValue)</span></p>

<p><u>Reading JSON</u></p>

<pre>
library(jsonlite)
jsonData <- fromJSON(url)
names(jsonData)
</pre>

<p><u>Accessing nested objects in JSON</u></p>
<pre>
&gt; names(jsonData$objectName)
&gt; jsonData$objectName$subObject
</pre>

<p><u>Writing Data Frames to JSON</u></p>
<pre>
&gt; myJson <- toJSON(dataset, pretty=TRUE)
&gt; cat(myjson) # output to console
</pre>

<p><u>Convert back to Data Frame</u></p>
<pre>
dataset2 <- fromJSON(myJson)
head(dataset2)
</pre>