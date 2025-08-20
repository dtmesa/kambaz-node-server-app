import { v4 as uuidv4 } from 'uuid';
import model from "./model.js"; 

export function findSubmissionsForUserAndQuiz(userId, quizId) { 
  return model.find({ user: userId, quiz: quizId })
} 

export function updateSubmission(submissionId, submissionUpdates) { 
 return model.updateOne({ _id: submissionId }, submissionUpdates); 
} 

export function createSubmission(submission) { 
 const newSubmission = { ...submission, _id: uuidv4() }; 
 return model.create(newSubmission); 
} 

export function deleteSubmission(submissionId) { 
 return model.deleteOne({ _id: submissionId }); 
}