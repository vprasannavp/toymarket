<template>
<div class="job-details">
          <navbar :adminStatus="false" :pageName="job.jobTitle" > </navbar>
          <div class="details_wrap">
<div class="details_left">
  <h3 class="details_title" > {{job.jobTitle}} </h3>
  <p>
    {{job.jobDesc}}
     </p>
      <button @click="viewOther" class="primary_btn" > View Others </button>
</div>
<div class="details_right">
<ul class="details_li" >
  <li><i class="las la-map-marker-alt"></i> {{ job.jobLocation }}</li>
    <li><i class="las la-wrench"></i>{{ job.jobExperience_min }} - {{ job.jobExperience_max }} Years</li>
    <li><i class="las la-wallet"></i> {{ job.jobSalary_min }} - {{ job.jobSalary_max }} </li>
   </ul>
 <button class="primary_btn" > Apply Job </button>
</div>

          </div>
</div>
</template>
<script>
import axios from 'axios';
import navbar from '../components/navbar.vue';
const baseURL = "http://localhost:3000/jobs"
export default {
  name: "JobDetails",
   components: { navbar },
  data(){
return{ 
            job:[]
}
  },
    async created() {
           const jobId = this.$route.params.id;
               try {
                const res = await axios.get(`${baseURL}/${jobId}`)
                this.job = res.data;
                console.log(res.data)
            } catch (e) {
                console.error(e)
            } 
          },
          methods:{
            viewOther(){
               this.$router.push('/jobs/candidate@abc.in')
            }
          }
}
</script>
<style>
.details_wrap {
    width: 80%;
    margin: 50px auto 0 auto;
}
.details_left {
    width: 70%;
    border-right: 1px solid #3333;
    padding: 0 20px 0 0;
    float: left;
    box-sizing: border-box;
}
.details_right {
    width: 30%;
    float: left;
    box-sizing: border-box;
    padding: 0 0 0 20px;
}
.details_li{
  margin: 0;
  padding: 0;
  list-style: none;
}
ul.details_li li {
    padding: 0 0 18px 0;
}
</style>