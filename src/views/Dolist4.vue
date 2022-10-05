<template lang="pug">
a-list( item-layout='vertical' :data-source='datas' )
    //- template(#loadMore)
    //-     //- loading 完才會出現按鈕
    //-     div(v-if='!initLoading && !loading' :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }")
    //-         a-button(@click='onLoadMore') loading more
    template(#renderItem='{item, index}')
        a-skeleton(avatar :loading='loading' active :paragraph="{ rows: 2 }" )
            a-list-item(v-if="!item.editing" key="item.target_name")
                template(#extra)
                    a(key='list-loadmore-edit' @click="editItem(index)") edit
                    br
                    a(key='list-loadmore-more' @click="removeItem(index)") delete

                a-list-item-meta(:description="item.created_at" )
                    template(#title )
                        a(href='https://www.antdv.com/' style="padding-left:0px; text-align: left;") {{ item.target_name }}
                    template(#avatar)
                        a-avatar(src='https://joeschmoe.io/api/v1/random')
                | {{ item.text }}

            a-list-item(v-else)  
                Note(:text="item.text" :default_date="item.created_at" @update="setNoteToShow(index)")

</template>


<script>
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { mapActions, mapMutations, useStore } from "vuex";
import Note from "./home/Note.vue";
export default defineComponent({

    components: {
        Note
    },
    setup() {
        const store = useStore();
        const datas = ref([0,0,0,0]);
        const initLoading = ref(true);
        const loading = ref(true);

        const getnote = () => {
            store
                .dispatch("http/get", {
                    api: "/api/admin/notes/1",
                })
                .then((data) => {
                    console.log("data arrive:", data);
                    if (data.status) {
                        datas.value = data.body;
                        datas.value.forEach(data => data.editing = false);
                        datas.value = data.body;
                        loading.value = false;
                    } else {
                        alert("NO DATA");
                    }
                });
        };

        const removeItem = (index) => {  //移除訊息
            console.log(index);
            console.log(datas.value);
            datas.value.splice(index, 1); // 刪除 index 開始往後 0 個元素
        }

        const editItem = (index) => {
            // 按鈕傳遞(index)更改list選筆的test的true/flase , v-for 項目內容依序做更 成input 或 單純顯示文字
            //  list.value.splice(index,0,)
            datas.value[index].editing=true;
            console.log(datas.value[index]);
        }

        const setNoteToShow = (index) => {
            datas.value[index].editing=false;
        }

        onMounted(() => {
            getnote();

        });

        return {
            datas, removeItem, editItem, loading, initLoading
        };
    },
});
</script>
