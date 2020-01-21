import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reviews extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Reviews</h1>
                {/* {this.props.reviews.map(review => <li>{review}</li>)} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(Reviews);