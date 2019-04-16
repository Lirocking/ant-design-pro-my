import { queryTags } from '@/services/api';

export default {
  namespace: 'monitor',

  state: {
    tags: [],
  },

  effects: {
    *fetchTags(_, { call, put }) {
      const response = yield call(queryTags);
      yield put({
        type: 'saveTags',
        payload: response.list,
      });
    },
  },

  reducers: {
    saveTags(state, action) {
      return {
        ...state,
        tags: action.payload,
      };
    },
  },

  
};



// const dataMap = new Map();

// data.forEach(element => {
//   if (!dataMap.has(element.deptname)) {
//     dataMap.set(element.deptname, 1);
//   }
//   else {
//     dataMap[element.deptname] += 1;
//   }
// });
// console.log(dataMap);

// const dataShow = [];
// dataMap.forEach(element => {
//     dataShow.push({ name: element.key, value: element.value, type: 1 });
// });
// console.log(dataShow);

// return dataShow;