<template>
    <div class="col-4 alert alert-warning" role="alert">
        <div class="container">

            <div class="row justify-content-md-center">

                <div class="col-12">
                    <h2>Список заказа</h2>

                    <ol>
                        <li v-for="item in cart">
                            {{  item.name }} , цена: {{ item.cost }} р.
                        </li>
                    </ol>

                    <br/>

                    <button type="button" class="btn btn-dark" v-on:click="nextPage()">Далее</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Order",
    props: ['url_api','token','cart'],
    data: () => ({

    }),
    created() {
    },
    methods: {
        nextPage() {
            this.$emit('update:nextPage', 7)
        }
    }
}
</script>

<style scoped>

</style>
