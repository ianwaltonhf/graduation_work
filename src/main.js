import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import "./styles/default.scss";
import "./styles/main.scss";
import "./styles/sectionsSize.scss";
import "./styles/templateBlocks.scss";

library.add(faBars)
library.add(faXmark)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
