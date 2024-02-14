/**
 * @package SCSS Boilerplate
 * @author Gui Domingues <hello@guidomingues.com>
 * @link https://github.com/guidominguesnk/scss-boilerplate
 */

/**
 * Dependencies:
 *
 * 1: Generate sourcemaps for CSS and JS.
 * 2: Rename files.
 * 3: Concatenate JS and CSS files.
 * 4: Used to clean the assets folder for a fresh export.
 * 5: Compile SASS files.
 * 6: Minifies and optimizes CSS files.
 * 7: Processes CSS with JavaScript plugins.
 * 8: Transforms CSS to older, browser-compatible syntax.
 * 9: Discards comments from CSS files.
 */
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps') /* 1 */
const rename = require('gulp-rename') /* 2 */
const concat = require('gulp-concat') /* 3 */
const clean = require('gulp-clean') /* 4 */
const sass = require('gulp-sass')(require('sass')) /* 5 */
const cssnano = require('cssnano') /* 6 */
const postcss = require('gulp-postcss') /* 7 */
const presetEnv = require('postcss-preset-env') /* 8 */
const comments = require('postcss-discard-comments') /* 9 */

/**
 * Process and compile SCSS files.
 *
 * 1: Source SCSS files.
 * 2: Initialize sourcemaps for better debugging.
 * 3: Compile SCSS to CSS and handle errors.\
 * 4: Autoprefixer configuration targeting the last 2 browser versions.
 * 5: 5: Remove all comments from the compiled CSS.
 * 6: Minify and optimize the CSS.
 * 7: Concatenate all CSS files into one.
 * 8: Add ".min" suffix to the filename for minified version.
 * 9: Write sourcemaps to a separate file.
 * 10: Output the processed CSS files to the destination directory.
 */
function devStyles() {
  return gulp
    .src('scss/styles.scss') /* 1 */
    .pipe(sourcemaps.init()) /* 2 */
    .pipe(sass().on('error', sass.logError)) /* 3 */
    .pipe(
      postcss([
        presetEnv({
          browsers: 'last 2 versions' /* 5 */,
        }),
        comments({ removeAll: true }) /* 5 */,
        cssnano() /* 6 */,
      ]),
    )
    .pipe(concat({ path: 'styles.css' })) /* 7 */
    .pipe(rename({ suffix: '.min' })) /* 8 */
    .pipe(sourcemaps.write('.')) /* 9 */
    .pipe(gulp.dest('dist/')) /* 10 */
}

/**
 * 1: Watch SCSS files, trigger devStyles and previewReload tasks.
 * 2: Log an information message indicating watching for changes.
 */
function watchFiles() {
  gulp.watch('scss/**/*.scss', gulp.series(devStyles)) /* 1 */
  console.log('\n\t🔥  Watching for changes...\n') /* 2 */
}

/**
 * Clean the DIST folder for a fresh start.
 *
 * 1: Log an information message indicating the cleaning process.
 * 2: Source the ASSETS folder for cleaning.
 *    - The `read: false` option indicates that the content of the files doesn't need to be read.
 *    - The `allowEmpty: true` option ensures that the task doesn't fail if there are no matching files.
 * 3: Clean the DIST folder.
 */
function devClean() {
  console.log(`\n\t✅  Cleaning ASSETS folder for a fresh start.\n`) /* 1 */

  return gulp
    .src('dist', {
      read: false /* 2 */,
      allowEmpty: true /* 2 */,
    })
    .pipe(clean()) /* 3 */
}

/**
 * Gulp configuration for the default task.
 *
 * 1: Clean the DIST folder.
 * 2: Run devStyles.
 * 3: Watch for live changes.
 */
exports.default = gulp.series(
  devClean /* 1 */,
  devStyles /* 2 */,
  watchFiles /* 3 */,
)
