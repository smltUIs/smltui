<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <!--实例1-->
        <div class="verify-wrap" id="verify-wrap"></div>
        <div style="text-align: center;">
          <button type="button" id="resetBtn" style="display: inline-block;">重置1</button>
          <button type="button" id="getState" style="display: inline-block;">获取1验证状态</button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <!--实例2-->
        <div class="verify-wrap" id="verify-wrap2"></div>
        <div style="text-align: center;">
          <button type="button" id="resetBtn2" style="display: inline-block;">重置2</button>
          <button type="button" id="getState2" style="display: inline-block;">获取2验证状态</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import "../../assets/js/jquery.min"
    import "../../assets/js/jq-slideVerify"
    import "../../assets/css/fSelect.css"
    export default {
        name: "TestApp",
        mounted(){
          $(function(){
            console.log(parseFloat('1px'));

            var SlideVerifyPlug = window.slideVerifyPlug;
            var slideVerify = new SlideVerifyPlug('#verify-wrap',{
              // wrapWidth:'318',//设置 容器的宽度 ，默认为 350 ，也可不用设，你自己css 定义好也可以，插件里面会取一次这个 容器的宽度
              initText:'请按住滑块，123',  //设置  初始的 显示文字
              sucessText:'验证通过最右边最右边最右边',//设置 验证通过 显示的文字
              getSucessState:function(res){
                //当验证完成的时候 会 返回 res 值 true，只留了这个应该够用了
                console.log(res);
              }
            });
            $("#resetBtn").on('click',function(){
              slideVerify.resetVerify();//可以重置 插件 回到初始状态
            })
            $("#getState").on('click',function(){
              alert(slideVerify.slideFinishState);   //这个可以拿到 当前验证状态  是否完成
            })
            var slideVerify2 = new SlideVerifyPlug('#verify-wrap2',{
              wrapWidth:'280',
              initText:'请按住滑块',
              sucessText:'验证通过',

            });
            $("#resetBtn2").on('click',function(){
              slideVerify2.resetVerify();
            })
            $("#getState2").on('click',function(){
              alert(slideVerify2.slideFinishState);
            })
          })
        }
    }
</script>

<style scoped>

</style>
