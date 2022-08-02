const SchemaVersion = 5

const JobSchema = {
    name: "Job",
    properties: {
        _id:"int",
        employer:"string",
        client:"string",
    },
    primaryKey: '_id'
}

const GeofenceSchema = {
    name: "Geofence",
    properties: {
        _id: 'int',
        jobId: 'int',
        lat: 'int',
        long: 'int',
        radius: 'int'
    },
    primaryKey: "_id"
}

const realmConfig = {
    schema:[JobSchema, GeofenceSchema],
    schemaVersion:SchemaVersion
}

export default realmConfig



