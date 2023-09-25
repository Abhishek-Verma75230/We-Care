import mongoose from 'mongoose'

    const Connection=async ()=>{
    // const URL=`mongodb://abhishek75230:sam@1234@ac-qzzu8ib-shard-00-00.qnloutp.mongodb.net:27017,ac-qzzu8ib-shard-00-01.qnloutp.mongodb.net:27017,ac-qzzu8ib-shard-00-02.qnloutp.mongodb.net:27017/?ssl=true&replicaSet=atlas-rq0ulm-shard-0&authSource=admin&retryWrites=true&w=majority`
    const URL=`mongodb://abhishek:sam1234@ac-0vlangm-shard-00-00.7iddg4r.mongodb.net:27017,ac-0vlangm-shard-00-01.7iddg4r.mongodb.net:27017,ac-0vlangm-shard-00-02.7iddg4r.mongodb.net:27017/?ssl=true&replicaSet=atlas-517g56-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log("database connected successfully to server ..");
    } catch (error) {
        console.log("error while connecting database");
    }
}

export default Connection;