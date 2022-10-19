<template>
    <div class="sectionWraper">
        <div class="info_wrapper">
            <div class="header_wrapper">
                <p class="header">Наша миссия</p>
            </div>
            <div class="text_wrapper">
                <p class="text">Тебя тоже раздражает, когда ты пользуешься приложением или сайтом и непонятно куда нажать? Когда попадаешь на пустой экран после ввода данных?
                <br />
                <br />
                Нам тоже это не нравится!
                <br />
                <br />
                Мы хотим улучшать наши продукты, делать их проще и удобнее для пользователя. Присоединяйся, без тебя нам не обойтись!
            </p>
            </div>
            <a v-bind:href="''">
                <div class="button_wrapper">
                    <button class="btn_default" id="btn_reg">Присоединиться</button>
                </div>
            </a>
        </div>
        <div class="img_wrapper">
            <img src="../assets/images/mission.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default{};
</script>