<p><u>replication</u> - the ultimate standard for strengthening scientific evidence using findings gathered using independent investigators, data, analytical methods, laboratories, instruments, etc.</p>

<p>Replication is particularly important in studies that can impact broad or regulatory decisions.</p>

<p>What's wrong with replication?</p>

<p>Some studies cannot be replicated due to lack of</p>
<ul>
<li>time</li>
<li>money</li>
<li>or the uniqueness of the study.</li>
</ul>

<p>Reproducible research uses analytic data and code so that others may reproduce findings. Why do we need it?</p>
<ul>
<li>New technologies are increasing data collection throughput; data are more complex and extremely high dimensional.</li>
<li>Existing databases can be merged into new 'megadatabases.' </li>
<li>Computing power is greatly increased, allowing for more sophisticated analyses.</li>
<li>For every field "X," there is a field "Computational X."</li>
</ul>

<p>An example of reproducible research is air pollution and health research. We are estimating small (but important) health effects in the presence of much stronger signals. Results inform substantial policy decisions and affect many stakeholders. EPA regulations can cost billions of dollars. Complex statistical methods are needed and subjected to intense scrutiny.</p>

<p>What do we need for reproducible research?</p>
<ul>
<li>analytic data are available</li>
<li>analytic code are available</li>
<li>documentation of code and data</li>
<li>standard means of distribution</li>
</ul>

<p><u>Who are the players in reproducibility?</u></p>

<p>Authors</p>
<ul>
<li>want to make their research reproducible</li>
<li>want tools to make their lives easier</li>
</ul>

<p>Readers</p>
<ul>
<li>want to reproduce and/or expand upon interesting findings</li>
<li>want tools to make their lives easier</li>
</ul>

<p>Challenges</p>
<ul>
<li>Authors must undertake considerable effort to put data/results on the web and may not have resources like a web server.</li>
<li>Readers must download data/results individually and piece together which data go with which code sections, etc.</li>
<li>Readers may not have the same resources as the authors.</li>
<li>There are few tools to help readers/authors, although the toolbox is growing.</li>
</ul>

<p>In reality ...</p>

<p>Authors</p>
<ul>
<li>just put stuff on the web</li>
<li>there are Journal supplementary materials</li>
<li>there are some central databases for various fields</li>
</ul>

<p>Readers</p>
<ul>
<li>just download the data and try to figure it out</li>
<li>piece together the software and run it</li>
</ul>

<u><p>Literate (Statistical) Programming</p></u>
<ul>
<li>An article is a stream of text and code</li>
<li>Analysis is divided into text and code "chunks"</li>
<li>Each code chunk loads data and computes results.</li>
<li>Presentation code formats results (tables, figures, etc.)</li>
<li>Article text explains what's going on</li>
<li>Literate programs can be weaved to produce human-readable documents and tangled to produce machine-readable documents</li>
</ul>

<p>Literate programming is a general concept that requires</p>
<ol>
<li>a documentation language (human readable)</li>
<li>a programming language (machine readable)</li>
</ol>

<p>Sweave (<a href="http://www.statistik.lmu.de/~leisch/Sweave" target="_blank">main website</a>)</p>
<ul>
<li>uses LaTeX and R as the documentation and programming languages.</li>
<li>was developed by Friedrich Leisch (member of the R Core) and is maintained by R Core</li>
</ul>

<p>Sweave has many limitations, though. knitr is an alternative (more recent) package.</p>

<p>knitr (<a href="http://yihui.name/knitr" target="_blank">main website</a>)</p>
<ul>
<li>brings together many features added on to Sweave to address limitations</li>
<li>uses R as the programming language (although others are allowed) and a variety of documentation languages (LaTeX, Markdown, HTML)</li>
<li>was developed by Yihui Xie (while a graduate student in statistics at Iowa State)</li>
</ul>

<p>Summary</p>
<ul>
<li>Reproducible research is important as a minimum standard, particularly for studies that are difficult to replicate.</li>
<li>Infrastructure is needed for creating and distributing reproducible documents, beyond what is currently available</li>
<li>There is a growing number of tools for creating reproducible documents</li>
</ul>