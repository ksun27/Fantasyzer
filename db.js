// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    // username provided by authentication plugin
    // password hash provided by authentication plugin
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});

const Player = new mongoose.Schema({
    name: { type: String, required: true },
    Team: { type: String, min: 1, required: true },
    Age: { type: Number, required: true }
}, {
    _id: true
});

const FantasyTeam = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    createdAt: { type: Date, required: true },
    stats: [Player]
});