<template lang="pug">
div(style='background: #ececec; padding: 30px')
    a-card(title='Card title' :bordered='false' style='width: 300px')
        p Card content
        p Card content
        p Card content
    
</template>
        
<script>
import { ClockCircleOutlined, DownOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, reactive, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import dayjs from 'dayjs';

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

        const storeBody = reactive({
            text: "",
            owner_id: 1,
            type_id: activeKey,
            create_by_id: 1 //從 token 後端附加欄位
        });

        const store = useStore();
        const datePickerFormat = 'YYYY-MM-DD';
        const today = ref(dayjs(get_today(), datePickerFormat));

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
            console.log('click', e);
        };

        onMounted(() => {
        });

        return {
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
    
    