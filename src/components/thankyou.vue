<template>

    <div class="social col-12 col-md-12  mx-0 px-0" style="background: white;">
  <div class="col-12 col-md-12 mx-0 pb-5 bgi" >
    <div class="col-12 col-md-12 m-0 p-0  pb-5 text-center">
      <h1 class="vbn">Quick and easy online <span>bike</span> rental platform!</h1>
    </div>

      <div class="col-10 col-md-4 py-2  p-0 " style="background: #4F3F40; margin:0 auto">
        <div class="col-10 col-md-10 p-0 " style="margin:0 auto">
          <div class="col-md-12  col-12 mb-4 mt-5">
              <input list="hosting-plan3"  placeholder="Name" type="text"  class="form-control" v-model="customerName"  required>
            
          </div> 
          <div class="col-md-12 col-12 mb-4">
              <input list="hosting-plan3"  placeholder="Email" type="email"  class="form-control" v-model="customerEmail"  required>
              
          </div> 
          
          <div class="col-md-12 col-12 mb-4">
              <input list="hosting-plan3" type="number"  placeholder="Mobile Number"  class="form-control" v-model="customerMobile"  required>

          </div> 
          <div class="col-md-12 col-12 mb-4">
              <input list="hosting-plan3" type="text"  placeholder="Bike you're looking for"  class="form-control" v-model="vehicleLookingFor"  required>
             
          </div>
          <div class="col-md-12 col-12 ">
            <div class="col-md-12 col-12 m-0 p-0 mb-4 text-center  btn-lap" style="background:#ffa405 ; cursor: pointer;">
              <button class="button-easy" type="submit" style="cursor:pointer"  @click="submit">SUBMIT</button>       
            </div>
          </div>
        </div>
      </div>
  
  </div>
  <div class="col-md-8 col-12 mt-5 pt-2" style="margin:0 auto">
    <div class="col-12 mt-2 m-0 p-0 textp text-left">
      <h4 class="m-0 p-0 font-h3">Why Ontrack?</h4>
      <p class="underline"></p>
    </div> 
  </div>
  <div class="col-12 col-md-4" style="margin:0 auto;">

    <div class="col-12 mt-5 row m-0 p-0 font-row">
      <div class="col-4  text-center mt-2" >
        <img src="../assets/ontrack-lp-icons/zero-deposit.png" alt="" width="auto" height="50px">
      </div>
      <div class="col-8  features">
        <p class="font-h3">Zero Security Deposit</p>
      </div>
    </div>
    <div class="col-12 mt-5 row m-0 p-0 font-row">
      <div class="col-4  text-center mt-2" >
        <img src="../assets/ontrack-lp-icons/delivery.png" alt="" width="auto" height="50px">
      </div>
      <div class="col-8  features">
        <p class="font-h3">Pickup & Delivery Service</p>
      </div>
    </div>
    <div class="col-12 mt-5 row m-0 p-0 font-row">
      <div class="col-4  text-center mt-2" >
        <img src="../assets/ontrack-lp-icons/dashboard.png" alt="" width="auto" height="50px">
      </div>
      <div class="col-8  features">
        <p class="font-h3">Unlimited KM</p>
      </div>
    </div>
    <div class="col-12 mt-5 row m-0 p-0 font-row">
      <div class="col-4  text-center mt-2" >
        <img src="../assets/ontrack-lp-icons/help.png" alt="" width="auto" height="50px">
      </div>
      <div class="col-8  features">
        <p class="font-h3">Roadside Assistance</p>
      </div>
    </div>
    <div class="col-12 mt-5 row m-0 p-0 font-row">
      <div class="col-4  text-center mt-2" >
        <img src="../assets/ontrack-lp-icons/mechanic.png" alt="" width="auto" height="50px">
      </div>
      <div class="col-8  features">
        <p class="font-h3">Free Maintenance</p>
      </div>
    </div>
    <div class="col-12 mt-5 row m-0 p-0 font-row">
      <div class="col-4  text-center mt-2" >
        <img src="../assets/ontrack-lp-icons/helmet (1).png" alt="" width="auto" height="50px">
      </div>
      <div class="col-8  features">
        <p class="font-h3">Complimentary Helmet</p>
      </div>
    </div> 
    <div class="col-12 col-md-12 mt-5 text-center">
      <p class="m-0 p-0" style="font-size: 14px;     color: #666666; font-weight:bold">Register and book your</p>
      <p class="m-0 p-0 mb-3"  style="font-size: 14px;     color: #666666; font-weight:bold">ride!</p>
      <div class="col-md-12 col-12 mt-3">
        <button class="search">Book Now</button>
      </div>
    </div>
  </div>
  <div class="col-md-8 col-12 mt-5 pt-2" style="margin:0 auto">
    <div class="col-12 mt-5 m-0 p-0 textp text-left">
      <h4 class="m-0 p-0 font-h3">Trending Bikes</h4>
      <p class="underline"></p>
    </div> 
  </div>
  
