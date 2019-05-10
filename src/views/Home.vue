<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        {{item.text}}
      </li>
    </ul>
    <Hellos :value="value" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "a",
      list: [
        {
          text: "a"
        },
        {
          text: "b"
        },
        {
          text: "c"
        }
      ]
    };
  },
  beforeCreate () {
    
  },
  created () {
    
  },
  beforeMount () {
    
  },
  mounted () {
    
  },
  beforeDestroy () {
    
  },
  destroyed () {
    
  },
  computed: {
    lists(){
      return this.list.filter((item)=>{
        return item.text==='b'
      })
    }
  }
};
</script>

<style>
</style>
