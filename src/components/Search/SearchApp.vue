<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <div class="container">
          <select class="demo" multiple="multiple">
            <optgroup label="Languages">
              <option value="1">HTML5</option>
              <option value="2">Python</option>
              <option value="3">Java</option>
              <option value="4">C++</option>
            </optgroup>
            <optgroup label="Scripts">
              <option value="js">JavaScript</option>
              <option value="php">PHP</option>
              <option value="asp">ASP</option>
              <option value="jsp">JSP</option>
            </optgroup>
            <optgroup label="Frame">
              <option value="js">Vue</option>
              <option value="php">react</option>
              <option value="asp">angular</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import "../../assets/js/jquery.min"
  import "../../assets/js/fSelect"
  import "../../assets/css/fSelect.css"

  export default {
    name: "SearchApp",
    mounted(){
      $(function() {
        $('.demo').fSelect();
      });
    }
  }
</script>


<style scoped>

</style>
