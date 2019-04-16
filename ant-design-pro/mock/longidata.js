import errorEvent from './longidata/errorEvent.json';
import successTotal from './longidata/successTotal.json';
import test from './longidata/test.json';


function getErrorEvent(req, res) {
  return res.json(errorEvent);
}

function getSuccessTotal(req, res) {
  return res.json(successTotal);
}

function getTest(req, res) {
  return res.json(test);
}

function getTags(req, res) {
  res.json(successTotal);
}

const testCollection = {
  "list": [{
    "name": "T188生产",
    "value": 73,
    "type": 0
  }, {
    "name": "lora水表演示",
    "value": 22,
    "type": 1
  }, {
    "name": "中卫演示NB",
    "value": 2,
    "type": 1
  }, {
    "name": "lora演示",
    "value": 49,
    "type": 2
  }, {
    "name": "中源水务公司同心分公司",
    "value": 33,
    "type": 0
  }, {
    "name": "中铁水务公司",
    "value": 33,
    "type": 0
  }, {
    "name": "乌海吴昕合同",
    "value": 100,
    "type": 1
  }, {
    "name": "兰州自来水公司",
    "value": 63,
    "type": 1
  }, {
    "name": "冰河新区黑壳子集中器",
    "value": 72,
    "type": 1
  }, {
    "name": "北京西路",
    "value": 20,
    "type": 1
  }, {
    "name": "华为气表测试",
    "value": 69,
    "type": 1
  }, {
    "name": "华为测试",
    "value": 27,
    "type": 0
  }, {
    "name": "哈尔滨",
    "value": 12,
    "type": 1
  }, {
    "name": "哈纳斯",
    "value": 57,
    "type": 1
  }, {
    "name": "四川",
    "value": 72,
    "type": 1
  }, {
    "name": "宁光_长城水务公司",
    "value": 92,
    "type": 2
  }, {
    "name": "宁光仪表NB",
    "value": 38,
    "type": 1
  }, {
    "name": "宁光仪表演示（LoRa）",
    "value": 8,
    "type": 1
  }, {
    "name": "宁光工艺部",
    "value": 5,
    "type": 2
  }, {
    "name": "宁光测试",
    "value": 78,
    "type": 0
  }, {
    "name": "山东滨州燃气公司",
    "value": 73,
    "type": 1
  }, {
    "name": "工艺部nb水表",
    "value": 61,
    "type": 1
  }, {
    "name": "山西省长治市黎城县",
    "value": 18,
    "type": 2
  }, {
    "name": "惠山区华清创意园",
    "value": 61,
    "type": 1
  }, {
    "name": "文萃南街",
    "value": 10,
    "type": 1
  }, {
    "name": "新野桑德水务公司",
    "value": 70,
    "type": 1
  }, {
    "name": "昆仑燃气",
    "value": 38,
    "type": 2
  }, {
    "name": "正源街",
    "value": 8,
    "type": 0
  }, {
    "name": "水电系统",
    "value": 25,
    "type": 1
  }, {
    "name": "江油天一自来水公司",
    "value": 77,
    "type": 2
  }, {
    "name": "河南周口",
    "value": 42,
    "type": 1
  }, {
    "name": "河南尉氏",
    "value": 65,
    "type": 2
  }, {
    "name": "河南尉氏lora表",
    "value": 69,
    "type": 0
  }, {
    "name": "河南濮阳",
    "value": 23,
    "type": 1
  }, {
    "name": "泰尔燃气",
    "value": 55,
    "type": 1
  }, {
    "name": "深圳燃气",
    "value": 50,
    "type": 1
  }, {
    "name": "甘肃兰州",
    "value": 30,
    "type": 2
  }, {
    "name": "演示区",
    "value": 83,
    "type": 2
  }, {
    "name": "甘肃民乐县试挂",
    "value": 79,
    "type": 1
  }, {
    "name": "甘肃演示",
    "value": 41,
    "type": 2
  }, {
    "name": "甘肃白银mbus表",
    "value": 76,
    "type": 1
  }, {
    "name": "电信测试区",
    "value": 5,
    "type": 1
  }, {
    "name": "车间测电磁阀",
    "value": 52,
    "type": 1
  }, {
    "name": "电表系统",
    "value": 49,
    "type": 1
  }, {
    "name": "辽宁沈阳样表",
    "value": 87,
    "type": 0
  }, {
    "name": "长城水务公司",
    "value": 48,
    "type": 2
  }, {
    "name": "陕西",
    "value": 84,
    "type": 0
  }, {
    "name": "陕西城市燃气",
    "value": 47,
    "type": 1
  }, {
    "name": "陕西安康",
    "value": 22,
    "type": 1
  }, {
    "name": "陕西安康岚皋县",
    "value": 28,
    "type": 2
  }, {
    "name": "隆基宁光",
    "value": 55,
    "type": 2
  }, {
    "name": "隆基宁光_电信移动",
    "value": 29,
    "type": 1
  }, {
    "name": "隆基宁光平罗系统",
    "value": 88,
    "type": 1
  }, {
    "name": "靖远煤电集团",
    "value": 18,
    "type": 0
  }]
};

export default {
  'GET /api/longidata/errorevent': getErrorEvent,
  'GET /api/longidata/successtotal': getSuccessTotal,
  'GET /api/longidata/test': getTest,
  'GET /api/mytags': testCollection,
};
