import React from "react";
import { View } from "react-native";

import Timer from "./Timer";
import TimerControls from "../Utilities/TestControls/TimerControls";
import SelectedJobControls from "../Utilities/TestControls/SelectedJobControls";
import AddJob from "../Utilities/RealmUtilities/AddJob";
import ClearJob from "../Utilities/RealmUtilities/ClearJobs";
import JobSelectionMenu from "./JobSelectionMenu";
import SelectedJobText from "./SelectedJobText";

const Canvas = ()=>{
    return(
        <View>
            <JobSelectionMenu/>
            <AddJob/>
            <ClearJob/>
        </View>
    )
}

export default Canvas



