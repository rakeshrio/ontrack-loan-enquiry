<template>
<div class="col-md-12 col-12 m-0 p-0 cvv">
  <navbar></navbar>
  <router-view></router-view>
  <!-- <social></social> -->

  <footer1></footer1>
</div>
</template>
<script>
// import social from './components/social'
import navbar from './components/navbar'
import footer1 from './components/footer1'
export default {
  data(){
    return{

    }
  },
  components:{
  //  social,
   navbar,
   footer1
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Langar&display=swap');
.cvv{
 font-family: gilroy !important;
}
@font-face {
  font-family: Gilroyf;
  src: url(./assets/font/Gilroy-ExtraBold.otf);
}
@font-face {
  font-family: Gilroy;
  src: url(./assets/font/Gilroy-Light.otf);
}
</style>
