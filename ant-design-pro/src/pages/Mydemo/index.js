import React, { Component } from 'react';
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
import CountDown from '@/components/CountDown';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts'; // 图标样式
import styles from './Monitor.less';

const targetTime = new Date().getTime() + 3900000;

@connect(({ monitor, loading }) => ({
  monitor,
  loading: loading.models.monitor,
}))
class EchartsTest extends Component {
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
              <Card title="Test1" bordered={false}>
                <Row>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="交易总额"
                      suffix="元"
                      total={numeral(124543233).format('0,0')}
                    />
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo subTitle="销售目标完成率" total="92%" />
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo subTitle="起始时间" total={<CountDown target={targetTime} />} />
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                    <NumberInfo
                      subTitle="每秒上报"
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
                title="Test"
                loading={loading}
                bordered={false}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <TagCloud data={tags} height={161} />
              </Card>
            </Col>
            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card title="Test" bodyStyle={{ textAlign: 'center', fontSize: 0 }} bordered={false}>
                <WaterWave height={161} title="Test" percent={34} />
              </Card>
            </Col>
          </Row>
        </GridContent>
      </Carousel>
    );
  }
}

export default EchartsTest;
