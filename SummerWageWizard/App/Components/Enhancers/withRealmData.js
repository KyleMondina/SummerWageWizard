import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import Realm from 'realm'
import realmConfig from '../../Realm/realmConfig';
import { useSelector } from 'react-redux';

const withRealmData = (Component,realmType,selector) => ({...props}) =>{

    const realmSelector = useSelector(selector)
    const realmRef = useRef(null);
    const [data,setData]  = useState(null)

    useEffect(()=>{
        Realm.open(realmConfig).then((realmResult)=>{
            realmRef.current = realmResult
            const realmData = realmRef.current
            setData(realmData.objects(realmType).map(object=>object))
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
    },[realmSelector])



    return(
        <Component data={data} {...props}/>
    )
}

export default withRealmData