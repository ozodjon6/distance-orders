<template>

    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div class="container main-container">

            <div class="row main-container__heading padding-top">
                <div class="col-10">
                    <img src="/image/src/logo.svg" alt="">
                </div>
                <div class="col-2 menu">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10.3129" y1="10.1011" x2="27.0807" y2="26.8689" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <line x1="10.9192" y1="26.869" x2="27.687" y2="10.1012" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="check-nomer">
                        <p class="shop-phone-p">Код отправили сообщением на {{ phone }} <span>Изменить</span></p>
                            <div class="check-nomer__list">
                                <input type="text" class="shop-phone-code-input" aria-describedby="emailHelp"
                                       v-model="pinArray[0]" maxlength="1">
                                <input type="text" class="shop-phone-code-input" aria-describedby="emailHelp"
                                       v-model="pinArray[1]" maxlength="1">
                                <input type="text" class="shop-phone-code-input" aria-describedby="emailHelp"
                                       v-model="pinArray[2]" maxlength="1">
                                <input type="text" class="shop-phone-code-input" aria-describedby="emailHelp"
                                       v-model="pinArray[3]" maxlength="1">
                            </div>
                        <p class="shop-phone-p" v-if="message"> {{ message }} </p>
                        <button class="shop-modal-add-to-cart" v-if="response.attempt > 0" v-on:click="attempt()">
                            Войти
                        </button>
                    </div>
                    <br/>
                    <button type="submit" class="shop-modal-add-to-cart" v-on:click="prevPage()">Назад</button>
                </div>
            </div>
            <div class="row footer-page">
                <div class="col-12">
                            <span class="footer-page__text">
                                Продолжая, вы соглашаетесь со
                                <a href="#" class="footer-page__text-highlight">
                                    сбором и обработкой персональных данных и пользовательским соглашением
                                </a>
                            </span>
                </div>
                <div class="row">
                    <ul class="social-list">
                        <li class="social-list__item">
                            <svg width="20" height="auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_508_3128)">
                                    <path d="M19.9807 5.88005C19.9338 4.81738 19.762 4.0868 19.5158 3.45374C19.2618 2.78176 18.8711 2.18014 18.3593 1.68002C17.8591 1.1721 17.2535 0.777435 16.5894 0.527447C15.9526 0.281274 15.2259 0.109427 14.1632 0.0625732C13.0926 0.0117516 12.7527 0 10.0373 0C7.32197 0 6.98209 0.0117516 5.91544 0.0586052C4.85277 0.105459 4.12219 0.277459 3.48929 0.523479C2.81716 0.777435 2.21554 1.16814 1.71541 1.68002C1.2075 2.18014 0.812986 2.78573 0.562846 3.44992C0.316674 4.0868 0.144827 4.81341 0.0979735 5.87609C0.0471519 6.9467 0.0354004 7.28658 0.0354004 10.002C0.0354004 12.7173 0.0471519 13.0572 0.0940055 14.1239C0.140859 15.1865 0.312859 15.9171 0.559031 16.5502C0.812986 17.2221 1.2075 17.8238 1.71541 18.3239C2.21554 18.8318 2.82113 19.2265 3.48532 19.4765C4.12219 19.7226 4.8488 19.8945 5.91163 19.9413C6.97812 19.9883 7.31815 19.9999 10.0335 19.9999C12.7489 19.9999 13.0888 19.9883 14.1554 19.9413C15.2181 19.8945 15.9487 19.7226 16.5816 19.4765C17.9257 18.9568 18.9883 17.8941 19.508 16.5502C19.754 15.9133 19.926 15.1865 19.9729 14.1239C20.0197 13.0572 20.0315 12.7173 20.0315 10.002C20.0315 7.28658 20.0275 6.9467 19.9807 5.88005ZM18.1796 14.0457C18.1366 15.0225 17.9725 15.5499 17.8358 15.9015C17.4997 16.7728 16.8082 17.4643 15.9369 17.8004C15.5853 17.9372 15.054 18.1012 14.0811 18.1441C13.0262 18.1911 12.7098 18.2027 10.0413 18.2027C7.37279 18.2027 7.05244 18.1911 6.00137 18.1441C5.02462 18.1012 4.49717 17.9372 4.14554 17.8004C3.71195 17.6402 3.31729 17.3862 2.99694 17.0541C2.66485 16.7298 2.41089 16.3391 2.25064 15.9055C2.1139 15.5539 1.94983 15.0225 1.90695 14.0497C1.85994 12.9948 1.84834 12.6783 1.84834 10.0097C1.84834 7.34122 1.85994 7.02087 1.90695 5.96995C1.94983 4.99319 2.1139 4.46575 2.25064 4.11412C2.41089 3.68038 2.66485 3.28586 3.00091 2.96536C3.32507 2.63327 3.71577 2.37931 4.14951 2.21921C4.50114 2.08247 5.03255 1.9184 6.00534 1.87537C7.06023 1.82851 7.37676 1.81676 10.0451 1.81676C12.7176 1.81676 13.034 1.82851 14.0851 1.87537C15.0618 1.9184 15.5893 2.08247 15.9409 2.21921C16.3745 2.37931 16.7691 2.63327 17.0895 2.96536C17.4216 3.28967 17.6755 3.68038 17.8358 4.11412C17.9725 4.46575 18.1366 4.99701 18.1796 5.96995C18.2265 7.02484 18.2382 7.34122 18.2382 10.0097C18.2382 12.6783 18.2265 12.9908 18.1796 14.0457Z" fill="white"/>
                                    <path d="M10.0371 4.86426C7.20074 4.86426 4.89941 7.16543 4.89941 10.002C4.89941 12.8385 7.20074 15.1397 10.0371 15.1397C12.8737 15.1397 15.1749 12.8385 15.1749 10.002C15.1749 7.16543 12.8737 4.86426 10.0371 4.86426ZM10.0371 13.3347C8.19702 13.3347 6.70442 11.8422 6.70442 10.002C6.70442 8.16172 8.19702 6.66927 10.0371 6.66927C11.8774 6.66927 13.3698 8.16172 13.3698 10.002C13.3698 11.8422 11.8774 13.3347 10.0371 13.3347Z" fill="white"/>
                                    <path d="M16.5775 4.66085C16.5775 5.32322 16.0404 5.86028 15.3779 5.86028C14.7155 5.86028 14.1785 5.32322 14.1785 4.66085C14.1785 3.99834 14.7155 3.46143 15.3779 3.46143C16.0404 3.46143 16.5775 3.99834 16.5775 4.66085Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_508_3128">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li class="social-list__item">
                            <svg width="21" height="auto" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_508_3134)">
                                    <path d="M13.9976 3.48687H15.9147V0.147875C15.5839 0.102375 14.4464 0 13.1217 0C10.3576 0 8.46407 1.73863 8.46407 4.93412V7.875H5.41382V11.6077H8.46407V21H12.2038V11.6086H15.1307L15.5953 7.87588H12.2029V5.30425C12.2038 4.22537 12.4943 3.48687 13.9976 3.48687Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_508_3134">
                                        <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
