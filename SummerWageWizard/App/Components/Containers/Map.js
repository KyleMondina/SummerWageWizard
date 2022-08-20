import * as React from 'react'
import { View, Text } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps'
import MAP_CONSTANTS from '../Utilities/MapConstants'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import withGeofencesBySelectedID from '../Enhancers/withGeofencesBySelectedID.js'
import { selectLocation } from '../../Redux/features/locationSlice'
import { useSelector } from 'react-redux'

const _Map = (props) => {

    const geofences = props.data
    const currentLocation = useSelector(selectLocation)
    const [location,setLocation] = useState(MAP_CONSTANTS.santa_clara_university)
    useEffect(()=>{
        (async()=>{
            //let location = await Location.getCurrentPositionAsync({})
            //console.log(location)
            setLocation({
                latitude:currentLocation.latitude,
                longitude:currentLocation.longitude,
                latitudeDelta:currentLocation.latitudeDelta,
                longitudeDelta:currentLocation.longitudeDelta
            })
        })()
    },[currentLocation])
    /*useEffect(()=>{
        setLocation(currentLocation)
    },[currentLocation])*/


    return(
        <View style = {MAP_CONSTANTS.default_map_style.container}>
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    style={MAP_CONSTANTS.default_map_style.map}
                    region={location}
                >
                    {
                        ((geofences&&(geofences.length>0)))
                            ? geofences.map((geofence)=>{
                                return(<Circle
                                    key={geofence._id}
                                    center={{
                                        latitude:geofence.lat,
                                        longitude:geofence.long,
                                    }}
                                    radius={geofence.radius}
                                    fillColor={'rgba(245, 40, 145, 0.35)'}
                                />)
                            })
                            : <></>
                    }
                </MapView>
        </View>
    )
}

const Map = withGeofencesBySelectedID(_Map)
export default Map