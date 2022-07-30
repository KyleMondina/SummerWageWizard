import * as React from 'react'
import { View, Text } from 'react-native'

import Timer from '../Components/Containers/Timer'
import TimerControls from '../Components/Utilities/TestControls/TimerControls'
import SelectedJobControls from '../Components/Utilities/TestControls/SelectedJobControls'

import AddJob from '../Components/Utilities/RealmUtilities/AddJob'
import ClearJob from '../Components/Utilities/RealmUtilities/ClearJobs'
import JobSelectionMenu from '../Components/Containers/JobSelectionMenu'

import SelectedJobText from '../Components/Containers/SelectedJobText'
import Permission from '../Components/Containers/Permissions'
const TrackScreen = () =>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Track Screen</Text>
            <Permission/>
        </View>
    )
}

export default TrackScreen