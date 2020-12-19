<template>
    <div class="col-md-12 col-12 m-0 p-0">
        <div class="col-12 m-0 p-0">
            <div class="col-12 m-0 p-0" style="background:#4e44e8">
                <div class="col-12 py-3 m-auto p-0" >
                    <img src="../assets/banner.png" alt="" width="100%" height="auto">
                </div>
            </div>
            <div class="col-12 m-0 p-3 mt-3">
            <div class=" col-12  p-4" style="background:white !important; border-radius:25px; box-shadow: 0 5px 10px 0 rgba(0,89,163,.15);">
                <p><strong style="font-size:20px">Tell us a bit about yourself, and we’ll tell you a lot more about this scheme.</strong></p>
                    <div v-if="hasBeenSubmitted" >
                        Thanks for filling in this lovely form
                    </div>
                    <div v-else class="form row pt-3" >
                        <p class="text-center pb-1"  style="color:red" v-if="message">{{message}}</p>
                        <div class="col-md-3  text-center col-12 mb-4 " >
                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                <input list="hosting-plan1" type="text" class="form-control" v-model="name" required>  
                                <span class="floating-label">Name</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-12 mb-4">
                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                <input list="hosting-plan2" type="text" class="form-control" placeholder="DD-MM-YYYY" v-model="dob" required>
                                <span class="floating-label"></span>
                            </div>
                        </div>
                        <div class="col-md-3 col-12 mb-4">
                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">
                                <input list="hosting-plan99" type="number" class="form-control"  v-model="mobile" required>
                                <span class="floating-label">Mobile number</span>
                            </div>
                        </div>
                        <div class="col-12 mb-4 text-center ">                
                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;"> 
                                <input list="hosting-plan5" type="text" class="form-control" v-model="gender" required>
                                <datalist id="hosting-plan5">
                                    <option value="Male"></option>
                                    <option value="Female"></option> 
                                </datalist>
                                <span class="floating-label">Gender</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-12 mb-4">
                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;">   
                                    <input list="hosting-plan4" type="text" class="form-control" v-model="city" required>
                                    <span class="floating-label">City</span>
                            </div>
                        </div>
                        <div class="col-12 mb-4 text-center ">                
                            <div class="col-12 text-center " style="box-shadow: 2px 2px 12px #55555530;"> 
                                <input list="hosting-plan8" type="text" class="form-control" v-model="vehicle_name" required>
                                <datalist id="hosting-plan8">
                                    <option value="Honda Dio"></option>
                                    <option value="Honda Activa"></option>
                                    <option value="TVS Jupiter"></option>  
                                </datalist>
                                <span class="floating-label">Vehicle Name</span>
                            </div>
                        </div>
                        <div class="form col-12 m-0 p-3 px-4 row">
                            <div class=" col-6 pr-3 mt-3 m-0 p-0">
                                <p class=""><strong style="color:grey">Aadhar Card</strong></p>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" v-model="aadhar_card" value="yes" class="form-check-input" name="optradio1">Yes
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" v-model="aadhar_card" value="no" class="form-check-input" name="optradio1">No
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6 col-6 p-0 pl-3 mt-3 m-0" >
                                <p class=""><strong style="color:grey">PAN Card</strong></p>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" v-model="pancard" class="form-check-input1" value="yes" name="optradio"> Yes
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" v-model="pancard" class="form-check-input1" value="no" name="optradio" > No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center ml-5">
                        <div class="col-12 text-center xcv mt-3"  v-if="!success">
                            <button  type="button" class="btn  _2iiQB _3qpfi text-center" @click="submit" >Submit</button>
                            <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                        </div>
                    </div>  
            </div>
            </div>
                

                <div class="col-12 col-md-4" style="margin:0 auto;">

                    <div class="col-md-8 col-12 mt-5 pt-2" style="margin:0 auto">
                        <div class="col-12 mt-2 m-0 p-0 textp text-left">
                            <h4 class="m-0 p-0 font-h3">How It Works?</h4>
                            <p class="underline"></p>
                        </div> 
                    </div>

                    <div class="col-12 mt-5 row m-0 p-0 font-row">
                    <div class="col-4  text-center mt-2" >
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3447/3447545.svg" alt="" width="auto" height="50px">
                    </div>
                    <div class="col-8  features">
                        <p class="font-h3">Fill The Form</p>
                    </div>
                    </div>
                    <div class="col-12 mt-5 row m-0 p-0 font-row">
                    <div class="col-4  text-center mt-2" >
                        <img src="https://www.flaticon.com/svg/static/icons/svg/126/126509.svg" alt="" width="auto" height="50px">
                    </div>
                    <div class="col-8  features">
                        <p class="font-h3">Will Contact You</p>
                    </div>
                    </div>
                    <div class="col-12 mt-5 row m-0 p-0 font-row">
                    <div class="col-4  text-center mt-2" >
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1292/1292849.svg" alt="" width="auto" height="50px">
                    </div>
                    <div class="col-8  features">
                        <p class="font-h3">Approved</p>
                    </div>
                    </div>
                    <div class="col-12 mt-5 row m-0 p-0 font-row">
                    <div class="col-4  text-center mt-2" >
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3661/3661858.svg" alt="" width="auto" height="50px">
                    </div>
                    <div class="col-8  features">
                        <p class="font-h3">Take The Bike</p>
                    </div>
                    </div>
                    <div class="col-12 mt-5 row m-0 p-0 font-row">
                    <div class="col-4  text-center mt-2" >
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/2977/2977975.svg" alt="" width="auto" height="55px">
                    </div>
                    <div class="col-8  features">
                        <p class="font-h3">Ride Safely</p>
                    </div>
                    </div>
                    <div class="col-12 mt-5 row m-0 p-0 font-row">
                    <div class="col-4  text-center mt-2" >
                        <img src="https://www.flaticon.com/svg/static/icons/svg/985/985736.svg" alt="" width="auto" height="45px">
                    </div>
                    <div class="col-8  features">
                        <p class="font-h3">Return or Keep</p>
                    </div>
                    </div> 
                    <div class="col-12 col-md-12 mt-5 text-center">
                    <!-- <p class="m-0 p-0" style="font-size: 14px;     color: #666666; font-weight:bold">Register and book your</p>
                    <p class="m-0 p-0 mb-3"  style="font-size: 14px;     color: #666666; font-weight:bold">ride!</p> -->
                    <div class="col-md-12 col-12 mt-3">
                        <button class="search" @click="scrollToTop">Apply Now</button>
                    </div>
                    </div>
                </div>

                 <!-- <div class="col-12 mt-3 m-0 p-3">
                    <h4 class="mb-5"><strong>Benefits of Buy-Back?</strong></h4>
                    <h6 class="mb-4"><span style="font-weight:700; font-size:19px"><img src="../assets/d1.png" alt="" width="40px" class="pr-2" height="auto"> Affordability</span> - Cheaper EMI</h6>
                    <h6 class="mb-3"><span style="font-weight:700; font-size:19px"><img src="../assets/d2.png" alt="" width="40px" height="auto" class="pr-2"> Flexibility</span>  - Option to Return Upgrade or Buy.</h6>
                    <h6 class="mb-3"><span style="font-weight:700; font-size:19px"><img src="../assets/d3.png" class="m-0 p-0 pr-2 mt-3" alt="" width="40px" height="auto"> White Board</span>  - Vehicle Assigned on your name.</h6>
                </div> -->

                    <!-- <div class="col-md-8 col-12 mt-5 pt-2" style="margin:0 auto">
                        <div class="col-12 mt-2 m-0 p-0 textp text-left">
                            <h4 class="m-0 p-0 font-h3">Buy-Back Benefits</h4>
                            <p class="underline"></p>
                        </div> 
                    </div>    -->

                <div class="col-12 mb-3 text-center" >
                    <div class="col-md-12 col-12 p-3 card text-center" style="border-radius:30px; justify-content:center; border:none;  box-shadow: 0 5px 10px 0 rgba(0,89,163,.15);">
                        <h4>Honda<strong> Activa</strong></h4>
                        <div class="col-md-12 col-12">
                            <img src="../assets/activa.png" alt="" width="100%" height="auto">
                        </div>
                        <div class="col-md-10 col-12 text-center  " style="justify-content:center"> 
                            <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>On-Road Price</strong></p></div>
                                <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 85,016</strong></p></div>
                                <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>Down-Payment</strong></p></div>
                                <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 8,500</strong></p></div>
                                <div class="col-md-7 col-7  m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>Tenure</strong></p></div>
                                <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>24 Months</strong></p></div>
                                <div class="col-md-7 col-7 m-0 p-0 mb-2  text-left"><p class="m-0 p-0"><strong>Our EMI</strong></p></div>
                                <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 2,566</strong></p></div>
                                <div class="col-md-7 col-7  m-0 p-0  mb-2 text-left"><p class="m-0 p-0" style="font-size:14px">Other EMIs</p></div>
                                <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0" style="font-size:14px">Rs. 4,045</p></div>
                                <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0" style="font-size:14px">Difference</p></div>
                                <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0" style="font-size:14px">Rs. 1,479</p></div>
                            </div>
                            <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                <button @click="scrollToTop" class=" py-2 " style="font-weight:700; color:white; border:none; background:#EE7010; border-radius:12px;padding-left:4rem; padding-right:4rem">Apply for Loan</button>
                            </div>
                            <h6 class="mt-4 mb-0 pb-0" style="font-size:12px"><strong>Fulfilled by Tansi Honda, Bengaluru</strong></h6>
                            <h6 class=" pt-0 mt-0 pt-1" style="font-size:12px">Authorized Honda 2-Wheelers Dealership</h6>
                        </div>  
                    </div>
                </div>

               

                <div class="col-12 mb-3 text-center" >
                    <div class="col-md-12 col-12 p-3 card text-center" style="border-radius:30px; justify-content:center; border:none;  box-shadow: 0 5px 10px 0 rgba(0,89,163,.15); ">
                        <h4>TVS<strong> Jupiter</strong></h4>
                        <div class="col-md-12 col-12">
                            <img src="../assets/jupiter.jpg" alt="" width="100%" height="auto">
                        </div>
                        <div class="col-md-10 col-12 text-center  " style="justify-content:center"> 
                            <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>On-Road Price</strong></p></div>
                                <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 84,750</strong></p></div>
                                <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>Down-Payment</strong></p></div>
                                <div class="col-md-5 col-5   m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 8,475</strong></p></div>
                                <div class="col-md-7 col-7  m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>Tenure</strong></p></div>
                                <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>24 Months</strong></p></div>
                                <div class="col-md-7 col-7 m-0 p-0 mb-2  text-left"><p class="m-0 p-0"><strong>Our EMI</strong></p></div>
                                <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 2,652</strong></p></div>
                                <div class="col-md-7 col-7  m-0 p-0  mb-2 text-left"><p class="m-0 p-0" style="font-size:14px">Other EMIs</p></div>
                                <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0" style="font-size:14px">Rs. 4,032</p></div>
                                <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0" style="font-size:14px">Difference</p></div>
                                <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0" style="font-size:14px">Rs. 1,380</p></div>
                            </div>
                            <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                <button @click="scrollToTop" class=" py-2 " style="font-weight:700; color:white; border:none; background:#EE7010; border-radius:12px;padding-left:4rem; padding-right:4rem">Apply for Loan</button>
                            </div>
                            <h6 class="mt-4 mb-0 pb-0" style="font-size:12px"><strong>Fulfilled by Tansi Honda, Bengaluru</strong></h6>
                            <h6 class=" pt-0 mt-0 pt-1" style="font-size:12px">Authorized Honda 2-Wheelers Dealership</h6>
                        </div>  
                    </div>
                </div>

                <div class="col-12 mb-3 text-center" >
                    <div class="col-md-12 col-12 p-3 card text-center" style="border-radius:30px; justify-content:center; border:none;  box-shadow: 0 5px 10px 0 rgba(0,89,163,.15);">
                        <h4>Honda<strong> Dio</strong></h4>
                        <div class="col-md-12 col-12">
                            <img src="../assets/dio.png" alt="" width="100%" height="auto">
                        </div>
                        <div class="col-md-10 col-12 text-center  " style="justify-content:center"> 
                            <div class="row col-md-12 col-12 m-0 p-0 text-center" style="justify-content:center">
                                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>On-Road Price</strong></p></div>
                                    <div class="col-md-5 col-5 m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 83,403</strong></p></div>
                                    <div class="col-md-7 col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>Down-Payment</strong></p></div>
                                    <div class="col-md-5  col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 8,340</strong></p></div>
                                    <div class="col-md-7 col-7  m-0 p-0 mb-2 text-left"><p class="m-0 p-0"><strong>Tenure</strong></p></div>
                                    <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>24 Months</strong></p></div>
                                    <div class="col-md-7 col-7 m-0 p-0 mb-2  text-left"><p class="m-0 p-0"><strong>Our EMI</strong></p></div>
                                    <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0"><strong>Rs. 2,645</strong></p></div>
                                    <div class="col-md-7 col-7  m-0 p-0  mb-2 text-left"><p class="m-0 p-0" style="font-size:14px">Other EMIs</p></div>
                                    <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0" style="font-size:14px">Rs. 3,968</p></div>
                                    <div class="col-md-7  col-7 m-0 p-0 mb-2 text-left"><p class="m-0 p-0" style="font-size:14px">Difference</p></div>
                                    <div class="col-md-5 col-5  m-0 p-0 mb-2 pl-3 text-left"><p class="m-0 p-0" style="font-size:14px">Rs. 1,314</p></div>
                            </div>
                            <div class="col-md-12 col-12 m-0 p-0 mt-3">
                                <button @click="scrollToTop" class=" py-2 " style="font-weight:700; color:white; border:none; background:#EE7010; border-radius:12px;padding-left:4rem; padding-right:4rem">Apply for Loan</button>
                            </div>
                            <h6 class="mt-4 mb-0 pb-0" style="font-size:12px"><strong>Fulfilled by Tansi Honda, Bengaluru</strong></h6>
                            <h6 class=" pt-0 mt-0 pt-1" style="font-size:12px">Authorized Honda 2-Wheelers Dealership</h6>
                        </div>  
                    </div>
                </div>
    
        </div>       
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
                name:'',
                dob:'',
                gender:'',
                pancard:'',
                aadhar_card:'',
                vehicle_name:'',
                city:'',
                mobile:'',
                loading:false,
                response:'',
                message:'',
                success:false,
                source: '',
                hasBeenSubmitted: false
                }
            },
 
    methods:{
        topFunction() {
            var elmnt = document.getElementById("form");
            elmnt.scrollIntoView();
            },
        close_resp(){
        if(this.success == true){
            this.success = false
        }else{
            this.success = false
        }
        },
        myFunction() {
            var x = window.document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },
        submit(){
       axios.post('https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry',{
            name:this.name,
            dob:this.dob,
            gender:this.gender,
            pancard:this.pancard,
            aadhar_card:this.aadhar_card,
            vehicle_name:this.vehicle_name,
            mobile:this.mobile,
            city:this.city
        }).then(response=>{
            this.hasBeenSubmitted = true;
            this.response = response.body;
            this.loading = false
             
            this.$swal({
              title:'Your request has been registered.',
              text:'Our team will get in touch with you shortly.'
              })
            this.success = true
            
            this.$router.push(
              {path:'/thankyou'
            })
            }).catch(error => { 
                this.message = error.body.msg;
                this.loading= false
            })   
    }
  },
