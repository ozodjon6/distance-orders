<template>
    <div class="container">
        <div class="row alert alert-primary" role="alert">

            <p>Здравствуйте, ХХХ (+7хххххх)</p>
            <p style="color: red">*данные о клиенте, наверное лучше сделать (возврат) при запросе истории заказов в api</p>

            <hr/>

            <p>До бесплатного стакана: {{ remain.value }}</p>

            <hr/>

            <h3>Последние заказы:</h3>
            <p style="color: red">*если нужно что б прям по позициям выводилось, то нужно править в api</p>

            <ol>
                <li v-for="(lastOrder,key) in lastOrders">
                    <p style="margin: 0"><b>Торговая точка:</b> {{ lastOrder.outlet_name }}
                        <span style="color: green" v-if="key === 0">(Последний заказ)</span>
                    </p>
                    <p style="margin: 0"><b>Дата:</b> {{ lastOrder.date }}</p>
                    <p style="margin: 0"><b>Итог:</b> {{ lastOrder.price }} р.</p>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
name: "User",
    props: ['url_api','token'],
    data: () => ({
        lastOrders: {},
        remain: '',
    }),
    created() {
        this.getHistory();
    },
    methods: {
        getHistory() {
            axios.get(this.url_api + '/api/history ',{headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.lastOrders = response.data.orders;
                    this.remain = response.data.remain;
                })
                .catch( response => {
                    this.message = 'Ошибка данных';
                });
        },
    }
}
</script>

<style scoped>

</style>
