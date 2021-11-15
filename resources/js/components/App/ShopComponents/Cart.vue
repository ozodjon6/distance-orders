<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div class="container main-container">

            <p class="pointer" v-on:click="goPage(1)">< Вернутся</p>
            <div class="row">
                <template v-for="(item,key) in cart">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="row cart-item pointer">
                            <div class="col-7">
                                <p class="shop-item-name">{{ item.name }}</p>
                            </div>
                            <div class="col-1">
                            </div>
                            <div class="col-2">
                                <p class="shop-item-price">{{ item.cost }} ₽</p>
                            </div>
                            <div class="col-2 pointer cart-remove" v-on:click="removeItem(key)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                                <p>Удалить</p>
                            </div>
                        </div>
                    </div>
                </template>

                <template v-if="cart.length <= 0">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="row cart-item pointer">
                            <div class="col-12">
                                <p class="shop-item-name">Выберите хотя бы один продукт</p>
                            </div>
                        </div>
                    </div>
                </template>

            </div>

            <div class="row">

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div>
                        <label for="point" class="form-label">Торговая точка</label>
                        <select class="form-control" id="point" v-model="outletId">
                            <option v-for="outlet in outlets" v-bind:value="outlet.id">{{ outlet.name }}</option>
                        </select>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6" style="text-align: center;">
                    <p><b>Итого</b></p>
                    <p class="shop-item-price" style="text-align: center;">{{totalPrice}} ₽</p>
                </div>
            </div>

            <div class="row">

                <div v-on:click="prevPage()" v-bind:class="{'shop-modal-add-to-cart': cart.length > 0 , 'shop-modal-add-to-cart-disabled' : cart.length <= 0 || outletId === 0 }">
                    <p>Продолжить оформление </p>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
name: "Login",
    props: ['url_api','cart'],
    data: () => ({
        token: '',
        outlets : {},
        outletId : 0,
        totalPrice: 0,
    }),
    created() {
        this.updateTotalPrice();
        this.getOutlets();
    },
    methods: {
        getOutlets() {
            axios.post(this.url_api + '/api/outlets', {token: this.token},
                {headers: {Authorization: `Bearer ` + this.token}})
                .then(response => {
                    this.outlets = response.data;
                });
        },
        sendDistanceOrder() { 
            axios.post(this.url_api + '/api/sendDistanceOrder', { token : this.token , orderItems : this.cart, outletId: this.outletId } ,
                        {headers: { Authorization: `Bearer ` + this.token }})
                        .then(response => {
                            if (response.data.error === 'true') {
                                alert(response.data.message);
                                this.lastOrder = response.data.openOrders;
                                return;
                            }

                           // this.getActualOrder(); 
                        });
        },
        /* getActualOrder() {
            axios.post(this.url_api + '/api/actually', { outlet: this.outlet, token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.actualOrder = response.data;
                    this.$emit('update:actualOrder', this.actualOrder)
                });
        }, */
        updateTotalPrice() {
            this.totalPrice = 0;

            for (let key in this.cart) {
                this.totalPrice += this.cart[key].cost;
            }
        },
        prevPage() {
            this.$emit('update:prevPage', 2)
        },
        goPage(num) {
            this.$emit('update:nextPage', num);
            this.$emit('update:cart', this.cart);
        },
        removeItem(key) {
            this.cart.splice(key, 1);
            this.$emit('update:cart', this.cart);
            this.updateTotalPrice();
        },
    }

}
</script>

<style scoped>

</style>
