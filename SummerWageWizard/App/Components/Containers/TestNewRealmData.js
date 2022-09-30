import * as React from 'react'
import { useDispatch } from 'react-redux';
import {
    changeSelectedJob,
  } from '../../Redux/features/jobSlice';
import { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

//enhancers
import { selectJobListUpdated } from '../../Redux/features/jobSlice';
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

const TestNewRealmData = withRealmDataV2(_TestNewRealmData,"Job",[selectJobListUpdated])

export default TestNewRealmData