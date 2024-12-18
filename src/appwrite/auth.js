import {Client, Databases, ID, Account, Query} from 'appwrite'
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
async retrieveAllData() {
  try {
    let documents = [];
    let page = 0;
    const limit = 100; // Maximum allowed limit per request

    while (true) {
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.limit(limit), Query.offset(page * limit)]
      );
      documents = [...documents, ...response.documents];

      if (response.documents.length < limit) break; // Stop when fewer than `limit` documents are returned
      page++;
    }

    return { documents };
  } catch (error) {
    console.error("Error fetching all data:", error);
    return false;
  }
}


}
const service = new appwriteService();
export default service;