<template>
    <div class="container">
        <div class="row alert alert-primary" role="alert">
            <button class="btn btn-primary" v-on:click="createLastOrder()">Повторить последний заказ</button>
            <button class="btn btn-success" style="margin-top: 10px;" v-on:click="createNewOrder()">Оофрмить новый заказ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Order",
    props: ['url_api','token', 'orderItems', 'selectOutlet'],
    data: () => ({
        actualOrder : {},
    }),
    created() {

    },
    methods: {
        createNewOrder() {
            if (this.orderItems.length <= 0) {
                alert('Необходимо добавить товар');
                return;
            }

            axios.post(this.url_api + '/api/sendDistanceOrder', { token : this.token , orderItems : this.orderItems, outletId: this.selectOutlet } ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    if (response.data.error === 'true') {
                        alert(response.data.message);
                        this.lastOrder = response.data.openOrders;
                        return;
                    }

                    this.getActualOrder();
                });
        },
        getActualOrder() {
            axios.post(this.url_api + '/api/actually', { outlet: this.outlet, token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.actualOrder = response.data;
                    this.$emit('update:actualOrder', this.actualOrder)
                });
        },
        createLastOrder() {
            alert('Еще рано');
        },

    },
}
</script>

<style scoped>

</style>
