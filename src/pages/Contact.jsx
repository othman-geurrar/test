import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submittedData, setSubmittedData] = useState([]);
    console.log(submittedData);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmittedData((prevData) => [...prevData, formData]);
        toast.success('Form submited successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      };
  return (
    <div className="mx-auto max-w-2xl py-12 md:py-24">
      <div className="space-y-4 text-center">
        <Typography variant="h3" component="h1" >
          Get in Touch
        </Typography>
       <p> If you have any problems please send us a message</p>
      </div>
      <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            placeholder="Your name"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            placeholder="Your email"
            onChange={handleChange}
          />
        </div>
        <TextField
          fullWidth
          id="message"
          label="Message"
          variant="outlined"
          placeholder="Your message"
          multiline
          rows={4}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" className="w-full sm:w-auto">
          Submit
        </Button>
      </form>
      <p className='mt-12 text-center '>Back to <Link to="/" className='text-blue-500'>Home</Link> Page</p>
    </div>
  );
}
