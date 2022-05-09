var gulp = require("gulp");
var connect = require("gulp-connect");
var proxy = require("http-proxy-middleware");

gulp.task("connect", function () {
  connect.server({
    root: ["./"],
    middleware: function (connect, opt) {
      return [
        proxy("/api", {
          target: "https://layui.itze.cn",
          pathRewrite: {
            "^/api": "", // 重写请求
          },
          changeOrigin: true,
        }),
      ];
    },
  });
});

gulp.task("default", gulp.series("connect"));
