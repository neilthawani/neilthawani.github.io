<p>Steps in a data analysis</p>
<ol>
<li>Define the question</li>
<li>Define the ideal data set</li>
<li>Determine what data you can access</li>
<li>Obtain the data</li>
<li>Clean the data</li>
<li>Exploratory data analysis</li>
<li>Statistical prediction/modeling</li>
<li>Interpret results</li>
<li>Challenge results</li>
<li>Synthesize/write up results</li>
<li>Create reproducible code</li>
</ol>

<p>You will have either a surplus or insufficient information in order to solve your problems. Defining a question as narrowly as possible will help to reduce the noise in solving your problem.</p>

<p>e.g.,
<br />
Start with a general question: Can I automatically detect e-mails that are spam or not?
Make it concrete: Can I use quantitative characteristics of the emails to classify them as spam?</p>

<p>Defining the ideal data set</p>
<ul>
<li>descriptive - a whole population</li>
<li>exploratory - a random sample with many variables measured</li>
<li>inferential - the right population, randomly sampled</li>
<li>predictive - a training and test data set from the same population</li>
<li>causal - data from a randomized study</li>
<li>mechanistic - data about all components of the system</li>
</ul>

<p>Determine what data you can access</p>
<ul>
<li>Sometimes you can find free data on the web</li>
<li>Other times you may need to buy the data</li>
<li>Be sure to respect Terms of Use</li>
<li>If the data doesn't exist, you may need to generate it yourself</li>
</ul>

<p>Obtain the data</p>
<ul>
<li>Try to obtain the raw data</li>
<li>Be sure to reference the source</li>
<li>Polite emails go a long way</li>
<li>If you load the data from an internet source, record the URL and time accessed</li>
</ul>

<p>Clean the data</p>
<ul>
<li>Raw data often needs to be processed</li>
<li>If it is pre-processed, make sure you understand how</li>
<li>Understand the source of the data (census sample, convenience sample, etc.)</li>
<li>May need reformatting, subsampling - record those steps</li>
<li><strong>Determine if the data are good enough</strong> - if not, quit or change data</li>
</ul>

<p>Subsampling our data set</p>
<ul>
<li>We need to generate a test set and a training set (prediction)</li>
</ul>

<p>Exploratory data analysis</p>
<ul>
<li>Look at summaries of the data</li>
<li>Check for missing data</li>
<li>Create exploratory plots</li>
<li>Perform exploratory analyses (e.g., clustering)</li>
</ul>

<p>Statistical prediction/modeling</p>
<ul>
<li>should be informed by the results of your exploratory analysis</li>
<li>exact methods depend on the question of interest</li>
<li>transformations/processing should be accounted for when necessary</li>
<li>measures of uncertainty should be reported</li>
</ul>

<p>Interpret results</p>
<ul>
<li>Use the appropriate language (describes, correlates with/associated with, leads to/causes, predicts)</li>
<li>Give an explanation</li>
<li>Interpret coefficients</li>
<li>Interpret measures of uncertainty</li>
</ul>

<p>Challenge results</p>
<ul>
<li>Challenge all steps: question, data source, processing, analysis, conclusions</li>
<li>Challenge measures of uncertainty</li>
<li>Challenge choices of terms to include in models</li>
<li>Think of potential alternative analyses</li>
</ul>

<p>Synthesize/write-up results</p>
<ul>
<li>Lead with the question</li>
<li>Summarize the analyses into the story</li>
<li>Don't include every analysis; include it if it is needed for the story or to address a challenge</li>
<li>Order analyses according to the story, rather than chronologically</li>
<li>Include "pretty" figures that contribute to the story</li>
</ul>

<p>Lastly, create reproducible code using Markdown, knitr, Rstudio. It will make the evidence for your conclusions much more powerful.</p>