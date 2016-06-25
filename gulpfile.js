var gulp = require('gulp'),
	scss = require('gulp-sass'),
	imagemin = require('gulp-imagemin'),
	livereload = require('gulp-livereload'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	minifycss = require('gulp-minify-css'),
    sasslint = require('gulp-sass-lint'),
    eslint = require('gulp-eslint'),
    htmlmin = require('gulp-htmlmin'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
	uglify = require('gulp-uglify');



// <--start lint-->  
gulp.task('sasslint', function () {
    gulp.src('./src/scss/*')
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
});

gulp.task('eslint', function() {  
    gulp.src('./src/js/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});
gulp.task('lint',['sasslint','eslint']);
// <--end lint-->  





// <--start dev-->
gulp.task('scss', function () {
    gulp.src('./src/scss/main.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(minifycss())
        .pipe(gulp.dest('./dev/css'))
        .pipe(livereload()); 
});

gulp.task('imagemin', function () {
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dev/img'))
        .pipe(livereload());
});

gulp.task('jsmin', function() {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dev/js'))
        .pipe(livereload());
});

gulp.task('htmlmin', function() {
    gulp.src('./src/templates/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dev/templates'))
        .pipe(livereload());
});

gulp.task('dev',['scss','imagemin','jsmin','htmlmin']);

//can also watch 
gulp.task('watch',['dev'],function() {
    gulp.watch('./src/scss/*.scss', ['scss']);
    gulp.watch('./src/js/*.js', ['jsmin']);
    gulp.watch('./src/templates/*.html', ['htmlmin']);
    livereload.listen();
});
//<--end build-->


//<--start build-->
gulp.task('build',function(){
    gulp.src('./src/templates/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/templates'))
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(scss().on('error', scss.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(minifycss())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./dist/css'))
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));   
})
//<--end build-->

