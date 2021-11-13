const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const cors = require('cors')



router.get('/', cors(), async (req, res) => {
    const tasks = await Task.find();    
    res.json(tasks);
})
router.get('/:id', cors(), async (req, res) => {    
    const task = await Task.findById(req.params.id);
    res.json(task);
})
    
router.post('/', cors(), async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'Tarea guardada' })
});

router.put('/:id', cors(), async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json({ status: 'Tarea actualizada' })
})

router.delete('/:id', cors(), async (req, res) => {    
    await Task.findByIdAndRemove(req.params.id)
    res.json({ status: 'Tarea eliminada' })
})


module.exports = router;