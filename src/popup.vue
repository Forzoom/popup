<template>
    <transition name="popup-fade">
        <template v-if="type == 'show'">
            <div v-show="value"
                class="ro-popup-container"
                :class="[containerClass,
                {fixed: mode == 'fixed', absolute: mode == 'absolute'}]"
                :style="containerStyle"
                @click="onClickContainer">
                <div class="popup" :class="[position, contentClass,]" :style="contentStyle" @click="noop">
                    <slot></slot>
                </div>
            </div>
        </template>
        <template v-if="type == 'if'">
            <div v-if="value"
                class="ro-popup-container"
                :class="[containerClass,
                {fixed: mode == 'fixed', absolute: mode == 'absolute'}]"
                :style="containerStyle"
                @click="onClickContainer">
                <div class="popup" :class="[position, contentClass,]" :style="contentStyle" @click="noop">
                    <slot></slot>
                </div>
            </div>
        </template>
    </transition>
</template>

<script>
    /**
     *
     */
    export default {
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
            onClickContainer(e) {
                const target = e.target;
                if (!this.modal && target.className.indexOf('ro-popup-container') !== -1) {
                    this.$emit('input', false);
                }
            },
            noop() {
                // do nothing
            },
        },
    };
</script>

<style lang="less">
    .ro-popup-container {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        overflow: auto;
        -webkit-overflow-scrolling: touch;

        .popup {
            position: absolute;
            left: 0;
            width: 100%;
            overflow: auto;
            -webkit-overflow-scrolling: touch;

            // 居上
            &.top {
                top: 0;
                &.shadow {
                    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
                }
            }
            // 居下
            &.bottom {
                bottom: 0;
                &.shadow {
                    box-shadow: 0 -4px 25px rgba(0, 0, 0, 0.5);
                }            
            }
            // 居中
            &.center {
                top: 50%;
                transform: translate3d(0, -50%, 0);
            }
        }
        &.fixed {
            position: fixed;
            z-index: 20; // 默认20
        }
        &.absolute {
            position: absolute;
        }
    }

    // iphonex适配
    @supports (padding-bottom: constant(safe-area-inset-bottom)) {
        .popup {
            padding-bottom: constant(safe-area-inset-bottom);
        }
    }

    // 动画
    .popup-fade-enter-active,
    .popup-fade-leave-active {
        transition: all 0.3s ease;
    }

    .popup-fade-enter,
    .popup-fade-leave-active {
        opacity: 0;
        transform: translateX(0%);
    }

    .popup-fade-leave-active {
        transform: translateX(0%);
    }
</style>