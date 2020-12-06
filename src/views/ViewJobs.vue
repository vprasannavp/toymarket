<template>
    <div class="viewjobs">
   <navbar :adminStatus="isAdmin" :pageName="title" > </navbar>
<div v-if="isNetworkError" class="network_error">
      <img src="@/assets/img/error.jpg" />
      <p class="err_txt"  > Network Error </p>
</div>       
        <div v-if="!isNetworkError" class="jobs-posting-wrap">
            <div v-if="isAdmin" class="apply_div">
                <button class="primary_btn" @click="popup()"> Add Job </button>
            </div>
            <div v-for="(job,index) of jobs" :key="job.id" class="jobs-listing">

                <h3 class="job-title"> {{ job.jobTitle }} </h3>
                <p class="job-stats"> <span><i class="las la-map-marker-alt"></i> {{ job.jobLocation }} </span> <span><i
                            class="las la-wrench"></i>{{ job.jobExperience_min }} - {{ job.jobExperience_max }} Years
                    </span> </p>
                <p class="job-desc">
                    {{ job.jobDesc }}
                </p>
                <div class="full_width">
                    <div class="eq_split">
                        <span><i class="las la-wallet"></i> {{ job.jobSalary_min }} - {{ job.jobSalary_max }} PA
                        </span>
                    </div>
                    <div class="eq_split">
                   <button @click="getdetails(job.id)"  v-if="!isAdmin" class="primary_btn" >  View  </button>
                    </div>
                </div>
                <span v-if="isAdmin" @click="deleteJob(job.id , index)" class="cmm_span del_span"> <i class="las la-trash"></i> </span>
                <span v-if="isAdmin" @click="editJob(job.id , index )" class="cmm_span edit_span"> <i class="las la-edit"></i> </span>
            </div>
            <div v-if="jobs.length === 0" class="network_error nojob_present">
                 <img src="@/assets/img/no_jobs_found.jpg" />
      <p class="err_txt"  > No Jobs There At present </p>
                 </div>  
        </div>

        <div class="popup-bx addjob">
            <div class="popup_block">
                <div class="popup_title">
                    <h4> {{popupTitle}}</h4>
                    <span @click="popupClose()" class="close_btn"> <i class="las la-times"></i> </span>
                </div>
                <div v-if="addedJob" class="popup_body">
                    <form id="job_popup">
                        <p class="error_txt_form" v-if="errMsg.length > 0"> {{errMsg}} </p>
                        <div class="form-control-bx">
                            <label> Job Title </label>
                            <input type="text" id="jobTitle" v-model="jobTitle" class="form-input" required>
                        </div>
                        <div class="slit_wrap">
                            <p class="split_title"> Job Experience </p>
                            <div class="div_2">
                                <div class="form-control-bx">
                                    <label> Min </label>
                                    <input type="number" id="jobExp_min" v-model="jobExperience_min" class="form-input"
                                        required>
                                </div>
                            </div>
                            <div class="div_2">
                                <div class="form-control-bx">
                                    <label> Max</label>
                                    <input type="number" id="jobExp_max" v-model="jobExperience_max" class="form-input"
                                        required>
                                </div>
                            </div>
                        </div>
                        <div class="form-control-bx">
                            <label> Job Location </label>
                            <input type="text" id="jobLoc" v-model="jobLocation" class="form-input" required>
                        </div>
                        <div class="slit_wrap">
                            <p class="split_title"> Job Salary </p>
                            <div class="div_2">
                                <div class="form-control-bx">
                                    <label> Min </label>
                                    <input type="number" id="jobSal_min" v-model="jobSalary_min" class="form-input"
                                        required>
                                </div>
                            </div>
                            <div class="div_2">
                                <div class="form-control-bx">
                                    <label> Max</label>
                                    <input type="number" id="jobSal_max" v-model="jobSalary_max" class="form-input"
                                        required>
                                </div>
                            </div>
                        </div>
                        <div class="form-control-bx">
                            <label> Job Description </label>
                            <textarea id="jobDesc" class="form-input-txt-area" v-model="jobDesc" required></textarea>
                        </div>
                        <div v-if="addedJobBtn" class="form-control-bx">
                            <input @click="addjob_data" type="submit" value="Add Job" class="submit_btn">
                        </div>
                        <div v-if="!addedJobBtn" class="form-control-bx">
                            <input @click="editjob_data" type="submit" value="Update Job" class="submit_btn">
                        </div>
                    </form>
                </div>
                <div v-if="!addedJob" class="popup_body">
                    <div class="success_block">
                        <img src="@/assets/img/done_pic.jpg" />
                    </div>
                    <p class="succ_txt"> {{success_txt}}</p>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import axios from 'axios';
