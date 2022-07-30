import * as React from 'react'
import { useSelector } from 'react-redux';
import { selectIsTracking } from '../../Redux/features/trackSlice';

import SelectedJobText from './SelectedJobText';
import withRealmJobData from '../Enhancers/withRealmJobData';
import JobDropDownPicker from './JobDropDownPicker';

/*import withRealmJobData from '../Components/Enhancers/withRealmJobData'
import JobDropDownPicker from '../Components/Containers/JobDropDownPicker'
*/

const JobPickerWithJobRealms = withRealmJobData(JobDropDownPicker)

const JobSelectionMenu = ()=>{
    const isTracking = useSelector(selectIsTracking)
    if(isTracking){
        return(
            <SelectedJobText/>
        )
    }
    return(
        <JobPickerWithJobRealms/>
    )
}


export default JobSelectionMenu