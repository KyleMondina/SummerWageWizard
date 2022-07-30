import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import Realm from 'realm'
import realmConfig from '../../Realm/realmConfig';
import { selectJobListUpdated } from '../../Redux/features/jobSlice';
import { useSelector } from 'react-redux';

const withRealmJobData = Component => ({...props}) =>{

    const jobListUpdated = useSelector(selectJobListUpdated)
    const realmRef = useRef(null);
    const [data,setData]  = useState(null)

    useEffect(()=>{
        Realm.open(realmConfig).then((realmResult)=>{
            realmRef.current = realmResult
            const realmData = realmRef.current
            setData(realmData.objects("Job").map(object=>object))
        })
        //clean side effects
        return ()=>{
            const realmSession = realmRef.current
            if(realmSession){
                console.log("code called from withRealmData line 24:")
                console.log("useEffect clean up function ran")
                realmSession.close()
                realmRef.current = null
            }
        }
    },[jobListUpdated])



    return(
        <Component data={data} {...props}/>
    )
}

export default withRealmJobData

