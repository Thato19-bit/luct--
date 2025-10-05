export default async function handler(req, res) {
  // Demo: creates a mock course
  res.status(200).json({ success: true, course: "NewCourse", message: "Course created!" });
}