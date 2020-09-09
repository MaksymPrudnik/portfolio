import dbConnect from '../../utils/dbConnect';
import ProjectModel from '../../models/project.model';

dbConnect();

export default async (req, res) => {
    try {
        const projects = await ProjectModel.find({});
        res.status(200).json({success: true, data: projects});
    } catch (error) {
        res.status(400).json({success: false, error})
    }
}