<!-- <app-footer-profile></app-footer-profile> -->
  <div class="col-md-6  p-0  col-12 features-t" style="margin:0 auto" >
   
    <div id="myCarousel" class="carousel slide col-md-12" data-ride="carousel" style="margin: 0 auto">
      <!-- Carousel -->
    <!-- <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
    </ol> -->
      <div class="carousel-inner ">
        <div class="item carousel-item active">
          <div class="col-md-12 col-12">
           <img src="https://on-track-jarvis.s3.ap-south-1.amazonaws.com/image300png/04-honda-navi.png" alt="" width="100%">
           <p class="font-pp mb-0 pb-0">Honda Navi</p>
           <p class="font-p1 p-0 m-0" >₹ 3000/Month</p>
           <button class="search1">Rent Now</button>
          </div>
        </div>
        <div class="item carousel-item ">
          <div class="col-md-12 col-12">
            <img src="https://on-track-jarvis.s3.ap-south-1.amazonaws.com/image300png/06-honda-dio.png" alt="" width="100%">
            <p class="font-pp mb-0 pb-0">Honda Dio</p>
            <p class="font-p1 p-0 m-0">₹ 3500/Month</p>
            <button class="search1">Rent Now</button>
          </div>
        </div>  
          <div class="item carousel-item ">
            <div class="col-md-12 col-12">
              <img src="https://on-track-jarvis.s3.ap-south-1.amazonaws.com/image300png/08-honda-activa.png" alt="" width="100%">
              <p class="font-pp mb-0 pb-0">Honda Activa</p>
              <p class="font-p1 p-0 m-0">₹ 3750/Month</p>
              <button class="search1">Rent Now</button>
            </div>
          </div>
          <div class="item carousel-item ">
            <div class="col-md-12 col-12">
              <img src="https://on-track-jarvis.s3.ap-south-1.amazonaws.com/image300png/10-bajaj-pulsar-150.png" alt="" width="100%">
              <p class="font-pp mb-0 pb-0">Bajaj Pulsar 150</p>
              <p class="font-p1 p-0 m-0">₹ 4500/Month</p>
              <button class="search1">Rent Now</button>
            </div>
          </div>
          <div class="item carousel-item ">
            <div class="col-md-12 col-12">
              <img src="https://on-track-jarvis.s3.ap-south-1.amazonaws.com/image300png/14-aprilia.png" alt="" width="100%">
              <p class="font-pp mb-0 pb-0">Aprilia SR 150</p>
              <p class="font-p1 p-0 m-0">₹ 4500/Month</p>
              <button class="search1">Rent Now</button>
            </div>
          </div>
          <div class="item carousel-item ">
            <div class="col-md-12 col-12">
              <img src="https://on-track-jarvis.s3.amazonaws.com/image300png/01-tvs-sport.png" alt="" width="100%">
              <p class="font-pp mb-0 pb-0">TVS Sport</p>
              <p class="font-p1 p-0 m-0">₹ 3000/Month</p>
              <button class="search1">Rent Now</button>
            </div>
          </div>
        
      </div>
      <!-- Carousel Controls -->
      <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
        <i class="fa fa-angle-left fa-2x" ></i>
      </a>
      <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
        <i class="fa fa-angle-right" style="color:black !important"></i>
      </a>
    </div>
  </div>
  <div class="col-12  col-md-8" style="margin: 0 auto">
    <div class="col-12 mt-5 mb-4 m-0 p-0 textp text-left">
      <h4 class="m-0 p-0 font-h3 ">How It Works?</h4>
      <p class="underline"></p>
    </div> 
    <div class="col-md-12  col-12">
      <div class="col-12 row m-0 p-0">
        <div class="col-6 text-c m-0 p-3">
          <img class="wid" src="https://on-track.in/wp-content/uploads/2018/09/step1-signup1.svg" alt="" width="100%">
        </div>
        <div class="col-6">
          <h4 class="font-h31">Signup</h4>
          <p class="font-p">Sign up and complete your profile to ride with us. Welcome to Ontrack!</p>
        </div>
      </div>
      <div class="col-12 mt-5 row m-0 p-0">
        <div class="col-6 m-0 p-0">
          <h4 class="font-h31">Rent</h4>
          <p class="font-p">Choose a bike that fits your persona. Make your commute easy, comfortable and fun!</p>
        </div>
        <div class="col-6 text-c p-3">
          <img class="wid" src="https://on-track.in/wp-content/uploads/2018/09/step2-rent.svg" alt="" width="100%">
        </div>
      </div>  
      <div class="col-12  mt-5 row m-0 p-0">
        <div class="col-6 text-c m-0 p-3">
          <img class="wid" src="https://on-track.in/wp-content/uploads/2018/09/step3-ride.svg" alt="" width="100%">
        </div>
        <div class="col-6 ">
          <h4 class="font-h31">Ride</h4>
          <p class="font-p">The bike is yours for a month. Make it an essential part of your everyday travel experience.</p>
        </div>
      </div> 
      <div class="col-12  mt-5 row m-0 p-0">
        
        <div class="col-6 m-0 p-0">
          <h4  class="font-h31">Repeat</h4>
          <p class="font-p">Repeat, Swap or Pause – You have the privilege to opt for whatever works best.</p>
        </div>
        <div class="col-6 text-c p-3 ">
          <img class="wid" src="https://on-track.in/wp-content/uploads/2018/09/step4-repeat.svg" alt="" width="100%">
        </div>
      </div> 
    </div>
  </div>
 
    <section class=" mt-5" style="background-color:#3023AE; ">
      <div class="container  ">
        <div class="row order-footer">
          <div class="col-lg-3 col-md-3 col-sm-12 pt-2 text-center footer-1"><img src="../assets/ontrack-lp-icons/refer-footer.svg" class="img-fluid img-mobi"></div>
          <div class="col-lg-7 col-md-6 col-sm-12 pt-3 footer-2 ">
            <h5 class="white-text bold" style="color:white !important">Refer a Friend</h5>
            <p class="white-text" style="color:white !important; font-size:14px">Click Here To Invite Your Friend To Book A Bike And Earn 250 Ontrack Points.</p>
          </div>
          <div class="col-lg-2 col-md-3 pt-3 text-center pb-2 footer-3">
            <button class="refer-btn animated bounceIn hoverable mt-3 wow bounceIn" data-wow-duration="2s" >Refer Now</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
