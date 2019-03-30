import mockjs from 'mockjs';
import { getJSDocTags } from 'typescript';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

function fakeList(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

let sourceData;

function getFakeList(req, res) {
  const params = req.query;

  const count = params.count * 1 || 20;

  const result = fakeList(count);
  sourceData = result;
  return res.json(result);
}

function postFakeList(req, res) {
  const { /* url = '', */ body } = req;
  // const params = getUrlParams(url);
  const { method, id } = body;
  // const count = (params.count * 1) || 20;
  let result = sourceData;

  switch (method) {
    case 'delete':
      result = result.filter(item => item.id !== id);
      break;
    case 'update':
      result.forEach((item, i) => {
        if (item.id === id) {
          result[i] = Object.assign(item, body);
        }
      });
      break;
    case 'post':
      result.unshift({
        body,
        id: `fake-list-${result.length}`,
        createdAt: new Date().getTime(),
      });
      break;
    default:
      break;
  }

  return res.json(result);
}

const getNotice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    updatedAt: new Date(),
    member: '科学搬砖组',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    updatedAt: new Date('2017-07-24'),
    member: '全组都是吴彦祖',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    updatedAt: new Date(),
    member: '中二少女团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    updatedAt: new Date('2017-07-23'),
    member: '程序员日常',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: '凛冬将至',
    updatedAt: new Date('2017-07-23'),
    member: '高逼格设计天团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: '生命就像一盒巧克力，结果往往出人意料',
    updatedAt: new Date('2017-07-23'),
    member: '骗你来学计算机',
    href: '',
    memberLink: '',
  },
];

const getActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: '曲丽丽',
      avatar: avatars2[0],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: '付小小',
      avatar: avatars2[1],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: '林东东',
      avatar: avatars2[2],
    },
    group: {
      name: '中二少女团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: '周星星',
      avatar: avatars2[4],
    },
    project: {
      name: '5 月日常迭代',
      link: 'http://github.com/',
    },
    template: '将 @{project} 更新至已发布状态',
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: '朱偏右',
      avatar: avatars2[3],
    },
    project: {
      name: '工程效能',
      link: 'http://github.com/',
    },
    comment: {
      name: '留言',
      link: 'http://github.com/',
    },
    template: '在 @{project} 发布了 @{comment}',
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: '乐哥',
      avatar: avatars2[5],
    },
    group: {
      name: '程序员日常',
      link: 'http://github.com/',
    },
    project: {
      name: '品牌迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
];

