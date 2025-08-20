import mongoose from "mongoose"; 

const submissionSchema = new mongoose.Schema(
  {
    _id: String,
    quiz: { type: String, ref: "QuizModel", required: true },
    user: { type: String, ref: "UserModel", required: true },
    
    attempt_number: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ['in_progress', 'submitted', 'auto_submitted'],
      default: 'in_progress'
    },
    
    total_score: { type: Number, default: 0 },
    max_possible_score: { type: Number, required: true },
    percentage: { type: Number, default: 0 },
    
    started_at: { type: Date, default: Date.now },
    submitted_at: Date,
    time_taken: Number,
    
    answers: [{
      question: { type: String, ref: "QuestionModel", required: true },
      
      selected_choice: String,
      boolean_answer: Boolean,
      text_answer: String,
      
      points_earned: { type: Number, default: 0 },
      max_points: { type: Number, required: true },
      is_correct: Boolean
    }]
  },
  {
    collection: "quiz_submissions"} 
); 

export default submissionSchema; 