<footer class="page-footer pt-3 white" style="color:#666666;">
  <!-- Footer Links -->
  <div class="container text-center text-md-left">
    <!-- Grid row -->
    <div class="row" style="color:#666666">
      <!-- Grid column -->
      <div class="col-md-3 ">
        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-3">
          <a href="https://on-track.in/"> <img src="../assets/ontrack-lp-icons/logo@3x.png" class="logo-sm" height="30" alt=""> </a>
        </h5>
        <p style="font-size:14px">
            We are here to make your everyday travel pocket-friendly and hassle-free! We offer a wide range of two-wheelers on monthly rental subscription. Now your day-to-day travel can be high on affordability and extremely efficient.
           
        </p>
      </div>
      <!-- Grid column -->
      <hr class="clearfix w-100 d-md-none">
      <!-- Grid column -->
      <div class="col-md-3 w-5 p-left">
        <!-- Links -->
        <h5 class="font-weight-bold  mt-3 mb-3 footer-head">Learn More</h5>
        <ul class="list-unstyled">
          <li>
            <a href="https://www.on-track.in/about/">About Us</a>
          </li>
          <li>
            <a href="https://www.on-track.in/faq-2/">FAQ</a>
          </li>
          <li>
            <a href="https://www.on-track.in/contact/">Contact Us</a>
          </li>
          <li>
            <a href="https://www.on-track.in/blog/">Blog</a>
          </li>
        </ul>
      </div>
      <!-- Grid column -->
      
      <!-- Grid column -->
      <div class="col-md-3 w-5 p-left">
        <!-- Links -->
        <h5 class="font-weight-bold  mt-3 mb-3 footer-head">Policies</h5>
        <ul class="list-unstyled">
          <li>
            <a href="https://www.on-track.in/terms-of-use/">Terms & Conditions</a>
          </li>
          <li>
            <a href="https://www.on-track.in/privacy-policy2/">Privacy Policy</a>
          </li>
          <li>
            <a href="https://www.on-track.in/disclaimer-policy/">Disclaimer Policy</a>
          </li>
          <li>
            <a href="https://www.on-track.in/copyright-guidelines/">Copyright Guidelines</a>
          </li>
        </ul>
      </div>
      <!-- Grid column -->
    
      <!-- Grid column -->
      <div class="col-md-3 w-5 p-left">
        <!-- Links -->
        <h5 class="font-weight-bold  mt-3 mb-3 footer-head">Get in touch</h5>
        <ul class="list-unstyled">
          <li>
            <a href="mailto:info@on-track.in">info@on-track.in</a>
          </li>
          <li>
            <a href="#!">+91-9148518401</a>
          </li>
          <li>
            <!--Facebook-->
            <a target="blank" href="https://www.facebook.com/ontrackBikes/" class="fb-ic mr-3 icon-color"><i class="fa fa-lg fa-facebook icon-color"> </i></a>
            <!--Linkedin-->
            <a target="blank" href="https://www.linkedin.com/company/ontrack-technologies-private-limited/" class="li-ic mr-3 icon-color"><i class="fa fa-lg fa-linkedin icon-color"> </i></a>
            <!--Instagram-->
            <a target="blank" href="https://www.instagram.com/ontrackbikes/" class="ins-ic mr-3 icon-color"><i class="fa fa-lg fa-instagram icon-color"> </i></a>
          </li>
        </ul>
      </div>
      <!-- Grid column -->
    </div>
    </div>
    </footer>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
        customerName:'',
        customerMobile:'',
        customerEmail:'',
        vehicleLookingFor:'',
        response_message:null,
        loading:false
        }
    },
    methods:{
        myFunction() {
            var x = window.document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },
        submit(){
       axios.post('https://api.on-track.in/api/social',{
            customerName:this.customerName,
            customerMobile:this.customerMobile,
            customerEmail:this.customerEmail,
            vehicleLookingFor:this.vehicleLookingFor,
        },{
          headers: {
              'Content-Type':  'application/json',
              'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }
      }).then(result => {
          console.log(result.data)
          console.warn(result)
        }).catch(error => {
          throw new Error(`API ${error}`);
        })
        }
    },
     computed:{
     error(){
         if(this.customerName ==""||this.customerMobile==""||this.customerEmail==""||this.vehicleLookingFor==""){
             return true
         }else{
             return false
         }
     }
 }
}
</script>


