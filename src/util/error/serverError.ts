export class ServerErrorTry extends Error {
    constructor( ){
        super()
        this.message = "Problem thit Express connection "
    }
}