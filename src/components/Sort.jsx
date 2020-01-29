import React from 'react'

function Sort({toggleSorting, sortByHighPriority}) {

    return (
        <button className="btn btn-info" onClick={toggleSorting}>
            Sort
        </button>
    )
}


export default Sort

