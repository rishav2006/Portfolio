const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    highlights: [{
        type: Object
    }],
    description: {
        type: String,
        required: true
    },
    photos: [{
        type: String,
        required: true
    }],
    faqs: [{
        type: Object,
        required: true
    }],
    techStackFront: {
        type: String,
        required: true
    },
    techStackBack: {
        type: String,
        required: true
    },
    techStackDB: {
        type: String,
        required: true
    },
    techStackDeploy: {
        type: String,
        required: true
    }
});

module.exports = mongoose.Schema('project', projectSchema);