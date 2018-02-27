import React from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

const Chart = ({data}) => {

    const getOption = () => {

        let dateList = data.map(function (item) {
            return item[0];
        });
        let valueList = data.map(function (item) {
            return item[1];
        });

        const option = {
            // Make gradient line here
            visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 400
            }],


            title: {
                left: 'center',
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: dateList
            },
            yAxis: {
                splitLine: {show: false}
            },
            series: {
                type: 'line',
                showSymbol: false,
                data: valueList
            }
        };

        return option;
    };

    return (
        <ReactEcharts
            option={getOption()}
        />
    );
};


export default Chart;
