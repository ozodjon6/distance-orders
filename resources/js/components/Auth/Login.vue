<template>
    <div class="container">
        <div class="row justify-content-md-center">

            <div class="col-12">
                <h2>Авторизация</h2>
                <div class="mb-3">
                    <label for="exampleInputphone1" class="form-label">Номер телефона</label>
                    <input type="tel" class="form-control" id="exampleInputphone1" aria-describedby="phoneHelp" v-model="phone">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Пароль</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>
                <p v-if="message" style="color: red;"> {{ message }}</p>
                <a  href="/shop" class="btn btn-success">Магазин</a>
                <button type="submit" class="btn btn-primary" v-on:click="login()">Вход</button>
                <router-link :to="'/registration'">Регитрация</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        url_api: $("meta[name='url_api']").attr("content"),
        phone: '',
        password: '',
        token: '',
        message: '',
    }),
    created() {
    },
    methods: {
        login() {
            let data = {
                phone : this.phone,
                password : this.password
            };

            this.message = '';

            axios.post(this.url_api + '/api/login', data)
                .then(response => {
                    this.token = response.data.token;

                    if (this.token !== '') {
                        this.updateSession();
                    }
                })
                .catch( response => {
                    this.message = 'Неверный логин или пароль';
                });
        },
        updateSession() {
            axios.post( '/session', { token : this.token })
                .then(response => {
                    document.location = '/';
                });
        }
    }
}
</script>

<style scoped>

</style>
