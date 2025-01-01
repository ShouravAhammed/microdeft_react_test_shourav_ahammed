import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  // Retrieve the token from cookies
  const token = Cookies.get("token");
  console.log(token);

  if (!token) {
    console.error("No auth token found in cookies!");
    // return;
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://react-interview.crd4lc.easypanel.host/api/course",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data.data);
        setCourses(response.data.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-[#444] mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {courses.map((course) => (
          <div
            key={course.id}
            className=" bg-white rounded-lg shadow shadow-[#D3373C33] hover:shadow-lg hover:shadow-[#D3373C33] transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 transform scale-100 hover:scale-105"
              />
            </div>

            <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-[#D3373C] transition-colors duration-200">
              {course.title}
            </h2>
            <p className="text-gray-600 my-2">{course.description}</p>
            <span
              className="inline-block px-4 py-2 text-sm font-medium rounded-full text-white"
              style={{ backgroundColor: course.badge_color }}
            >
              {course.badge_text}
            </span>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Instructor: {course.instructor_name}</p>
              <p className="text-xs text-gray-400">Created At: {course.created_at}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Author: {course.author.name} ({course.author.email})
              </p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
