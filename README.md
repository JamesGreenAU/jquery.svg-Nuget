jquery.svg-Nuget
================

NuGet Packages for Keith Wood's jQuery SVG.

*Plesse note*:  These files are to support using Keith Wood's jQuery SVG library when managing dependencies in NuGet.

For downloads and documentation of jQuery SVG please visit [http://keith-wood.name/svg.html](http://keith-wood.name/svg.html).  These NuGet packages assume that you already have jQuery SVG in the folder.

NuGet Package Spec Files and Gruntfile
======================================

This repo contains NuGet spec files ad a grunt file that can be used to build NuGet packages for the core plugin and extensions.

Grunt has been fitted with a "nuget" multi-task.  The default target in the gruntfile builds all packages from sources in the same folder.

	> grunt 