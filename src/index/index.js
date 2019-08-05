import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

class Indexs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        const user = sessionStorage.getItem('username')
        console.log(user)
        if(user===null){
            this.props.history.push('/login')
        }else{
            this.props.history.push('/home')
        }
    }
    render() { 
        return ( 
            <BrowserRouter>
               <Route></Route>
            </BrowserRouter>
        );
    }
}
 
export default Indexs;