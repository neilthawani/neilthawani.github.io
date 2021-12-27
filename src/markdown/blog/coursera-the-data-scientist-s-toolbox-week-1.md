<p>New dream? I guess I'll invest in myself.</p>

<p>Today I enrolled in the <a href="https://www.coursera.org/specialization/jhudatascience/1" target="_blank">Coursera Data Science Specialization track</a>. Here are some notes from the course I took today and a few accompanying thoughts.</p>

<p>The key challenge in data science is that you're either in a situation where you:
<ol>
<li>don't have enough information to solve your problem and need to seek it out or</li>
<li>are overwhelmed with a surplus of information and need to filter out the erroneous parts.</li>
</ol>
</p>

<p><a href="http://www.mckinsey.com/insights/business_technology/big_data_the_next_frontier_for_innovation" target="_blank">According to McKinsey</a>, "Big Data is the next frontier for innovation, competition, and productivity."</p>

<p><u>statistics</u> - the science of learning from data</p>

<p>To me, Big Data is a buzzword. It's truly the application of statistics to solving complex problems in a complex world by turning information into actionable insights. Something interesting that I found, though, is that there are difference kinds of data science depending on the field you're working in. While this seems intuitive, the labels were helpful. Biostatistics, data science, machine learning, natural language processing, signal processing, business analytics, econometrics, and statistical process control are all branches of the same tree.</p>

<p>They also showed this Venn diagram:</p>
<img src="http://i.imgur.com/O0eqXac.jpg" height="300" alt="data scientist venn diagram" />

<p>and defined what it is exactly that data scientists do:</p>
<ol>
<li>define the question of interest</li>
<li>define the ideal data set</li>
<li>get and clean the data</li>
<li>explore the data (plots, clustering, find patterns)</li>
<li>perform statistical prediction/modeling</li>
<li>interpret, challenge, and finally synthesize the results in a reproducible way</li>
<li>share the results</li>
</ol>

<p>The primary statistical analysis tool in this track will be R. The lecturer, <a href="http://jtleek.com/" target="_blank">Dr. Jeff Leek</a>, went over some important R functions using the function <term>rnorm</term> as an example:</p>

<p><u>access the help file</u></p>
<term>&gt; ?rnorm</term>

<p><u>search help files</u></p>
<term>&gt; help.search("rnorm")</term>

<p><u>get arguments</u></p>
<term>&gt; args("rnorm")</term>

<p><u>see the function body</u></p>
<term>&gt; rnorm</term>

<p>During this time, I installed <a href="http://cran.r-project.org/bin/macosx/" target="_blank">R</a> and <a href="http://www.rstudio.com/products/rstudio/download/" target="_blank">Rstudio</a> before delving into how to ask questions and find answers <a href="http://www.catb.org/esr/faqs/smart-questions.html" target="_blank">the smart way</a>, based on a document by two software engineers. I e-mailed this document to my work account to review in the morning.</p>

<p>After that, he went over the Data Science Specialization track by overviewing:</p>
<ul>
<li>Getting Data</li>
<li>Exploratory Data Analysis (graphing and plotting data in R)</li>
<li>Reproducible Research</li>
<li>Statistical Inference</li>
<li>Regression Models</li>
<li>Practical Machine Learning</li>
<li>Building Data Products</li>
</ul>

<p>Then it was time for the Weekly Quiz, which was pretty straightforward until the last question: <u>What are R packages that provide machine learning functionality?</u> After some <a href="http://cran.r-project.org/web/views/MachineLearning.html" target="_blank">quick Googling</a>, I Ctrl+F'd my way to:</p>

<p><term><u>gbm</u></term> - Various forms of gradient boosting are implemented in package gbm (tree-based functional gradient descent boosting)</p>

<p><term><u>pamr</u></term> - The shrunken centroids classifier and utilities for gene expression analyses are implemented in package pamr</p>

<p>Well, that was fun. Looking forward to starting the next course tomorrow.</p>