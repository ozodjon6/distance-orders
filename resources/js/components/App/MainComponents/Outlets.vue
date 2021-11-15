<template>
    <div class="container">
        <div class="row alert alert-light" role="alert">
            <label>Выбор точки:</label>
            <select class="form-control" v-model="selectOutlet" v-on:change="getProducts()">>
                <option v-for="outlet in outlets" v-bind:value="outlet.id">{{ outlet.name }}</option>
            </select>

            <label v-if="products">Выбор продукта:</label>
            <select class="form-control" v-if="products" v-model="current_product">
                <option v-for="product in products" v-bind:value="product.id" v-on:click="addProduct(product)">{{ product.name }}</option>
            </select>

             <button @click="changeProduct"> Добавить </button> 

        </div>

        <div class="modal fade" id="selectedProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ selectProduct.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group" >
                            <button class="btn btn-success" v-for="variety in selectProduct.varieties"
                                    style="width: 100%; margin-bottom: 10px;" v-on:click="addInOrderItem(variety)">
                                {{ variety.name }} (Цена: {{ variety.cost }})
                            </button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
name: "Outlets",
    props: ['url_api','token'],
    data: () => ({
        outlets : {},
        selectOutlet : {},
        products : {},
        selectProduct: {},
        orderItems : [],
        current_product : 0
    }),
    created() {
    this.getOutlets();
    },
    methods: {
        getOutlets() {

            axios.post(this.url_api + '/api/outlets', { token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    this.outlets = response.data;
                });
        },
        getProducts() {
            this.products = [];

            axios.post(this.url_api + '/api/products', { outlet: this.selectOutlet, token : this.token} ,
                {headers: { Authorization: `Bearer ` + this.token }})
                .then(response => {
                    let groups = response.data;

                    groups.forEach((group, i, groups) => {
                        for (let key in group.productsHas) {
                            this.products.push( group.productsHas[key]);
                        }
                    })
                });
        },
        changeProduct(product) {
            var index = 0;
              while ( index < this.products.length ) {
                  if (this.products[index].id == this.current_product) {
                       this.selectProduct = this.products[index];
                  }
                    index += 1;
              }
             // this.selectProduct = this.current_product;
              $("#selectedProduct").modal('show');
        },
        addProduct(product) {
            this.selectProduct = product;
            $("#selectedProduct").modal('show');
        },
        addInOrderItem(variety) {
            this.orderItems.push(variety);
            $("#selectedProduct").modal('hide');
            this.$emit('update:selectOutlet', this.selectOutlet)
            this.$emit('update:orderItems', this.orderItems)
        },
    },
}
</script>

<style scoped>

</style>
