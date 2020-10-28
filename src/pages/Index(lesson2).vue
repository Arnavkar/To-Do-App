<template>
  <q-page padding>
    <button
    style = "position: absolute; right: 10px"
    @click="counter++" >
      {{counter}}
    </button>
    <input 
    v-model="message" 
    @keyup.esc = "clearMessage"
    @keyup.enter = "alertMessage"
    v-autofocus
    v-bind:class = "{error: message.length>22}"
    ref="messageInput"
    />
    
    <!-- v-bind:style = "errorStyle" OR v-bind:class = "{error: message.length>22}"/> class is binded to error if message.length >22 -->

    <button @click= "clearMessage"> Clear </button>
    
    <div>{{message.length}}</div>
    
    <h5 
      class = "border-gray" 
      v-if="message.length>0">{{message}}</h5>
    <h6 v-else> "No input detected" </h6>

    <hr>

    <p>Uppercase message:{{messageUppercase}} </p>
    <p>Lowercase message: {{message | messageLowercase}} </p> 
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      message: "I love Vue.js",
      counter:0
    }
  },
  //Computed properties are manipulated data 
  //this only triggers when message is altered rather than having it as a methods and fire everytime the page changes
  //Computed values have alot of power-> access to everything in export default
  computed:{ 
    messageUppercase(){
      return this.message.toUpperCase()
    },
    errorStyle(){
      if (this.message.length>22){
        return{
          "color":"red",
          "background":"pink"
        }
      }
    }
  },
  methods:{
    clearMessage(){
      this.message = ''
    },
    alertMessage(){
      alert(this.message)
    },
  },
  filters:{ 
    //still calls method but diff from computer properties
    //filters don't have the same power as computed, instead they are better at formatting dates
    // applying filters in multiple places is easy  
    messageLowercase(value){
      return value.toLowerCase()
    }
  },
  directives:{ //directives are functions we can apply within the dom
    autofocus:{
      inserted(el){
        el.focus() // what does this do? 
      }
    }
  },
  beforeCreate(){
    // fired before your component is created
    console.log('beforeCreate')
  },
  created(){
    //fired after the component is created, access to data methods etc. 
    console.log('created')
  },
  beforeMount(){
    // fired right before the markup is committed to the page
    console.log('beforeMount')
  },
  mounted(){
    // fired after the markup is committed
    console.log('mounted')
    this.$refs.messageInput.className='bg-green'
    //refs allow us to access particular information in the dom, to grab it or manipulate it
    // overwrites the v-bind directive
  },
  beforeUpdate(){
    //fired right before the page is updated
    console.log('beforeUpdate')
  },
  updated(){
    //fired right after the page is updated
    console.log('updated')
  },
  beforeDestroy(){
    console.log("beforeDestory")
  },
  destroyed(){
    console.log("destory")
  },


}
</script>

<style>
  .border-gray{
    border: 1px solid grey;
  }
  .error{
    color: red;
    background: pink;
  }
  input,button{
    font-size:23px;
  }

</style>