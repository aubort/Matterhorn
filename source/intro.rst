.. docstest documentation master file, created by
   sphinx-quickstart on Thu Jul 17 09:12:19 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Intro Document
====================================


=================
Code Samples
=================
This is a normal text paragraph. The next paragraph is a code sample

.. code::

  This could also be some code or anything else


You can beautifully document java code, and highlight the lines you want

.. code-block:: java
   :linenos:
   :emphasize-lines: 1,2,4

   import std.stdio;
   import yaml;

   void main()
   {
       //Read the input.
       Node root = Loader("input.yaml").load();

       //Display the data read.
       foreach(string word; root["Hello World"])
       {
           writeln(word);
       }
       writeln("The answer is ", root["Answer"].as!int);

       //Dump the loaded document to output.yaml.
       Dumper("output.yaml").dump(root);
   }


This is a normal text paragraph again.

=================
Section 2
=================

How can I write some inline code? ``just like this I guess``



=================
Drawing Tables
=================

+------------------------+------------+----------+----------+
| Header row, column 1   | Header 2   | Header 3 | Header 4 |
| (header rows optional) |            |          |          |
+========================+============+==========+==========+
| body row 1, column 1   | column 2   | column 3 | column 4 |
+------------------------+------------+----------+----------+
| body row 2             | ...        | ...      |          |
+------------------------+------------+----------+----------+
