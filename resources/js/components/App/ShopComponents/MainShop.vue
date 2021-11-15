<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div class="container main-container">
            <div class="row padding-top">
                <div class="col-10">
                    <img src="/image/src/logo.svg" alt="">
<!--                    <p class="logo-name-big">ДОН ДОНАТС</p>-->
<!--                    <p class="logo-name-small">Кофе и пончики</p>-->
                </div>
                <div class="col-2 menu">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10.3129" y1="10.1011" x2="27.0807" y2="26.8689" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <line x1="10.9192" y1="26.869" x2="27.687" y2="10.1012" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>

            <div class="row choose-product">
                <div class="col-12">
                    <span class="button">Горячий кофе</span>
                    <span class="button">Холодный кофе</span>
                </div>
            </div>

            <div class="row">
                <template v-for="product in products">
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="row shop-item pointer"  v-on:click="addToSelectProduct(product)">
                            <div class="col-3">
                                <img src="/image/coffee.png">
                            </div>
                            <div class="col-5">
                                <p class="shop-item-name">{{ product.name }}</p>
                                <p class="shop-item-name-property">классический напиток с молочной пенкой (тест)</p>
                            </div>
                            <div class="col-4">
                                <p class="shop-item-price">от {{ product.lowPrice }}</p>
                            </div>
                        </div>
                </div>
                </template>
            </div>

            <div class="row" v-if="!actualOrder.pin">
                <div class="col-10 " >
                    <button type="button" class="btn btn-dark" v-if="cart.length > 0" v-on:click="nextPage()">Далее</button>
                </div>
                <div class="col-2 basket pointer" v-on:click="goPage(9)">
                    <div class="basket-count" v-if="cart.length > 0">{{ cart.length }}</div>
                    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9687 20.5252C12.4782 20.5252 12.8912 20.1122 12.8912 19.6027V15.2974C12.8912 14.7879 12.4782 14.3749 11.9687 14.3749C11.4592 14.3749 11.0461 14.7879 11.0461 15.2974V19.6027C11.0461 20.1122 11.4592 20.5252 11.9687 20.5252Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6586 20.5252C16.1681 20.5252 16.5812 20.1122 16.5812 19.6027V15.2974C16.5812 14.7879 16.1681 14.3749 15.6586 14.3749C15.1491 14.3749 14.7361 14.7879 14.7361 15.2974V19.6027C14.7361 20.1122 15.1491 20.5252 15.6586 20.5252Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3491 20.5252C19.8586 20.5252 20.2716 20.1122 20.2716 19.6027V15.2974C20.2716 14.7879 19.8586 14.3749 19.3491 14.3749C18.8396 14.3749 18.4265 14.7879 18.4265 15.2974V19.6027C18.4265 20.1122 18.8396 20.5252 19.3491 20.5252Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.27826 20.5252C8.78778 20.5252 9.20082 20.1122 9.20082 19.6027V15.2974C9.20082 14.7879 8.78778 14.3749 8.27826 14.3749C7.76875 14.3749 7.35571 14.7879 7.35571 15.2974V19.6027C7.35571 20.1122 7.76875 20.5252 8.27826 20.5252Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1918 6.37949H24.0232V6.34259L17.9282 0.247603C17.5647 -0.0911068 16.9983 -0.0811126 16.647 0.27021C16.2957 0.621532 16.2857 1.18798 16.6244 1.55148L21.4524 6.37949H5.58451L10.4125 1.55148C10.7512 1.18798 10.7412 0.621532 10.3899 0.27021C10.0386 -0.0811126 9.47215 -0.0911068 9.10866 0.247603L3.01367 6.34259V6.37949H1.8451C0.826081 6.37949 0 7.20557 0 8.2246V10.6847C0 11.7038 0.826081 12.5298 1.8451 12.5298C1.83474 12.6424 1.83474 12.7556 1.8451 12.8681L3.69021 22.7087C3.85314 23.5824 4.61579 24.2157 5.50456 24.2155H21.4954C22.3842 24.2157 23.1469 23.5824 23.3098 22.7087L25.1549 12.8681C25.1653 12.7556 25.1653 12.6424 25.1549 12.5298C26.1739 12.5298 27 11.7038 27 10.6847V8.2246C27.0002 7.21981 26.1964 6.39959 25.1918 6.37949ZM21.5015 22.3703H5.51058L3.66548 12.5298H23.3466L21.5015 22.3703ZM25.1917 10.6847H1.82043V8.22458H25.1917V10.6847Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div class="row" v-if="actualOrder.pin && token !== ''">
                <div class="col-8">
                    <button type="button" class="btn btn-dark" v-on:click="nextPage()">Перейти</button>
                </div>
                <div class="col-4">
                    Незавершенный заказ
                </div>
            </div>

        </div>

        <div class="modal fade" id="selectedProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color: #F7F7F7">
                    <div class="modal-header">
                        <div class="modal-close" data-bs-dismiss="modal" aria-label="Close">
                            <div class="modal-close-shape-up"></div>
                            <div class="modal-close-shape-down"></div>
                        </div>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="row shop-item">
                                        <div class="col-4">
                                            <img src="/image/coffee.png">
                                        </div>
                                        <div class="col-8">
                                            <p class="shop-item-name">{{ selectProduct.name }}</p>
                                            <p class="shop-item-name-property">классический напиток с молочной пенкой (тест)</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div class="row">
                            <template v-for="variety in selectProduct.varieties">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12" >
                                    <div class="row modal-item pointer" v-on:click="addToCart(variety)">
                                        <div class="col-12">
                                            <p class="modal-item-name">{{ variety.name }}</p>
                                        </div>
                                        <div class="col-12">
                                            <p class="modal-item-price">{{ variety.cost }} р.</p>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="row modal-item pointer">
                                    <div class="col-12">
                                        <p class="modal-item-name">Теплый</p>
                                    </div>
                                    <div class="col-12">
                                        <p class="modal-item-price">55-60°C</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="row modal-item pointer">
                                    <div class="col-12">
                                        <p class="modal-item-name">Горячий</p>
                                    </div>
                                    <div class="col-12">
                                        <p class="modal-item-price">65-70°C</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <hr>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-3 shop-modal-plus">
                                        <div class="shop-modal-plus-line-one"></div>
                                        <div class="shop-modal-plus-line-two"></div>
                                    </div>
                                    <div class="col-5 shop-modal-add-name">
                                        Добавьте сироп
                                    </div>
                                    <div class="col-4 shop-modal-add-price">
                                        +0 р.
                                    </div>
                                </div>
                            </div>

                            <hr>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-3 shop-modal-plus">
                                        <div class="shop-modal-plus-line-one"></div>
                                        <div class="shop-modal-plus-line-two"></div>
                                    </div>
                                    <div class="col-5 shop-modal-add-name">
                                        Выберите молоко
                                    </div>
                                    <div class="col-4 shop-modal-add-price">
                                        +0 р.
                                    </div>
                                </div>
                            </div>

                            <hr>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-3 shop-modal-plus">
                                        <div class="shop-modal-plus-line-one"></div>
                                        <div class="shop-modal-plus-line-two"></div>
                                    </div>
                                    <div class="col-5 shop-modal-add-name">
                                        Добавьте сливки
                                    </div>
                                    <div class="col-4 shop-modal-add-price">
                                        +0 р.
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-12 shop-modal-add-price-total">
                                        99 Р
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-4"></div>
                                    <div class="col-2 shop-modal-add-item-minus">
                                        -
                                    </div>
                                    <div class="col-2 shop-modal-add-item-total">
                                        10
                                    </div>
                                    <div class="col-2 shop-modal-add-item-minus">
                                        +
                                    </div>
                                    <div class="col-2"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="modal-footer">
                        <div class="shop-modal-add-to-cart" data-bs-dismiss="modal" aria-label="Close" v-on:click="goPage(9)">
                            <p>В КОРЗИНУ</p>
                        </div>
