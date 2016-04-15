var gulp = require('gulp');
var serve = require('gulp-serve');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');
 
gulp.task('serve',['typescript'], serve(['dist','bower_components','public']));

gulp.task('typescript', function() {
    var tsResult = tsProject.src()
		.pipe(ts(tsProject));
        
        
        return tsResult.js.pipe(gulp.dest("."));
});
