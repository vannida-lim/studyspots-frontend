import React, { Component } from 'react';
import styled from 'styled-components';
import CafeList from '../components/CafeList'
import Cafe from '../components/Cafe'

const Grid = styled.div`
    display: grid,
    grid-template-columns: repeat(2),
    grid-gap: 10px
`;

const Item = styled.div`
    display: grid,
    justify-content: center
`;
class MainContainer extends Component {
    render() {
        return(
            <div>
            <Grid>
                <Item>
                    <CafeList/>
                </Item>
                <Item>
                    <Cafe/>
                </Item>
            </Grid>
            </div>
        )
    }
}

export default MainContainer;