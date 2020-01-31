import React from 'react'

function Sort({toggleSorting}) {

    return (
        <button className="btn btn-info" onClick={toggleSorting}>
            Sort
        </button>
    )
}


export default Sort

