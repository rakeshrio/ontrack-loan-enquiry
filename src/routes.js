// import home from './components/home'
// import vehicles from './components/vehicles'

const thankyou = () => import('./components/thankyou')
const dashboard = () => import('./components/dashboard')
const social = () => import('./components/social')
const termsandcondition = () => import('./components/termsandcondition')
// const socialmobile = () => import('./components/socialmobile')
// import socialmobile from './components/socialmobile'
// import traveller from './components/traveller'
// import adventurer from './components/adventurer'
// import finance from './components/finance'
// import terms from './components/termsandcondition'
// import privacypolicy from './components/privacypolicy'
// import disclaimerpolicy from './components/disclaimerpolicy'
// import copyright from './components/copyright'
// import faq from './components/faq'
// import notFound from './components/notfound'
// import display from './components/display'
// import sell from './components/sell'
// import checkout from './components/checkout'
// import ourstory from './components/our_story'
// import pay from './components/payment'
// import signup from './components/signin'
// import login from './components/login'
// import profile from './components/profile'
// import payment from './components/payment'
// import booking from './components/booking'
// import invoice from './components/invoice'
// import bounceproduct from './components/bounceproduct'
// import social from './components/social'
// import thankyou from './components/thankyou'
// import buybackpolicy from './components/buybackpolicy'

export default[
    
 
   {path:'/thankyou',component:thankyou},
   {path:'/dashboard', component:dashboard},
   {path:'/termsandcondition', component:termsandcondition},
   {path:'/', component:social}

  
   
]