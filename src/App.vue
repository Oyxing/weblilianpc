<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import acction from './statics/js/acction.js'

export default {
  name: 'App',
  created() {
       
     acction.readFun().then((result) => {
            var address = acction.decryptFun({_this:this,arr:result.msg,pass:'oyxing'})
              if(address.length){
                this.$store.state.example.addressArr = address 
                this.$router.push({
                    path: '/'
                  })
              }else{
                this.$router.push({
                    path: '/login'
                  })
              }
        }).catch((err) => {
          this.$router.push({
                      path: '/login'
                    })
        });
    
  },
}
</script>

<style>
#q-app{
  background: #f6f6f7;
}
</style>