<style scoped>
.wid{
    width:60% !important;
}
.vbn {
    padding: 70px 30px 15px 30px;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    font-size: 24px;
    line-height: 28px;
    color: #fff;
}
.text-c{
    text-align: center !important;
}
@media screen and (max-width: 600px){
    .font-p{
    color: #666666;
    font-size: 12px !important;
    font-weight: normal;
    line-height: 24px;
}
        .vbn {
            padding: 30px 30px 15px 30px;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
            font-size: 24px;
            line-height: 28px;
            color: #fff;
        }
        .wid{
            width:100% !important;
        }
        h1 span {
            color: #ffa405;
        }
      .bgi{
        background-image: linear-gradient(40deg, #c96dd8 0%, #3023ae 100%) !important;
      }
}


.refer-btn{background-color: #fff; border-radius:25px; padding: 10px 25px;border:0; color: #3023AE; cursor: pointer; }
.btn-color{ background-color: #4E44D8;}
.br-25{border-radius: 25px;}
footer.page-footer a {
    color: #666;
    font-size: 14px;
    line-height: 2.5rem;
}
footer p{
    line-height: 20px;
    text-align:justify;
}
.footer-head
{
    color: #2A2A2A;
  /* font-family: Gilroy; */
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;

}
footer.page-footer .footer-copyright {
    overflow: hidden;
    background-color: #E0E0E0;
    color: #4A4A4A;
    font-size: 14px;
}
.icon-color{color:#4E44D8}
.read-more-btn{background-color: transparent;border: none;padding: 0}
.p-left{padding-left: 5rem}

@media only screen and (max-width: 992px) {
    .p-left{padding-left: 2rem}
     }
@media only screen and (max-width: 768px) {
    .p-left{padding-left: 2rem}
     }
@media only screen and (max-width: 500px) {
    .pt-5{padding-top: 0 !important}
    .mt-3{ margin-top: 0 !important}
    .pt-3{padding-top: 0 !important}
    .p-left{padding-left: 1.3rem; text-align: left}
    .order-footer
{display: flex; flex-flow: column; margin-bottom: 20px;}
.footer-1 {
    order: 3;
}
.footer-2 {
    order: 1;
    text-align: center;
    margin: 15px 0px 5px 0px;
}
.footer-3
{
    order:2;
} 
.img-mobi{width: 260px}
.w-5{width:50%; float: left;}
     }  




.testimonial{
	font-size:17px
}
.bgi{
    background-image: url('https://cdn.bimbimbikes.com/images/header.jpg');
    background-size: cover;
}


h3 {
	color: #333;
	text-align: center;
	font-weight: bold;
	position: relative;
}

.col-center {
	margin: 0 auto;
	float: none !important;
}
.carousel {
	margin: 50px auto;
	padding: 0 70px;
	min-height: 200px;

}
.carousel-item {
	color: black;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
  
	text-align: center;
}
.carousel .item .img-box {
	width: 135px;
	height: 135px;
	margin: 0 auto;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 30px 0 10px;
}
.carousel .overview {	
	font-style: italic;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #db584e;
}
.carousel .carousel-control {
	width: 40px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
	background: none;
}
.carousel-control i {
    font-size: 68px;
	line-height: 42px;
    position: absolute;
    display: inline-block;
	color: rgba(0, 0, 0, 0.8);
    text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
	bottom: -40px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	margin: 1px 3px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #999;
	border-color: transparent;
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.carousel-indicators li.active {	
	background: #555;		
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
@media only screen and (max-width: 600px) {
  .testimonial{
	text-align: justify;
  }
  .carousel {
	min-height: 347px !important;
  }
  .carousel {
	padding: 0 50px;
    }
}

.button-easy:focus{
    
opacity: 0.5;
background: #fba60f
    
}
.btn-lap:focus{

    opacity: 0.5;
    background:#fba60F;
    border: 1px solid black !important;
}
h1 {
    padding: 70px 30px 15px 30px;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    font-size: 24px;
    line-height: 28px;
    color: #fff;
}
h1 span {
    color: #ffa405;
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
.search1{
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
    width: 100px;
    border:none;
    letter-spacing: 1px;

}
.font-p{
    color: #666666;
    font-size: 17px ;
    font-weight: normal;
    line-height: 24px;
}
.underline{
    background-color: #fba450;
    height: 5px;
    border-radius: 2px;
    width: 50px;
    margin-bottom: 10px;
    margin-top: 5px;
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

.font-row{
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-bottom: 20px;
}
.textp:after {
    margin-top: 8px;
    content: "";
    width: 100px;
    text-align: center;
    height: 4px;
    background-image: #FFA405;
    display: block;
    border-radius: 2px;
    margin-left: 100px;
}
.form-control{
    border-radius: 0 !important;
    border:none !important
}
.inputText {
    outline: none !important;
    border: none;
    border-bottom: 1px solid gray;
    border-radius: 0px;
    width: 100%
    }
    .inputText:focus{
        border-bottom: 1px solid #ffb52f;
    }
    input:focus, textarea:focus, select:focus{
      outline: none !important;
      box-shadow: none !important;
      
    }
    .floating-label {
        font-size: 14px;
        font-weight: 500;
        position: absolute;
        pointer-events: none;
        left: 30px;
        top: 8px;
        transition: 0.2s ease all;
    }
    
    input:focus ~ .floating-label,
    input:not(:focus):valid ~ .floating-label{
      top: -7px;
      padding: 0px 5px 0px 0px;
      background-color: #fefefe;
      left: 20px;
      font-size: 11px;
      opacity: 1;
      z-index: 1;
      outline: none !important;
      box-shadow: none !important
    }
    
  

.carousel {
	margin: 50px auto;
	padding: 0 70px;
	min-height: 500px;

}
.carousel-item {
	color: black;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
  
	text-align: center;
}
.carousel .item .img-box {
	width: 135px;
	height: 135px;
	margin: 0 auto;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 30px 0 10px;
}
.carousel .overview {	
	font-style: italic;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #db584e;
}
.carousel .carousel-control {
	width: 40px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
    background: none;
    color: #FFA500;
}
.carousel-control i {
    font-size: 25px;
	line-height: 42px;
    position: absolute;
    display: inline-block;
	color: rgba(0, 0, 0, 0.8);
    text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
	bottom: -40px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	margin: 1px 3px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #999;
	border-color: transparent;
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.carousel-indicators li.active {	
	background: #555;		
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.button-easy{
    background: #ffa405;
  display: inline-block;
  font-size: 14px;
  height: 40px;
  padding-top: 2px;
  text-decoration: none !important;
 text-align: center;
  color: white;
  border:none;
  letter-spacing: 1px;
  
}
@media only screen and (max-width: 600px) {
    .features-t{
        background-image: url('../assets/ontrack-lp-icons/r1.svg');
        background-size: 600px 500px;
    background-repeat: no-repeat;
    }
  .carousel {
	min-height: 300px !important;
  }
  .carousel {
	padding: 0 50px;
    }
    .button-easy{
        background: #ffa405;
      display: inline-block;
      font-size: 14px;
      height: 40px;
      padding-top: 2px;
      text-decoration: none !important;
      width:200px;
      color: white;
      border:none;
      letter-spacing: 1px;
      
  }
}
</style>