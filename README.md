# gulu 一个Vue UI 组件
[![Build Status](https://www.travis-ci.org/Mcguffen/gulu.svg?branch=master)](https://www.travis-ci.org/Mcguffen/gulu)
作者：Mcguffen

## 介绍
这是一个Vue UI组件，用于学习。
## 开始使用
### 安装
```
npm i 包名
```
1. 添加css样式
    - 使用本框架前，请在css中开启 border-box
    ```
    *{box-sizing: border-box;}
    *::before{box-sizing: border-box;}
    *::after{box-sizing: border-box;}
    ```
    IE8 以及以上版本浏览器都支持此样式。
    - 引入css
    ``` css
    import '包名/dist/index.css'
    ```
    - 引入颜色样式
      引入下面的css,后续会改成SCSS变量。
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
    IE15以及以上版本浏览器才支持此样式。
2. 安装 gulu
```bash
npm i -S gulu
```
3. 引入gulu
    ```
    import {Button, ButtonGroup, Icon} from 'gulu'
    import 'gulu/dist/index.css'
   
    export default {
        name: 'app',
        components:{
            'g-button': Button,
            'g-icon': Icon
        }
    }
   
   ```
4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_2489679_wi5lhp0suw.js"></script>
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码



