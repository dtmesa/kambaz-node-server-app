import mongoose from "mongoose"; 

const quizSchema = new mongoose.Schema( 
 { 
    _id: String, 
    course: { type: String, ref: "CourseModel" }, 
    user:   { type: String, ref: "UserModel"   }, 
    questions: [{ type: String, ref: "QuestionModel" }],

    title: String, 
    description: String, 

    quiz_type: {
      type: String,
      enum: ['graded_quiz', 'practice_quiz', 'graded_survey', 'ungraded_survey'],
      default: 'graded_quiz'
    },

    points: { type: Number, default: 0 },

    assignment_group: {
      type: String,
      enum: ['quizzes', 'exams', 'assignments', 'project'],
      default: 'quizzes'
    },

    published: { type: Boolean, default: false },

    shuffle_answers: { type: Boolean, default: true },
    time_limit: { type: Number, default: 20 },
    multiple_attempts: { type: Boolean, default: false },

   show_correct_answers: {
      type: String,
      enum: ['immediately', 'after_due_date', 'never', 'after_last_attempt'],
      default: 'after_due_date'
    },
    
    access_code: { type: String, default: '' },
    one_question_at_time: { type: Boolean, default: true },
    webcam_required: { type: Boolean, default: false },
    lock_questions_after_answering: { type: Boolean, default: false },

    due_date: Date, 
    available_date: Date, 
    available_until: Date, 
 }, 
 { collection: "quizzes" } 
); 

export default quizSchema; 