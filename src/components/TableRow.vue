<template>
    <tr>
        <td class="cell">{{ data.nikname }}</td>
        <td class="cell">{{ data.name }}</td>
        <td class="cell">{{ data.email }}</td>
        <td class="cell">{{ data.site }}</td>
        <td class="cell">
            <div class="buttons">
                <AppButton @click="edited">Редактировать</AppButton>
                <AppButton @click="deleted">Удалить</AppButton>
            </div>
        </td>
    </tr>
</template>
<script>
import AppButton from './AppButton.vue';

export default {
    name: 'TableRow',
    components: { AppButton },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        edited() {
            this.$emit('edit');
        },
        deleted() {
            this.$emit('delete');
        },
    }
}
</script>
<style scoped>
    .buttons {
        display: flex;
        gap: 6px;
    }
</style>