const blogModel = require("../models/blog.js") 

class blogsController {
    static getAllDoc  = async(req,res) => {
        try{
            const result = await blogModel.find()
            res.send(result)
        } catch(error){
            console.log(error)
        }
    }
}


module.exports = blogsController