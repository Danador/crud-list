<template>
    <div class="container">
        <form @submit.prevent="authorizated()" class="form">
            <Input
                id="login"
                name="login"
                placeholder="Ваш логин"
                v-model="loginData.login"
                :validation="valid"
            />
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Ваш пароль"
                v-model="loginData.password"
                :validation="valid"
            />
            <AppButton
                type="submit"
            >
                Войти
            </AppButton>
        </form>
    </div>
</template>

<script>
import AppButton from '../components/AppButton.vue';
import Input from '../components/Input.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
    components: { AppButton, Input },
    data() {
        return {
            counter: 0,
            loginData: {},
            valid: '',
        };
    },
    computed: {
        ...mapGetters(['getAuthorized']),
        authList() {
            return this.getAuthorized;
        }
    },
    methods: {
        ...mapMutations(['setAuth']),
        increment() {
            this.counter++
        },
        authorizated() {
            this.authList.forEach(element => {
                if (element.login === this.loginData.login && element.password === this.loginData.password) {
                    this.setAuth(true);
                    this.valid = ''
                    this.$router.push('/')
                } else {
                    this.valid = 'Неверный логин или пароль'
                }
            });
        }
    },
};
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form {
        max-width: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
