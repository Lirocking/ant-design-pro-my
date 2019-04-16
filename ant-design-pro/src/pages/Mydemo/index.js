import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts-gl';
import numeral from 'numeral';
// 引入echarts主题
import { connect } from 'dva';
import { Row, Col, Card, Tooltip, Carousel } from 'antd';

import echartsTheme from './modules/chalk';
import MeterReadList from './modules/MeterReadList';
import MeterMapList from './modules/MeterMapList';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import NumberInfo from '@/components/NumberInfo';
import MeterDaylyEvent from './modules/MeterDaylyEvent';
// import CountDown from '@/components/CountDown';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts'; // 图标样式
import styles from './Monitor.less';

// 当前时间
const targetTime = new Date().toLocaleDateString();

/**
 * 设置起始时间为当前日期减30天
 */
const startTime = () => {
  const now = new Date();
  const now2 = new Date(now);
  now2.setDate(now.getDate() - 30);
  return now2.toLocaleDateString();
};

@connect(({ monitor, loading }) => ({
  monitor,
  loading: loading.models.monitor,
}))
class EchartsTest extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetchTags',
    });
    // 注册echarts主题
    echarts.registerTheme('theme', echartsTheme);

    ReactDOM.render(<MeterReadList />, document.getElementById('meterList'));
    ReactDOM.render(<MeterMapList />, document.getElementById('meterMap'));
  }

  render() {
    const { monitor, loading } = this.props;
    const { tags } = monitor;

    return (
      <Carousel autoplay autoplaySpeed="40">
        <GridContent>
          <Row gutter={24}>
            <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card title="事件告警定位" bordered={false}>
                <Row>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="本月事件上报总数"
                      suffix="次"
                      total={numeral(1056022).format('0,0')}
                    />
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo subTitle="统计周期起始时间" total={startTime()} />
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo subTitle="统计周期结束时间" total={targetTime} />
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="当天上报"
                      suffix="元"
                      total={numeral(234).format('0,0')}
                    />
                  </Col>
                </Row>
                <div className={styles.mapChart}>
                  <Tooltip title="Test2">
                    <div id="meterMap" />
                  </Tooltip>
                </div>
              </Card>
            </Col>
            <Col xl={6} lg={24} md={24} sm={24} xs={24}>
              <Card title="测试卡片" bordered={false}>
                <div id="meterList" />
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card title="Test" bordered={false} className={styles.pieCard}>
                <Row style={{ padding: '16px 0' }}>
                  <Col span={8}>
                    <Pie
                      animate={false}
                      percent={28}
                      subTitle="Test"
                      total="28%"
                      height={128}
                      lineWidth={2}
                    />
                  </Col>
                  <Col span={8}>
                    <Pie
                      animate={false}
                      color="#5DDECF"
                      percent={22}
                      subTitle="Test"
                      total="22%"
                      height={128}
                      lineWidth={2}
                    />
                  </Col>
                  <Col span={8}>
                    <Pie
                      animate={false}
                      color="#2FC25B"
                      percent={32}
                      subTitle="Test"
                      total="32%"
                      height={128}
                      lineWidth={2}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card
                title="数据上报地区统计"
                loading={loading}
                bordered={false}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <TagCloud 
                  data={tags} 
                  height={161} 
                />
              </Card>
            </Col>
            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card title="Test" bodyStyle={{ textAlign: 'center', fontSize: 0 }} bordered={false}>
                <WaterWave height={161} title="Test" percent={34} />
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card title="Test" bodyStyle={{ textAlign: 'center', fontSize: 0 }} bordered={false}>
                <MeterDaylyEvent />
              </Card>
            </Col>
          </Row>
        
        </GridContent>
      </Carousel>
    );
  }
}

export default EchartsTest;
