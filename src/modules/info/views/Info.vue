<template>
    <div class="fields">
        <Input
            v-for="(field, i) in fields"
            :key="i"
            :id="field.id"
            :name="field.id"
            :label="field.label"
            :type="field.type"
            required
            v-model="model[field.id]"
        />
    </div>
</template>
<script>
    import Input from '../../../components/Input.vue';
    export default {
        name: 'Info',
        components: { Input },
        data() {
            return {
                fields: [
                    {
                        id: 'nikname',
                        label: 'Никнейм',
                    },
                    {
                        id: 'name',
                        label: 'Имя'
                    },
                    {
                        id: 'email',
                        label: 'E-mail',
                        type: 'email'
                    },
                    {
                        id: 'site',
                        label: 'Сайт'
                    }
                ]
            }
        },
        props: {
            modelValue: {
                type: Object
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
    }
</script>
<style scoped>
    .content,
    .fields {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>