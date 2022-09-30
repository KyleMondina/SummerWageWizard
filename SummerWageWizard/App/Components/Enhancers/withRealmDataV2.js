import * as React from 'react'
import { useState, useEffect, useRef } from 'react';
import Realm from 'realm'
import realmConfig from '../../Realm/realmConfig';
import { useSelector } from 'react-redux';

const withRealmDataV2 = (Component,realmType,selectors, filter=null) => ({...props}) =>{

    const realmSelectors = selectors.map(selector=>useSelector(selector))
    const [data,setData]  = useState(null)
    useEffect(()=>{

        const fetchData = async () =>{
            const realm = await Realm.open(realmConfig)
            let data = null
            if (filter===null){
                data = realm.objects(realmType).map(object=>JSON.parse(JSON.stringify(object)))
            }else{
                data = realm.objects(realmType).filtered(`${filter.filter}==${filter.filterValue}`).map(object=>JSON.parse(JSON.stringify(object)))
            }
            setData(data)
            realm.close()
        }
        fetchData()

    },realmSelectors)

    return(
        <Component data={data} {...props}/>
    )
}

export default withRealmDataV2