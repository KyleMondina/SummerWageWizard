import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './features/timerSlice.js'
import geofenceReducer from './features/geofenceSlice'
import jobReducer from './features/jobSlice'
import trackReducer from './features/trackSlice'
import locationReducer from './features/locationSlice'

export default configureStore({
  reducer: {
    timer: timerReducer,
    geofence: geofenceReducer,
    job:jobReducer,
    track:trackReducer,
    location:locationReducer
  }
})
