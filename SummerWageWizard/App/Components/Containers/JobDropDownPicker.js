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

const _JobDropDownPicker = (props)=>{
    const jobsFromRealm = props.data
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [pickerItems,setPickerItems] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        if (jobsFromRealm){
            console.log("code called from JobDropDownPicker line 18:")
            console.log(jobsFromRealm)
            setPickerItems(jobsFromRealm.map((job)=>{
                return{
                    label:job.employer,
                    value:job._id
                }
            }))
        }
    },[jobsFromRealm])

    return(
        
        <DropDownPicker
            placeholder="Select a Job"
            itemSeparator={true}
            open={open}
            value={value}
            items={pickerItems}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setPickerItems}
            onSelectItem={(item) => {
                dispatch(changeSelectedJob(item.value))
            }}
            />
        
    )
}

const JobDropDownPicker = withRealmData(_JobDropDownPicker,"Job",selectJobListUpdated)
export default JobDropDownPicker



