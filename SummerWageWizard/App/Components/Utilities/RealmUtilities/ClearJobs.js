import * as React from 'react'
import { useDispatch } from 'react-redux';
import {
    updateJobList,
} from '../../../Redux/features/jobSlice'
import { useState, useEffect } from 'react';
import {clearJobsFromRealm} from '../../../Realm/realmJobUtilities';

import {Button } from 'react-native';

const ClearJob = ()=>{
    const dispatch = useDispatch()
    const [jobCleared,clearJob] = useState(0)

    useEffect(()=>{
        if(jobCleared>0){
            clearJobsFromRealm().then(()=>{
                dispatch(updateJobList())
            })
        }
    },[jobCleared])

    return(
        <Button title="clear all jobs" onPress = {()=>{clearJob(jobCleared+1)}}></Button>
    )
}

export default ClearJob