name: "Registration",
    props: ['url_api', 'phone'],
    data: () => ({
        password: '',
        checkPassword: '',
        pinArray: ['','','',''],
        pin: '',
        response: {},
        message: '',
    }),
    created() {
        this.createNewClietn();
    },
    methods: {
        createNewClietn() {
            let data = { phone : this.phone };

            axios.post( this.url_api +'/api/newClient', data)
                .then(response => {
                    this.response = response.data;

                    if (this.response.status === true) {
                        if (this.response.attempt > 0) {
                            this.message = 'На номер телефона ' + this.response.phone + ' был отпралвен код для подтверждения. Осталось попытки ввода ' + this.response.attempt;
                        } else {
                            this.message = 'Превышен лимит отправки кода. Cвяжитесь с администратором по номеру телефона 380 - 200';
                        }
                    } else {
                        this.message = 'Произошла неизвестная ошибка, попробуйте перезайти снова';
                    }
                });
        },
        attempt() {

            this.pin = this.pinArray[0] + '' + this.pinArray[1] + '' + this.pinArray[2] + '' + this.pinArray[3];

            let data = { phone : this.phone, pin : this.pin, };

            axios.post( this.url_api +'/api/attempt', data)
                .then(response => {
                    this.response = response.data;

                    if (this.response.status === true) {
                        this.$emit('update:nextPage', 5)
                    } else {
                        if (this.response.attempt > 0) {
                            this.message = 'Неверный код подтверждения. Осталось ' + this.response.attempt + ' попытки(а)';
                        } else {
                            this.message = 'Превышен лимит отправки кода. Cвяжитесь с администратором по номеру телефона 380 - 200';
                        }
                    }
                });
        },
        nextPage() {
            this.registration();
        },
        prevPage() {
            this.$emit('update:prevPage', 2)
        }
    }
}
</script>

<style scoped>

.main-container__heading {
    margin-bottom: 67px;
}

.check-nomer .shop-phone-p {
    text-align: center;
    max-width: 271px;
    margin: 0 auto 46px;
    width: 100%;
    display: block;
}

.check-nomer .shop-phone-p:last-child {

}

.check-nomer span {
    color: #FF6900;
    text-decoration: underline;
}

.check-nomer__list {
    display: flex;
    align-content: center;
    padding-bottom: 104px;
}

</style>
