import { useStore, mapGetters } from 'vuex'
import {computed} from 'vue'

export function useGetters(params) {
    const store = useStore();
    const storeStateFns = mapGetters(params);
    const storeState={};
    Object.keys(storeStateFns).forEach(fnKey=>{
        const fn = storeStateFns[fnKey].bind({$store:store});
        storeState[fnKey]=computed(fn);
    })    
    return storeState;
}