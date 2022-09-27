<template lang="pug">

div(:span='18' style="margin:10px 20px;")   
    .card-container(type="flex" justify="center" align="left") 
        a-tabs(v-model:activeKey='activeKey' type='card' style="margin-left:100;")
            a-tab-pane(key='1' tab='客戶記事')
                a-textarea(v-model:value='storeBody.text' placeholder='請輸入記事內容' :rows='4' :maxlength='100' size="large")
            a-tab-pane(key='2' tab='公司記事')
                a-textarea(v-model:value='storeBody.text' placeholder='請輸入記事內容' :rows='4')
            a-tab-pane(key='3' tab='個人記事')
                a-textarea(v-model:value='storeBody.text' placeholder='請輸入記事內容' :rows='4')
        div(style="background-color: #F0F1FF; height: 40px;")
            a-date-picker(v-model:value='today')

            //- a-button(shape='circle' style="margin: 3px;background-color: #F0F1FF")
            //-     template(#icon)
            //-         ClockCircleOutlined
            a-button(style="margin: 3px;background-color: #F0F1FF") 記事範本
                DownOutlined
            //- a-button(style="margin: 3px;background-color: #F0F1FF") 記事類別
            //-     DownOutlined
            a-dropdown
                template(#overlay)
                    a-menu(@click='handleMenuClick') 
                        div(v-show="OK")
                            NoteCategory
                        //- a-menu-item(key=index v-for="index in 100")
                        //-     | {{ index }} menu item
                a-button
                    | 記事類別
                    DownOutlined


            a-button(type="primary" style='margin: 3px;  float: right;' @click="storeNote") 存檔
            a-button(style='margin: 3px;  float: right;' @click="cancle") 取消
        div(style='margin-right: 10px;  float: right;')

</template>
    
<script>
import { ClockCircleOutlined, DownOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, reactive, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import dayjs from 'dayjs';
import  NoteCategory from "./NoteCategory.vue";


const get_today = () => {
    const date = new Date();
    var today = date.toLocaleDateString().split('/')
    return `${today[0]}-${today[1]}-${today[2]}`
}


export default defineComponent({
    components: {
        ClockCircleOutlined,
        DownOutlined,
        UserOutlined
    },
    setup() {
        const activeKey = ref('1');
        const store = useStore();
        const datePickerFormat = 'YYYY-MM-DD';
        const today = ref(dayjs(get_today(), datePickerFormat));
        const OK = ref(false);

        const storeBody = reactive({
            text: "",
            target_id: 1,
            target_type_id: activeKey,
            create_by_id: store.state.Member.user.id
        });


        watch(activeKey, (val, oldval) => {
            console.log(val);
            console.log(oldval);
        });

        const storeNote = () => {
            console.log("POST text： ", storeBody.text);
            store.dispatch('http/post', {
                api: "/api/admin/contents/create",
                json: storeBody
            })
                .then((data) => {
                    if (data.status) {
                        // console.log("success store", data.body)
                        confirm("success store")
                        storeBody.text = "";
                    } else {
                        data.error ==="0"
                        
                        console.log("error: ", data)
                    }
                });
        };

        const cancle = () => {
            storeBody.text = "";
        };

        const handleButtonClick = e => {
            console.log('click left button', e);
        };

        const handleMenuClick = e => {
            OK
            console.log('click', e);
        };

        onMounted(() => {
        });
        

        return {
            NoteCategory,
            storeBody,
            activeKey,
            storeNote,
            cancle,
            today,
            handleButtonClick,
            handleMenuClick,
            OK
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

