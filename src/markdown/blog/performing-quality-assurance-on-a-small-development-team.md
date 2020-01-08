<p>At work, we have a release coming out in about a week. After months of planning, development, and manual testing, we've upgraded an application with about 300 web components from <a href="http://iamstef.net/ember-app-kit/" target="_blank">Ember's App Kit</a> framework to <a href="http://ember-cli.com/" target="_blank">Ember CLI</a>.

<p>While the UI is supposed to look the same between these two apps, the architecture has changed drastically in some areas, since we took the time to refactor code quality mistakes in the previous build and <a href="http://stackoverflow.com/questions/49002/prefer-composition-over-inheritance" target="_blank">composed</a> data visualization modules and their bound events in a way that makes many components reusable.</p>

<p>Now that we're in the home stretch, we're doing continuous rounds of manual QA at the beginning of each day, finding bugs, filing them in <a href="http://www.asana.com" target="_blank">Asana</a>, and fixing them quickly, and I thought I'd share that process. How do we do QA?</p>

<p><h3 style="font-weight:lighter;display:inline;">1.</h3> Branch and develop.</p>

<p>If you're using git, like we are, for version control, <a href="https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows" target="_blank">it makes sense to work on your own branch</a>, since branching is a fundamental Good Case Practice<sup>TM</sup>.</p>

<p><h3 style="font-weight:lighter;display:inline;">2.</h3> Verify your code works on your local machine before committing it.</p>

<p>This is common sense, but sometimes the joy of <em>thinking</em> you've solved a problem is more fun than verifying that it's actually been solved.</p>

<p><h3 style="font-weight:lighter;display:inline;">3.</h3> Commit, push, and get a code review.</p>

<pre>
&gt; git add .
&gt; git commit -am "This is a commit message that specifies the things in the code that were changed with respect to the feature(s) under development."
&gt; git push origin my_branch_name
</pre>

<p>After someone pushes to the repository, the other developers on the team receive an e-mail. Here, code reviews are completed, comments regarding changes are posted on the commit, and at the end of that process, the developer who originally pushed the code issues a pull request to the master branch. Steps 2 and 3 are repeated as often as necessary before the pull request is issued.</p>

<p><h3 style="font-weight:lighter;display:inline;">4.</h3> Our architect merges the changes into master.</p>

<p>While this process has its flaws - we do manual QA instead of running automated tests, and code reviews are encouraged but not inherently mandated - using version control with an easy-to-internalize process on a small, agile team is key to our success.</p>