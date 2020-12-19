<template>
  <div class="col-md-9 text-center  m-auto p-0" style="overflow:hidden">
     <h3 class="py-5">loan Enqiry Leads</h3>
     <div v-for="(data, index) in results" :key="index">
       
     
    <table class="table table-striped pt-5">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">D.O.B</th>
          <th scope="col">Gender</th>
          <th scope="col">mobile</th>
          <th scope="col">City</th>
          <th scope="col">Vehicle Interesed</th>
          <th scope="col">PAN Card</th>
          <th scope="col">Aadhar Card</th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr  >
          <td>{{data.name}}</td>s
          <td>{{data.dob}}</td>
          <td>{{data.gender}}</td>
          <td>{{data.mobile}}</td>
          <td>{{data.city}}</td>
          <td>{{data.vehicle_name}}</td>
          <td>{{data.pancard}}</td>
          <td>{{data.aadhar_card}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 data(){
   return{
      results:[]
   }
 },
 mounted(){
   axios.get('https://backend-bikex.herokuapp.com/api/ontrack-loan-enquiry').then(response => {
            this.results = response.data
          })
}}
</script>

<style>

</style>