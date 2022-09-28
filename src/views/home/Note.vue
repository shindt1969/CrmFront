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
            a-button(style="margin: 3px;background-color: #F0F1FF") 記事範本
                DownOutlined

            a-button(style="margin: 3px;background-color: #F0F1FF; position: absolute; z-index: 2" @click="handleMenuClick") 記事類別
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
import NoteCategory from "./NoteCategory.vue";
import { bool } from 'vue-types';


const get_today = () => {
    const date = new Date();
    var today = date.toLocaleDateString().split('/')
    return `${today[0]}-${today[1]}-${today[2]}`
}


export default defineComponent({
    // emits: ['update'],
    components: {
        ClockCircleOutlined,
        DownOutlined,
        UserOutlined,
        NoteCategory
    },
    setup(props, { attrs, slots, emit, expose }) {
        const activeKey = ref('1');
        const store = useStore();
        const datePickerFormat = 'YYYY-MM-DD';
        const today = ref(dayjs(get_today(), datePickerFormat));

        const storeBody = reactive({
            text: "",
            target_id: 1,
            target_type_id: activeKey,
            create_by_id: store.state.member.user.id
        });


        watch(activeKey, (val, oldval) => {
            console.log(val);
            console.log(oldval);
        });

        const storeNote = () => {
            // 清除所有空白字元之後字串等於沒有，也就是只有空白字元
            if (storeBody.text.replace(/^\s+|\s+$/g, "") !== "") {
                store.dispatch('http/post', {
                    api: "/api/admin/contents/create",
                    json: storeBody
                })
                    .then((data) => {
                        if (data.status) {
                            confirm("success store")
                            storeBody.text = "";
                        } else {
                            data.error === "0"
                            console.log("error: ", data)
                        }
                    });
            } else {
                confirm("記事簿能為空");
            }
        };

        const cancle = () => {
            storeBody.text = "";
        };

        const handleButtonClick = e => {
            console.log('click left button', e);
        };

        const handleMenuClick = e => {
            emit('update');
            console.log('click');

        };

        onMounted(() => {
        });


        return {
            storeBody,
            activeKey,
            storeNote,
            cancle,
            today,
            handleMenuClick,
        };
    },

});
</script>

<style scoped>
.icons-list :deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
}

.hello {
    position: relative;
}
</style>

