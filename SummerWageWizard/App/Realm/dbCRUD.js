import Realm from 'realm'
import realmConfig from './realmConfig'

const addToRealm = async(type,object)=>{
    const realm = await Realm.open(realmConfig)
    realm.write(()=>{
        realm.create(type,Object.assign(
            {},
            {_id:realm.objects(type).length+1},
            object
        ))
    })
    realm.close()
}

const clearFromRealm = async(type,object)=>{
    const realm = await Realm.open(realmConfig)
    realm.write(()=>{
        realm.delete(realm.objects(type))
    })
    realm.close()
}

export {addToRealm,clearFromRealm}
