<template>
    <div class="container">
        <div class="row justify-content-md-center">

            <div class="col-4">
                <h2>Регистрация</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail2" class="form-label">Имя</label>
                    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" v-model="name">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Пароль</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>
                <p v-if="message" style="color: red;"> {{ message }}</p>
                <button type="submit" class="btn btn-primary" v-on:click="registration()">Зарегистрироватся</button>
                <router-link :to="'/login'">Вход</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        url_api: $("meta[name='url_api']").attr("content"),
        email: '',
        name: '',
        password: '',
        token: '',
        message: '',
    }),
    created() {
    },
    methods: {
        registration() {
            let data = {
                email : this.email,
                name : this.name,
                password : this.password
            };

            this.message = '';

            axios.post(this.url_api + '/api/register', data)
                .then(response => {
                    this.token = response.data.token;

                    this.message = '';

                    if (this.tokent && his.token !== '') {
                        this.updateSession();
                    } else {
                        this.message = response.data.message;
                    }
                })
                .catch( response => {
                    this.message = 'Произошла ошибка';
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