//  submit(){
//       this.loading = true
//       this.$http.post('https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry',{
//                 name:this.name,
//                     dob:this.dob,
//                     gender:this.gender,
//                     pancard:this.pancard,
//                     aadhar_card:this.aadhar_card,
//                     vehicle_name:this.vehicle_name,
//                     mobile:this.mobile,
//                     city:this.city
                
//             }).
//             then(response=>{
//                 this.hasBeenSubmitted = true;
//             this.response = response.body;
//             this.loading = false
             
//             this.$swal({
//               title:'Your request has been registered.',
//               text:'Our team will get in touch with you shortly.'
//               })
//             this.success = true
//             this.$router.push(
//               {path:'/thankyou'
//             })
//             }).catch(error => { 
//                 this.message = error.msg;
//                 this.loading= false
//             })   
//     }
//   },
     computed:{
     error(){
         if(this.name ==""||this.mobile==""||this.vehicle_name==""||this.aadhar_card==""||this.pancard ==""||this.dob==""||this.gender==""||this.city==""){
             return true
         }else{
             return false
         }
     }
 }
}
</script>

<style scoped>
.stepnumber{
    background: white;
    width: 30px;
    height: 27px;
    color: black;
    border-radius:50%;
    font-size: 16px;
    font-weight: 500;
}
.search{
    border-radius: 20px;
    background-color: #FFA405;
    color: #fff;
    height: 35px;
    line-height: 10px;
    font-weight: 700 !important;
    font-size: 14px;
    display: block;
    margin: 30px auto;
    margin-top: 20px;
    width: 200px;
    border:none;
    letter-spacing: 1px;

}
.font-pp{
    margin-top: 10px;
    font-size: 23px;
    font-weight: 700 !important;
    color: blue;
}
.font-p1{
    font-size: 14px;
    font-weight: 700 !important;
    color: blue; 
    padding-top: 5px !important;  
}


