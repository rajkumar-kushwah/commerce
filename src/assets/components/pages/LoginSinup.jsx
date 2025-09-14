import React, { useState ,useEffect } from 'react'

function LoginSinup() {
 const [FormData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
  });

  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data
   const [imagePreview, setImagePreview] = useState(null); // State to store image preview URL

const handleChange=(e)=>{
  const {name, value} =e.target;
  setFormData((prevData) =>({
    ...prevData,
    [name]:value,
  }));
};

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
const handleSubmit=(e)=>{
    e.preventDefault();
     // Check if any field is empty
    if (!FormData.name || !FormData.email || !FormData.password || !FormData.image) {
     alert('Please fill in all fields.');
      return;
    };
    // console.log(' Form Data submit:',FormData)
     setSubmittedData(FormData);
     setFormData({
      name: '',
      email: '',
      password: '',
      image: null,
    });
      // Create an object URL for the image preview
    const imagePreviewUrl = URL.createObjectURL(FormData.image);
    setSubmittedData({ ...FormData, imagePreviewUrl });
    setFormData({
      name: '',
      email: '',
      password: '',
      image: null,
    });
    setImagePreview(null); // Clear image preview after form submission
}


useEffect(() => {
    if (FormData.image) {
      const objectUrl = URL.createObjectURL(FormData.image);
      setImagePreview(objectUrl);
      // Cleanup function to revoke the object URL when the component unmounts or image changes
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [FormData.image]);
  return (
    <div className=''>


<form action="" onSubmit={handleSubmit} className="w-full  max-w-md mx-auto justify-center items-center bg-[#ededed] p-6 rounded-2xl space-y-4 shadow-lg">
  <div>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name='name'
      value={FormData.name}
      onChange={handleChange}
      placeholder="Enter Name"
      className="border rounded-2xl p-2 w-full "
    />
  </div>

  <div>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name='email'
      value={FormData.email}
      onChange={handleChange}
      placeholder="Enter Email"
      className="border rounded-2xl p-2 w-full"
    />
  </div>
   <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
             accept="image/*"
            onChange={handleFileChange}
            className="border rounded-2xl p-2 w-full"
          />
          
        </div>

  <div>
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name='password'
       value={FormData.password}
        onChange={handleChange}
      placeholder="Enter Password"
      className="border rounded-2xl p-2 w-full"
    />
  </div>

  <button type="submit" className="bg-red-500 text-white p-2 w-full rounded-2xl">
    Submit
  </button>
  <div className='flex justify-center items-center '  >
  <p>
    Already have an account ? <span className='text-red-500 cursor-pointer '>login hare</span>
  </p>
  </div>
  <div className='flex items-center  space-x-2 p-2 bg-[#ededed] rounded-2xl max-w-xs mx-auto '>
    <input type='checkbox' name="" id="" />
    <p className='font-light'>By continuing, i agree  to the terms of use & 
       privacy policy.
    </p>
  </div>
</form>
{/* Display submitted data if available */}

      {submittedData &&  (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-lg font-semibold">Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Image:</strong> <img src={submittedData.imagePreviewUrl} alt="Submitted Preview" className="w-100 h-100 object-cover rounded-full" /></p>
        </div>
      )}
    </div>
  )
}

export default LoginSinup