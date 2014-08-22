var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(reload({ stream:true, tunnel:true }));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], reload);
  gulp.watch('css/*.scss', ['sass']);
});
