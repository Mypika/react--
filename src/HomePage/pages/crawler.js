import React, { Component } from 'react';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }
    onChange=(date, dateString)=>{
        console.log(date, dateString);
      }
    handleDisabledChange = disabled => {
        this.setState({ disabled });
      };
    render() { 
        return (
            <div>
            <DatePicker onChange={this.onChange} />
            <br />
            <MonthPicker onChange={this.onChange} placeholder="Select month" />
            <br />
            <RangePicker onChange={this.onChange} />
            <br />
            <WeekPicker onChange={this.onChange} placeholder="Select week" />
          </div>
        );
    }
}
 
export default Page1;