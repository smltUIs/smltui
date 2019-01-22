<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <div id="root"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import "../../assets/js/jquery.min"
    import "../../assets/js/tableXR"
    export default {
        name: "TableApp",
        mounted(){
          $('#root').tableXR({
            //表格标题
            title:'学生成绩列表',
            //表格头部设置
            columns:[
              {data:'name',title:'名字'},
              {data:'age',title:'年龄'},
              {data:'store',title:'得分'},
              {data:'level',title:'等级'},
            ],
            //表格数据：
            data:[
              {name:'小李',age:'18',store:'98',level:'A'},
              {name:'元芳',age:'18',store:'97',level:'B'},
              {name:'小梁',age:'15',store:'95',level:'A'},
              {name:'明兰',age:'17',store:'95',level:'A'},
              {name:'小孙',age:'23',store:'97',level:'B'},
              {name:'如兰',age:'22',store:'88',level:'B'},
              {name:'小缪',age:'19',store:'90',level:'A'},
              {name:'元若',age:'17',store:'92',level:'C'},
              {name:'小梅',age:'16',store:'89',level:'A'},
              {name:'长柏',age:'15',store:'91',level:'A'},
              {name:'颖宝',age:'17',store:'95',level:'B'},
              {name:'幂幂',age:'17',store:'95',level:'A'},
              {name:'baby',age:'17',store:'95',level:'B'},
              {name:'长枫',age:'17',store:'95',level:'C'},
            ]
          })
        }
    }
</script>

<style scoped>
#root{
  height: 430px;
  overflow-y: auto!important;
}
#root::-webkit-scrollbar {/*滚动条整体样式*/
  width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 5px;
}
#root::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px #ccc;
  background: #ccc;
}
</style>
