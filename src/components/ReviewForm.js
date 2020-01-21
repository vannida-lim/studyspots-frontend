import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'

// const addReview = actions.addReview()
const mapDispatchToProps = { addReview: actions.addReview }

class ReviewForm extends Component {

    state = {
        review: ''
    }

    handleOnChange = e => {
        this.setState({
            review: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.addReview(this.state)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Leave a Review</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <textarea id="review" type='text' onChange={(e) => this.handleOnChange(e)} placeholder="Enter Post" /><br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ReviewForm);