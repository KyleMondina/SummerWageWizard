import * as React from 'react'
import { useDispatch } from 'react-redux';
import {
    changeSelectedJob,
  } from '../../Redux/features/jobSlice';
import { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { selectJobListUpdated, selectSelectedJob } from '../../Redux/features/jobSlice'
import { selectGeofencesUpdated } from '../../Redux/features/geofenceSlice'


//enhancers
import withRealmData from '../Enhancers/withRealmData';
import withRealmDataV2 from '../Enhancers/withRealmDataV2';


const _TestNewRealmData = (props)=>{
    const data = props.data
    useEffect(()=>{
        console.log("00000000000000000000")
        console.log(JSON.stringify(data))
        console.log("00000000000000000000")
    },[data])

}

const TestNewRealmData = withRealmDataV2(_TestNewRealmData,"Geofence",[selectJobListUpdated,selectGeofencesUpdated],{filter:'jobId',filterValue:3})

export default TestNewRealmData


