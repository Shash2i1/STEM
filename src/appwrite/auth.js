import {Client, Databases, ID, Account} from 'appwrite'
import conf from '../ConfigAppwrite/Conf'

export class appwriteService {
    client = new Client();
    account;
    database;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client);
        this.database = new Databases(this.client);
    }

// Register Students
async registerStudents ({fullName, email, password}) {
    try{
        
        return await this.account.create(ID.unique(), email, password, fullName)
    
    }
    catch(error){
        throw error;
    }
}

//Students Login
async login({email, password}){
    try{
        return await this.account.createEmailPasswordSession(email, password)
    }
    catch(error){
        throw error;
    }
}

//get Current user
async getCurrentUser (){
    try{
        return await this.account.get();
    }
    catch(error){
        console.log("appwriteService::getCurrentUser",error);
    }
    return null;
}

//logout
async logout(){
    try{
        await this.account.deleteSessions();
    }
    catch(error){
        console.log("appwrite service::logout",error);
    }
}

//Delet User
async deleteUser(userId){
    try{
        await this.account.deleteUser(userId);
    }
    catch(error){
        console.log("appwriteService::deleteUser",error)
    }
}

//add Participants Info
async addParticipantInfo(stemID,fullName, collegeName, events, email, dish, mobileNumber){
    try{
        return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            stemID,
            {
                fullName,
                collegeName,
                events,
                email,
                dish,
                mobileNumber,
            }
        )
    }
    catch(error){
        console.log("appwriteService::addParticipantsInfo",error);
    }
}

//Retrieve data of participant
async retrieveData(stemID){
    try{
        return await this.database.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            stemID
        )
    }
    catch(error){
        console.log(error);
    }
}

// Retrieve all participants data
async retrieveAllData(){
    try{
        return this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
        )
    }
    catch(error){
        console.log(error)
        return false;
    }
}

}
const service = new appwriteService();
export default service;