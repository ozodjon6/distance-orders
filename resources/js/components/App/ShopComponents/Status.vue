<template>
    <div class="col-4 alert alert-warning" role="alert">
        <div class="container">

            <div class="row justify-content-md-center">
                <p>Статус заказа</p>

                <p v-if="actualOrder.openOrderId">Номер заказа: <b>{{ actualOrder.openOrderId }}</b></p>
                <p v-if="actualOrder.message">Статус: <b>{{ actualOrder.message }}</b></p>
                <p v-if="actualOrder.pin">Код заказа (назвать при получение): <b>{{ actualOrder.pin }}</b></p>

                <hr/>
                <p>Очередь</p>

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
name: "Status",
    props: ['url_api','token'],
    data: () => ({
        actualOrder: {},
        openOrders: {},
        client_messages: [],
    }),
    created() {

        var client_channel = client_pusher.subscribe('client-channel');
        client_channel.bind('client-event', (data) => {
            this.client_messages.push(JSON.stringify(data));
        });

        this.getActualOrder();
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
        getActualOrder() {
            axios.post(this.url_api + '/api/actually', { outlet: this.outlet, token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.actualOrder = response.data;
                });
        },
        getOpenOrders() {
            axios.post(this.url_api + '/api/getOpenOrdersForClient', { outlet: this.outlet, token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.openOrders = response.data;
                });
        },
    }
}
</script>

<style scoped>

</style>
