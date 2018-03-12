'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 */
var popup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"popup-fade"}},[(_vm.type == 'show')?[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"ro-popup-container",class:[_vm.containerClass, {fixed: _vm.mode == 'fixed', absolute: _vm.mode == 'absolute'}],style:(_vm.containerStyle),on:{"click":_vm.onClickContainer}},[_c('div',{staticClass:"popup",class:[_vm.position, _vm.contentClass,],style:(_vm.contentStyle),on:{"click":_vm.noop}},[_vm._t("default")],2)])]:_vm._e(),_vm._v(" "),(_vm.type == 'if')?[(_vm.value)?_c('div',{staticClass:"ro-popup-container",class:[_vm.containerClass, {fixed: _vm.mode == 'fixed', absolute: _vm.mode == 'absolute'}],style:(_vm.containerStyle),on:{"click":_vm.onClickContainer}},[_c('div',{staticClass:"popup",class:[_vm.position, _vm.contentClass,],style:(_vm.contentStyle),on:{"click":_vm.noop}},[_vm._t("default")],2)]):_vm._e()]:_vm._e()],2)},staticRenderFns: [],
    name: 'Popup',
    props: {
        /**
         * 显示与否
         */
        value: {
            required: true,
            type: Boolean,
            default: false,
        },
        /**
         * 固定模式，可以是fixed或者是absolute
         */
        mode: {
            type: String,
            default: 'fixed',
        },
        /**
         * 位置，允许bottom/center/top
         */
        position: {
            type: String,
            default: 'bottom',
        },
        /**
         * 容器类
         */
        containerClass: {
            type: [ Object, Array, ],
        },
        /**
         * 容器样式
         */
        containerStyle: {
            type: [ Object, Array, ],
        },
        /**
         * 内容类
         */
        contentClass: {
            type: [ Object, Array, ],
        },
        /**
         * 内容样式
         */
        contentStyle: {
            type: [ Object, Array, ],
        },
        /**
         * 显示方式
         */
        type: {
            type: String,
            default: 'show',
        },
        /*
         * 是否模态
         */
        modal: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        /**
         * 点击容器，进行关闭
         */
        onClickContainer: function(e) {
            const target = e.target;
            if (!this.modal && target.className.indexOf('ro-popup-container') !== -1) {
                this.$emit('input', false);
            }
        },
        noop: function() {
            // do nothing
        },
    },
};

exports.Popup = popup;
