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

<style>
    @import "./node_modules/popup/dist/popup.css";
</style>
```

渲染后结果大致如下

```html
    <div v-if="value"
        class="ro-popup-container"
        :class="[containerClass, {fixed: mode == 'fixed', absolute: mode == 'absolute'}]"
        :style="containerStyle"
        @click="onClickContainer">
        <div class="popup"
            :class="[position, contentClass, {'popup-iphonex': fitIphonex}]"
            :style="contentStyle"
            @click="noop">
            ...
        </div>
    </div>
```

其中 `div.ro-popup-container` 作为容器和遮罩，生成底部半透明黑色图层
`div.popup` 作为内容的容器，实现popup的居中/居上/居下的效果

### Props

| key | value | type | default | 
| --- | --- | --- | --- |
| value | 是否显示popup | boolean | required |
| position | 控制居中/居上/居下 | enum<string> = 'bottom', 'center', 'top' | 'bottom' |
| mode | 位置固定方式。控制使用position: fixed或者position: absolute | enum<string> = 'fixed', 'absolute' | 'fixed' |
| type | 显示方式。可以是if/show | enum<string> = 'if', 'show' | 'show' |
| moda | 是否模态 | boolean | false |
| fitIphonex | 是否适配iphonex | boolean | false |
| containerClass | "容器"样式类 | Array, object | null |
| containerStyle | "容器"样式 | Array, object | null |
| contentClass | "内容"样式类 | Array, object | null |
| contentStyle | "容器"样式 | Array, object | null |

### Events

| key | description | payload |
| --- | --- | --- |
| input | 当显示/隐藏时将触发该事件 | true/false |