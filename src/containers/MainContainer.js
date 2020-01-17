import React, { Component } from 'react';
import CafeList from '../components/CafeList'
import Cafe from '../components/Cafe'


class MainContainer extends Component {
    render() {
        return(
            <div>
                <CafeList/>
                <Cafe/>
            </div>
        )
    }
}

export default MainContainer;