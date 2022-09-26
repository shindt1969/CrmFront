import Antd from 'ant-design-vue/es'

const lang={
    "zh-TW":{
      "required":"此欄位必填",
      "email":"電子郵件格式不正確",
      "phone":"電話格式不正確",
      "number":"必須為數字",
      "password":"密碼必須包含大、小寫、數字，且長度為8-12",
      "passwordCheck":"確認密碼不符",
      "num_en":"只能輸入英文、數字",
      "visited":"只能中文",
      "numBetween":(a,b)=>{ return `數值必須介於 ${a} 和 ${b}之間`;},
      "numMax":(v)=>{ return '數值必須小於 '+v;},
      "numMin":(v)=>{ return '數值必須大於 '+v;},
      "numMaxEq":(v)=>{ return '數值必須小於等於 '+v;},
      "numMinEq":(v)=>{ return '數值必須大於等於 '+v;},
      "strMax":(v)=>{ return '長度必須小於 '+v;},
      "strMin":(v)=>{ return '長度必須大於 '+v;},
    },
    "en_US":{
      "required":"This field is required",
      "email":"E-mail must be valid",
      "phone":"Phone number must be valid",
      "number":"must be a number",
      "password":"Password must include uppercase, lowercase and number and must be between 8-12 characters",
      "passwordCheck":"Confirm Password is not correct",
      "num_en":"Number and English character only",
      "numMin":(v)=>{ return 'This field must be greater than '+v;},
      "numBetween":(a,b)=>{ return `'This field must be between ${a} and ${b}`;},
      "numMax":(v)=>{ return 'This field must be less than '+v;},
      "numMaxEq":(v)=>{ return 'This field must be less than '+v+' (or equal)'},
      "numMinEq":(v)=>{ return 'This field must be greater than '+v+' (or equal)';},
      "strMax":(v)=>{ return 'This field must be less than '+v+' characters';},
      "strMin":(v)=>{ return 'This field must be at least '+v+' characters';},
    }
  };
  const msg=lang['zh-TW'];


  const numberParser=function(v){
    let demical = 10*10
    return Math.round(parseFloat(v)*demical)/demical;
  }

  const getters = {

    numBetween:(state,getters)=>(val)=>{
      return v => (numberParser(v) <= numberParser(val[1])&&parseFloat(v) >= parseFloat(val[0])) || msg["numBetween"](val[0],val[1]);
    },
    numMax:(state,getters)=>(val)=>{
      return v => (numberParser(v) < numberParser(val)) || msg["numMax"](val);
    },
    numMin:(state,getters)=>(val)=>{
      return v => (numberParser(v) > numberParser(val)) || msg["numMin"](val);
    },
    numMaxEq:(state,getters)=>(val)=>{
      return v => (numberParser(v) <= numberParser(val)) || msg["numMaxEq"](val);
    },
    numMinEq:(state,getters)=>(val)=>{
       
      return v => (numberParser(v) >= numberParser(val)) || msg["numMinEq"](val);
    },
    strMax:(state,getters)=>(val)=>{
      return v => (v && v.length <= val) || msg["strMax"](val);
    },
    strMin:(state,getters)=>(val)=>{
      return v => (v && v.length >= val) || msg["strMin"](val);
    },
    passwordCheck:(state,getters)=>(val)=>{
      return v => v===val || msg["passwordCheck"];
    },
    inputRules:(state,getters)=>(rules,val)=>{
      let result=[];
      for (let i =0; i <rules.length; i++) {
        if(state[rules[i]]!=undefined){
          result.push(state[rules[i]],"fff");
        }else if(getters[rules[i]]!=undefined){
           result.push(getters[rules[i]](val));
        }
      }
      return result;
    }
  };


  let  validateNewPassword2 = (rule, value, callback) => {
      console.log("21212",state.mobiles)
    if (value !== state.mobiles) {
      return Promise.reject("請打一樣號碼")
    } else {
      return Promise;
    }
  }


  const initState=function(){
    return{
      // required:v =>(!!v) ||v===0|| msg["required"],
      mobiles:"55",
      username:[{required: true,message: msg["required"],trigger:"blur"}],
      mobile:[{pattern:/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/,message: msg["phone"]+"內容不可小於2"}],
      // mobileage:[{required: true,message: "required"},
      // {validator: validateNewPassword2,trigger: "change"}],
      emails:[{ pattern: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,message:  msg["email"]}],
      habit:[{pattern: /^[A-Za-z]*(?=[\s\S]{1,2}$)[A-Za-z0-9]*[0-9]*$/,message: msg["num_en"]+"且長度不能大於2"}],
      visited:[{pattern:/^[\u4e00-\u9fa5]+$/,message: msg["visited"]}],
      password:[{required: true,message: msg["required"],trigger:"blur"}],

    //   required:(v) =>{  return typeof(v)!="string"&&Array.isArray(v)?(v.length!=0):(!!v) ||v===0|| msg["required"]},
    //   email: v =>  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || !v || msg["email"],
    //   phone:v => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(v) && v.length>=7 || !v || msg["phone"],
    //   phone2:v => /^([+]*[0-9]{0,4})-([0-9]{0,8})$/g.test(v)  || !v || msg["phone"],
    //   number:v => /^[+-]?([0-9]*[.])?[0-9]+$/.test(v)|| msg["number"],
    //   num_en:v => /^[A-Za-z]*[A-Za-z0-9]*[0-9]*$/.test(v)|| msg["num_en"],
    //   password:v=> /\d/.test(v)&& /[a-z]/.test(v) && /[A-Z]/.test(v) && v.length>=8 && v.length<=12 || msg["password"],
      
    }
  };
  const state = initState();

  export default {
    namespaced: true,
    state,
    getters,
  }