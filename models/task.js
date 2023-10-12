const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'must provide name'],
        trim: true, // para que no se consideren los espacios como "     alexis     ". 
        maxlength:[20,'name can not be more than 20 characters']
    },
    comepleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task',TaskSchema)