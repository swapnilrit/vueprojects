<template>
  <div class="detailsModal">
     <el-dialog
    title="Tips"
     :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
  <span>This is a message</span>
</el-dialog> 
  </div>
</template>

<script>

export default {
  name: 'detailsModal',
  props:[],
  data(){
      return {
          dialogVisible:true
      }
  },
  methods:{
      handleClose(){
         this.$emit("toggleDetailsModal");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