<!--                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "MainShop",
    components: {},
    props: ['url_api','token', 'cart'],
    data: () => ({
        products : {},
        selectProduct: {},
        cart : [],
        actualOrder: {},
    }),
    created() {
        this.getActualOrder();
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.products = [];
            let outletId = 1;

            axios.post(this.url_api + '/api/products', { outlet: outletId, token : this.token})
                .then(response => {
                    let groups = response.data;

                    groups.forEach((group, i, groups) => {
                        for (let key in group.productsHas) {

                            let lowPrice = 99999999;

                            for (let keyVariety in group.productsHas[key].varieties) {
                                let variety = group.productsHas[key].varieties[keyVariety];
                                if (variety.cost < lowPrice) {
                                    lowPrice = variety.cost;
                                }
                            }

                            group.productsHas[key].lowPrice = lowPrice;

                            this.products.push( group.productsHas[key]);
                        }
                    })
                });
        },
        addToSelectProduct(product) {
            this.selectProduct = product;
            $("#selectedProduct").modal('show');
        },
        addToCart(variety) {
            this.cart.push(variety);
            this.$emit('update:cart', this.cart)
        },
        nextPage() {

            if (this.actualOrder.pin && this.token !== '') {
                this.$emit('update:nextPage', 8)
                return;
            }

            if (this.cart.length <= 0) {
                alert('нужно закинуть что то в cart');
                return ;
            }

            if (this.token !== '') {
                this.$emit('update:nextPage', 6)
            } else {
                this.$emit('update:nextPage', 2)
            }
        },
        goPage(page) {
            this.$emit('update:nextPage', page)
        },
        getActualOrder() {

            if (!this.token || this.token === '') {
                return;
            }

            axios.post(this.url_api + '/api/actually', {outlet: this.outlet, token: this.token},
                {headers: {Authorization: `Bearer ` + this.token}})
                .then(response => {
                    this.actualOrder = response.data;
                });
        },
    },
}
</script>

<style scoped>

.modal-close{
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
}

.modal-close:hover {
    opacity: 0.9;
}

.modal-close-shape-up{
    position: absolute;
    width: 2px;
    height: 20px;
    left: 23px;
    top: 8px;
    background: #000000;
    transform: rotate(-140deg);
}

.modal-close-shape-down{
    position: absolute;
    width: 2px;
    height: 20px;
    left: 23px;
    top: 23px;
    background: #000000;
    transform: rotate(-220deg);
}

.choose-product {
    line-height: 30px;
    padding-top: 30px;
}

.choose-product .button {
    padding: 5.5px 13px;
    line-height: 16px;
    height: auto;
}

</style>
