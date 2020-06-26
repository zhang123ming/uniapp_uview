/**
 * 一、 关于在uniapp 中  如何使用uview-ui？
 * 1、npm install uview-ui 下载
 * // 安装node-sass（根据实际情况 下载一下两个包）
 * npm i node-sass -D
 * //安装 sass-loader
 *  npm i sass-loader -D
 * 
 * 2、在main.js中引入  并且使用
 * import  uView from "uview-ui";
 * Vue.use(uView);
 * 
 * 3、在uni.scss 文件中  引入uview的全局scss主题文件
 * @import 'uview-ui/theme.scss';
 * 
 * 4、在app.vue  文件中 首行的位置引入  注意给sytle添加 lange="scss"
 *  @import "uview-ui/index.scss";
 * 
 * 5、配置easycom模式 在pages.json中    与pages同级别
 *   "easycom": {
 *	"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
 *	},
 * 
 * 二、内敛样式
 * 1、文字超出省略 
 *  u-line-1（行数1-5）
 * 2、字体大小
 *  u-font-12(数字大小10-40)
 * 3、文字对齐
 * u-text-left(文字对齐位置：left、center、right)
 * 4、内外边距
 * u-padding-x
 * u-padding-left-x
 * u-padding-right-x
 * u-padding-top-x
 * u-padding-bottom-x
 * u-margin-x
 * margin 同上...
 * 5、边框
 * u-border-bottom(top)
 * 6、字体颜色
 * u-mian-color
 * u-content-color
 * u-tips-color
 * 7、主题颜色
 * u-type-primary
 * u-type-warning
 * u-type-success
 * u-type-error
 * 
 * 
 * */
