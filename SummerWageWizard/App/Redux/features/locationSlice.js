import { createSlice } from '@reduxjs/toolkit'
import MAP_CONSTANTS from '../../Components/Utilities/MapConstants'

export const locationSlice = createSlice({
    name: 'location',
    initialState:{
        location: {
            latitude:MAP_CONSTANTS.default_latitude,
            longitude:MAP_CONSTANTS.default_longitude,
            latitudeDelta:MAP_CONSTANTS.default_latitude_delta,
            longitudeDelta:MAP_CONSTANTS.default_longitude_delta
        }
    },
    reducers:{
        updateLocation: (state,action)=>{
            state.location={
                latitude:action.payload.latitude,
                longitude:action.payload.longitude,
                latitudeDelta:MAP_CONSTANTS.default_latitude_delta,
                longitudeDelta:MAP_CONSTANTS.default_longitude_delta
            }
        }
    }
})

export const { updateLocation } = locationSlice.actions
export const selectLocation = (state) => state.location.location

export default locationSlice.reducer