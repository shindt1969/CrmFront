<template lang="pug">

div(:span='18' style="margin:10px 20px;")   
    .card-container(type="flex" justify="center" align="left") 
        a-tabs(v-model:activekey='activeKey' type='card' style="margin-left:100;")
            a-tab-pane(key='1' tab='個人記事')
                a-textarea(v-model:value='storeBody.text' placeholder='請輸入記事內容' :rows='4' :maxlength='100' size="large")
            a-tab-pane(key='2' tab='客戶記事')
                a-textarea(v-model:value='storeBody.text' placeholder='請輸入記事內容' :rows='4')
            a-tab-pane(key='3' tab='公司記事')
                a-textarea(v-model:value='storeBody.text' placeholder='請輸入記事內容' :rows='4')
        div(style="background-color: #F0F1FF; height: 40px;")
            a-button(shape='circle' style="margin: 3px;background-color: #F0F1FF")
                template(#icon)
                    ClockCircleOutlined
            a-button(style="margin: 3px;background-color: #F0F1FF") 記事範本
                DownOutlined

            a-button(type="primary" style='margin: 3px;  float: right;' @click="storeNote") 存檔
            a-button(style='margin: 3px;  float: right;') 取消
        div(style='margin-right: 10px;  float: right;')


</template>
    
<script>
import { ClockCircleOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, reactive } from 'vue';
import {useStore} from 'vuex';


export default defineComponent({
    components: {
        ClockCircleOutlined,
        DownOutlined
    },
    setup() {

        const storeBody = reactive({
            text: "",
            owner_id: 1,
            type_id: 3,
            create_by_id: 1

        });

        const store = useStore();
        const storeNote = () => {
            console.log("POST text： ",storeBody.text)
            store.dispatch('http/post', {
                api: "/api/admin/contents/create",
                json: storeBody
            })
                .then((data) => {
                    if (data.status) {
                        console.log(data.)
                    } else {
                        // alert('NO-REGISTER');
                    }
                })
        };


        return {
            storeBody,
            activeKey: ref('2'),
            storeNote
        };
    },

});
</script>

<style scoped>
.icons-list :deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
}
</style>

