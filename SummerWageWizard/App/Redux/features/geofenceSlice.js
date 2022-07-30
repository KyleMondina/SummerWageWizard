import { createSlice } from '@reduxjs/toolkit'

export const geofenceSlice = createSlice({
  name: 'geofence',
  initialState: {
    isInsideGeofence: false
  },
  reducers: {
    enterGeofence: state => {
        state.isInsideGeofence = true
    },
    exitGeofence: state => {
        state.isInsideGeofence = false
    },
  }
})

export const { enterGeofence, exitGeofence} = geofenceSlice.actions
export const selectIsInsideGeofence = (state) => state.geofence.isInsideGeofence

export default geofenceSlice.reducer