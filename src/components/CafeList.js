import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../redux/actions'
import { selectCafe } from '../redux/actions'

// const selectCafe = {selectCafe: action.selectCafe }
class CafeList extends Component {

    renderList() {
        return this.props.cafes.map(cafe => {
            return (<div key={cafe.id}>
                <p>{cafe.name} | {cafe.address} 
                <button >View More</button></p>
            </div>)
        })
    }

    render() {
    console.log(this.props)
    return (
        <div>
            <h1>Manhattan Cafes</h1>
            {/* {props.cafes.map(cafe => <Cafe key={cafe.id} cafe={cafe}/>)} */}
            {this.renderList()}
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      cafes: state.allInfoAboutCafes.cafes
    //   cafe: state.allInfoAboutCafes.cafe
    }
  }

export default connect(mapStateToProps)(CafeList);