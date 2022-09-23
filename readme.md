# video2frames

[video2frames]()使用[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)导出 🔥

## Installation 📦


在浏览器中使用:
```html
<script type="module">
    import video2frames from 'video2frames.js'
</script>
```
或者您使用了包管理工具如`npm`或`yarn`:
```shell
$ npm install -S video2frames
```
或
```shell
$ yarn install -S video2frames
```

## Example 👏
```js
import video2frames from '../index.js'
const arr = []
const url = ''
video2frames(url, arr, 200)
```

## API 🌟
- source [String]

    视频地址，如本地文件请转为Blob Url使用
- container [Array]

    存储帧图数组
- time

    抽帧时间间隔