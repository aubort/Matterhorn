.. docstest documentation master file, created by
   sphinx-quickstart on Thu Jul 17 09:12:19 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Frequently Asked Questions
====================================


This is a normal text paragraph. The next paragraph is a code sample::

   It is not processed in any way, except
   that the indentation is removed.

   It can span multiple lines.

This is a normal text paragraph again.
An I can write and write and write!


.. code-block:: java
   :linenos:
   :emphasize-lines: 14

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
