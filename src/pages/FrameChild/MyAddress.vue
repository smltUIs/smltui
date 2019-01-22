<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1 class="guide-title">移动端省市三级联动效果</h1>
        <p class="guide-expalin">作用：点击某个按钮，弹出层选择地址，当省市区都选择完弹出层消失</p>
        <!--<h1 class="guide-title">代码展示</h1>-->
        <h2 class="codeTitle">使用指南</h2>
        <pre v-highlight-a class="pre">
              <code>{{code1}}</code>
            </pre>
        <h2 class="codeTitle">基础用法</h2>
        <pre v-highlight-a class="pre">
              <code>{{code2}}</code>
            </pre>
        <h2 class="codeTitle">数据结构</h2>
        <pre v-highlight-a class="pre idData">
              <code>{{code3}}</code>
            </pre>
        <pre v-highlight-a class="pre">
              <h2>API</h2>
              <code>
                <table cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                        <th>版本</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="index" v-for="(tr,index) in tableInfo">
                      <td>{{tr.params}}</td>
                      <td>{{tr.description}}</td>
                      <td>{{tr.type}}</td>
                      <td>{{tr.default}}</td>
                      <td>{{tr.version}}</td>
                  </tr>
                  </tbody>
                </table>
              </code>
            </pre>
        <pre v-highlight-a class="pre">
              <h2>Event</h2>
              <code>
                <table cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="index" v-for="(tr,index) in eventInfo">
                      <td>{{tr.eventname}}</td>
                      <td>{{tr.description}}</td>
                      <td>{{tr.params}}</td>
                  </tr>
                  </tbody>
                </table>
              </code>
            </pre>
      </div>
    </div>
    <my-address-app></my-address-app>

  </div>

</template>

