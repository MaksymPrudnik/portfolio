import mongoose from 'mongoose'; 

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Project must have a title'],
        unique: true,
        trim: true,
        maxlength: [50, 'Title can not contain more than 50 characters']
    },
    description: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    pathToImg: {
        type: [String],
        required: true
    },
    links: [String]
})

module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema);