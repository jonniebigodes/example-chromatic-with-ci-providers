import React from 'react'
import PropTypes from 'prop-types'

export default function OneMoreComponent({itemA,itemB}){
    return (
        <>
            <h3>I'm itemA</h3>
            {itemA}
            <h3>I'm itemB</h3>
            {itemB}
        </>
    )
}

OneMoreComponent.propTypes = {
    itemA: PropTypes.number,
    itemB:PropTypes.string
}

OneMoreComponent.defaultProps = {
    itemA:12,
    itemB:'Zoinks'
}