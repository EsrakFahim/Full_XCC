import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import usePostData from '../../Api-Route/usePostDataToDB';

const ContactForm = () => {
    const [clientIP, setClientIP] = useState('');

    const { mutate, isLoading, isError, isSuccess } = usePostData(
        () => alert('Message sent successfully!'),
        (error) => alert(`Error: ${error.message}`),
        'client'
    );

    // Initialize react-hook-form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Fetch client's IP address on mount
    useEffect(() => {
        const fetchIP = async () => {
            try {
                const res = await axios.get("https://api.ipify.org?format=json");
                setClientIP(res.data.ip); // Set the client's IP
            } catch (error) {
                console.error("Error fetching client IP:", error);
            }
        };

        fetchIP();
    }, []);

    // Handle form submission
    const onSubmit = useCallback(
        (data) => {
            // Add client's IP to the form data
            const formData = { ...data, clientIP };

            // Call the mutation function to post data to the server
            mutate(formData, {
                onSuccess: () => reset(), // Reset form on success
            });

            // console.log("Submitted Data:", formData);
        },
        [clientIP, mutate, reset]
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="row justify-content-center">
                {/* Name Field */}
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="First Name"
                            {...register('firstName', { required: 'Please enter your First Name' })}
                        />
                        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                    </div>
                </div>

                {/* LastName Field */}
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register('lastName', { required: 'Please enter your Last Name' })}
                        />
                        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
                    </div>
                </div>

                {/* Email Field */}
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register('email', {
                                required: 'Please enter your email',
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Please enter a valid email address',
                                },
                            })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Service Dropdown */}
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <select {...register('service', { required: 'Please select a service' })}>
                            <option value="">Select a Service</option>
                            <option value="Service">Service</option>
                            <option value="Architecture">Architecture</option>
                            <option value="The Rehearsal Dinner">The Rehearsal Dinner</option>
                            <option value="The Afterparty">The Afterparty</option>
                            <option value="Videographers">Videographers</option>
                            <option value="Perfect Cake">Perfect Cake</option>
                            <option value="All Of The Above">All Of The Above</option>
                            <option value="Not Specify">Not Specify</option>
                        </select>
                        {errors.service && <p className="error">{errors.service.message}</p>}
                    </div>
                </div>

                {/* Message Field */}
                <div className="col-lg-12">
                    <div className="form-field">
                        <textarea
                            placeholder="Message"
                            {...register('message', { required: 'Please enter your message' })}
                        />
                        {errors.message && <p className="error">{errors.message.message}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="col-lg-12">
                    <div className="form-submit">
                        <button type="submit" className="theme-btn" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                        {isError && <p className="error">Error sending message. Please try again.</p>}
                        {isSuccess && <p className="success">Message sent successfully!</p>}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
