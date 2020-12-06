<template>
 <div class="login_container hei_100">
   <div class="bg_div div_2 hei_100">
   </div>
     <div class="bg_form div_2 hei_100">
       <div class="login_form">
         <h2 class="login_txt" > Login </h2>
            <p class="error_txt_form" v-if="errMsg.length > 0" > {{errMsg}} </p>
         <form @submit="login_check" >
<div  class="form-control-bx"> 
       <label> User Name </label>
       <input type="text" id="userName" v-model="userName" class="form-input" required >
      
   </div>
    <div class="form-control-bx"> 
       <input type="submit" value="Submit" class="submit_btn" >  
   </div>
         </form>
       </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
 
  },
  data(){
    return {
userName : "",
errMsg:""
    }
  },
  methods:{
login_check(e){
        e.preventDefault();
  this.userName = this.userName.toLowerCase()
   if(this.userName === 'recruiter@abc.in' || this.userName === 'candidate@abc.in' )
   { 
      localStorage.setItem("LoggedUser", this.userName);
      this.$router.push(`/jobs/${this.userName}`)
   }else{
     this.errMsg="Invalid Username"
   }
}
  }
}
</script>
<style>
    .bg_div{
        background: url('~@/assets/img/login_bg.jpg');
        background-size: cover;    
    }
    h2.login_txt {
    font-size: 30px;
    text-align: center;
}
.login_form {
    width: 60%;
    margin: 0 auto;
    border: 2px solid #3333;
    border-radius: 10px;
    padding: 10px 30px;
}
.bg_form{
      display: flex;
    align-items: center;
}
</style>
