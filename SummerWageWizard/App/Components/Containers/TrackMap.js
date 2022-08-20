import * as React from 'react'
import Map from './Map'
import MAP_CONSTANTS from '../Utilities/MapConstants'

const TrackMap = ()=>{
    return(
        <Map
            initialRegion = {MAP_CONSTANTS.santa_clara_university}
            mapStyle = {MAP_CONSTANTS.default_map_style}
        />
    )
}

export default TrackMap