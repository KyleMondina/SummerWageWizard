import Realm from 'realm'
import realmConfig from './realmConfig'

const addJobToRealm = async (jobAdded)=>{
    const realm = await Realm.open(realmConfig)
    realm.write(()=>{
        realm.create("Job",{
            _id:realm.objects("Job").length+1,
            employer:jobAdded.employer,
            client:jobAdded.client
        })
    })
    realm.close()
}

const clearJobsFromRealm = async ()=>{
    const realm = await Realm.open(realmConfig)
    realm.write(()=>{
        realm.delete(realm.objects("Job"))
    })
    realm.close()
}

export {addJobToRealm,clearJobsFromRealm}