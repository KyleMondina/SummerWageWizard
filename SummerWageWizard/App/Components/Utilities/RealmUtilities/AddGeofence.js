import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateGeofences } from '../../../Redux/features/geofenceSlice';
import { addToRealm } from '../../../Realm/dbCRUD';
import { useState, useEffect } from 'react';
import { selectSelectedJob } from '../../../Redux/features/jobSlice';
import { View, Button, TextInput } from 'react-native';

const AddGeofence = ()=>{
    const dispatch = useDispatch()
    const selectedJob = useSelector(selectSelectedJob)
    const [geofenceAdded,addGeofence] = useState(null)
    const [lat, setLat] = useState(' ')
    const [long, setLong] = useState(' ')
    const [radius, setRadius] = useState(' ')

    useEffect(()=>{
        if(geofenceAdded !== null){
            addToRealm("Geofence",geofenceAdded).then(()=>{
                dispatch(updateGeofences())
            })
        }
    },[geofenceAdded])

    return(
        <View>
            <TextInput
                onChangeText={setLat}
                placeholder="Latitude"
                value={lat}
            />
            <TextInput
                onChangeText={setLong}
                placeholder="Longitude"
                value={long}
            />
            <TextInput
                onChangeText={setRadius}
                placeholder="Radius"
                value={radius}
            />
            <Button 
                title="Add Geofence" 
                onPress = {()=>{
                    addGeofence({
                        jobId: selectedJob,
                        lat: Number(lat),
                        long: Number(long),
                        radius: Number(radius)
                    })
                    setLat("")
                    setLong("")
                    setRadius("")
                }}/>
        </View>
    )

}



export default AddGeofence