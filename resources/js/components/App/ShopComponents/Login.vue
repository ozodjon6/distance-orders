<template>
    <div class="col-4 alert alert-warning" role="alert">
        <div class="container">

            <div class="row justify-content-md-center">

                <div class="col-12">
                    <h2>Авторизация</h2>
                    <div>
                        <label class="form-label">Номер телефона</label>
                        <input type="text" class="form-control" aria-describedby="phoneHelp" v-model="user.phone">
                    </div>
                    <div >
                        <label class="form-label">Номер телефона</label>
                        <input type="text" class="form-control" aria-describedby="phoneHelp" v-model="user.phone">
                    </div>

                    <div >
                        <label class="form-label">Пароль</label>
                        <input type="password" class="form-control" aria-describedby="passHelp" v-model="user.password">
                    </div>

                    <br/>

                    <button type="submit" class="btn btn-primary" v-on:click="prevPage()">Назад</button>
                    <button type="submit" class="btn btn-primary" v-on:click="login()">Вход</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
name: "Login",
    props: ['url_api','phone'],
    data: () => ({
        user: {
            phone: '',
            password: ''
        },
        token: '',
    }),
    created() {
    },
    methods: {
        login() {

            if (this.user.phone === '' || !this.user.phone || this.user.password === '' || !this.user.password) {
                return;
            }

            let data = {
                phone : this.user.phone,
                password : this.user.password
            };

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

                    this.$emit('update:token', this.token)

                    let actualOrder = {};

                    axios.post(this.url_api + '/api/actually', {outlet: this.outlet, token: this.token},
                        {headers: {Authorization: `Bearer ` + this.token}})
                        .then(response => {
                            actualOrder = response.data;

                            if (actualOrder.pin) {
                                this.$emit('update:nextPage', 8)
                            } else {
                                this.$emit('update:nextPage', 6)
                            }
                        });
                });
        },
        prevPage() {
            this.$emit('update:prevPage', 2)
        }
    }
}
</script>

<style scoped>

h2 {
    color: red;
}

</style>
