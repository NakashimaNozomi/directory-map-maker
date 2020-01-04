module.exports = {
  sass: {
    src: [
      "./src/scss/**/*.scss",'!' + "./src/scss/**/_*.scss"
    ],
    dest: './'+process.env.DEVELOP_DIR+'/css/',
    product: './'+process.env.PRODUCT_DIR+'/css/',
    output: 'style.css',
    watch: './src/scss/**/*'
  },
  html: {
    src: [
      "./src/html/**/*.html", '!' + "./src/html/**/_*.html"
    ],
    dest: './'+process.env.DEVELOP_DIR+'/',
    product: './'+process.env.PRODUCT_DIR+'/',
    watch: './src/html/**/*'
  },
  jsx: {
    dest: './'+process.env.DEVELOP_DIR+'/js/',
    product: './'+process.env.PRODUCT_DIR+'/js/',
    watch: './src/js/**/*'
  },
  img: {
    src: [
      "./src/img/**/*.?(png|jpg|gif|svg|ico|PNG)", '!' + "./src/img/**/_*.?(png|jpg|gif|svg|ico|PNG)"
    ],
    dest: './'+process.env.DEVELOP_DIR+'/img/',
    product: './'+process.env.PRODUCT_DIR+'/img/',
    watch: './src/img/**/*.?(png|jpg|gif|svg|ico|PNG|JPG)'
  },
};