import navbar from '../components/navbar.vue';
    const baseURL = "http://localhost:3000/jobs"
    export default {
  components: { navbar },
        name: "ViewJobs",
        data() {
            return {
                isAdmin: false,
                isNetworkError:false,
                title:"Jobs",
                popupTitle: "",
                success_txt: "",
                addedJob: true,
                addedJobBtn: true,
                userid: 0,
                jobTitle: "",
                jobExperience_min: "",
                jobExperience_max: "",
                jobLocation: "",
                jobSalary_min: "",
                jobSalary_max: "",
                jobDesc: "",
                errMsg: "",
                updateIndex: 0,
                validData: false,
                jobs: []
            }
        },

        async created() {
            if (this.$route.params.userName === "recruiter@abc.in") {
                this.isAdmin = true
            }
            try {
                const res = await axios.get(baseURL)
                this.jobs = res.data;
                    this.isNetworkError = false
            } catch (e) {
                console.error(e)
                this.isNetworkError = true
            }
        },
        methods: {
            getdetails(index){
              this.$router.push(`/job/${index}`)
            },
       
            async deleteJob(jobID, index) {
                axios.delete(`${baseURL}/${jobID}/`).then(() => {
                    this.jobs.splice(`${index}`, 1)
                }).catch(error => {
                    console.log(error)
                });

            },
            popup() {
                document.querySelector('.addjob').style.display = "block";
                document.querySelector('body').style.overflow = "hidden";
                this.isDisabled = true,
                    this.jobTitle = this.jobExperience_min = this.jobExperience_max = this.jobLocation = this
                    .jobSalary_min = this.jobSalary_max = this.jobDesc = ""
                this.popupTitle = "Add Job"
                this.addedJobBtn = true
            },
            popupClose() {
                document.querySelector('.addjob').style.display = "none";
                document.querySelector('body').style.overflow = "visible";
                this.addedJob = true;
            },
            chkMinExp() {
                if (this.jobExperience_max < this.jobExperience_min) {
                    this.errMsg = "The Experiance of Max Should be Greater"
                }
            },
            formValidator() {
                if (this.jobTitle === "" || this.jobLocation === "" || this.jobDesc === "") {
                    this.errMsg = "The Fields are empty"
                    return false
                }
                if (this.jobExperience_min >= this.jobExperience_max) {
                    this.errMsg = "Minimum Experience is Greater than Max"
                    return false
                }
                if (this.jobSalary_min >= this.jobSalary_max) {
                    this.errMsg = "Minimum Salary is Greater than Max"
                    return false
                }
                this.errMsg = ""
return true
            },
            async addjob_data(e) {
                e.preventDefault();
                var idGen = Date.now()
                if (this.formValidator() === false) {
                    return
                }

                this.success_txt = "Added Job Successfully"
                try {
                    const res = await axios.post(baseURL, {
                        id: idGen,
                        jobTitle: this.jobTitle,
                        jobExperience_min: this.jobExperience_min,
                        jobExperience_max: this.jobExperience_max,
                        jobLocation: this.jobLocation,
                        jobSalary_min: this.jobSalary_min,
                        jobSalary_max: this.jobSalary_max,
                        jobDesc: this.jobDesc
                    })
                    console.log(res.data)
                    this.jobs = [...this.jobs, res.data];
                    this.jobTitle = this.jobExperience_min = this.jobExperience_max = this.jobLocation = this
                        .jobSalary_min = this.jobSalary_max = this.jobDesc = ""
                    this.addedJob = false;
                } catch (e) {
                    console.error(e)
                }
            },
            async editJob(jobId, index) {
                this.popupTitle = "Edit Job"
                this.success_txt = "Job Updated Successfully"
                this.updateIndex = index

                try {
                    const res = await axios.get(`${baseURL}/${jobId}/`)
                    this.userid = res.data.id;
                    this.jobTitle = res.data.jobTitle;
                    this.jobExperience_min = res.data.jobExperience_min;
                    this.jobExperience_max = res.data.jobExperience_max;
                    this.jobLocation = res.data.jobLocation;
                    this.jobSalary_min = res.data.jobSalary_min;
                    this.jobSalary_max = res.data.jobSalary_max;
                    this.jobDesc = res.data.jobDesc;
                    document.querySelector('.addjob').style.display = "block";
                    document.querySelector('body').style.overflow = "hidden";
                    this.addedJobBtn = false
                } catch (e) {
                    console.error(e)
                }
            },
            async editjob_data(e) {
                e.preventDefault();
                if (this.formValidator() === false) {
                    return
                }
                try {
                    const res = await axios.put(`${baseURL}/${this.userid}`, {
                        jobTitle: this.jobTitle,
                        jobExperience_min: this.jobExperience_min,
                        jobExperience_max: this.jobExperience_max,
                        jobLocation: this.jobLocation,
                        jobSalary_min: this.jobSalary_min,
                        jobSalary_max: this.jobSalary_max,
                        jobDesc: this.jobDesc
                    })
                    this.jobs[this.updateIndex] = res.data
                    this.addedJob = false;
                } catch (e) {
                    console.error(e)
                }
            }
        }
    }
