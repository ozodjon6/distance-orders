<template>
    <div class="container">
        <div class="row alert alert-success" role="alert">
            <div class="col-12">
                <router-link class="btn btn-dark" :to="'/'">Главная</router-link>
                <button type="button" class="btn btn-dark" v-on:click="getOutSession()">Выход</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Head",
    methods: {
        getOutSession() {
            axios.delete('/session')
                .then(response => {
                    document.location = '/';
                });
        }
    }
}
</script>