.font-h3{
    font-weight: 700 !important;
    font-size: 20px;
    margin: 10px 0;
}
.font-h31{
    font-weight: 700 !important;
    font-size: 20px;
    margin: 10px 0;
    color:#4E44D8
}
.features {
    border-left: 2px solid  #FFA405;
    padding: 0 30px;
}
.rak:after {
    margin-top: 8px;
    content: "";
    width: 41px;
    height: 4px;
    background-image: linear-gradient(261deg,#f69b12,#ed6a10);
    display: block;
    border-radius: 2px;
}


._3qpfi {
    color: #fff;
    font-weight: 700;
   
    background-image: linear-gradient(261deg,#f69b12,#ed6a10);
    font-size: 16px;
    letter-spacing: .4px;
}

._2iiQB {
    position: relative;
    height: 48px;
    padding: 0 .75rem;
    /* border-radius: 5px; */
    text-align: center;
    display: block;
    width: 100%;
    text-transform: uppercase;
    border: none;
    outline: none;
    -webkit-box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
    box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
}
.xcv {
    width: 202px;
    position: relative;
    cursor: pointer;
}
.bnm {
    color: #fff;
    font-weight: 700;
    background-color: #ed6c0d;
     background-image: linear-gradient(261deg,#f69b12,#ed6a10);
    font-size: 16px;
    letter-spacing: .4px;
}
.newp{
    font-size: 16px!important;
    line-height: 24px!important;
    width: 100%!important;
        font-weight: 500;
            color: #465166;
}
.newp2{
    font-size: 12px!important;
    line-height: 24px!important;
    width: 100%!important;
        font-weight: 500;
            color: #465166;
}
.newp1{
    font-size: 22px!important;
    line-height: 24px!important;
    width: 100%!important;
        font-weight: 500;
            color: #465166;
}
._2iiQB {
    position: relative;
    height: 48px;
    padding: 0 .75rem;
    /* border-radius: 5px; */
    text-align: center;
    display: block;
    width: 100%;
    text-transform: uppercase;
    border: none;
    outline: none;
    -webkit-box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
    box-shadow: 0 4px 8px 0 rgba(237,108,13,.5);
}

._1aEHs>div {

    display: flex;
    height: 48px;
    line-height: 48px;
}
._3dm64 {
    border: 1px solid #dde5eb;
    border-radius: 5px;

    box-sizing: border-box;
}
._1aEHs>div>div {
    display: inline-block;
    padding: 0 10px;
}
._1aEHs p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(70,81,102,.5);
}
._3D60D {
    margin-bottom: 10px;
    border-radius: 5px;
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.07);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.07);
    background-color: #fff;
    margin-top: 5px;
}
.ghj{
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.textp:after {
    margin-top: 8px;
    content: "";
    width: 41px;
    height: 4px;
    background-image: linear-gradient(264deg,#f69b00,#ed6a00);
    display: block;
    border-radius: 2px;
}
h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: #465166;
    width: 144px;
    margin-top: 0;
}
input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}
.form-control{
    border:none !important
}
textarea:focus ~ .floating-label,
textarea:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}
select:focus ~ .floating-label,
select:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}

.inputText {
outline: none !important;
}
input:focus, textarea:focus, select:focus{
  outline: none !important;
  box-shadow: none !important
}
.floating-label {
  position: absolute;
  pointer-events: none;
  left: 30px;
  top: 8px;
  transition: 0.2s ease all;
  font-size:14px
}
.top {
    padding: 36px 0 48px;
    background: #fff url('https://www.cars24.com/js/06e98e5be5add15ebe97e86aaf7fe008.svg');
    background-image: url('https://www.cars24.com/js/06e98e5be5add15ebe97e86aaf7fe008.svg');
    background-position-x: center;
    background-position-y: top;
    background-size: 100% auto;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% auto;
    position: relative;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
</style>