import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import CharacterCard from "@/components/CharacterCard";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/character", component: Main},
        // { path: "/character?page=:id", component: Main},
        { path: "/character/:id", component: CharacterCard},
    ]
});
