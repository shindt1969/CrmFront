<template lang="pug">

a-row(:gutter='[40,16]')
.home
  a-col(:span='8' style="margin-top:20px")
   a-card
        div(calss='user')
        .user
            img(src='../../assets/images/puffin.jpg')
            .user-info
              p.name admin
              p.role SuperAdmin
       
        .login-info
          p
            | 上次登入時間
            span 2022-07-11
          p
            | 上次登入地點
            span 西區

  a-col(:span='16' style="margin-top:20px" height="450px")
     a-card
      //-  <a-table v-for=""></a-table>
      
</template>

<script>

export default {
  name: "Home",
  setup(){
    const tableData =[

    ];
    const tableLabel={
      user:"客戶名",
      name:"課程",
      
    }

  }

};
</script>

<style lang="less" scoped>
.home{
  .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img{a
      width: 100px ;
      height: 100px;
      border-radius: 5%;
      margin-right: 40px;
    }
    
  }
}


</style>
