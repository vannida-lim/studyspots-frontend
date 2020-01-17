import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'
// import { selectCafe } from '../redux/actions'

const mapDispatchToProps = { selectCafe: actions.selectCafe }
class CafeList extends Component {


    renderList() {
        if (this.props.cafes) {
            return this.props.cafes.map(cafe => {
                return (<div key={cafe.id}>
                    <p>{cafe.name} 
                    <button onClick={() => this.props.selectCafe(cafe)} >View More</button></p>
                </div>)
        })}
    }

    render() {
    return (
        <div>
            <h1>Manhattan Cafes</h1>
            <div className="list">{this.renderList()}</div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      cafes: state.allInfoAboutCafes.cafes,
      cafe: state.allInfoAboutCafes.cafe
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CafeList);