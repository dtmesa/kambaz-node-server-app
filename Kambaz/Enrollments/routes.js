import * as enrollmentsDao from "./dao.js"; 

export default function EnrollmentRoutes(app) { 
app.get("/api/users/:userId/enrollments", (req, res) => {
  const { userId } = req.params;
  const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
  res.json(enrollments);
})

 app.delete("/api/enrollments/:enrollmentId", async (req, res) => { 
   const { enrollmentId } = req.params; 
   const status = await enrollmentsDao.deleteEnrollment(enrollmentId); 
   res.send(status); 
});} 