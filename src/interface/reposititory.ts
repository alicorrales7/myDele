interface Repository{
    find():Promise<any>;
    findById(id:string):Promise<any>;
    insert(t:JSON):Promise<any>;
    update(id:string,t:JSON):Promise<any>;
    delete(id:string):Promise<any>;

}