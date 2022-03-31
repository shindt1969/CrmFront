import { useStore, mapState } from "vuex"
import { computed } from "vue"

export function useMapState(mapper) {
   // 拿到store獨享
    const store = useStore()
    // 獲取到對應的對象的functions: {name: function, age: function}
    const storeStateFns = mapState(mapper)
    const storeState = {}
    // 对数据进行转换
    Object.keys(storeStateFns).forEach(fnKey => {
       //這裡綁定this的原因是computed計算屬性在進行查找的時候默認會採用this.$store
        //由於setup中沒有this綁定(this是undefined)，所以我們需要調用bind手動進行綁定
        const fn = storeStateFns[fnKey].bind({ $store: store })
        storeState[fnKey] = computed(fn)
    })
    return storeState
}





// export default {
//     setup() {
//        const store = useStore();
  
//       //  const ifLoading = computed( ()=> store.state.isLoading  )    第一種寫法，寫在SETUP裡面
//       //  const clicked = computed(()=>store.state.clickedTimes) 
       
      
  
//       //  const storeStateFns = mapState(['isLoading','clickedTimes'])  第二種寫法，寫在SETUP裡面
//       //  console.log(storeStateFns)
//       //  const storeState = {}
//       //  Object.keys(storeStateFns).forEach(fnKey => {
  
//       //     const fn = storeStateFns[fnKey].bind({ $store: store })
//       //     storeState[fnKey] = computed(fn)
//       //      })
//       //  console.log(storeState.clickedTimes.value)
  
      
//        const reverseLoad = () =>{ store.commit("Loaded")}
//        const addTimes= () =>{ store.commit("addTimes")}
  
//       return{reverseLoad,addTimes,...storeState}
//     }}
//   </script>



