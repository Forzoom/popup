### Install

npm install @forzoom/popup

### Example

```javascript
<template>
	<div>
		<Popup v-model="visible" position="center" mode="fixed" type="if" :modal="true">
			...
		</Popup>
	</div>
</template>

<script>
	import {
		Popup,
	} from '@forzoom/popup';

	export default {
		components: {
			Popup,
		},
		data() {
			return {
				visible: false,
			};
		},
	};
</script>
```

### Props

key | value
--- | ---
value|是否显示，可以是true/false
position|位置，可以是bottom/center/top
mode|固定方式，可以是fixed/absolute
type|显示方式，可以是if/show
modal|是否模态，可以是true/false
containerClass|"容器"样式类
containerStyle|"容器"样式
contentClass|"内容"样式类
contentStyle|"容器"样式

### Version

#### 0.0.1

1. 添加基础功能

#### 0.0.2

1. 添加popup-fade动画

#### 0.0.3

1. 适配iphoneX
1. 修改样式名称

#### 0.0.4

1. 修改原本content元素中的.stop效果

#### 0.0.5

1. 适配iphonex

#### 0.0.6

1. 修复适配iphonex错误

### Changelog

#### 0.0.3

1. 修改样式名称: popup-container -> ro-popup-container

#### 0.1.0

1. 换用rollup替换webpack进行打包，输出cjs和es格式，同时输出一个css文件