<script>
  import QuickStartCss from "../../assets/css/QuickStart.css"
  // import MyAddressCss from "../../assets/css/MyAddress.css"
  import MyAddressApp from "../../components/MyAddress/MyAddressApp";
  export default {
    name: "MyAddress",
    components:{MyAddressApp,QuickStartCss},
    data(){
      return {
        tableInfo:[
          {
            params:"tagIsSgow",
            description:"排序字段 price or sales",
            type:"Boolean",
            default:"true",
            version:"1.1.0"
          },
          {
            params:"valueIsShow",
            description:"排序方式 up or down",
            type:"Bollean",
            default:"false",
            version:"1.1.0"
          },
          {
            params:"products",
            description:"商品详情",
            type:"Array",
            default:"Object",
            version:"1.0.0"
          },
          {
            params:"ListProImg",
            description:"商品图片",
            type:"String",
            default:"list-6-1.jpg",
            version:"1.0.0"
          },
          {
            params:"ListProPrice",
            description:"商品现价",
            type:"Number",
            default:"916",
            version:"1.0.0"
          },
          {
            params:"ListProRob",
            description:"表示商品是否为抢购中",
            type:"string",
            default:"-",
            version:"1.0.0"
          },
          {
            params:"ListProSmall",
            description:"商品原价",
            type:"Number",
            default:"4580",
            version:"1.0.0"
          },
          {
            params:"ListDiscount",
            description:"折扣",
            type:"Number",
            default:"2",
            version:"1.0.0"
          },
          {
            params:"ListBrand",
            description:"品牌",
            type:"Number",
            default:"音儿",
            version:"1.0.0"
          },
          {
            params:"ListProName",
            description:"商品名称",
            type:"String",
            default:"YINER音儿精致绣花大衣",
            version:"1.0.0"
          },
        ],
        eventInfo:[
          {
            eventname:"click-p",
            description:"点击地址栏触发事件",
            params:"choseAdd:弹出框显示"
          },
          {
            eventname:"click-i",
            description:"点击返回箭头触发事件",
            params:"closeAdd:弹出框显示"
          },
          {
            eventname:"click-ok",
            description:"点击确定触发事件",
            params:"choseAll:弹出框隐藏"
          },
          {
            eventname:"click-province",
            description:"点击省触发事件",
            params:"provinceSelected:选择省"
          },
          {
            eventname:"click-city",
            description:"点击市触发事件",
            params:"citySelected:选择市"
          },
          {
            eventname:"click-district",
            description:"点击市触发事件",
            params:"districtSelected:选择区"
          }
        ],
        code1:
          'import smltui from smltui\n' +
          'Vue.use(smltui)',
        code2:
          '  <my-address\n' +
          '    :id="id"\n' +
          '    :tagIsSgow="tagIsSgow"\n' +
          '    :valueIsShow="valueIsShow"\n' +
          '    :ProvinceValue="ProvinceValue"\n' +
          '    :CityValue="CityValue"\n' +
          '    :DistrictValue="DistrictValue"\n' +
          '    :totalValue="totalValue"\n' +
          '    :showChose="showChose"\n' +
          '    :showProvince="showProvince"\n' +
          '    :showCity="showCity"\n' +
          '    :showDistrict="showDistrict"\n' +
          '    :showCityList="showCityList"\n' +
          '    :showDistrictList="showDistrictList"\n' +
          '    :province="province"\n' +
          '    :city="city"\n' +
          '    :district="district"\n' +
          '    :GetProvinceId="GetProvinceId"\n' +
          '    :District="District"\n' +
          '    :Province="Province"\n' +
          '    :City="City"\n' +
          '    :selected="selected"\n' +
          '    :info="info"\n' +
          '  >\n' +
          '  </my-address>',
        code3:
          "data() {\n" +
          "        return {\n" +
          "\n" +
          "          tagIsSgow:true,\n" +
          "          valueIsShow:false,\n" +
          "          ProvinceValue:\"\",\n" +
          "          CityValue:\"\",\n" +
          "          DistrictValue:\"\",\n" +
          "          totalValue:\"请选择地址\",\n" +
          "          showChose: false,\n" +
          "          showProvince: true,\n" +
          "          showCity: false,\n" +
          "          showDistrict: false,\n" +
          "          showCityList: false,\n" +
          "          showDistrictList: false,\n" +
          "          province: 5,\n" +
          "          city: 3,\n" +
          "          district: 57,\n" +
          "          GetProvinceId: 2,\n" +
          "          District: false,\n" +
          "          Province: false,\n" +
          "          City: false,\n" +
          "          selected: false,\n" +
          "          info: [\n" +
          "            {\n" +
          "              id: 1, name: '北京', city: [\n" +
          "                {\n" +
          "                  id: 1, name: '北京市', district: [\n" +
          "                    {id: 1, name: '东城区'},\n" +
          "                    {id: 2, name: '西城区'},\n" +
          "                    {id: 3, name: '崇文区'},\n" +
          "                    {id: 4, name: '宣武区'},\n" +
          "                    {id: 5, name: '朝阳区'},\n" +
          "                    {id: 6, name: '丰台区'},\n" +
          "                    {id: 7, name: '石景山区'},\n" +
          "                    {id: 8, name: '海淀区'},\n" +
          "                    {id: 9, name: '门头沟区'},\n" +
          "                    {id: 10, name: '房山区'},\n" +
          "                    {id: 11, name: '通州区'},\n" +
          "                    {id: 12, name: '顺义区'},\n" +
          "                    {id: 13, name: '昌平区'},\n" +
          "                    {id: 14, name: '大兴区'},\n" +
          "                    {id: 15, name: '怀柔区'},\n" +
          "                    {id: 16, name: '平谷区'},\n" +
          "                    {id: 17, name: '密云县'},\n" +
          "                    {id: 18, name: '延庆县'}\n" +
          "                  ]\n" +
          "                }\n" +
          "              ]\n" +
          "            },\n" +
          "            {\n" +
          "              id: 2, name: '天津', city: [\n" +
          "                {\n" +
          "                  id: 2, name: '天津市', district: [\n" +
          "                    {id: 19, name: '和平区'},\n" +
          "                    {id: 20, name: '河东区'},\n" +
          "                    {id: 21, name: '河西区'},\n" +
          "                    {id: 22, name: '南开区'},\n" +
          "                    {id: 23, name: '河北区'},\n" +
          "                    {id: 24, name: '红桥区'},\n" +
          "                    {id: 25, name: '塘沽区'},\n" +
          "                    {id: 26, name: '汉沽区'},\n" +
          "                    {id: 27, name: '大港区'},\n" +
          "                    {id: 28, name: '东丽区'},\n" +
          "                    {id: 29, name: '西青区'},\n" +
          "                    {id: 30, name: '津南区'},\n" +
          "                    {id: 31, name: '北辰区'},\n" +
          "                    {id: 32, name: '武清区'},\n" +
          "                    {id: 33, name: '宝坻区'},\n" +
          "                    {id: 34, name: '宁河县'},\n" +
          "                    {id: 35, name: '静海县'},\n" +
          "                    {id: 36, name: '蓟县'}\n" +
          "                  ]\n" +
          "                }\n" +
          "              ]\n" +
          "            },\n" +
          "            {\n" +
          "              id: 3, name: '河北', city: [\n" +
          "                {\n" +
          "                  id: 3, name: '石家庄市', district: [\n" +
          "                    {id: 37, name: '长安区'},\n" +
          "                    {id: 38, name: '桥东区'},\n" +
          "                    {id: 39, name: '桥西区'},\n" +
          "                    {id: 40, name: '新华区'},\n" +
          "                    {id: 41, name: '井陉矿区'},\n" +
          "                    {id: 42, name: '裕华区'},\n" +
          "                    {id: 43, name: '井陉县'},\n" +
          "                    {id: 44, name: '正定县'},\n" +
          "                    {id: 45, name: '栾城县'},\n" +
          "                    {id: 46, name: '行唐县'},\n" +
          "                    {id: 47, name: '灵寿县'},\n" +
          "                    {id: 48, name: '高邑县'},\n" +
          "                    {id: 49, name: '深泽县'},\n" +
          "                    {id: 50, name: '赞皇县'},\n" +
          "                    {id: 51, name: '无极县'},\n" +
          "                    {id: 52, name: '平山县'},\n" +
          "                    {id: 53, name: '元氏县'},\n" +
          "                    {id: 54, name: '赵县'},\n" +
          "                    {id: 55, name: '辛集市'},\n" +
          "                    {id: 56, name: '藁城市'},\n" +
          "                    {id: 57, name: '晋州市'},\n" +
          "                    {id: 58, name: '新乐市'},\n" +
          "                    {id: 59, name: '鹿泉市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 4, name: '唐山市', district: [\n" +
          "                    {id: 60, name: '路南区'},\n" +
          "                    {id: 61, name: '路北区'},\n" +
          "                    {id: 62, name: '古冶区'},\n" +
          "                    {id: 63, name: '开平区'},\n" +
          "                    {id: 64, name: '丰南区'},\n" +
          "                    {id: 65, name: '丰润区'},\n" +
          "                    {id: 66, name: '滦县'},\n" +
          "                    {id: 67, name: '滦南县'},\n" +
          "                    {id: 68, name: '乐亭县'},\n" +
          "                    {id: 69, name: '迁西县'},\n" +
          "                    {id: 70, name: '玉田县'},\n" +
          "                    {id: 71, name: '唐海县'},\n" +
          "                    {id: 72, name: '遵化市'},\n" +
          "                    {id: 73, name: '迁安市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 5, name: '秦皇岛市', district: [\n" +
          "                    {id: 74, name: '海港区'},\n" +
          "                    {id: 75, name: '山海关区'},\n" +
          "                    {id: 76, name: '北戴河区'},\n" +
          "                    {id: 77, name: '青龙满族自治县'},\n" +
          "                    {id: 78, name: '昌黎县'},\n" +
          "                    {id: 79, name: '抚宁县'},\n" +
          "                    {id: 80, name: '卢龙县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 6, name: '邯郸市', district: [\n" +
          "                    {id: 81, name: '邯山区'},\n" +
          "                    {id: 82, name: '丛台区'},\n" +
          "                    {id: 83, name: '复兴区'},\n" +
          "                    {id: 84, name: '峰峰矿区'},\n" +
          "                    {id: 85, name: '邯郸县'},\n" +
          "                    {id: 86, name: '临漳县'},\n" +
          "                    {id: 87, name: '成安县'},\n" +
          "                    {id: 88, name: '大名县'},\n" +
          "                    {id: 89, name: '涉县'},\n" +
          "                    {id: 90, name: '磁县'},\n" +
          "                    {id: 91, name: '肥乡县'},\n" +
          "                    {id: 92, name: '永年县'},\n" +
          "                    {id: 93, name: '邱县'},\n" +
          "                    {id: 94, name: '鸡泽县'},\n" +
          "                    {id: 95, name: '广平县'},\n" +
          "                    {id: 96, name: '馆陶县'},\n" +
          "                    {id: 97, name: '魏县'},\n" +
          "                    {id: 98, name: '曲周县'},\n" +
          "                    {id: 99, name: '武安市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 7, name: '邢台市', district: [\n" +
          "                    {id: 100, name: '桥东区'},\n" +
          "                    {id: 101, name: '桥西区'},\n" +
          "                    {id: 102, name: '邢台县'},\n" +
          "                    {id: 103, name: '临城县'},\n" +
          "                    {id: 104, name: '内丘县'},\n" +
          "                    {id: 105, name: '柏乡县'},\n" +
          "                    {id: 106, name: '隆尧县'},\n" +
          "                    {id: 107, name: '任县'},\n" +
          "                    {id: 108, name: '南和县'},\n" +
          "                    {id: 109, name: '宁晋县'},\n" +
          "                    {id: 110, name: '巨鹿县'},\n" +
          "                    {id: 111, name: '新河县'},\n" +
          "                    {id: 112, name: '广宗县'},\n" +
          "                    {id: 113, name: '平乡县'},\n" +
          "                    {id: 114, name: '威县'},\n" +
          "                    {id: 115, name: '清河县'},\n" +
          "                    {id: 116, name: '临西县'},\n" +
          "                    {id: 117, name: '南宫市'},\n" +
          "                    {id: 118, name: '沙河市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 8, name: '保定市', district: [\n" +
          "                    {id: 119, name: '新市区'},\n" +
          "                    {id: 120, name: '北市区'},\n" +
          "                    {id: 121, name: '南市区'},\n" +
          "                    {id: 122, name: '满城县'},\n" +
          "                    {id: 123, name: '清苑县'},\n" +
          "                    {id: 124, name: '涞水县'},\n" +
          "                    {id: 125, name: '阜平县'},\n" +
          "                    {id: 126, name: '徐水县'},\n" +
          "                    {id: 127, name: '定兴县'},\n" +
          "                    {id: 128, name: '唐县'},\n" +
          "                    {id: 129, name: '高阳县'},\n" +
          "                    {id: 130, name: '容城县'},\n" +
          "                    {id: 131, name: '涞源县'},\n" +
          "                    {id: 132, name: '望都县'},\n" +
          "                    {id: 133, name: '安新县'},\n" +
          "                    {id: 134, name: '易县'},\n" +
          "                    {id: 135, name: '曲阳县'},\n" +
          "                    {id: 136, name: '蠡县'},\n" +
          "                    {id: 137, name: '顺平县'},\n" +
          "                    {id: 138, name: '博野县'},\n" +
          "                    {id: 139, name: '雄县'},\n" +
          "                    {id: 140, name: '涿州市'},\n" +
          "                    {id: 141, name: '定州市'},\n" +
          "                    {id: 142, name: '安国市'},\n" +
          "                    {id: 143, name: '高碑店市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 9, name: '张家口市', district: [\n" +
          "                    {id: 144, name: '桥东区'},\n" +
          "                    {id: 145, name: '桥西区'},\n" +
          "                    {id: 146, name: '宣化区'},\n" +
          "                    {id: 147, name: '下花园区'},\n" +
          "                    {id: 148, name: '宣化县'},\n" +
          "                    {id: 149, name: '张北县'},\n" +
          "                    {id: 150, name: '康保县'},\n" +
          "                    {id: 151, name: '沽源县'},\n" +
          "                    {id: 152, name: '尚义县'},\n" +
          "                    {id: 153, name: '蔚县'},\n" +
          "                    {id: 154, name: '阳原县'},\n" +
          "                    {id: 155, name: '怀安县'},\n" +
          "                    {id: 156, name: '万全县'},\n" +
          "                    {id: 157, name: '怀来县'},\n" +
          "                    {id: 158, name: '涿鹿县'},\n" +
          "                    {id: 159, name: '赤城县'},\n" +
          "                    {id: 160, name: '崇礼县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 10, name: '承德市', district: [\n" +
          "                    {id: 161, name: '双桥区'},\n" +
          "                    {id: 162, name: '双滦区'},\n" +
          "                    {id: 163, name: '鹰手营子矿区'},\n" +
          "                    {id: 164, name: '承德县'},\n" +
          "                    {id: 165, name: '兴隆县'},\n" +
          "                    {id: 166, name: '平泉县'},\n" +
          "                    {id: 167, name: '滦平县'},\n" +
          "                    {id: 168, name: '隆化县'},\n" +
          "                    {id: 169, name: '丰宁满族自治县'},\n" +
          "                    {id: 170, name: '宽城满族自治县'},\n" +
          "                    {id: 171, name: '围场满族蒙古族自治县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 11, name: '沧州市', district: [\n" +
          "                    {id: 172, name: '新华区'},\n" +
          "                    {id: 173, name: '运河区'},\n" +
          "                    {id: 174, name: '沧县'},\n" +
          "                    {id: 175, name: '青县'},\n" +
          "                    {id: 176, name: '东光县'},\n" +
          "                    {id: 177, name: '海兴县'},\n" +
          "                    {id: 178, name: '盐山县'},\n" +
          "                    {id: 179, name: '肃宁县'},\n" +
          "                    {id: 180, name: '南皮县'},\n" +
          "                    {id: 181, name: '吴桥县'},\n" +
          "                    {id: 182, name: '献县'},\n" +
          "                    {id: 183, name: '孟村回族自治县'},\n" +
          "                    {id: 184, name: '泊头市'},\n" +
          "                    {id: 185, name: '任丘市'},\n" +
          "                    {id: 186, name: '黄骅市'},\n" +
          "                    {id: 187, name: '河间市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 12, name: '廊坊市', district: [\n" +
          "                    {id: 188, name: '安次区'},\n" +
          "                    {id: 189, name: '广阳区'},\n" +
          "                    {id: 190, name: '固安县'},\n" +
          "                    {id: 191, name: '永清县'},\n" +
          "                    {id: 192, name: '香河县'},\n" +
          "                    {id: 193, name: '大城县'},\n" +
          "                    {id: 194, name: '文安县'},\n" +
          "                    {id: 195, name: '大厂回族自治县'},\n" +
          "                    {id: 196, name: '霸州市'},\n" +
          "                    {id: 197, name: '三河市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 13, name: '衡水市', district: [\n" +
          "                    {id: 198, name: '桃城区'},\n" +
          "                    {id: 199, name: '枣强县'},\n" +
          "                    {id: 200, name: '武邑县'},\n" +
          "                    {id: 201, name: '武强县'},\n" +
          "                    {id: 202, name: '饶阳县'},\n" +
          "                    {id: 203, name: '安平县'},\n" +
          "                    {id: 204, name: '故城县'},\n" +
          "                    {id: 205, name: '景县'},\n" +
          "                    {id: 206, name: '阜城县'},\n" +
          "                    {id: 207, name: '冀州市'},\n" +
          "                    {id: 208, name: '深州市'}\n" +
          "                  ]\n" +
          "                }\n" +
          "              ]\n" +
          "            },\n" +
          "            {\n" +
          "              id: 4, name: '山西', city: [\n" +
          "                {\n" +
          "                  id: 14, name: '太原市', district: [\n" +
          "                    {id: 209, name: '小店区'},\n" +
          "                    {id: 210, name: '迎泽区'},\n" +
          "                    {id: 211, name: '杏花岭区'},\n" +
          "                    {id: 212, name: '尖草坪区'},\n" +
          "                    {id: 213, name: '万柏林区'},\n" +
          "                    {id: 214, name: '晋源区'},\n" +
          "                    {id: 215, name: '清徐县'},\n" +
          "                    {id: 216, name: '阳曲县'},\n" +
          "                    {id: 217, name: '娄烦县'},\n" +
          "                    {id: 218, name: '古交市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 15, name: '大同市', district: [\n" +
          "                    {id: 219, name: '城区'},\n" +
          "                    {id: 220, name: '矿区'},\n" +
          "                    {id: 221, name: '南郊区'},\n" +
          "                    {id: 222, name: '新荣区'},\n" +
          "                    {id: 223, name: '阳高县'},\n" +
          "                    {id: 224, name: '天镇县'},\n" +
          "                    {id: 225, name: '广灵县'},\n" +
          "                    {id: 226, name: '灵丘县'},\n" +
          "                    {id: 227, name: '浑源县'},\n" +
          "                    {id: 228, name: '左云县'},\n" +
          "                    {id: 229, name: '大同县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 16, name: '阳泉市', district: [\n" +
          "                    {id: 230, name: '城区'},\n" +
          "                    {id: 231, name: '矿区'},\n" +
          "                    {id: 232, name: '郊区'},\n" +
          "                    {id: 233, name: '平定县'},\n" +
          "                    {id: 234, name: '盂县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 17, name: '长治市', district: [\n" +
          "                    {id: 235, name: '城区'},\n" +
          "                    {id: 236, name: '郊区'},\n" +
          "                    {id: 237, name: '长治县'},\n" +
          "                    {id: 238, name: '襄垣县'},\n" +
          "                    {id: 239, name: '屯留县'},\n" +
          "                    {id: 240, name: '平顺县'},\n" +
          "                    {id: 241, name: '黎城县'},\n" +
          "                    {id: 242, name: '壶关县'},\n" +
          "                    {id: 243, name: '长子县'},\n" +
          "                    {id: 244, name: '武乡县'},\n" +
          "                    {id: 245, name: '沁县'},\n" +
          "                    {id: 246, name: '沁源县'},\n" +
          "                    {id: 247, name: '潞城市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 18, name: '晋城市', district: [\n" +
          "                    {id: 248, name: '城区'},\n" +
          "                    {id: 249, name: '沁水县'},\n" +
          "                    {id: 250, name: '阳城县'},\n" +
          "                    {id: 251, name: '陵川县'},\n" +
          "                    {id: 252, name: '泽州县'},\n" +
          "                    {id: 253, name: '高平市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 19, name: '朔州市', district: [\n" +
          "                    {id: 254, name: '朔城区'},\n" +
          "                    {id: 255, name: '平鲁区'},\n" +
          "                    {id: 256, name: '山阴县'},\n" +
          "                    {id: 257, name: '应县'},\n" +
          "                    {id: 258, name: '右玉县'},\n" +
          "                    {id: 259, name: '怀仁县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 20, name: '晋中市', district: [\n" +
          "                    {id: 260, name: '榆次区'},\n" +
          "                    {id: 261, name: '榆社县'},\n" +
          "                    {id: 262, name: '左权县'},\n" +
          "                    {id: 263, name: '和顺县'},\n" +
          "                    {id: 264, name: '昔阳县'},\n" +
          "                    {id: 265, name: '寿阳县'},\n" +
          "                    {id: 266, name: '太谷县'},\n" +
          "                    {id: 267, name: '祁县'},\n" +
          "                    {id: 268, name: '平遥县'},\n" +
          "                    {id: 269, name: '灵石县'},\n" +
          "                    {id: 270, name: '介休市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 21, name: '运城市', district: [\n" +
          "                    {id: 271, name: '盐湖区'},\n" +
          "                    {id: 272, name: '临猗县'},\n" +
          "                    {id: 273, name: '万荣县'},\n" +
          "                    {id: 274, name: '闻喜县'},\n" +
          "                    {id: 275, name: '稷山县'},\n" +
          "                    {id: 276, name: '新绛县'},\n" +
          "                    {id: 277, name: '绛县'},\n" +
          "                    {id: 278, name: '垣曲县'},\n" +
          "                    {id: 279, name: '夏县'},\n" +
          "                    {id: 280, name: '平陆县'},\n" +
          "                    {id: 281, name: '芮城县'},\n" +
          "                    {id: 282, name: '永济市'},\n" +
          "                    {id: 283, name: '河津市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 22, name: '忻州市', district: [\n" +
          "                    {id: 284, name: '忻府区'},\n" +
          "                    {id: 285, name: '定襄县'},\n" +
          "                    {id: 286, name: '五台县'},\n" +
          "                    {id: 287, name: '代县'},\n" +
          "                    {id: 288, name: '繁峙县'},\n" +
          "                    {id: 289, name: '宁武县'},\n" +
          "                    {id: 290, name: '静乐县'},\n" +
          "                    {id: 291, name: '神池县'},\n" +
          "                    {id: 292, name: '五寨县'},\n" +
          "                    {id: 293, name: '岢岚县'},\n" +
          "                    {id: 294, name: '河曲县'},\n" +
          "                    {id: 295, name: '保德县'},\n" +
          "                    {id: 296, name: '偏关县'},\n" +
          "                    {id: 297, name: '原平市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 23, name: '临汾市', district: [\n" +
          "                    {id: 298, name: '尧都区'},\n" +
          "                    {id: 299, name: '曲沃县'},\n" +
          "                    {id: 300, name: '翼城县'},\n" +
          "                    {id: 301, name: '襄汾县'},\n" +
          "                    {id: 302, name: '洪洞县'},\n" +
          "                    {id: 303, name: '古县'},\n" +
          "                    {id: 304, name: '安泽县'},\n" +
          "                    {id: 305, name: '浮山县'},\n" +
          "                    {id: 306, name: '吉县'},\n" +
          "                    {id: 307, name: '乡宁县'},\n" +
          "                    {id: 308, name: '大宁县'},\n" +
          "                    {id: 309, name: '隰县'},\n" +
          "                    {id: 310, name: '永和县'},\n" +
          "                    {id: 311, name: '蒲县'},\n" +
          "                    {id: 312, name: '汾西县'},\n" +
          "                    {id: 313, name: '侯马市'},\n" +
          "                    {id: 314, name: '霍州市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 24, name: '吕梁市', district: [\n" +
          "                    {id: 315, name: '离石区'},\n" +
          "                    {id: 316, name: '文水县'},\n" +
          "                    {id: 317, name: '交城县'},\n" +
          "                    {id: 318, name: '兴县'},\n" +
          "                    {id: 319, name: '临县'},\n" +
          "                    {id: 320, name: '柳林县'},\n" +
          "                    {id: 321, name: '石楼县'},\n" +
          "                    {id: 322, name: '岚县'},\n" +
          "                    {id: 323, name: '方山县'},\n" +
          "                    {id: 324, name: '中阳县'},\n" +
          "                    {id: 325, name: '交口县'},\n" +
          "                    {id: 326, name: '孝义市'},\n" +
          "                    {id: 327, name: '汾阳市'}\n" +
          "                  ]\n" +
          "                }\n" +
          "              ]\n" +
          "            },\n" +
          "            {\n" +
          "              id: 5, name: '内蒙古', city: [\n" +
          "                {\n" +
          "                  id: 25, name: '呼和浩特市', district: [\n" +
          "                    {id: 328, name: '新城区'},\n" +
          "                    {id: 329, name: '回民区'},\n" +
          "                    {id: 330, name: '玉泉区'},\n" +
          "                    {id: 331, name: '赛罕区'},\n" +
          "                    {id: 332, name: '土默特左旗'},\n" +
          "                    {id: 333, name: '托克托县'},\n" +
          "                    {id: 334, name: '和林格尔县'},\n" +
          "                    {id: 335, name: '清水河县'},\n" +
          "                    {id: 336, name: '武川县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 26, name: '包头市', district: [\n" +
          "                    {id: 337, name: '东河区'},\n" +
          "                    {id: 338, name: '昆都仑区'},\n" +
          "                    {id: 339, name: '青山区'},\n" +
          "                    {id: 340, name: '石拐区'},\n" +
          "                    {id: 341, name: '白云矿区'},\n" +
          "                    {id: 342, name: '九原区'},\n" +
          "                    {id: 343, name: '土默特右旗'},\n" +
          "                    {id: 344, name: '固阳县'},\n" +
          "                    {id: 345, name: '达尔罕茂明安联合旗'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 27, name: '乌海市', district: [\n" +
          "                    {id: 346, name: '海勃湾区'},\n" +
          "                    {id: 347, name: '海南区'},\n" +
          "                    {id: 348, name: '乌达区'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 28, name: '赤峰市', district: [\n" +
          "                    {id: 349, name: '红山区'},\n" +
          "                    {id: 350, name: '元宝山区'},\n" +
          "                    {id: 351, name: '松山区'},\n" +
          "                    {id: 352, name: '阿鲁科尔沁旗'},\n" +
          "                    {id: 353, name: '巴林左旗'},\n" +
          "                    {id: 354, name: '巴林右旗'},\n" +
          "                    {id: 355, name: '林西县'},\n" +
          "                    {id: 356, name: '克什克腾旗'},\n" +
          "                    {id: 357, name: '翁牛特旗'},\n" +
          "                    {id: 358, name: '喀喇沁旗'},\n" +
          "                    {id: 359, name: '宁城县'},\n" +
          "                    {id: 360, name: '敖汉旗'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 29, name: '通辽市', district: [\n" +
          "                    {id: 361, name: '科尔沁区'},\n" +
          "                    {id: 362, name: '科尔沁左翼中旗'},\n" +
          "                    {id: 363, name: '科尔沁左翼后旗'},\n" +
          "                    {id: 364, name: '开鲁县'},\n" +
          "                    {id: 365, name: '库伦旗'},\n" +
          "                    {id: 366, name: '奈曼旗'},\n" +
          "                    {id: 367, name: '扎鲁特旗'},\n" +
          "                    {id: 368, name: '霍林郭勒市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 30, name: '鄂尔多斯市', district: [\n" +
          "                    {id: 369, name: '东胜区'},\n" +
          "                    {id: 370, name: '达拉特旗'},\n" +
          "                    {id: 371, name: '准格尔旗'},\n" +
          "                    {id: 372, name: '鄂托克前旗'},\n" +
          "                    {id: 373, name: '鄂托克旗'},\n" +
          "                    {id: 374, name: '杭锦旗'},\n" +
          "                    {id: 375, name: '乌审旗'},\n" +
          "                    {id: 376, name: '伊金霍洛旗'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 31, name: '呼伦贝尔市', district: [\n" +
          "                    {id: 377, name: '海拉尔区'},\n" +
          "                    {id: 378, name: '阿荣旗'},\n" +
          "                    {id: 379, name: '莫力达瓦达斡尔族自治旗'},\n" +
          "                    {id: 380, name: '鄂伦春自治旗'},\n" +
          "                    {id: 381, name: '鄂温克族自治旗'},\n" +
          "                    {id: 382, name: '陈巴尔虎旗'},\n" +
          "                    {id: 383, name: '新巴尔虎左旗'},\n" +
          "                    {id: 384, name: '新巴尔虎右旗'},\n" +
          "                    {id: 385, name: '满洲里市'},\n" +
          "                    {id: 386, name: '牙克石市'},\n" +
          "                    {id: 387, name: '扎兰屯市'},\n" +
          "                    {id: 388, name: '额尔古纳市'},\n" +
          "                    {id: 389, name: '根河市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 32, name: '巴彦淖尔市', district: [\n" +
          "                    {id: 390, name: '临河区'},\n" +
          "                    {id: 391, name: '五原县'},\n" +
          "                    {id: 392, name: '磴口县'},\n" +
          "                    {id: 393, name: '乌拉特前旗'},\n" +
          "                    {id: 394, name: '乌拉特中旗'},\n" +
          "                    {id: 395, name: '乌拉特后旗'},\n" +
          "                    {id: 396, name: '杭锦后旗'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 33, name: '乌兰察布市', district: [\n" +
          "                    {id: 397, name: '集宁区'},\n" +
          "                    {id: 398, name: '卓资县'},\n" +
          "                    {id: 399, name: '化德县'},\n" +
          "                    {id: 400, name: '商都县'},\n" +
          "                    {id: 401, name: '兴和县'},\n" +
          "                    {id: 402, name: '凉城县'},\n" +
          "                    {id: 403, name: '察哈尔右翼前旗'},\n" +
          "                    {id: 404, name: '察哈尔右翼中旗'},\n" +
          "                    {id: 405, name: '察哈尔右翼后旗'},\n" +
          "                    {id: 406, name: '四子王旗'},\n" +
          "                    {id: 407, name: '丰镇市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 34, name: '兴安盟', district: [\n" +
          "                    {id: 408, name: '乌兰浩特市'},\n" +
          "                    {id: 409, name: '阿尔山市'},\n" +
          "                    {id: 410, name: '科尔沁右翼前旗'},\n" +
          "                    {id: 411, name: '科尔沁右翼中旗'},\n" +
          "                    {id: 412, name: '扎赉特旗'},\n" +
          "                    {id: 413, name: '突泉县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 35, name: '锡林郭勒盟', district: [\n" +
          "                    {id: 414, name: '二连浩特市'},\n" +
          "                    {id: 415, name: '锡林浩特市'},\n" +
          "                    {id: 416, name: '阿巴嘎旗'},\n" +
          "                    {id: 417, name: '苏尼特左旗'},\n" +
          "                    {id: 418, name: '苏尼特右旗'},\n" +
          "                    {id: 419, name: '东乌珠穆沁旗'},\n" +
          "                    {id: 420, name: '西乌珠穆沁旗'},\n" +
          "                    {id: 421, name: '太仆寺旗'},\n" +
          "                    {id: 422, name: '镶黄旗'},\n" +
          "                    {id: 423, name: '正镶白旗'},\n" +
          "                    {id: 424, name: '正蓝旗'},\n" +
          "                    {id: 425, name: '多伦县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 36, name: '阿拉善盟', district: [\n" +
          "                    {id: 426, name: '阿拉善左旗'},\n" +
          "                    {id: 427, name: '阿拉善右旗'},\n" +
          "                    {id: 428, name: '额济纳旗'}\n" +
          "                  ]\n" +
          "                }\n" +
          "              ]\n" +
          "            },\n" +
          "            {\n" +
          "              id: 6, name: '辽宁', city: [\n" +
          "                {\n" +
          "                  id: 37, name: '沈阳市', district: [\n" +
          "                    {id: 429, name: '和平区'},\n" +
          "                    {id: 430, name: '沈河区'},\n" +
          "                    {id: 431, name: '大东区'},\n" +
          "                    {id: 432, name: '皇姑区'},\n" +
          "                    {id: 433, name: '铁西区'},\n" +
          "                    {id: 434, name: '苏家屯区'},\n" +
          "                    {id: 435, name: '东陵区'},\n" +
          "                    {id: 436, name: '新城子区'},\n" +
          "                    {id: 437, name: '于洪区'},\n" +
          "                    {id: 438, name: '辽中县'},\n" +
          "                    {id: 439, name: '康平县'},\n" +
          "                    {id: 440, name: '法库县'},\n" +
          "                    {id: 441, name: '新民市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 38, name: '大连市', district: [\n" +
          "                    {id: 442, name: '中山区'},\n" +
          "                    {id: 443, name: '西岗区'},\n" +
          "                    {id: 444, name: '沙河口区'},\n" +
          "                    {id: 445, name: '甘井子区'},\n" +
          "                    {id: 446, name: '旅顺口区'},\n" +
          "                    {id: 447, name: '金州区'},\n" +
          "                    {id: 448, name: '长海县'},\n" +
          "                    {id: 449, name: '瓦房店市'},\n" +
          "                    {id: 450, name: '普兰店市'},\n" +
          "                    {id: 451, name: '庄河市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 39, name: '鞍山市', district: [\n" +
          "                    {id: 452, name: '铁东区'},\n" +
          "                    {id: 453, name: '铁西区'},\n" +
          "                    {id: 454, name: '立山区'},\n" +
          "                    {id: 455, name: '千山区'},\n" +
          "                    {id: 456, name: '台安县'},\n" +
          "                    {id: 457, name: '岫岩满族自治县'},\n" +
          "                    {id: 458, name: '海城市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 40, name: '抚顺市', district: [\n" +
          "                    {id: 459, name: '新抚区'},\n" +
          "                    {id: 460, name: '东洲区'},\n" +
          "                    {id: 461, name: '望花区'},\n" +
          "                    {id: 462, name: '顺城区'},\n" +
          "                    {id: 463, name: '抚顺县'},\n" +
          "                    {id: 464, name: '新宾满族自治县'},\n" +
          "                    {id: 465, name: '清原满族自治县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 41, name: '本溪市', district: [\n" +
          "                    {id: 466, name: '平山区'},\n" +
          "                    {id: 467, name: '溪湖区'},\n" +
          "                    {id: 468, name: '明山区'},\n" +
          "                    {id: 469, name: '南芬区'},\n" +
          "                    {id: 470, name: '本溪满族自治县'},\n" +
          "                    {id: 471, name: '桓仁满族自治县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 42, name: '丹东市', district: [\n" +
          "                    {id: 472, name: '元宝区'},\n" +
          "                    {id: 473, name: '振兴区'},\n" +
          "                    {id: 474, name: '振安区'},\n" +
          "                    {id: 475, name: '宽甸满族自治县'},\n" +
          "                    {id: 476, name: '东港市'},\n" +
          "                    {id: 477, name: '凤城市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 43, name: '锦州市', district: [\n" +
          "                    {id: 478, name: '古塔区'},\n" +
          "                    {id: 479, name: '凌河区'},\n" +
          "                    {id: 480, name: '太和区'},\n" +
          "                    {id: 481, name: '黑山县'},\n" +
          "                    {id: 482, name: '义县'},\n" +
          "                    {id: 483, name: '凌海市'},\n" +
          "                    {id: 484, name: '北宁市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 44, name: '营口市', district: [\n" +
          "                    {id: 485, name: '站前区'},\n" +
          "                    {id: 486, name: '西市区'},\n" +
          "                    {id: 487, name: '鲅鱼圈区'},\n" +
          "                    {id: 488, name: '老边区'},\n" +
          "                    {id: 489, name: '盖州市'},\n" +
          "                    {id: 490, name: '大石桥市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 45, name: '阜新市', district: [\n" +
          "                    {id: 491, name: '海州区'},\n" +
          "                    {id: 492, name: '新邱区'},\n" +
          "                    {id: 493, name: '太平区'},\n" +
          "                    {id: 494, name: '清河门区'},\n" +
          "                    {id: 495, name: '细河区'},\n" +
          "                    {id: 496, name: '阜新蒙古族自治县'},\n" +
          "                    {id: 497, name: '彰武县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 46, name: '辽阳市', district: [\n" +
          "                    {id: 498, name: '白塔区'},\n" +
          "                    {id: 499, name: '文圣区'},\n" +
          "                    {id: 500, name: '宏伟区'},\n" +
          "                    {id: 501, name: '弓长岭区'},\n" +
          "                    {id: 502, name: '太子河区'},\n" +
          "                    {id: 503, name: '辽阳县'},\n" +
          "                    {id: 504, name: '灯塔市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 47, name: '盘锦市', district: [\n" +
          "                    {id: 505, name: '双台子区'},\n" +
          "                    {id: 506, name: '兴隆台区'},\n" +
          "                    {id: 507, name: '大洼县'},\n" +
          "                    {id: 508, name: '盘山县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 48, name: '铁岭市', district: [\n" +
          "                    {id: 509, name: '银州区'},\n" +
          "                    {id: 510, name: '清河区'},\n" +
          "                    {id: 511, name: '铁岭县'},\n" +
          "                    {id: 512, name: '西丰县'},\n" +
          "                    {id: 513, name: '昌图县'},\n" +
          "                    {id: 514, name: '调兵山市'},\n" +
          "                    {id: 515, name: '开原市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 49, name: '朝阳市', district: [\n" +
          "                    {id: 516, name: '双塔区'},\n" +
          "                    {id: 517, name: '龙城区'},\n" +
          "                    {id: 518, name: '朝阳县'},\n" +
          "                    {id: 519, name: '建平县'},\n" +
          "                    {id: 520, name: '喀喇沁左翼蒙古族自治县'},\n" +
          "                    {id: 521, name: '北票市'},\n" +
          "                    {id: 522, name: '凌源市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 50, name: '葫芦岛市', district: [\n" +
          "                    {id: 523, name: '连山区'},\n" +
          "                    {id: 524, name: '龙港区'},\n" +
          "                    {id: 525, name: '南票区'},\n" +
          "                    {id: 526, name: '绥中县'},\n" +
          "                    {id: 527, name: '建昌县'},\n" +
          "                    {id: 528, name: '兴城市'}\n" +
          "                  ]\n" +
          "                }\n" +
          "              ]\n" +
          "            },\n" +
          "            {\n" +
          "              id: 7, name: '吉林', city: [\n" +
          "                {\n" +
          "                  id: 51, name: '长春市', district: [\n" +
          "                    {id: 529, name: '南关区'},\n" +
          "                    {id: 530, name: '宽城区'},\n" +
          "                    {id: 531, name: '朝阳区'},\n" +
          "                    {id: 532, name: '二道区'},\n" +
          "                    {id: 533, name: '绿园区'},\n" +
          "                    {id: 534, name: '双阳区'},\n" +
          "                    {id: 535, name: '农安县'},\n" +
          "                    {id: 536, name: '九台市'},\n" +
          "                    {id: 537, name: '榆树市'},\n" +
          "                    {id: 538, name: '德惠市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 52, name: '吉林市', district: [\n" +
          "                    {id: 539, name: '昌邑区'},\n" +
          "                    {id: 540, name: '龙潭区'},\n" +
          "                    {id: 541, name: '船营区'},\n" +
          "                    {id: 542, name: '丰满区'},\n" +
          "                    {id: 543, name: '永吉县'},\n" +
          "                    {id: 544, name: '蛟河市'},\n" +
          "                    {id: 545, name: '桦甸市'},\n" +
          "                    {id: 546, name: '舒兰市'},\n" +
          "                    {id: 547, name: '磐石市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 53, name: '四平市', district: [\n" +
          "                    {id: 548, name: '铁西区'},\n" +
          "                    {id: 549, name: '铁东区'},\n" +
          "                    {id: 550, name: '梨树县'},\n" +
          "                    {id: 551, name: '伊通满族自治县'},\n" +
          "                    {id: 552, name: '公主岭市'},\n" +
          "                    {id: 553, name: '双辽市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 54, name: '辽源市', district: [\n" +
          "                    {id: 554, name: '龙山区'},\n" +
          "                    {id: 555, name: '西安区'},\n" +
          "                    {id: 556, name: '东丰县'},\n" +
          "                    {id: 557, name: '东辽县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 55, name: '通化市', district: [\n" +
          "                    {id: 558, name: '东昌区'},\n" +
          "                    {id: 559, name: '二道江区'},\n" +
          "                    {id: 560, name: '通化县'},\n" +
          "                    {id: 561, name: '辉南县'},\n" +
          "                    {id: 562, name: '柳河县'},\n" +
          "                    {id: 563, name: '梅河口市'},\n" +
          "                    {id: 564, name: '集安市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 56, name: '白山市', district: [\n" +
          "                    {id: 565, name: '八道江区'},\n" +
          "                    {id: 566, name: '抚松县'},\n" +
          "                    {id: 567, name: '靖宇县'},\n" +
          "                    {id: 568, name: '长白朝鲜族自治县'},\n" +
          "                    {id: 569, name: '江源县'},\n" +
          "                    {id: 570, name: '临江市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 57, name: '松原市', district: [\n" +
          "                    {id: 571, name: '宁江区'},\n" +
          "                    {id: 572, name: '前郭尔罗斯蒙古族自治县'},\n" +
          "                    {id: 573, name: '长岭县'},\n" +
          "                    {id: 574, name: '乾安县'},\n" +
          "                    {id: 575, name: '扶余县'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 58, name: '白城市', district: [\n" +
          "                    {id: 576, name: '洮北区'},\n" +
          "                    {id: 577, name: '镇赉县'},\n" +
          "                    {id: 578, name: '通榆县'},\n" +
          "                    {id: 579, name: '洮南市'},\n" +
          "                    {id: 580, name: '大安市'}\n" +
          "                  ]\n" +
          "                },\n" +
          "                {\n" +
          "                  id: 59, name: '延边', district: [\n" +
          "                    {id: 581, name: '延吉市'},\n" +
          "                    {id: 582, name: '图们市'},\n" +
          "                    {id: 583, name: '敦化市'},\n" +
          "                    {id: 584, name: '珲春市'},\n" +
          "                    {id: 585, name: '龙井市'},\n" +
          "                    {id: 586, name: '和龙市'},\n" +
          "                    {id: 587, name: '汪清县'},\n" +
          "                    {id: 588, name: '安图县'}\n" +
          "                  ]\n" +
          "                }\n" +
          "              ]\n" +
          "            }\n" +
          "          ]\n" +
          "        }\n" +
          "      },\n" +
          'methods: {\n' +
          '        choseAll:function(){\n' +
          '          let provinceValue = document.getElementById("address-province");\n' +
          '          this.ProvinceValue = provinceValue.innerHTML\n' +
          '          let cityValue = document.getElementById("address-city")\n' +
          '          this.CityValue = cityValue.innerHTML\n' +
          '\n' +
          '          let showDistrict = document.getElementById("address-district")\n' +
          '          this.DistrictValue = showDistrict.innerHTML\n' +
          '          this.totalValue = this.ProvinceValue+" "+this.CityValue+ " " + this.DistrictValue\n' +
          '          this.showChose = !this.showChose;\n' +
          '\n' +
          '        },\n' +
          '        choseAdd: function () {\n' +
          '          this.showChose = true;\n' +
          '        },\n' +
          '        closeAdd: function () {\n' +
          '          this.showChose = false;\n' +
          '        },\n' +
          '        _filter(add, name, code) {\n' +
          '          let result = [];\n' +
          '          for (let i = 0; i < add.length; i++) {\n' +
          '            if (code == add[i].id) {\n' +
          '              result = add[i][name];\n' +
          '            }\n' +
          '          }\n' +
          '          return result;\n' +
          '        },\n' +
          '        getProvinceId: function (code, input, index) {\n' +
          '          this.province = code;\n' +
          '          this.Province = input;\n' +
          '          this.showProvince = false;\n' +
          '          this.showCity = true;\n' +
          '          this.showDistrict = false;\n' +
          '          this.showCityList = this._filter(this.info, \'city\', this.province);\n' +
          '          // 点击选择当前\n' +
          '          this.info.map(a => a.selected = false);\n' +
          '          this.info[index].selected = true;\n' +
          '        },\n' +
          '        provinceSelected: function () {\n' +
          '          // 清除市级和区级列表\n' +
          '          this.showCityList = false;\n' +
          '          this.showDistrictList = false;\n' +
          '          // 清除市级和区级选项\n' +
          '          this.City = false;\n' +
          '          this.District = false;\n' +
          '          // 选项页面的切换\n' +
          '          this.showProvince = true;\n' +
          '          this.showCity = false;\n' +
          '          this.showDistrict = false;\n' +
          '        },\n' +
          '        getCityId: function (code, input, index) {\n' +
          '          this.city = code;\n' +
          '          this.City = input;\n' +
          '          this.showProvince = false;\n' +
          '          this.showCity = false;\n' +
          '          this.showDistrict = true;\n' +
          '          this.showDistrictList = this._filter(this.showCityList, \'district\', this.city);\n' +
          '          // 选择当前添加active\n' +
          '          this.showCityList.map(a => a.selected = false);\n' +
          '          this.showCityList[index].selected = true;\n' +
          '        },\n' +
          '        citySelected: function () {\n' +
          '          this.showProvince = false;\n' +
          '          this.showCity = true;\n' +
          '          this.showDistrict = false;\n' +
          '        },\n' +
          '        getDistrictId: function (code, input, index) {\n' +
          '          this.district = code;\n' +
          '          this.District = input;\n' +
          '          // 选择当前添加active\n' +
          '          this.showDistrictList.map(a => a.selected = false);\n' +
          '          this.showDistrictList[index].selected = true;\n' +
          '        },\n' +
          '        districtSelected: function () {\n' +
          '          this.showProvince = false;\n' +
          '          this.showCity = false;\n' +
          '          this.showDistrict = true;\n' +
          '        }\n' +
          '      },\n' +
          '      mounted(){\n' +
          '        this.id=this.sheng+this.chengshi+this.qu;\n' +
          '      }'
      }
    }
  }
</script>

<style scoped>
  table{
    width: 100%;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    border-collapse: collapse;
    color: #34495e;
  }
  table thead{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table tbody{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table th{
    padding: 8px 10px;
    text-align: left;
    font-weight: 400;
    background-color: #f1f4f8;
  }
  table tr{
    padding: 8px 10px;
    text-align: left;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  table td{
    padding: 8px;
    border-bottom: 1px solid #f1f4f8;
  }
  .idData code{
    height: 500px;
    overflow-y: auto;
  }

  code::-webkit-scrollbar {/*滚动条整体样式*/
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 5px;
  }
  code::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px #ccc;
    background: #ccc;
  }

</style>
