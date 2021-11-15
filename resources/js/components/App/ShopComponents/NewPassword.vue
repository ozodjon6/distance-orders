<template>
    <div class="col-4 alert alert-warning" role="alert">
        <div class="container">

            <div class="row justify-content-md-center">

                <div class="col-12">
                    <h2>Новый пароль</h2>
                    <div >
                        <label class="form-label">Пароль</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" v-model="password">
                        <label class="form-label">Повторить пароль</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" v-model="checkPassword">
                        <p v-if="message"> {{message}} </p>
                        <button class="btn btn-success" v-on:click="registration()">Подтвердить</button>
                    </div>

                    <br/>

                    <button type="submit" class="btn btn-primary" v-on:click="prevPage()">Назад</button>
                    <!--                    <button type="submit" class="btn btn-primary" v-on:click="nextPage()">Далее</button>-->
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",
    props: ['url_api', 'phone'],
    data: () => ({
        password: '',
        checkPassword: '',
        pin: '',
        response: {},
        message: '',
    }),
    created() {
    },
    methods: {

        registration() {

            if (this.password === '') {
                alert('мало букв');
                return ;
            }

            if (this.password !== this.checkPassword) {
                alert('не похожи');
                return ;
            }

            let data = { name : 'Новый пользователь' , phone : this.phone, password : this.password };

            axios.post( this.url_api +'/api/register', data)
                .then(response => {
                    if (response.data.message === 'Register ok.') {
                        alert('Аккаунт создан, вы можете войти');
                        this.$emit('update:nextPage', 3)
                    } else {
                        alert('что то пошло не так');
                    }
                });
        },
        nextPage() {
            this.registration();
        },
        prevPage() {
            this.$emit('update:prevPage', 2)
        }
    }
}
</script>

<style scoped>

</style>
