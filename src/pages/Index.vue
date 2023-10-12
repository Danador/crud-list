<template>
    <AppButton @click="showAdd = true">Добавить</AppButton>
    <table>
        <thead>
            <tr>
                <th>Никнейм</th>
                <th>Имя</th>
                <th>Email</th>
                <th>Сайт</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <TableRow
                v-for="user in users"
                :key="user.id"
                :data="user"
                @edit="showEdit = true, changeUser(user.id)"
                @delete="deleted(user.id)"
            />
        </tbody>
    </table>
    <!-- add -->
    <Modal
        v-model="showAdd"
        title="Добавить пользователя"
    >
        <form class="modal__form" @submit.prevent>
            <Info v-model="newUser"/>
            <div class="modal__buttons">
                <AppButton type="submit" @click="addUser(newUser)">Добавить</AppButton>
                <AppButton @click="showAdd = false, clearData()">Отменить</AppButton>
            </div>
        </form>
    </Modal>
    <!-- edit -->
    <Modal
        title="Редактировать пользователя"
        v-model="showEdit"
    >
        <form class="modal__form" @submit.prevent>
            <Info v-model="userCopy"/>
            <fieldset class="modal__buttons">
                <AppButton type="submit" @click="changed(userCopy)">Сохранить</AppButton>
                <AppButton @click="showEdit = false">Отменить</AppButton>
            </fieldset>
        </form>
    </Modal>
</template>

<script>
import TableRow from '../components/TableRow.vue';
import AppButton from '../components/AppButton.vue';
import Modal from '../components/Modal.vue';
import Info from '../modules/info/views/Info.vue';
import { mapGetters } from 'vuex';

export default {
    components: { TableRow, AppButton, Modal, Info },
    data() {
        return {
            getUser: {},
            newUser: {},
            userCopy: {},
            showEdit: false,
            showAdd: false
        }
    },
    computed: {
        ...mapGetters(['getUsers']),
        users() {
            return this.getUsers
        },
    },
    methods: {
        changeUser(id) {
            const list = this.$store.getters.getUsers
            this.userCopy = Object.assign({}, list.find(i => i.id === id));
        },
        deleted(id) {
            this.$store.dispatch('deleteUser', id);
        },
        changed(obj) {
            this.$store.dispatch('updateUser', obj);
            this.showEdit = false
        },
        addUser(obj) {
            if (Object.keys(this.newUser).length === 4) {
                this.$store.dispatch('addUser', {
                    id: this.$store.getters.getUsers.length + 1,
                    ...obj
                });
                this.showAdd = false
                this.newUser = {}
            }
        },
        clearData() {
            this.newUser = {}
        }
    },
    created() {
        this.$store.dispatch('fetchUsers');
    }
};
</script>

<style>
    table {
        width: 100%;
        border-spacing: 0;
        margin-top: 20px;
    }
    th {
        background-color: rgb(74, 50, 50);
        color: white;
        padding: 8px;
    }
    .cell {
        padding: 0;
        border: 1px solid grey;
        padding: 8px;
        font-weight: 600;
    }

    .modal__buttons {
        display: flex;
        gap: 8px;
    }

    .modal__form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>