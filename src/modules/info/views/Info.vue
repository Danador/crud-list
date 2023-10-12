<template>
    <fieldset class="fields">
        <Input
            v-for="(field, i) in fields"
            :key="i"
            :id="field.id"
            :name="field.id"
            :label="field.label"
            :type="field.type"
            :required="true"
            :validation="field.validation"
            v-model="model[field.id]"
        />
    </fieldset>
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
                        id: 'username',
                        label: 'Никнейм',
                        min: 4,
                        max: 32,
                        validation: 'Ввведите ник'
                    },
                    {
                        id: 'name',
                        label: 'Имя',
                        min: 2,
                        max: 32,
                        validation: 'Ввведите имя'
                    },
                    {
                        id: 'email',
                        label: 'E-mail',
                        type: 'email',
                        validation: 'Введите почту'
                    },
                    {
                        id: 'website',
                        label: 'Сайт',
                        validation: 'Введите сайт'
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