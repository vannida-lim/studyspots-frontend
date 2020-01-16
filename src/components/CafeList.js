import React from 'react'
import { connect } from 'react-redux'
import Cafe from '../components/Cafe'
// import { fetchCafes } from '../redux/actions'

const CafeList = (props) => {
    console.log(props)
    return (
        <div>
            {props.cafes.map(cafe => <Cafe key={cafe.id} cafe={cafe}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cafes: state.allInfoAboutCafes.cafes
    }
  }

export default connect(mapStateToProps)(CafeList)