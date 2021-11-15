<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-4 alert alert-warning" role="alert">
                    <user
                        v-bind:url_api="url_api"
                        v-bind:token="token"
                    />
                    <order
                        v-bind:url_api="url_api"
                        v-bind:token="token"
                        v-bind:orderItems="orderItems"
                        v-bind:selectOutlet="selectOutlet"
                        v-on:update:actualOrder="actualOrder = $event"
                    />
                </div>
                <div class="col-4 alert alert-info" role="alert">
                    <outlets
                        v-bind:url_api="url_api"
                        v-bind:token="token"
                        v-on:update:selectOutlet="selectOutlet = $event"
                        v-on:update:orderItems="orderItems = $event"
                    />
                    <actual-order
                        v-bind:url_api="url_api"
                        v-bind:token="token"
                        v-bind:actualOrder="actualOrder"
                        v-on:update:actualOrder="actualOrder = $event"
                    />
                    <open-order
                        v-bind:url_api="url_api"
                        v-bind:token="token"
                        v-bind:actualOrder="actualOrder"
                        v-on:update:actualOrder="actualOrder = $event"
                    />
                </div>
                <div class="col-4 alert alert-warning" role="alert">
                    <order-item
                        v-bind:url_api="url_api"
                        v-bind:token="token"
                        v-bind:orderItems="orderItems"
                    />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>

import User from './MainComponents/User'
import Order from './MainComponents/Order'
import Outlets from './MainComponents/Outlets'
import OrderItem from './MainComponents/OrderItem'
import OpenOrder from './MainComponents/OpenOrder'
import ActualOrder from './MainComponents/ActualOrder'
// import Footer from "./Footer";

export default {
name: "Main",
    components: {
        Footer,
        User,
        Order,
        Outlets,
        OrderItem,
        OpenOrder,
        ActualOrder
    },
    data: () => ({
        url_api: $("meta[name='url_api']").attr("content"),
        token: $("meta[name='token_api']").attr("content"),
        orderItems : [],
        actualOrder : {},
        selectOutlet : '',
    }),
    created() {
    },
}
</script>