</script>
<style scoped>
     
    .jobs-posting-wrap {
        padding: 50px 20px 80px 20px;
        width: 70%;
        margin: 0 auto;
    }

    h3.job-title {
        font-size: 28px;
        font-weight: 700;
        margin: 0;
    }

    p.job-stats span {
        padding: 0 20px 0 0px;
    }

    p.job-desc {
        font-size: 15px;
        line-height: 1.3;
    }

    .jobs-listing {
        padding: 20px 30px;
        background: #fff;
        border-radius: 10px;
        border: 2px solid #3333;
        cursor: pointer;
        margin: 0 0 40px 0;
        position: relative;
    }

    .jobs-listing:hover {
        transition: .5s all ease;
        border: 2px solid #333;
    }

    .full_width {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    ul.skills_tab {
        padding: 0;
        margin: 0;
    }

    ul.skills_tab li {
        list-style: none;
        float: left;
        font-size: 14px;
        border: 1px solid #333;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 40px;
        color: #333;
    }

    .apply_div {
        display: flex;
        justify-content: flex-end;
        margin: 0 0 40px 0;
    }

      span.cmm_span {
        padding: 10px 10px;
        border-radius: 50%;
        line-height: 0;
        position: absolute;
        cursor: pointer;
        font-size: 22px;
    }

    span.del_span {
        border: 2px solid #dc0707;
        color: #dc0707;
        top: 10px;
        right: 10px;
    }

    span.del_span:hover {
        background: #dc0707;
        color: #fff;
    }

    span.edit_span {
        border: 2px solid #199600;
        color: #199600;
        top: 10px;
        right: 70px;
    }

    span.edit_span:hover {
        background: #199600;
        color: #fff;
    }

    .popup-bx {
        background: #0000009e;
        position: fixed;
        width: 100%;
        top: 0;
        display: none;
        transition: .5s all ease;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .popup_block {
        width: 40%;
        background: #fff;
        margin: 35px auto 40px auto;
        border-radius: 10px;
        padding: 20px 0px 0px 0px;
    }

    .popup_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 20px 20px;
        border-bottom: 1px solid #3333;
    }

    .popup_title h4 {
        margin: 0;
        font-size: 22px;
    }

    span.close_btn {
        font-size: 22px;
        cursor: pointer;
        opacity: .5;
    }

    span.close_btn:hover {
        opacity: 1;
    }

    .popup_body {
        padding: 20px;
    }

    .div_2:first-child {
        padding: 0 20px 0 0;
    }

    .div_2:last-child {
        padding: 0 0px 0 20px;
    }

    .slit_wrap:after {
        content: '';
        clear: both;
        display: block;
    }

    .slit_wrap .div_2 label {
        font-size: 14px;
    }

    .success_block img {
        width: 60%;
        display: block;
        margin: 0 auto;
    }

    p.succ_txt {
        color: #6bc445;
        font-size: 26px;
        text-align: center;
        padding: 0 0 10px 0;
    }
    .network_error img {
    margin: 50px auto 0 auto;
    display: block;
    width: 25%;
}
p.err_txt {
    text-align: center;
    font-size: 34px;
    padding: 0;
    margin: 0;
}
</style>