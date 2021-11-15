<template>
    <div class="col-4 alert alert-warning" role="alert">
        <div class="container">

            <div class="row justify-content-md-center">

                <div class="col-12">
                    <h2>Выбор точки</h2>

                    <select class="form-control" v-model="outletId">
                        <option v-for="outlet in outlets" v-bind:value="outlet.id">{{ outlet.name }}</option>
                    </select>

                    <br/>

                    <button type="button" class="btn btn-dark" v-on:click="createNewOrder()">Заказать</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
name: "Outlet",
    props: ['url_api','token', 'cart'],
    data: () => ({
        outlets : {},
        outletId : 0,
    }),
    created() {
        this.getOutlets();
    },
    watch: {
        outletId() {
            this.$emit('update:outletId', this.outletId)
        }
    },
    methods: {
        getOutlets() {
            axios.post(this.url_api + '/api/outlets', {token: this.token},
                {headers: {Authorization: `Bearer ` + this.token}})
                .then(response => {
                    this.outlets = response.data;
                });
        },
        createNewOrder() {
            axios.post(this.url_api + '/api/sendDistanceOrder', { token : this.token , orderItems : this.cart, outletId: this.outletId } ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.$emit('update:nextPage', 8)
                });
        },
    }
}
</script>

<style scoped>

</style>
