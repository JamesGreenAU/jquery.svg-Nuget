// Modified from work by Steve Greatrex at http://blog.greatrexpectations.com/2013/08/09/creating-nuget-packages-with-grunt/
module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        //other task configuration here
        nuget: {
        	lib: 'jquery.svg.nuspec', 
        	anim: 'jquery.svganim.nuspec',
        	dom: 'jquery.svgdom.nuspec',
        	filter: 'jquery.svgfilter.nuspec',
        	graph: 'jquery.svggraph.nuspec',
        	plot: 'jquery.svgplot.nuspec'
        }
     });

	grunt.registerMultiTask("nuget", "Create a nuget package", function () {
	    //we're running asynchronously so we need to grab
	    //a callback
	    var done = this.async();
	    
	    // Target name such as 'lib', 'anim' etc is in this.target
	    var nuspec = this.data;

	    //invoke nuget.exe
	    grunt.util.spawn({
	        cmd: "nuget.exe",
	        args: [
	            //specify the .nuspec file
	            "pack",
	            nuspec,
	 
	            //specify where we want the package to be created
	            "-OutputDirectory",
	            "dist",
	 
	            //override the version with whatever is currently defined
	            //in package.json
	            "-Version",
	            grunt.config.get("pkg").version
	        ]
	    }, function (error, result) {
	        //output either result text or error message...
	        if (error) {
	            grunt.log.error(error);
	        } else {
	            grunt.log.write(result);
	        }
	        //...and notify grunt that the async task has
	        //finished
	        done();
	    });
	});

	grunt.registerTask("default", "nuget");
 
};