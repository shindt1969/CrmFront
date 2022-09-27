<template lang="pug">
a-list(item-layout="horizontal", :data-source="datas")
  template(#renderItem="{ item }")
    a-list-item
     template(#actions)
       a(key='list-loadmore-edit') edit
       a(key='list-loadmore-more') more

     a-skeleton(avatar='' :title='false' :loading='!!item.loading' active='')
       a-list-item-meta(:description="item.text")
         template(#title)
           a(href='https://www.antdv.com/') {{ item.name }}
         template(#avatar)
           a-avatar(src="https://joeschmoe.io/api/v1/random") 
     div(style='margin: 1px;  float: down;') 日期:{{item.created_at}}







</template>




<script>
import { defineComponent, onMounted, ref } from "vue";
import { mapActions, mapMutations, useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    const datas = ref([]);

    const getnote = () => {
      store
        .dispatch("http/get", {
          api: "/api/admin/contents/1",
        })
        .then((data) => {
          if (data.status) {
            datas.value = data.body;
            console.log("flaf", datas.value);
          } else {
            console.log(data)
            alert("NO-REGISTER");
          }
        });
    };
    onMounted(() => {
      getnote();
    });

    return {
      datas,
    };
  },
});
</script>
