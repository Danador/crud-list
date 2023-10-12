<template>
    <div class="container">
        <form @submit.preven="authorizated()" class="form">
            <Input
                id="login"
                name="login"
                label="Ваш логин"
                placeholder="введите логин"
                v-model="loginData.login"
            />
            <Input
                id="password"
                name="password"
                type="password"
                label="Ваш пароль"
                placeholder="введите пароль"
                v-model="loginData.password"
            />
            <span class="validation" v-if="valid">{{ valid }}</span>
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
    .validation {
        font-weight: 600;
        font-size: 18px;
        color: red;
    }
</style>
