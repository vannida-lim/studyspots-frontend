import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'
// import { selectCafe } from '../redux/actions'
import styled from 'styled-components'
// import SearchBar from '../components/SearchBar'

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
    filteredWifi= this.props.cafes.filter(cafe => cafe.has_wifi === true)

    filteredLate= this.props.cafes.filter(cafe => cafe.open_late === true)

    state = {current: ""}

    currentDisplay = () => {
        if(this.state.current === "has_wifi"){
            return this.filteredWifi
        } else if(this.state.current === "open_late" ) {
            return this.filteredLate
        } else {
            return this.props.cafes
        }
    }

    handleChange = (event) => {
        this.setState({current: event.target.value})
    }

    renderList() {



        if (this.props.cafes) {
            return this.props.cafes.map(cafe => {
                return (<div key={cafe.id}>
                    {/* {cafe.name}  */}
                    {/* <button onClick={() => this.props.selectCafe(cafe)} >View More</button> */}
                    📍<a href={cafe.url}>{cafe.name}</a> 
                </div>)
        })}
        // this.currentDisplay.map(cafe=> <div key={cafe.id}> 📍<a href={cafe.url}>{cafe.name}</a></div> )
    }

    render() {
    return (
        <Wrapper>
            <label>
                <strong>Filter: </strong>
                <select 
                onChange={this.handleChange} 
                value={null}>
                <option value="has_wifi">Wifi</option>
                <option value="open_late">Open Late</option>
            </select>
        </label>
            <h1>Manhattan Cafes</h1>
            <p>Click to See More Info</p>
            <div className="list">{this.renderList()}</div>
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