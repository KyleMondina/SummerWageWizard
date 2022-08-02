import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    updateJobList,
} from '../../../Redux/features/jobSlice'
  
import { useState, useEffect } from 'react';
import { addToRealm } from '../../../Realm/dbCRUD';

import { View, Button, TextInput } from 'react-native';

const AddJob = ()=>{

    const dispatch = useDispatch()
    
    const [jobAdded,addJob] = useState(null)
    const [jobEmployer,setJobEmployer] = useState(' ')
    const [jobClient,setJobClient] = useState(' ')

    useEffect(()=>{
        if (jobAdded !== null){
            addToRealm("Job",jobAdded).then(()=>{
                dispatch(updateJobList())
            })
        }
    },[jobAdded])

    return(
        <View>
            <TextInput
                onChangeText={setJobEmployer}
                placeholder="Employer"
                value={jobEmployer}
            />
            <TextInput
                onChangeText={setJobClient}
                placeholder="Client"
                value={jobClient}
            />
            <Button 
                title="Add Job" 
                onPress = {()=>{
                    addJob({
                        employer:jobEmployer,
                        client:jobClient
                    })
                    setJobEmployer("")
                    setJobClient("")
                }}/>
        </View>
    )

}

export default AddJob



