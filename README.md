# upload-img组件

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### publish
1. 修改README.md里面的版本号
2. 执行以下命令
```
npm run build:lib
npm login
npm publish
```

### usage

#### props
参数     | 说明       |  类型    | 可选值         |  默认值
-|-|-|-|-
title  | 抽屉标题       | String  | -    | ' ' |
closable | 是否显示右上角的关闭按钮	     | Boolean | -                            | true |
width      | 抽屉宽度     | Number \| String  | -                                | 256 |
class_name | 上传地址url        | String  | -                                | ' ' |
height | 抽屉高度，必须和class_name合用  | Number \| String  | -                                | '100%' |
mask_closable | 是否允许点击遮罩层关闭  | Boolean  | -                  | true |
mask | 是否显示遮罩层  | Boolean  | -                 | true |
showFooter | 是否展示底部slot  | Boolean  | -                 | true |

#### events
事件名称     | 说明          |  回调参数
-|-|-
on-visible-change      | 显示状态发生变化时触发   | true / false 

#### slot
name     | 说明  
-|-
content      | 内容   
footer      | 底部内容   

### Customize configuration
