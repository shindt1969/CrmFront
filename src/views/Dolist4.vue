<template lang="pug">
a-list(item-layout="horizontal", :data-source="datas")
    template(#renderItem="{ item }")
        a-list-item
            template(#actions)
                a(key='list-loadmore-edit' @click="ctrlitem(index)") edit
                a(key='list-loadmore-more' @click="removeItem(datas.indexOf(item))") delete
            div(style='margin: 1px; width : 1px; font-size:2px; margin-top: 80px; margin-right:1px;  ') {{item.created_at}}  

            a-skeleton(avatar='' :title='false' :loading='!!item.loading' active='')
                a-list-item-meta(v-if="item.test" :description="item.text")
                    template(#title)
                        a(href='https://www.antdv.com/') {{ item.target_name }}
                    template(#avatar)
                    a-avatar(src="https://joeschmoe.io/api/v1/random") 
</template>


<script>
import { defineComponent, onMounted, ref } from "vue";
import { mapActions, mapMutations, useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    const datas = ref([
    {target_name:'good 1.1 name',created_at:'20210808',test:''},
    {target_name:'good 2.1 name',created_at:'20450808',test:''},
    {target_name:'good 3.1 name',created_at:'20330808',test:''},
    {target_name:'good 4.2 name',created_at:'20210808',test:''}]);

    const getnote = () => {
      store
        .dispatch("http/get", {
          api: "/api/admin/contents/1",
        })
        .then((data) => {
          if (data.status) {
            datas.value = data.body;
          } else {
            console.log(data)
            alert("NO-REGISTER");
          }
        });
    };

      const removeItem = (index) => {  //移除訊息
        console.log(index);
        console.log(datas.value);
        datas.value.splice(index, 1)
     } 

     const ctrlitem = (index) =>{  
        // 按鈕傳遞(index)更改list選筆的test的true/flase , v-for 項目內容依序做更 成input 或 單純顯示文字
        //  list.value.splice(index,0,)
        datas.value[index].test = !datas.value[index].test
        console.log(datas.value)
     }


    onMounted(() => {
      getnote();
    });

    return {
      datas,removeItem,ctrlitem
    };
  },
});
</script>
