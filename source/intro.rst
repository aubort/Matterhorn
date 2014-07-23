.. docstest documentation master file, created by
   sphinx-quickstart on Thu Jul 17 09:12:19 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Getting Started
====================================


=================
Installing dependencies
=================

-----------------
Python
-----------------
Make sure python is installed by typing ``python`` in your terminal.
The current version of python installed should show.

-----------------
Sphinx
-----------------
`Sphinx <http://sphinx-doc.org>`_ can be installed in two different ways. If possible avoid to use
MacPorts since it may interfere with Homebrew.

~~~~~~~~~~~~~~~~~
Via easy_install
~~~~~~~~~~~~~~~~~
This is the preferred way to install Sphinx::

    sudo easy_install -U Sphinx


~~~~~~~~~~~~~~~~~
Via MacPorts
~~~~~~~~~~~~~~~~~
Follow the instructions to install Sphinx - you will need to use mac ports to
do that, but all the instructions are here!

Install mac ports from this page: http://www.macports.org/install.php

Once mac ports is installed, install sphinx::

  sudo port install py27-sphinx

::

  sudo port select --set python python27
  sudo port select --set sphinx py27-sphinx


-----------------
Homebrew
-----------------
Install Homebrew (the package manager for mac) following these instructions::

  ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Update Brew using::

  brew update

This package installer can be used later to install more libraries.

-----------------
Grunt and node
-----------------

Install node using brew::

  brew install node

Now install grunt::

  npm install -g grunt-cli

-----------------
Git
-----------------

I'm guessing everyone has git installed. If not, here are the instructions.
http://git-scm.com/book/en/Getting-Started-Installing-Git#Installing-on-Mac

Sourcetree:

Download sourcetree (or any other git client) here:
http://www.sourcetreeapp.com/

=================
Start writing documentation
=================

Now that all dependencies have been installed, follow these steps to get started:

-----------------
Cloning the git repository
-----------------

First go to the directory you want to clone the doc to, for example::

  cd ~/

clone the git repository::

  git clone https://github.com/aubort/Matterhorn.git documentation

This will create a new folder called ``documentation`` in the directory you are currently in
and will clone the source.

Verify that the documentation has been properly cloned::

  ls -l ./documentation/

Should output something like this::

  -rw-r--r--   1 pascal  staff  3015 Jul 23 08:40 Gruntfile.js
  -rw-r--r--   1 pascal  staff  6779 Jul 23 08:40 Makefile
  drwxr-xr-x  10 pascal  staff   340 Jul 23 08:40 node_modules
  -rw-r--r--   1 pascal  staff   330 Jul 23 08:40 package.json
  drwxr-xr-x   8 pascal  staff   272 Jul 23 08:40 source
  drwxr-xr-x  13 pascal  staff   442 Jul 23 08:40 sphinx_rtd_theme

-----------------
Starting the server
-----------------

Now that the repo has been cloned and all the files are present, go to your
documentation directory and start the grunt server. In this case::

  cd ~/documentation
  grunt

Two things should happen now:

In the terminal you should see a output similar to this::

  Pascals-MacBook-Pro:documentation pascal$ grunt
  Running "express:all" (express) task

  Running "express-server:all" (express-server) task
  Web server started on port:9000, hostname: 0.0.0.0 [pid: 35505]

  Running "open:all" (open) task

  Running "watch" task
  Waiting...


And the browser should automatically open a new tab ans point it to http://localhost:9000/


-----------------
Getting to work!
-----------------
Now that this is running, you can start editing the text files. Go to your documentation
directory and open the ``source`` folder. In there you will find the ``*.rst`` files.

Open one of the .rst files with your favourite text editor and start making changes to the documentation.
Save your edits and see the page being reloaded.

Now that you have made some modifications, you will want to commit them to the
github repo. You can either do that via the command lines, or using sourcetree.

Using Sourcetree:

1. Open Sourcetree
2. Go to ``Tools >> Open`` and select the git repo of your documentation
3. You can now commit the changes and push to the remote repository


This will trigger a build on the readthedocs.com server and you should see your changes
on http://matterhorn.readthedocs.org/en/latest/


=================
References
=================
`Reference about reStructuredText <http://sphinx-doc.org/rest.html>`_
