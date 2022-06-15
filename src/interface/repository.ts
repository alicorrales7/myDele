export interface Repository{
    find():Promise<any>;
    findById(userId:string):Promise<any>;
    insert(t:JSON):Promise<any>;
    update(userId:string,t:JSON):Promise<any>;
    delete(userId:string):Promise<any>;

}