const express = require('express')
const router = express.Router()
const {getAllTasks,createTask,getTask,deleteTask,updateTask} = require('../controller/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


// otra forma de crear un route 
// router.get('/',(req,res) =>{
//     res.send('all items')
// })

module.exports = router