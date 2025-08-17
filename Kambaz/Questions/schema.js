import mongoose from "mongoose"; 

const questionSchema = new mongoose.Schema(
  {
    _id: String,
    quiz: { type: String, ref: "QuizModel" },
    
    title: { type: String, required: true },
    points: { type: Number, default: 1, required: true },
    question: { type: String, required: true },
    question_type: {
      type: String,
      enum: ['multiple_choice', 'true_false', 'fill_in_blank'],
      required: true
    },
    order: { type: Number, required: true },
    
    choices: [{
      text: String,
      is_correct: { type: Boolean, default: false }
    }],
    
    correct_answer: { type: Boolean },
    
    possible_answers: [String],
    case_sensitive: { type: Boolean, default: false }
  },
  {
    collection: "questions",
    timestamps: true
  }
);

export default questionSchema; 