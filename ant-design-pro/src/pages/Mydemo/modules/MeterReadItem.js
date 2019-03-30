import React, { Component } from 'react';

class MeterReadItem extends Component {
  render() {
    const { deptname, areaname, terminalAdd } = this.props;
    const divData = (
      <div>
        <div>{deptname}</div>
        <div>
          <span>{areaname}</span>
        </div>
        <div>
          <span>{terminalAdd}</span>
        </div>
      </div>
    );
    return divData;
  }
}

// "deptname": "T188生产",
// "areaname": "T188",
// "terminalAdd": "05052770",
// "expectnum": 1,
// "actualnum": 0,
// "sucessrate": 0,
// "terminalName": "05052770",
// "terminal_name": "05052770"

export default MeterReadItem;
