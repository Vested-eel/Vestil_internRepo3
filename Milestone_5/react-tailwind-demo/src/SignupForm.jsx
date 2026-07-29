// ## Handling Forms with Formik

import { useFormik } from "formik";
import * as Yup from "yup";

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      alert(`Submitted: ${values.name}, ${values.email}`);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-4 p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="border rounded px-3 py-2 w-full"
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        ) : null}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border rounded px-3 py-2 w-full"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
