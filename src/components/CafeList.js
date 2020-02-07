import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    font-size: 20px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 2px 16px;
    color: white;
    box-sizing: border-box;
`

const mapDispatchToProps = { selectCafe: actions.selectCafe }
class CafeList extends Component {
    state = {
        filtered: ""
    }

    currentDisplay = () => {
        let filteredWifi= this.props.cafes.filter(cafe => cafe.has_wifi === true)
        let filteredLate= this.props.cafes.filter(cafe => cafe.open_late === true)
      
        if (this.state.filtered === "has_wifi"){
            return filteredWifi.map(cafe => <div key={cafe.id}>
                    <span role='img' aria-label='pin-emoji'>📍</span><a href={cafe.url}>{cafe.name}</a></div>)
        } else if (this.state.filtered === "open_late" ) {
            return filteredLate.map(cafe => <div key={cafe.id}>
                <span role='img' aria-label='pin-emoji'>📍</span><a href={cafe.url}>{cafe.name}</a></div>)
        } else {
            return this.props.cafes.map(cafe => <div key={cafe.id}>
                <span role='img' aria-label='pin-emoji'>📍</span><a href={cafe.url}>{cafe.name}</a></div>)
        }
    }

    setFiltered = (e) => {
        this.setState({filtered: e.target.value})
    }

    // renderList() {
    //     if (this.props.cafes) {
    //         return this.props.cafes.map(cafe => {
    //             return (<div key={cafe.id}>
    //                 <span role='img' aria-label='pin-emoji'>📍</span><a href={cafe.url}>{cafe.name}</a> 
    //             </div>)
    //     })}
    // }

    render() {
        return (
            <Wrapper>
                <label>
                    <strong>Filter: </strong>
                    <select 
                    onChange={(e) => this.setFiltered(e)} 
                    value={this.state.filtered}>
                    <option value="has_wifi">Wifi</option>
                    <option value="open_late">Open Late</option>
                    </select>
                </label>
                <h1>Manhattan Cafes</h1>
                <p>Click to See More Info</p>
                <div>{this.currentDisplay()}</div>
        </Wrapper>
        )}
}

const mapStateToProps = (state) => {
    return {
      cafes: state.allInfoAboutCafes.cafes,
      cafe: state.allInfoAboutCafes.cafe
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CafeList);