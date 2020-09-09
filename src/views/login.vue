<template>
  <div class='login'>

   <div class='interface'>
      <div class='title'>
          登录
    </div>
      <el-form class='top' :model="ruleForm" :rules="rules" ref='ruleForm'>
         <el-form-item  prop="number">
    <el-input v-model="ruleForm.number" prefix-icon="el-icon-user" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item  prop="pwd">
    <el-input  v-model="ruleForm.pwd" prefix-icon="el-icon-lock" show-password placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" class='but' @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
      </el-form>
      <div class='thirdParty'>
      <div>
          <div>账号:{{ruleForm.number}}</div>
          <div style='margin-top:10px;'>密码:{{ruleForm.pwd}}</div>
      </div>
      </div>
   </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            ruleForm:{
                number:"skse",
            pwd:"silver",
            },
            rules:{
                number:[
                   { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
            {validator:this.numberRule,trigger:"blur"}
                ],
                pwd:[
                     {required:true,mesage:"请输入密码",trigger:"change"},
                     {min:4,max:10,message:"长度在4到10个字符之间",trigger:"change"}
                ]
            }
        }
    },
    methods:{
         numberRule(rule,value,callback){
           if(value=="skse"){
               return callback()
           }
                        return callback(new Error("账号错误"))
          
        },
        submitForm(val){
        this.$refs[val].validate((vali)=>{
         if(vali){
             this.$store.commit("user/setCookie",this.ruleForm.number)
            this.$router.push("/")
         }
        })
        },
    },
           async mounted() {
            let a=await this.$store.dispatch("user/login")
            console.log(a)
            
        },
   
};
</script>
<style lang="scss" scoped>
.login{
    background: $blue;
    height: 100vh;
    position: relative;
    .thirdParty{
        display: flex;
        justify-content: space-between;
    }
    .interface{
        display: inline-block;
        margin:100px auto;
        color:#fff; 
        width: 35vw;
        .logins{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        .top{
            margin-top:30px;
        }
        .but{
            width: 100%;
        }
        .title{
            font-size: 35px;
        }
    }
}
</style>
