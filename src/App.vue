<template lang="pug">
#nav
router-view
</template>

<script>
import { onBeforeMount } from 'vue';
import store from '@/store/index';


export default {
    setup() {
        onBeforeMount(() => {
            store.commit('member/initialiseStore');
            store.subscribe((mutation, state) => {
                // Store the state object as a JSON string
                console.log("init: ", JSON.stringify(state.member.user));
                localStorage.setItem('store', JSON.stringify(state.member.user));
            });
        })
    },
}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 6px;

}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.movePlace {
    position: absolute;
    top: 8px;
    left: 810px
}
</style>
