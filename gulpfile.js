var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
 
gulp.task('default', function () {
    return gulp.src([
    		"src/module.js",
    		"spec/moduleSpec.js"
    	])
        .pipe(jasmine());
});