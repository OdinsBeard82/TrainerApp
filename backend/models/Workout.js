const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    exercises: [{ name: String, sets: Number, reps: Number }],
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Workout', workoutSchema);
