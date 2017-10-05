module.exports = function(grunt) {
grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),
exec: {
    list_files: {
      cmd: 'ls -l **'
    },
    list_all_files: 'ls -la',
    echo_grunt_version: {
      cmd: function() { return 'echo ' + this.version; }
    },
    echo_name: {
      cmd: function(firstName, lastName) {
        var formattedName = [
          lastName.toUpperCase(),
          firstName.toUpperCase()
        ].join(', ');
 
        return 'echo ' + formattedName;
      }
    }
  }

});

grunt.loadNpmTasks('grunt-exec');

}
