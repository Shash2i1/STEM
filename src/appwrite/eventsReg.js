import { Databases, ID,Client , Query} from "appwrite";
import conf from "../ConfigAppwrite/Conf";

export class eventService {
    client = new Client();
    database;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.database = new Databases(this.client);
    }

    // Register the participant

    async registerParticipant({StudentName, CollegeName, MobileNumber, StemId}){
        try{
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEventsRegCollectionId,
                ID.unique(),
                {
                    StudentName,
                    CollegeName,
                    MobileNumber,
                    StemId
                }
            )
        }
        catch(error){
            throw error
        }
    }

    //Fetch all data
    async fetchAllData(){
        const allDocuments = [];
    let offset = 0;
    const limit = 25; // Maximum limit per request
    let total = 0;

    try {
        do {
            const response = await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteEventsRegCollectionId,
                [ // Queries
                    Query.limit(limit),
                    Query.offset(offset)
                ]
            );

            allDocuments.push(...response.documents);
            total = response.total; // Total number of documents in the collection
            offset += limit;
        } while (offset < total);

        return allDocuments; // Array of all documents
    } catch (error) {
        console.error("Error fetching all documents:", error);
        throw error;
    }
    }
}

const service = new eventService();
export default service;