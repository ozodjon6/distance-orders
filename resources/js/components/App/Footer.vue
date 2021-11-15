<template>
    <div class="footer-page">
        <span class="footer-page__text">© 2021 Don Donuts</span>
        <span class="footer-page__text">Политика конфиденциальности</span>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

.container {
    padding-right: 16px;
    padding-left: 16px;
}

.footer-page {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-top: 1px solid #E4E4E4;
}

.footer-page__text {
    font-size: 12px;
    line-height: 160%;
    font-weight: 400;
    letter-spacing: 0.01em;
    color: #828282;
}

</style>
