<template>
    <button
        class="btn"
        :type="type"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        type: {
            type: String,
            required: false
        }
    }
}
</script>
<style scoped>
    .btn {
        border-radius: 8px;
        color: white;
        background-color: blueviolet;
        font-weight: 700;
        padding: 12px 16px;
        transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms;
        border: none;
        cursor: pointer;
    }

    .btn:hover {
        opacity: 50%;
    }

    .btn:disabled {
        pointer-events: none;
    }
</style>