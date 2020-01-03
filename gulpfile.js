require('dotenv').config();

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const htmlbeautify = require('gulp-html-beautify');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const config = require('./config');
const configSass = config.sass;
const configHtml = config.html;
const configJsx = config.jsx;
const configImg = config.img;

let environment = process.env.NODE_ENV || 'development';
let isDevelop = !!(environment == 'development');
let destination = isDevelop ? 'dest' : 'product';

// live reload
gulp.task('browser-sync', (done) => {
  browserSync.init({
    //ローカル開発
    server: {
    baseDir: "./develop/",
    },
    files: ['./**/*.html', './img/**/*'],
  });
  done();
});

gulp.task('sass', (done) => {
  gulp.src(configSass.src)
    // エラー通知
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    // Sassの@importにおけるglobを有効にする
    .pipe(sassGlob())
    // 整形
    .pipe(sass({outputStyle : isDevelop ? 'expanded': 'compressed'}))
    // vendor prefixの付与
    .pipe(autoprefixer(configSass.autoprefixer))
    .pipe(gulp.dest(configSass[destination]))
    //ブラウザ出力
    .pipe(browserSync.reload({
      stream: true
    }));
  done();
});

// HTML　整形だけして出力
gulp.task('html', (done) => {
  gulp.src(configHtml.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(htmlbeautify({
      "indent_size": 4,
      "max_preserve_newlines": 1
    }))
    .pipe(gulp.dest(configHtml[destination]))
    .pipe(browserSync.reload({
      stream: true
    }));
  done();
});

gulp.task("jsx", (done) => {
  webpackStream({
    mode: environment,
    entry: [
      './src/js/index.jsx',
    ],
    output: {
      path: isDevelop ? __dirname+'/'+process.env.DEVELOP_DIR : __dirname+'/'+process.env.PRODUCT_DIR,
      filename: "[name].js",
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: [">0.2% in JP", "not ie <= 10", "not op_mini all"],
                    useBuiltIns: 'entry',
                    modules: false,
                    corejs: 3
                  }
                ],
              ],//presets
              sourceType: 'unambiguous',
            }//options
          }
        ],
        resolve: {
          extensions: ['.js', '.jsx']
        },
      }],
    },
  }, webpack)
  .pipe(plumber({
    errorHandler: () => {
      this.emit('end');
      notify.onError('<%= error.message %>');
    }
  }))
  .pipe(gulp.dest(configJsx[destination]))
  .pipe(browserSync.reload({
    stream: true
  }));

  done();
});



//static//////////
gulp.task('jquery', (done) => {
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(configJsx[destination]));
  done();
});

gulp.task("img", (done) => {
  gulp.src(configImg.src)
    .pipe(gulp.dest(configImg[destination]))
    .pipe(browserSync.reload({
      stream: true
    }));

  done();
});
gulp.task('materialize', (done) => {
  gulp.src('./node_modules/materialize-css/dist/css/materialize.min.css')
    .pipe(gulp.dest(configSass[destination]));

  gulp.src('./node_modules/materialize-css/dist/js/materialize.min.js')
    .pipe(gulp.dest(configJsx[destination]));

  done();
});

gulp.task('icon', (done) => {
  gulp.src([
      './node_modules/material-design-icons-iconfont/dist/**/*',
      '!./node_modules/material-design-icons-iconfont/dist/LICENSE',
      '!./node_modules/material-design-icons-iconfont/dist/*.map'
    ])
    .pipe(gulp.dest(configSass[destination]+'/material-icons/'));
  done();
});

gulp.task('static', gulp.parallel('jquery', 'img', 'materialize', 'icon'));

gulp.task('watch', (done) => {
  gulp.watch(configSass.watch, gulp.series("sass"));
  gulp.watch(configHtml.watch, gulp.series("html"));
  gulp.watch(configJsx.watch, gulp.series("jsx"));
  gulp.watch(configImg.watch, gulp.series("img"));

  done();
});

gulp.task('default', gulp.series(gulp.parallel('sass','html','jsx', 'static'),'browser-sync','watch') );

//開発用の出力
gulp.task("dev", gulp.parallel('sass','html','jsx', 'static'));

//以下はデプロイ用タスク
gulp.task("product",
  gulp.series(
    (done) => {
      //各envを本番ように変更する
      environment = 'production';
      isDevelop = false;
      destination = 'product';

      done();
    },
    gulp.parallel('sass','html','jsx', 'static')
  )
);