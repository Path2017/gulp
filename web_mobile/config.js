module.exports = {
  css: {
    src: ['./src/css/**/*.+(css|styl|stylus|less|sass|scss)', '!./src/css/**/*.min.*'],
    dest: './dist/css'
  },
  img: {
    src: './images/**/*.**',
    dest: './dist/images'
  },
  html: {
    src: './src/*.html',
    dest: './dist',
    watch: './src/*.html'
  },
  js: {
    src: './src/js/*.js',
    dest: './dist/js'
  },
  clean: {
    src: ['./+(js|css)/**/*.min.**', '!./js/+(libs|vendor)/**/*.js']
  },
  watch: {
    src: './+(js|css)/**/*.!(min)**'
  },
  server: {
    src: ['./+(js|css)/**/*.min.**', 'src/**/*.html']
  }
}
