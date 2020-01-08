<p>Get/set your working directory in R using getwd() and setwd().</p>

<p>Check for and create directories using file.exists("directoryName") and dir.create("directoryName")</p>

<p>Getting data from the internet using download.file(url="", destfile="", method="curl")</p>
<ul>
<li>If the URL starts with http, you can use download.file()</li>
<li>If the URL starts with https, you may need to set method="curl" on a Mac - Windows is ok with the default method</li>
<li>Be sure to record when you downloaded the file.</li>
</ul>