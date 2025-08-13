import mongoose from "mongoose"; 

const assignmentSchema = new mongoose.Schema( 
 { 
    _id: String, 
    course: { type: String, ref: "CourseModel" }, 
    user:   { type: String, ref: "UserModel"   }, 
    title: String, 
    description: String, 
    points: Number, 
    due_date: Date, 
    available_date: Date, 
    available_until: Date, 
 }, 
 { collection: "assignments" } 
); 

export default assignmentSchema; 