import React, { Component } from 'react';
import {Switch,Redirect} from 'react-router-dom'

class Indexs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                {console.log()}
                {/* <Redirect to='/home'/> */}
            </Switch>
        );
    }
}
 
export default Indexs;