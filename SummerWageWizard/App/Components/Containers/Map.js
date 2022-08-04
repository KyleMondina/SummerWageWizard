import * as React from 'react'
import { View, Text } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import MAP_CONSTANTS from '../Utilities/MapConstants'
import { useEffect } from 'react'
const Map = () => {

    useEffect(()=>{
        /*Get initial location based on user location, add set data */
        /* Based on the selected Job, grab the appropriate jobs, also besure to check
            ->selected job change
            ->joblocations updates
        */
    },[])
    return(
        <View style = {MAP_CONSTANTS.default_map_style.container}>
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    style={MAP_CONSTANTS.default_map_style.map}
                    region={MAP_CONSTANTS.santa_clara_university}
                />
        </View>
    )
}



export default Map