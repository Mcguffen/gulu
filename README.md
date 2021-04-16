# gulu 一个Vue UI 组件

作者：Mcguffen

## install
```
npm i 包名
```
- 使用本框架前，请在css中开启 border-box
```
*{box-sizing: border-box;}
```
- 引入css
``` css
import '包名/dist/index.css'
```
- 引入颜色样式
引入下面的css
``` css
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /*按钮高度*/
            --button-height: 32px;
            /*字体大小*/
            --font-size: 14px;
            /*按钮的背景颜色*/
            --button-bg: white;
            /*按钮被按下的*/
            --button-active-bg: #eee;
            /*圆角*/
            --border-radius: 4px;
            /*字体颜色*/
            --color: #333;
            /*字体大小*/
            --border-color: #999;
            --border-color-hover: #666;

        }
```