<template>
    <label 
        class="field-container" 
        :for="id"
    >
        <span v-if="label" class="field-label">{{ label }}{{ required ? '*' : '' }}</span>
        <input 
            class="field"
            :id="id" 
            :name="name"
            :minlength="minlength"
            :maxlength="maxlength"
            :type="type" 
            :placeholder="placeholder"
            :required="required"
            v-model="model"
        >
        <span class="field-validation" v-if="validation">{{ validation }}</span>
    </label>
</template>
  
<script>
    export default {
        name: 'Input',
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                required: false
            },
            validation: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                required: false
            },
            label: {
                type: String,
                required: false
            },
            minlength: {
                type: String,
                required: false
            },
            maxlength: {
                type: String,
                required: false
            },
            modelValue: {
                type: [String, Number]
            },
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

<style scoped>
    .field-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .field {
        outline: none;
        border: 1px solid blue;
        border-radius: 6px;
        font-size: 16px;
        line-height: 22px;
        transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms;
        width: 100%;
        padding: 8px 12px;
        box-sizing: border-box;
    }

    .field:hover {
        border-color: blueviolet;
    }

    .field:focus {
        border-color: blueviolet;
    }

    .field-validation {
        color: red;
        font-size: 12px;
        line-height: 16px;
        opacity: 0%; 
    }

    .field:invalid {
        color: red;
    }

    .field:invalid + .field-validation {
        opacity: 100%;
    }

    .field-label {
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
    }
</style>