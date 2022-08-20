import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import Realm from 'realm'
import realmConfig from '../../Realm/realmConfig';
import { useSelector } from 'react-redux';

const withRealmData = (Component,realmType,selectors,filter,filterValue) => ({...props}) =>{

    const realmSelectors = selectors.map(selector=>useSelector(selector))
    const realmRef = useRef(null);
    const [data,setData]  = useState(null)

    useEffect(()=>{
        Realm.open(realmConfig).then((realmResult)=>{
            realmRef.current = realmResult
            const realmData = realmRef.current
            if ((filter!==null)&&(filterValue!==null)){
                console.log("-----code called from withRealmData  line 18-----")
                console.log("filter and filter value provided")
                setData(realmData.objects(realmType).filtered(`${filter}==${filterValue}`).map(object=>JSON.parse(JSON.stringify(object))))
                
            }
            else{
                console.log("-----code called from withRealmData  line 24-----")
                console.log("filter and filter value not provided")
                setData(realmData.objects(realmType).map(object=>JSON.parse(JSON.stringify(object))))
            }
        })

        return(()=>{
            const realmSession = realmRef.current
            if(realmSession){
                console.log("-----code called from withRealmData line 36-----")
                console.log("useEffect clean up function ran")
                realmSession.close()
                realmRef.current = null
            }
            console.log(data)
        })

    },realmSelectors)

    return(
        <Component data={data} {...props}/>
    )
}

export default withRealmData