export class DataBaseError extends Error{
    constructor( ){
    super()
    this.message = "Problem thit connection DB, verify stringConnection or MongoServer"
}
    
}