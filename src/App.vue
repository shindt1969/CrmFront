<template lang="pug">
router-view
</template>

<script>
import { onBeforeMount } from 'vue';
import store from '@/store/index';
import home from './views/home/Home.vue';

export default {
    components: {
    home,
  },
    setup() {
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
