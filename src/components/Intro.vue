<template>
    <div class="sectionWraper">
        <div class="info_wrapper">
            <div class="header_wrapper">
                <p class="header">Стань нашим респондентом</p>
            </div>
            <div class="text_wrapper">
                <p  class="text">Мы хотим услышать твое мнение, опыт и боли общения с цифровыми продуктами Beeline.</p>
            </div>
            <a v-bind:href="'https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform'">
                <div class="button_wrapper">
                    <button class="btn_default">Я готов!</button>
                </div>
            </a>
        </div>
        <div class="img_wrapper">
            <img src="../assets/images/intro.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default{};
</script>