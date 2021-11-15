<template>
    <div class="container">
        <div class="row alert alert-success" role="alert">
            <p>Текущий заказ:</p>

            <div class="col-6 alert alert-primary" role="alert" v-for="orderItem in orderItems">
                <p>{{  orderItem.name }} , цена: {{ orderItem.cost }} р.</p>
            </div>

            <div class="col-12 alert alert-dark" role="alert">
                <p>Итоговая стоимость: {{ sum }} р.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "OrderItem",
    props: ['url_api','token', 'orderItems'],
    data: () => ({
        sum : 0,
    }),
    created() {

    },
    watch: {
        orderItems : {
            handler: function(val, oldVal) {
                val.forEach((item, i, arr) => {
                    this.sum += item.cost;
                });
            }
        },
    },
    methods: {
    },
}
</script>

<style scoped>

</style>
