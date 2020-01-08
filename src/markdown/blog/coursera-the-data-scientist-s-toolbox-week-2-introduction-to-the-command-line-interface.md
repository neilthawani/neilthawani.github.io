<p><u>What is the Command Line Interface (CLI)?</u></p>

<p>Nearly every computer comes with a CLI</p>
<ul>
<li>Windows: Git Bash</li>
<li>Mac/Linux: Terminal</li>
</ul>

<p>The CLI can help you:</p>
<ul>
<li>navigate folders</li>
<li>create/edit files, folders and programs</li>
<li>run computer programs</li>
</ul>

<p><u>Basics of Directories</u></p>
<ul>
<li>'directory' is just another name for a folder</li>
<li>directories on your computer are organized like a tree</li>
<li>directories can be inside other directories</li>
<li>we can navigate directories using the CLI</li>
</ul>

<p><u>Special directories: root</u></p>
<ul>
<li>directory at the top of the tree</li>
<li>contains all other directories</li>
<li>represented by a slash: /</li>
</ul>

<p><u>Special directories: home</u></p>
<ul>
<li>represented by a tilde: ~</li>
<li>usually contains most of your personal files, pics, music, etc.</li>
<li>name of the directory is usually the name you use to log into your computer</li>
</ul>

<p><u>CLI Basics</u></p>
<ul>
<li>when you open up the CLI, you start in your home directory</li>
<li>whatever directory you're in is called the 'working directory'</li>
<li>this is also represented by the `pwd` command: print working directory</li>
<li>the path to your working directory is traced from your root directory to your pwd</li>
</ul>

<p><u>CLI Commands</u></p>
<ul>
<li>CLI commands follow this recipe: <span class="code">command flags arguments</span></li>
<li><span class="code">command</span> - the CLI command which does the specific task</li>
<li><span class="code">flags</span> - options we give to the command to trigger certain behaviors, preceded by a <span class="code">-</span></li>
<li><span class="code">arguments</span> - can be what the command is going to modify, or other options for the command</li>
</ul>

<p>Depending on the command, there can be zero or more flags and arguments</p>

<p><span class="code">clear</span> will clear out the commands in your current CLI window</p>

<p><span class="code">ls</span> lists files and folders in the current directory</p>

<p><span class="code">ls -a</span> lists hidden and unhidden files and folders</p>

<p><span class="code">ls -la</span> lists details for hidden and unhidden files and folders</p>

<p><span class="code">cd</span> stands for 'change directory'</p>
<ul>
<li>takes as an argument the directory you want to visit</li>
<li>with no argument, it takes you to your home directory</li>
<li>with <span class="code">..</span>, it allows you to change to the directory above your pwd</li>
</ul>

<p><span class="code">mkdir</span> stands for 'make directory'</p>
<ul>
<li>takes as an argument the name of the directory you want to create</li>
</ul>

<p><span class="code">touch</span> creates an empty file</p>
<ul>
<li>takes as an argument the name of the file you want to create</li>
</ul>

<p><span class="code">cp</span> stands for 'copy' and takes two arguments</p>
<ul>
<li>first argument: a file</li>
<li>second argument: the path to where you want the file to be copied</li>
<li>can also be used to copy the contents of directories with the <span class="code">-r</span> flag</li>
</ul>

<p><span class="code">rm</span> stands for 'remove'</p>
<ul>
<li>takes the name of a file you wish to remove as its argument</li>
<li>you can remove all the files in a directory using the <span class="code">-r</span> flag</li>
</ul>

<p><span class="code">mv</span> stands for 'move'</p>
<ul>
<li>with <span class="code">mv</span>, you can move files between directories</li>
<li>you can also use it to rename files</li>
</ul>

<p><span class="code">echo</span> will print whatever arguments you provide</p>
<ul>
<li>useful for printing out stored variable values</li>
</ul>

<p><span class="code">date</span> will print the date</p>