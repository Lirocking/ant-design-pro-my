// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts-gl';
// import 'echarts/map/js/china';
import ReactEchartsCore from 'echarts-for-react/lib/core';

// 引入echarts主题
import React, { Component } from 'react';
// import MeterReadItem from './MeterReadItem';
// import styles from './index.less';

class MeterMapList extends Component {
  state = {
    myData: [],
  };

  componentDidMount() {
    // const myChart = echarts.init(document.getElementById('mychart'), 'chalk');
    // myChart.setOption({
    //     geo: {
    //         map: 'china',
    //         zoom: 3,
    //         itemStyle: {					// 定义样式
    //             normal: {					// 普通状态下的样式
    //                 areaColor: '#323c48',
    //                 borderColor: '#13c2c2'
    //             },
    //             emphasis: {					// 高亮状态下的样式
    //                 areaColor: '#002329'
    //             }
    //         }
    //     },
    //     backgroundColor: '#404a59',  		// 图表背景色
    //     series: [
    //         {
    //             name: '销量', // series名称
    //             type: 'scatter', // series图表类型
    //             coordinateSystem: 'geo', // series坐标系类型
    //             data: this.state.myData,
    //         }
    //     ],
    //     visualMap: {
    //         type: 'continuous', // 连续型
    //         min: 0,       		// 值域最小值，必须参数
    //         max: 200,			// 值域最大值，必须参数
    //         calculable: true,	// 是否启用值域漫游
    //         inRange: {
    //                  color: ['#50a3ba','#eac736','#d94e5d0']
    //                              // 指定数值从低到高时的颜色变化
    //           },
    //         textStyle: {
    //             color: '#fff'	// 值域控件的文本颜色
    //         }
    //     }
    // }, true);
  }

  // Button点击事件
  handleClick = () => {
    // // 使用fetch获取get数据
    fetch('/api/longidata/errorevent', {
      method: 'GET',
    }).then(res => {
      res.json().then(data => {
        const myData1 = [];
        data.forEach(element => {
          myData1.push({
            name: element.meterName,
            value: [element.longitude, element.letitude, 100],
          });
        });
        this.setState({ myData: myData1 });
      });
    });
  };

  getOption = () => {
    const option = {
      geo: {
        center: [106, 38],
        map: 'china',
        zoom: 20,
        itemStyle: {
          // 定义样式
          normal: {
            // 普通状态下的样式
            areaColor: '#323c48',
            borderColor: '#13c2c2',
          },
          emphasis: {
            // 高亮状态下的样式
            areaColor: '#002329',
          },
        },
      },
      backgroundColor: '#404a59', // 图表背景色
      series: [
        {
          name: '销量', // series名称
          type: 'scatter', // series图表类型
          coordinateSystem: 'geo', // series坐标系类型
          data: this.state.myData,
        },
      ],
      visualMap: {
        type: 'continuous', // 连续型
        min: 0, // 值域最小值，必须参数
        max: 200, // 值域最大值，必须参数
        calculable: true, // 是否启用值域漫游
        inRange: {
          color: ['#50a3ba', '#eac736', '#d94e5d'],
          // 指定数值从低到高时的颜色变化
        },
        textStyle: {
          color: '#fff', // 值域控件的文本颜色
        },
      },
    };
    return option;
  };

  render() {
    const divData = (
      // <div>
      //   <button type="button" onClick={this.handleClick}>button</button>
      //   <br />
      //   列表:
      //   {this.state.news.map((item, i) =>
      //     <div key={i}>
      //       <MeterReadItem
      //         deptname={item.deptname}
      //         areaname={item.areaname}
      //         terminalAdd={item.terminalAdd}
      //       />
      //     </div>
      //   )}
      // </div>
      <div>
        <button type="button" onClick={this.handleClick}>
          button
        </button>
        <ReactEchartsCore
          echarts={echarts}
          style={{ margin: 32, height: 380, width: 1000 }}
          option={this.getOption()}
          lazyUpdate={(this.getOption(), false)}
        />
      </div>
    );

    return divData;
  }
}

export default MeterMapList;
