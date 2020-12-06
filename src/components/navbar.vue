<template>
<div class="nav_wrap">
         <nav>
            <div class="nav-brand">
                <img src="@/assets/img/logo.png" />
            </div>
            <div class="nav-action">
            
                <div v-if="adminStatus" class="usericon"> <img src="@/assets/img/admin_logo.png" /> Recruiter </div>
                        <div v-if="!adminStatus" class="usericon"> <img src="@/assets/img/user_logo.png" />  Candidate </div>
                <div :to="{name:'Login'}" @click="logoutUser" class="logout-div"> <i class="las la-sign-in-alt"></i>
                    Logout </div>
            </div>
       
        </nav>
              <div class="jobs-header">
            <h2> {{pageName}} </h2>
        </div>
        </div>
</template>
<script>
export default {
    name:"navbar",
    props: {
      adminStatus: {
        type: Boolean,
        required: true
      },
      pageName: {
        type: String,
        required: true
      }
     },
     methods:{
              logoutUser() {
                localStorage.removeItem('LoggedUser')
                this.$router.push('/')
            },
     }
}
</script>
<style>

</style>