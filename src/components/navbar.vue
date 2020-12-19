<template>
<div>
  <div class="col-md-12 col-12  m-0 p-0" style="box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);">
   <nav class="navbar navbar-expand-sm nav-lap " >
      <div class="col-md-12 col-12 m-0 p-0 d-inline">
           <div class="col-md-9 row" style="margin:0 auto;">
                <div class="col-md-6 m-0 p-0">
                        <div class="col-md-6 m-0 p-0">
                            <img class="logo-sticky" src="https://on-track.in/wp-content/uploads/2018/10/logo.svg">       
                        </div>              
                </div>
                <div class="col-md-6 m-0 p-0 pull-right" >
                    <div class="col-md-8 d-flex pull-right" style="justify-content:right">
                        <div class="col-md-4 text-center m-0 p-0" >
                            
                        </div>
                        <div class="col-md-4 text-center m-0 p-0" >
                            <div class="col-md-12">
                                 <a href="https://book.on-track.in"><h6 class="line-height" style="background:#4E44D8;color:white;border-radius:25px" >Rent</h6></a>
                            </div>
                        </div>
                        <div class="col-md-4 text-center m-0 p-0" >
                            <div class="col-md-12">
                                 <a href="https://on-track.in"><h6 class="line-height" style="background:#4E44D8;color:white;border-radius:25px" >Buy</h6></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
       </div>
      </div>


    </nav>
   


  </div>
    <div class="col-12 m-0 p-0 nav-mobile" >
        <nav>
            <div class="col-12 row m-0 p-0 ">
                <div class="col-2 text-center m-0 p-0" >
                    <h6 style="color:#4E44D8; font-weight:bolder;line-height: 55px;"></h6>     
                </div>
                <div class="col-8 text-center" style="line-height:41px">
                    <img class="logo-sticky" src="https://on-track.in/wp-content/uploads/2018/10/logo.svg">   
                </div>
                <!--  --> 
                <!-- <div class="col-2 m-0 p-0 pt-2 text-center " v-on:click="close=!close" >
                    <span v-if="close"><img src="data:image/png;base64,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" width="50%" alt=""></span>
                    <span v-else><img src="data:image/png;base64,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" width="50%" alt=""></span>
                </div> -->
            </div>
        </nav>
        <div v-if="close" class="col-12 py-3 text-left text-bold" style="background:#482FB5; color:white;font-size:14px;font-weight:bold">
            <div class="py-1"><p>Rent</p></div>
            <div class="py-1"><p>Buy</p></div>
            <!-- <div class="py-1"><p class="m-0 p-0">Login/Signup</p></div> -->
        </div>
       
    
    </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        close:false
    }
},
methods:{
    icon(){
        this.show = true
    }
}
}
</script>

<style scoped>
 .line-height{
     line-height: 2;
 }
.nav-mobile{
    display: none !important;
}
 @media only screen and (max-width: 600px) {
 .nav-lap{
     display:none !important
    }
    .nav-mobile{
    display: block !important;
}
 }
 
 .j{
     justify-content: flex-start;
 }
 .h{
     justify-content: flex-end;
 }
</style>