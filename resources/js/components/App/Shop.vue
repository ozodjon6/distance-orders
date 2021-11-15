<template>
    <div>
        <div class="row">
                <main-shop
                    v-bind:url_api="url_api"
                    v-bind:token="token"
                    v-bind:cart="cart"
                    v-if="currentPage === 1"
                    v-on:update:nextPage="currentPage = $event"
                    v-on:update:cart="cart = $event"
                />

                <phone
                    v-bind:url_api="url_api"
                    v-if="currentPage === 2"
                    v-on:update:nextPage="currentPage = $event"
                    v-on:update:prevPage="currentPage = $event"
                    v-on:update:phone="phone = $event"
                    v-on:update:isPhone="isPhone = $event"
                />

                <login
                    v-bind:url_api="url_api"
                    v-bind:phone="phone"
                    v-if="currentPage === 3"
                    v-on:update:token="token = $event"
                    v-on:update:nextPage="currentPage = $event"
                    v-on:update:prevPage="currentPage = $event"
                />

                <registration
                    v-bind:url_api="url_api"
                    v-bind:phone="phone"
                    v-if="currentPage === 4"
                    v-on:update:nextPage="currentPage = $event"
                    v-on:update:prevPage="currentPage = $event"
                />

                <new-password
                    v-bind:url_api="url_api"
                    v-bind:phone="phone"
                    v-if="currentPage === 5"
                    v-on:update:nextPage="currentPage = $event"
                    v-on:update:prevPage="currentPage = $event"
                />

                <order
                    v-bind:url_api="url_api"
                    v-bind:token="token"
                    v-bind:cart="cart"
                    v-if="currentPage === 6"
                    v-on:update:nextPage="currentPage = $event"
                />

                <outlet
                    v-bind:url_api="url_api"
                    v-bind:token="token"
                    v-bind:cart="cart"
                    v-if="currentPage === 7"
                    v-on:update:nextPage="currentPage = $event"
                />

                <status
                    v-bind:url_api="url_api"
                    v-bind:token="token"
                    v-if="currentPage === 8"
                />

                <cart
                    v-bind:url_api="url_api"
                    v-bind:cart="cart"
                    v-if="currentPage === 9"
                    v-on:update:nextPage="currentPage = $event"
                    v-on:update:prevPage="currentPage = $event"
                    v-on:update:cart="cart = $event"
                />

            </div>
        <Footer/>
    </div>
</template>

<script>
import MainShop from './ShopComponents/MainShop'
import Phone from './ShopComponents/Phone'
import Registration from './ShopComponents/Registration'
import Login from './ShopComponents/Login'
import Order from './ShopComponents/Order'
import Outlet from './ShopComponents/Outlet'
import Status from './ShopComponents/Status'
import NewPassword from './ShopComponents/NewPassword'
import Cart from './ShopComponents/Cart'
import Footer from "./Footer";

export default {
name: "Shop",
    components: {
        Footer,
        MainShop,
        Phone,
        Registration,
        Login,
        Order,
        Outlet,
        Status,
        NewPassword,
        Cart,
    },
    data: () => ({
        url_api: 'http://185.178.47.222',
        token: $("meta[name='token_api']").attr("content"),
        currentPage : 1,
        cart: [],
        phone: '',
        isPhone: false,
    }),
}
</script>

<style scoped>

</style>
