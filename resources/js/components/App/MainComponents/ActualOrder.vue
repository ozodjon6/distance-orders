<template>
    <div class="container">
        <div class="row alert alert-warning" role="alert">
            <p>Актуальный заказ:</p>

            <p v-if="actualOrder.openOrderId">Номер заказа: <b>{{ actualOrder.openOrderId }}</b></p>
            <p v-if="actualOrder.message">Статус: <b>{{ actualOrder.message }}</b></p>
            <p v-if="actualOrder.pin">Код заказа: <b>{{ actualOrder.pin }}</b></p>
        </div>
    </div>
</template>

<script>
export default {
name: "ActualOrder",
    props: ['url_api','token', 'actualOrder'],
    data: () => ({
        actualOrder : {},
    }),
    created() {
        this.getActualOrder();
    },
    methods: {
        getActualOrder() {
            axios.post(this.url_api + '/api/actually', { outlet: this.outlet, token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.actualOrder = response.data;
                    this.$emit('update:actualOrder', this.actualOrder)
                });
        },
    },
}
</script>

<style scoped>

</style>
