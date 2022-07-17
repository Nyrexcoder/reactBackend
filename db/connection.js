const mongoose = require('mongoose');
const connectDB = async (DATABASE_URL)=> {
    try{
        const DB_OPSTIONS = {
            dbName: 'nyrexdeveloper',
        }
        await mongoose.connect(DATABASE_URL,DB_OPSTIONS);
        console.log('connected successfully..');
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB