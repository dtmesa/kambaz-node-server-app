import * as quizzesDao from "./dao.js"; 
import * as questionsDao from "../Questions/dao.js";
import * as submissionsDao from "../Submissions/dao.js";

export default function QuizRoutes(app) { 
  app.put("/api/quizzes/:quizId", async (req, res) => { 
    const { quizId } = req.params; 
    const quizUpdates = req.body; 
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates); 
    res.send(status); 
  }); 


 app.delete("/api/quizzes/:quizId", async (req, res) => { 
   const { quizId } = req.params; 
   const status = await quizzesDao.deleteQuiz(quizId); 
   res.send(status); 
});

  app.get("/api/quizzes/:quizId/questions", async (req, res) => { 
    const { quizId } = req.params; 
    const questions = await questionsDao.findQuestionsForQuiz(quizId); 
    res.json(questions); 
  }); 

  app.get("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const question = await questionsDao.findQuestionById(questionId);
    res.json(question);
  });

  app.post("/api/quizzes/:quizId/questions", async (req, res) => { 
    const { quizId } = req.params; 
    const question = { 
      ...req.body, 
      quiz: quizId, 
    }; 
    const newQuestion = await questionsDao.createQuestion(question); 
    res.send(newQuestion); 
  });

app.get("/api/quizzes/:quizId/submissions", async (req, res) => { 
    const { quizId } = req.params; 
    const userId = req.query.userId;
    const submissions = await submissionsDao.findSubmissionsForUserAndQuiz(userId, quizId); 
    res.json(submissions); 
  });

  app.get("/api/quizzes/:quizId/submissions/:submissionId", async (req, res) => {
    const { submissionId } = req.params;
    const submission = await submissionsDao.findSubmissionById(submissionId);
    res.json(submission);
  });

app.post("/api/quizzes/:quizId/submissions", async (req, res) => { 
  const { quizId } = req.params; 
  const submission = { 
    ...req.body, 
    quiz: quizId, 
  }; 
  const newSubmission = await submissionsDao.createSubmission(submission); 
  res.send(newSubmission); 
});
} 