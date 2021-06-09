const {series, parallel, src, dest} = require('gulp');

const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const gettext = require('gulp-gettext');
const babel = require('gulp-babel');
const fs = require('fs');
var exec = require('child_process').exec;

//********************
// JavaScript Minify
//********************
function js_minify_framework(cb) {
    src('./project/htdocs/framework-static/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('crtx.min.js'))
        .pipe(dest('./project/htdocs/framework-static/js/dist'));
    cb();
}
function js_minify(cb) {
    src('./project/htdocs/static/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('project.min.js'))
        .pipe(dest('./project/htdocs/static/js/dist'));
    cb();
}
function js_minify_libs(cb) {
    src('./project/htdocs/static/js/libs/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(dest('./project/htdocs/static/js/dist'));
    cb();
}

//********************
// Sass CSS
//********************
function sass_compile_framework(cb) {
    src('./project/htdocs/framework-static/css/*.scss')
        .pipe(sass())
        .pipe(dest('./project/htdocs/framework-static/css'));
    cb();
}
function sass_compile(cb) {
    src('./project/htdocs/static/css/*.scss')
        .pipe(sass())
        .pipe(dest('./project/htdocs/static/css'));
    cb();
}

//********************
// CSS minify
//********************
function css_minify_libs(cb) {
    src('project/htdocs/static/css/libs/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(concat('libs.min.css'))
        .pipe(dest('project/htdocs/static/css/dist'));
    cb();
}
function css_minify(cb) {
    src('project/htdocs/static/css/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(concat('project.min.css'))
        .pipe(dest('project/htdocs/static/css/dist'));
    cb();
}

//********************
// CSS minify
//********************
function gettext_compile(cb) {
    src('project/translations/**/*.po')
        .pipe(gettext())
        .pipe(dest('project/translations'));
    cb();
}

//********************
// Composer
//********************
function composer_autoload(cb) {
    exec('./composer dump-autoload --optimize --apcu', function (err, stdout, stderr) {
        cb(err);
    });
}

exports.default = parallel(
    js_minify_framework,
    js_minify,
    js_minify_libs,
    sass_compile_framework,
    sass_compile,
    css_minify_libs,
    css_minify,
    gettext_compile,
    composer_autoload
);

exports.dump = parallel(
    composer_autoload
);
