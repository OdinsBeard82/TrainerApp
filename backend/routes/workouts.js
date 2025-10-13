const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');
const authMiddleware = require('../middleware/authMiddleware');

// Get all workouts for the logged-in user
router.get('/', authMiddleware, async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user._id });
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new workout
router.post('/', authMiddleware, async (req, res) => {
    const { name, exercises } = req.body;
    try {
        const workout = new Workout({ user: req.user._id, name, exercises });
        await workout.save();
        res.status(201).json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a workout
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const workout = await Workout.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            req.body,
            { new: true }
        );
        if (!workout) return res.status(404).json({ message: 'Workout not found' });
        res.json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a workout
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const workout = await Workout.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!workout) return res.status(404).json({ message: 'Workout not found' });
        res.json({ message: 'Workout deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
