<template>
    <transition name="fade">
        <div v-if="model" class="modal">
            <div class="modal__container">
                <div class="modal__head">
                    <p v-if="title">{{ title }}</p>
                    <button @click="model = false" class="modal__close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g id="close">
                                <path fill="currentColor" id="x" d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"/>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="modal__body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'modal',
    props: {
        title: {
            type: String,
            required: false
        },
        modelValue: {
            type: Boolean
        }
    },
    computed: {
        model: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:modelValue", value);
            }
        }
    }
};
</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .modal {
        background-color: rgba(0,0,0, 50%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 10;
        inset: 0;
    }
    .modal__container {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        width: 100%;
        max-width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .modal__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .modal__body {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .modal__close-btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: all cubic-bezier(0.23, 1, 0.320, 1) 300ms;
    }
    .modal__close-btn:hover {
        color: red;
    }
</style>