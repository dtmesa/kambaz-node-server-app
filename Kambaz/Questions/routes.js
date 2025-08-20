import * as questionsDao from "./dao.js"; 

export default function QuestionRoutes(app) { 
  app.put("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await questionsDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });


  app.delete("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const status = await questionsDao.deleteQuestion(questionId);
    res.send(status);
  });
} 