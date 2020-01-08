<p><a href="http://git-scm.com/book/en/Getting-Started-About-Version-Control" target="_blank">"Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later."</a></p>

<p><u>Why is version control important?</u></p>

<p>Many of us constantly create something, save it, change it and then save it again.
<a href="http://en.wikipedia.org/wiki/Revision_control" target="_blank">Version (or revision) control</a> is a means of managing this process in a reliable and efficient way.
It is especially important when collaborating with others.</p>

<p><a href="http://www.git-scm.com" target="_blank">"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."</a></p>

<p><a href="http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git" target="_blank">Git:</a></p>
<ul>
<li>was created by the same people who developed Linux</li>
<li>is the most popular implementation of version control today</li>
<li>stores everything in local repositories on your computer</li>
<li>is operated from the command line</li>
</ul>

<p>You can <a href="http://www.git-scm.com/downloads" target="_blank">download Git here</a>.</p>

<p>Open Terminal. Now it's time to configure your username and email. Each commit to a Git repository (repo) is tagged with the username of the person who made the commit.</p>

<pre>
$ git config --global user.name "Firstname Lastname"
$ git config --global user.email "name@example.com"
</pre>

<p>You only have to type this once and can always change these later using the same commands.</p>

<p>To confirm your changes:</p>

<pre>$ git config --list</pre>

<p>You can exit Terminal by typing</p>

<pre>$ exit</pre>