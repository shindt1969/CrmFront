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
            a-date-picker(v-model:value='today' style="margin: 4px;")
            a-dropdown(:trigger="['click']" :placement='top' v-model:visible="categoryVisible")
                a.ant-dropdown-link(@click.prevent='' style="margin:10px 10px;")
                    | 記事類別
                    DownOutlined
                template(#overlay)
                    NoteCategory(v-bind:categories="pCategories")
            //- trigger 控制移出區塊不會自動關閉區塊，visible 控制點擊區塊不要關閉
            a-dropdown(:trigger="['click']" v-model:visible="exampleVisible") 
                a.ant-dropdown-link(@click.prevent='' style="margin:10px 10px;")
                    | 記事範本
                    DownOutlined
                template(#overlay)
                    NoteCategory

            a-button(type="primary" style='margin: 4px;  float: right;' @click="storeNote") 存檔
            a-button(style='margin: 3px;  float: right;' @click="cancle") 取消
            div(style='margin-right: 10px;  float: right;')

</template>
    
<script>
import { ClockCircleOutlined, DownOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, reactive, watch, onMounted, computed } from 'vue';
import dayjs from 'dayjs';
import { useStore } from "vuex";
// import { bool } from 'vue-types';
import NoteCategory from "./NoteCategory.vue";

const get_today = () => {
    const date = new Date();
    var today = date.toLocaleDateString().split('/')
    return `${today[0]}-${today[1]}-${today[2]}`
}


export default defineComponent({
    components: {
        ClockCircleOutlined,
        DownOutlined,
        UserOutlined,
        NoteCategory
    },
    setup() {
        const activeKey = ref('1');
        const datePickerFormat = 'YYYY-MM-DD';
        const today = ref(dayjs(get_today(), datePickerFormat));
        const categoryVisible = ref(false);
        const exampleVisible = ref(false);
        const pCategories = ref([]);
        const store = useStore();

        const categoryIds = computed(() => {
            var checkedCategories = pCategories.value.filter(category => category.checked);

            return checkedCategories.map((category) => {
                console.log("category: ", category);
                if (category.checked)
                    return category.id;
            });
        });

        const storeBody = reactive({
            text: "",
            target_id: 1,
            target_type_id: activeKey,
            create_by_id: store.state.member.user.id,
            categoryIds: categoryIds
        });

        const storeNote = () => {
            // 清除所有空白字元之後字串等於沒有，也就是只有空白字元
            if (storeBody.text.replace(/^\s+|\s+$/g, "") !== "") {
                store.dispatch('http/post', {
                    api: "/api/admin/notes/create",
                    json: storeBody
                })
                    .then((data) => {
                        if (data.status) {
                            confirm("success store");
                            storeBody.text = "";
                        } else {
                            console.log("error: ", data);
                            return data;
                        }
                    });
            } else {
                confirm("記事不能為空");
            }
        };

        const cancle = () => {
            storeBody.text = "";
        };

        const getNoteCategories = () => {
            store.dispatch("http/get", {
                api: "/api/admin/noteCategories",
            })
                .then((data) => {
                    if (data.status) {
                        pCategories.value = data.body;
                        pCategories.value.forEach(label => label.checked = false)
                    } else {
                        console.log(data)
                        alert("NO-REGISTER");
                    }
                });
        };

        onMounted(() => {
            getNoteCategories()
        });

        return {
            storeBody,
            activeKey,
            storeNote,
            cancle,
            today,
            categoryVisible,
            exampleVisible,
            pCategories
        };
    },

});
</script>

<style scoped>

</style>

