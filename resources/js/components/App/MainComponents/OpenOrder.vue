<template>
    <div class="container">
        <div class="row alert alert-success" role="alert">
            <p>Очередь заказов:</p>

            <div class="col-12 ">
                <ol >
                    <li v-for="order in openOrders">
                        <p v-if="!order.pin">Заказа №{{order.id}}, статут - {{order.status}}</p>
                        <p v-if="order.pin" style="color: green">Заказа №{{order.id}}, статут - {{order.status}}</p>
                    </li>
                </ol>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "OpenOrder",
    props: ['url_api','token', 'actualOrder'],
    data: () => ({
        openOrders : {},
        client_messages: [],
    }),
    created() {

        var client_channel = client_pusher.subscribe('client-channel');
        client_channel.bind('client-event', (data) => {
            this.client_messages.push(JSON.stringify(data));
        });

        this.getOpenOrders();
    },
    watch : {
        client_messages :  {
            handler: function(val, oldVal) {

                let response = JSON.parse(val[val.length - 1]);

                if (response.statusUpdate && this.openOrders.length > 0) {
                    let openOrder = this.openOrders;
                    for (let key in openOrder) {
                        for (let keyR in response.openOrders) {
                            if (openOrder[key].id  === response.openOrders[keyR].id) {
                                openOrder[key].status = response.openOrders[keyR].status;

                                if (this.actualOrder) {
                                    if (this.actualOrder.openOrderId === response.openOrders[keyR].id) {
                                        this.actualOrder.message = response.openOrders[keyR].status
                                        this.$emit('update:actualOrder', this.actualOrder)
                                    }
                                }

                            }
                        }
                    }
                } else {
                    this.openOrders = [];
                    this.openOrders = response.openOrders;
                }
            }
        },
    },
    methods: {
        getOpenOrders() {
            axios.post(this.url_api + '/api/getOpenOrdersForClient', { outlet: this.outlet, token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.openOrders = response.data;
                });
        },
    },
}
</script>

<style scoped>

</style>
