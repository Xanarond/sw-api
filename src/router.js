import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import CharacterCard from "@/components/CharacterCard";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", component: Main},
        { path: "/character/:id", component: CharacterCard},
    ]
});