const test = {
  list: [
    {
      name: '通辽市',
      value: 85,
      type: 1,
    },
    {
      name: '安康市',
      value: 48,
      type: 2,
    },
    {
      name: '海口市',
      value: 20,
      type: 1,
    },
    {
      name: '澎湖县',
      value: 4,
      type: 1,
    },
    {
      name: '榆林市',
      value: 51,
      type: 0,
    },
    {
      name: '阿克苏地区',
      value: 20,
      type: 1,
    },
    {
      name: '金华市',
      value: 26,
      type: 2,
    },
    {
      name: '信阳市',
      value: 60,
      type: 1,
    },
    {
      name: '和田地区',
      value: 55,
      type: 0,
    },
    {
      name: '离岛',
      value: 23,
      type: 1,
    },
    {
      name: '海南藏族自治州',
      value: 43,
      type: 2,
    },
    {
      name: '天津市',
      value: 79,
      type: 0,
    },
    {
      name: '湘潭市',
      value: 41,
      type: 1,
    },
    {
      name: '那曲地区',
      value: 15,
      type: 2,
    },
    {
      name: '潮州市',
      value: 60,
      type: 2,
    },
    {
      name: '天津市',
      value: 49,
      type: 1,
    },
    {
      name: '上海市',
      value: 76,
      type: 1,
    },
    {
      name: '新竹县',
      value: 19,
      type: 1,
    },
    {
      name: '金门县',
      value: 55,
      type: 1,
    },
    {
      name: '松原市',
      value: 15,
      type: 1,
    },
    {
      name: '莆田市',
      value: 73,
      type: 1,
    },
    {
      name: '青岛市',
      value: 4,
      type: 1,
    },
    {
      name: '天津市',
      value: 95,
      type: 2,
    },
    {
      name: '铜川市',
      value: 76,
      type: 1,
    },
    {
      name: '莱芜市',
      value: 41,
      type: 2,
    },
    {
      name: '定西市',
      value: 57,
      type: 1,
    },
    {
      name: '湘西土家族苗族自治州',
      value: 11,
      type: 1,
    },
    {
      name: '内江市',
      value: 43,
      type: 1,
    },
    {
      name: '佛山市',
      value: 71,
      type: 0,
    },
    {
      name: '宁波市',
      value: 21,
      type: 1,
    },
    {
      name: '九龙',
      value: 72,
      type: 2,
    },
    {
      name: '鹤岗市',
      value: 97,
      type: 2,
    },
    {
      name: '武汉市',
      value: 30,
      type: 0,
    },
    {
      name: '大同市',
      value: 89,
      type: 1,
    },
    {
      name: '赣州市',
      value: 63,
      type: 2,
    },
    {
      name: '北京市',
      value: 49,
      type: 1,
    },
    {
      name: '重庆市',
      value: 59,
      type: 0,
    },
    {
      name: '阳泉市',
      value: 48,
      type: 0,
    },
    {
      name: '郴州市',
      value: 65,
      type: 1,
    },
    {
      name: '西宁市',
      value: 54,
      type: 1,
    },
    {
      name: '澳门半岛',
      value: 82,
      type: 1,
    },
    {
      name: '抚顺市',
      value: 62,
      type: 1,
    },
    {
      name: '赣州市',
      value: 29,
      type: 2,
    },
    {
      name: '恩施土家族苗族自治州',
      value: 94,
      type: 1,
    },
    {
      name: '泉州市',
      value: 27,
      type: 1,
    },
    {
      name: '那曲地区',
      value: 30,
      type: 1,
    },
    {
      name: '果洛藏族自治州',
      value: 2,
      type: 1,
    },
    {
      name: '临汾市',
      value: 88,
      type: 1,
    },
    {
      name: '海外',
      value: 32,
      type: 0,
    },
    {
      name: '林芝地区',
      value: 74,
      type: 1,
    },
    {
      name: '松原市',
      value: 56,
      type: 2,
    },
    {
      name: '长春市',
      value: 47,
      type: 1,
    },
    {
      name: '银川市',
      value: 58,
      type: 1,
    },
    {
      name: '武汉市',
      value: 50,
      type: 1,
    },
    {
      name: '本溪市',
      value: 52,
      type: 1,
    },
    {
      name: '雅安市',
      value: 11,
      type: 1,
    },
    {
      name: '济宁市',
      value: 9,
      type: 0,
    },
    {
      name: '威海市',
      value: 38,
      type: 2,
    },
    {
      name: '六盘水市',
      value: 43,
      type: 2,
    },
    {
      name: '莱芜市',
      value: 61,
      type: 1,
    },
    {
      name: '平顶山市',
      value: 65,
      type: 0,
    },
    {
      name: '淮南市',
      value: 13,
      type: 1,
    },
    {
      name: '厦门市',
      value: 79,
      type: 2,
    },
    {
      name: '榆林市',
      value: 81,
      type: 0,
    },
    {
      name: '三门峡市',
      value: 35,
      type: 1,
    },
    {
      name: '青岛市',
      value: 43,
      type: 2,
    },
    {
      name: '漯河市',
      value: 66,
      type: 0,
    },
    {
      name: '石嘴山市',
      value: 16,
      type: 1,
    },
    {
      name: '铜仁市',
      value: 29,
      type: 0,
    },
    {
      name: '金鹏',
      value: 36,
      type: 1,
    },
    {
      name: '金鹏',
      value: 67,
      type: 0,
    },
    {
      name: '金鹏',
      value: 64,
      type: 2,
    },
    {
      name: '金鹏',
      value: 7,
      type: 1,
    },
    {
      name: '天津市',
      value: 78,
      type: 1,
    },
    {
      name: '南通市',
      value: 90,
      type: 1,
    },
    {
      name: '韶关市',
      value: 20,
      type: 1,
    },
    {
      name: '南充市',
      value: 91,
      type: 1,
    },
    {
      name: '北京市',
      value: 73,
      type: 1,
    },
    {
      name: '宜宾市',
      value: 42,
      type: 1,
    },
    {
      name: '丹东市',
      value: 29,
      type: 1,
    },
    {
      name: '驻马店市',
      value: 10,
      type: 1,
    },
    {
      name: '兴安盟',
      value: 94,
      type: 2,
    },
    {
      name: '遵义市',
      value: 90,
      type: 1,
    },
    {
      name: '海北藏族自治州',
      value: 7,
      type: 1,
    },
    {
      name: '吉安市',
      value: 23,
      type: 1,
    },
    {
      name: '泰州市',
      value: 49,
      type: 2,
    },
    {
      name: '莆田市',
      value: 40,
      type: 1,
    },
    {
      name: '铁岭市',
      value: 50,
      type: 1,
    },
    {
      name: '固原市',
      value: 88,
      type: 1,
    },
    {
      name: '河源市',
      value: 71,
      type: 1,
    },
    {
      name: '许昌市',
      value: 23,
      type: 2,
    },
    {
      name: '德州市',
      value: 71,
      type: 0,
    },
    {
      name: '周口市',
      value: 29,
      type: 1,
    },
    {
      name: '天津市',
      value: 83,
      type: 0,
    },
    {
      name: '九龙',
      value: 89,
      type: 1,
    },
    {
      name: '铜川市',
      value: 48,
      type: 0,
    },
    {
      name: '荆州市',
      value: 91,
      type: 1,
    },
    {
      name: '吴忠市',
      value: 64,
      type: 0,
    },
    {
      name: '海东市',
      value: 70,
      type: 2,
    },
    {
      name: '开封市',
      value: 97,
      type: 0,
    },
  ],
};

function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
}

export default {
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  }),
  'GET /api/mytags': test,
  'GET /api/fake_list': getFakeList,
  'POST /api/fake_list': postFakeList,
  'GET /api/captcha': getFakeCaptcha,
};
