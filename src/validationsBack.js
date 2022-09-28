// import { useStore, mapGetters } from 'vuex'
// import {computed} from 'vue'
import { useGetters } from "../src/useGetters"




export function validateNewPassword2(rule, value, callback) {
    const isOpens = useGetters(
        {isOpens: "validations/ageInfo"
        })
    if (value != isOpens) {
        
        return Promise.reject("請打一樣號碼")
      } else {
        return Promise;
      }
    };
