import * as submissionsDao from "./dao.js";

export default function QuizRoutes(app) { 
  app.put("/api/quizzes/:quizId/submissions/:submissionId", async (req, res) => {
    const { submissionId } = req.params;
    const submissionUpdates = req.body;
    const status = await submissionsDao.updateSubmission(submissionId, submissionUpdates);
    res.send(status);
  });


  app.delete("/api/quizzes/:quizId/submissions/:submissionId", async (req, res) => {
    const { submissionId } = req.params;
    const status = await submissionsDao.deleteSubmission(submissionId);
    res.send(status);
  });
} 