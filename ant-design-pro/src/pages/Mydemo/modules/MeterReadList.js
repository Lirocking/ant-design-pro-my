// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts-gl';
import 'echarts/map/js/china';

// 引入echarts主题
import React, { Component } from 'react';
import echartsTheme from './chalk';
import { MiniArea } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import styles from './index.less';

function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

function getActiveData() {
  const activeData = [];
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 200) + i * 50,
    });
  }
  return activeData;
}

class MeterReadList extends Component {
  state = {
    news: [],
    activeData: getActiveData(),
  };

  componentDidMount() {
    this.loopData();

    echarts.registerTheme('theme', echartsTheme);
    const myData = [
      { name: '海门', value: [121.15, 31.89, 90] },
      { name: '鄂尔多斯', value: [109.781327, 39.608266, 120] },
      { name: '招远', value: [120.38, 37.35, 142] },
      { name: '舟山', value: [122.207216, 29.985295, 123] },
    ];

    // 使用fetch获取get数据
    fetch('/api/longidata/successtotal', {
      method: 'GET',
    }).then(res => {
      res.json().then(data => {
        const newsAdd = [];
        data.forEach(element => {
          newsAdd.push(element);
        });
        this.setState({
          news: newsAdd,
        });
      });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.requestRef);
  }

  loopData = () => {
    this.requestRef = requestAnimationFrame(() => {
      this.timer = setTimeout(() => {
        this.setState(
          {
            activeData: getActiveData(),
          },
          () => {
            this.loopData();
          }
        );
      }, 1000);
    });
  };

  // Button点击事件
  handleClick = () => {
    // 使用fetch获取get数据
    fetch('/api/longidata/successtotal', {
      method: 'GET',
    }).then(res => {
      res.json().then(data => {
        const newsAdd = [];
        data.forEach(element => {
          newsAdd.push(element);
        });
        this.setState({
          news: newsAdd,
        });
      });
    });
  };

  render() {
    const { activeData = [] } = this.state;

    const divData = (
      // <div id='mychart' />
      <div className={styles.activeChart}>
        <NumberInfo subTitle="目标评估" total="有望达到预期" />
        <div style={{ marginTop: 32 }}>
          <MiniArea
            animate={false}
            line
            borderWidth={2}
            height={84}
            scale={{
              y: {
                tickCount: 3,
              },
            }}
            yAxis={{
              tickLine: false,
              label: false,
              title: false,
              line: false,
            }}
            data={activeData}
          />
        </div>
        {activeData && (
          <div>
            <div className={styles.activeChartGrid}>
              <p>{[...activeData].sort()[activeData.length - 1].y + 200} 亿元</p>
              <p>{[...activeData].sort()[Math.floor(activeData.length / 2)].y} 亿元</p>
            </div>
            <div className={styles.dashedLine}>
              <div className={styles.line} />
            </div>
            <div className={styles.dashedLine}>
              <div className={styles.line} />
            </div>
          </div>
        )}
        {activeData && (
          <div className={styles.activeChartLegend}>
            <span>00:00</span>
            <span>{activeData[Math.floor(activeData.length / 2)].x}</span>
            <span>{activeData[activeData.length - 1].x}</span>
          </div>
        )}
      </div>
    );
    return divData;
  }
}

export default MeterReadList;
