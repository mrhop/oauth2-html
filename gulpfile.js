const gulp = require('gulp');
const compass = require('gulp-compass');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');
const reactify = require('reactify');
const streamify = require('gulp-streamify');
const envify = require('envify/custom');
const babel = require('gulp-babel');


const path = {
    SASS_SRC:'scss',
    WORK_SRC:'public',
    CSS_SRC:'public/css',
    ASSET_SRC:'public/assets',
    JS_SRC:'public/js',
    DEST_SRC:'dest',
    DEST_CSS_SRC:'dest/css',
    DEST_ASSET_SRC:'dest/assets',
    DEST_JS_SRC:'dest/js'
};


gulp.task('compass-dev', function() {
    gulp.src(path.SASS_SRC+'/basic.scss').pipe(compass({
        sass: path.SASS_SRC,
        css:path.CSS_SRC
    })).pipe(gulp.dest(path.CSS_SRC));
});

gulp.task('compass-prod', function() {
    gulp.src(path.SASS_SRC+'/basic.scss').pipe(compass({
        sass: path.SASS_SRC,
        css:path.CSS_SRC
    })).pipe(minifyCSS()).pipe(gulp.dest(path.DEST_CSS_SRC));
});

gulp.task('copy-once', function() {
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*').pipe(gulp.dest('public/assets/fonts/bootstrap/'));
    gulp.src('node_modules/holderjs/holder.min.js').pipe(gulp.dest(path.JS_SRC+'/dev'));
});
gulp.task('copy-main', function() {
    gulp.src(path.WORK_SRC+'/**/*.html').pipe(gulp.dest(path.DEST_SRC));
    gulp.src(path.ASSET_SRC+'/**').pipe(gulp.dest(path.DEST_ASSET_SRC));
    gulp.src(path.JS_SRC+'/dev/holder.min.js').pipe(gulp.dest(path.DEST_JS_SRC+'/dev/'));
});

gulp.task('browserify-basic', function() {
     gulp.src(path.JS_SRC+'/dev/self/basic.js').pipe(browserify({
        transform: ['reactify',envify({
            NODE_ENV: 'development'
        })],
        extensions: ['.jsx','.js']
    })).pipe(babel({
         presets: ['es2015']
     })).pipe(gulp.dest(path.JS_SRC));
});

gulp.task('browserify-prod', function() {
    gulp.src(path.JS_SRC+'/dev/self/basic.js').pipe(browserify({
        transform: ['reactify',envify({
            NODE_ENV: 'production'
        })],
        extensions: ['.jsx','.js']
    })).pipe(babel({
        presets: ['es2015']
    }))
        .pipe(streamify(uglify())) // where the uglify cause something wrong
        .pipe(gulp.dest(path.DEST_JS_SRC));
});

gulp.task('watch', function() {
    gulp.watch(path.SASS_SRC+'/**/*.scss', ['compass-dev']);
    gulp.watch(path.JS_SRC+'/dev/self/**/*.js', ['browserify-basic']);
    gulp.watch(path.JS_SRC+'/dev/self/**/*.jsx', ['browserify-basic']);
});

gulp.task('init', ['copy-once']);
gulp.task('build', ['browserify-prod','compass-prod','copy-main']);
