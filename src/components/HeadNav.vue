<template>
    <div class="sectionWraper">
            <nav>

                <!--Default view (Mobile L — Laptop L) -->
                <div class="logoWrapper">
                    <img src="../assets/logo.svg" alt="">
                </div>
                <ul v-show="!mobile" class="navbar">
                    <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#cards'">Какие плюсы?</a></li>
                    <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#list'">Что потребуется от тебя</a></li>
                    <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#mission'">Наша миссия</a></li>
                    <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#btn_reg'">Присоединиться</a></li>
                </ul>

                <!--Mobile responsive view (Mobile S — Mobile L) -->
                <div class="icon icon_1">

                    <font-awesome-icon 
                    v-if="!mobileNav"
                    @click="toggleMobileNav"
                    icon="fa-solid fa-bars"
                    v-show="mobile"
                    :class="{'menuBarActive': mobileNav}"
                    />
                </div>
                

                <transition class="navbarMobile overlay" name="mobile-nav">
                        <ul v-show="mobileNav" class="">
                            <div class="logoWrapper">
                                <img src="../assets/logo.svg" alt="">
                            </div>
                            <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#cards'">Какие плюсы?</a></li>
                            <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#list'">Что потребуется от тебя</a></li>
                            <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#mission'">Наша миссия</a></li>
                            <li><a @click="closeNavCollapse" class="refTo" v-bind:href="'#btn_reg'">Присоединиться</a></li>
                            <div class="icon icon_2">
                                <font-awesome-icon
                                v-if="mobileNav"
                                @click="toggleMobileNav"
                                icon="fa-xmark"
                                v-show="mobile"
                                :class="{'menuBarActive': mobileNav}"
                                />
                            </div>
                        </ul> 
                </transition>
            </nav>
    </div>
</template>

<script>
    export default{
        name: "navbar",
        data() {
            return {
                scrolledToFixed: null,
                mobile: null,
                mobileNav: null,
                windowWidth: null,
            };
        },

        created(){
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },

        methods: { 
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },

            closeNavCollapse() {
                this.mobileNav = false;
            },

            checkScreen(){
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 768){
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        }
    };
    
</script>