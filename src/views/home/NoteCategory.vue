<template lang="pug">

.lightbox
  .modal-mask(:style='modalStyle')
    .modal-container(@click.self='toggleModal')
      .modal-body
        header
          slot(name='header') Default Header
        hr
        main
          // 或者 <slot name="default">Default Body</slot>也可以
          slot Default Body
        hr
        footer
          slot(name='footer') Default Footer
  button(@click='isShow = true') Click Me

</template>
        
<script>

</script>
    
<style scoped>
#app {
  position: relative;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  height: 22rem;
}

label {
  margin-right: 1rem;
}

button {
  margin-top: 1rem;
  font-size: 1rem;
}

.lightbox {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.modal-mask {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-container {
  cursor: pointer;
  display: table-cell;
  vertical-align: middle;

}

.modal-body {
  cursor: auto;
  display: block;
  width: 50%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
}
</style>
    
    