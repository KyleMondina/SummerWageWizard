const SchemaVersion = 3

const JobSchema = {
    name: "Job",
    properties: {
        _id:"int",
        employer:"string",
        client:"string",
    },
    primaryKey: '_id'
}

const realmConfig = {
    schema:[JobSchema],
    schemaVersion:SchemaVersion
}

export default realmConfig



