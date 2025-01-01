import axios from "axios";
import Cookies from "js-cookie";

const AddCourses = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const badge_text = form.badge_text.value;
    const badge_color = form.badge_color.value;
    const instructor_name = form.instructor_name.value;

    const course = {
      title,
      description,
      badge_text,
      badge_color,
      instructor_name,
    };
    console.log("Course Data:", course);

    // Retrieve the token from cookies
    const token = Cookies.get("token");
    console.log("Token:", token);

    if (!token) {
      console.error("No auth token found in cookies!");
      return;
    }

    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        course,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Course added successfully:", response.data);
    } catch (error) {
      console.error("Error adding course:", error.response?.data || error.message);
    }
  };

  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-center items-center p-4">
      <div className="p-6 shadow-lg shadow-[#D3373C33] rounded-xl lg:w-[50%] md:w-[50%] w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-center font-semibold text-[#444444] text-[40px] pb-4">
            Add New Course
          </h3>
          <div className="space-y-2">
            <label className="text-base font-semibold text-[#444444]">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
              placeholder="Enter course title"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold text-[#444444]">
              Description
            </label>
            <textarea
              name="description"
              className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
              placeholder="Enter course description"
              required
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold text-[#444444]">
              Badge Text
            </label>
            <input
              type="text"
              name="badge_text"
              className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
              placeholder="Enter badge text"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold text-[#444444]">
              Badge Color
            </label>
            <input
              type="text"
              name="badge_color"
              className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
              placeholder="Enter badge color"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold text-[#444444]">
              Instructor Name
            </label>
            <input
              type="text"
              name="instructor_name"
              className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
              placeholder="Enter instructor name"
              required
            />
          </div>
          <div className="w-full mt-4">
            <button
              type="submit"
              className="relative w-full inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group"
            >
              <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                Add Course
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;
