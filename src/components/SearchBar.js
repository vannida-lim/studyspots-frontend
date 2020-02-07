import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'

const SearchBar = (props) => {
    const filteredWifi= props.cafes.filter(cafe => cafe.has_wifi === true)

    const filteredLate= props.cafes.filter(cafe => cafe.open_late === true)

    let [filtered, setFiltered] = useState({current: ""})

    const currentDisplay = () => {
        if(filtered.current === "has_wifi"){
            return filteredWifi
        } else if(filtered.current === "open_late" ) {
            return filteredLate
        } else {
            props.cafes
        }
    }

    handleChange = (event) => {
        setFiltered({current: event.target.value})
    }
    
    console.log(filteredWifi)
    return (
        <div>
            <label>
                <strong>Filter: </strong>
                <select 
                onChange={handleChange} 
                value={null}>
                <option value="has_wifi">Wifi</option>
                <option value="open_late">Open Late</option>
            </select>
        </label>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{ 
    cafes: state.allInfoAboutCafes.cafes}
}

export default connect(mapStateToProps)(SearchBar);