module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'release/tracker.js': ['src/tracker.js']
        },

      },
    },
  uglify: {
    my_target: {
      files: {
        'release/tracker.min.js': ['release/tracker.js']
    }
  }
},
jshint: {
    all: ['src/**/*.js']
}
});

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['jshint','browserify', 'uglify']);
  grunt.registerTask('test', ['jshint']);

};
