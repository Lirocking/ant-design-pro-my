import echarts from 'echarts/lib/echarts';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import React from 'react';

const cellSize = [80, 80];
const pieRadius = 30;

class MeterDaylyEvent extends React.Component {

    getVirtulData = () => {
        const date = +echarts.number.parseDate('2019-02-01');
        const end = +echarts.number.parseDate('2019-03-01');
        const dayTime = 3600 * 24 * 1000;
        const data = [];
        for (let time = date; time < end; time += dayTime) {
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
    }

    getPieSeries = (scatterData, chart) => 
        echarts.util.map(scatterData, (item, index) => {
            const center = chart.convertToPixel('calendar', item);
            return {
                id: `${index  }pie`,
                type: 'pie',
                center: {center},
                label: {
                    normal: {
                        formatter: '{c}',
                        position: 'inside'
                    }
                },
                radius: pieRadius,
                data: [
                    {name: '工作', value: Math.round(Math.random() * 24)},
                    {name: '娱乐', value: Math.round(Math.random() * 24)},
                    {name: '睡觉', value: Math.round(Math.random() * 24)},
                ]
            };
        })

    getPieSeriesUpdate = (scatterData, chart) =>
        echarts.util.map(scatterData, (item, index) => {
            const center = chart.convertToPixel('calendar', item);
            return {
                id: `${index }pie`,
                center: {center},
            }
        })

    getOption = () => {
        const scatterData = this.getVirtulData();
        const option = {
            tooltip: {},
            legend: {
                data: ['工作', '娱乐', '睡觉'],
                bottom: 20
            },
            calendar: {
                top: 'middle',
                left: 'center',
                orient: 'vertical',
                cellSize: {cellSize},
                yearLabel: {
                    show: false,
                    textStyle: {
                        fontSize: 30
                    }
                },
                dayLable: {
                    margin: 20,
                    firstDay: 1,
                    nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
                },
                monthLabel: {
                    show: false
                },
                range: ['2017-02']
            },
            series: [{
                id: 'label',
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: (params) => echarts.format.formatTime('dd', params.value[0]),
                        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                        textStyle: {
                            color: '#000',
                            fontSize: 14
                        }
                    }
                },
                data: {scatterData}
            }]
        }
        return option;
    }

    render() {
        
        const divData = (
          <ReactEchartsCore
            echarts={echarts}          
            style={{ margin: 32, height: 380, width: 1000 }}
            option={this.getOption()}
            lazyUpdate={(this.getOption(), false)}

          />
        );
        return divData;
    }
}

export default MeterDaylyEvent;