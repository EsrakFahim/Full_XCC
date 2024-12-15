import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import usePostData from '../../Api-Route/usePostDataToDB';
import axios from 'axios';

const Discuss = () => {
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
                setClientIP(res.data.ip);
            } catch (error) {
                console.error("Error fetching client IP:", error);
            }
        };

        fetchIP();
    }, []);

    // Handle form submission
    const onSubmit = useCallback(
        (data) => {
            const formData = { ...data, clientIP };

            mutate(formData, {
                onSuccess: () => reset(),
            });

            // console.log("Submitted Data:", formData);
        },
        [clientIP, mutate, reset]
    );

    return (
        <div className="wpo-service-single-item">
            <div className="wpo-service-contact-area">
                <div className="wpo-contact-title">
                    <h2>Have project in mind? Let's discuss</h2>
                    <p>Get in touch with us to see how we can help you with your project</p>
                </div>
                <div className="wpo-contact-form-area">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="row">
                            {/* Name Field */}
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="form-field">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="First Name"
                                        {...register('firstName', {
                                            required: 'Please enter your first name',
                                        })}
                                    />
                                    {errors.firstName && <p>{errors.firstName.message}</p>}
                                </div>
                            </div>

                            {/* Last Name Field */}
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="form-field">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Last Name"
                                        {...register('lastName', {
                                            required: 'Please enter your last name',
                                        })}
                                    />
                                    {errors.lastName && <p>{errors.lastName.message}</p>}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="col col-lg-12 col-md-12 col-12">
                                <div className="form-field">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Your Email"
                                        {...register('email', {
                                            required: 'Please enter your email',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div className="col col-lg-12 col-12">
                                <div className="form-field">
                                    <select
                                        className="form-control"
                                        {...register('subject', {
                                            required: 'Please select a service',
                                        })}
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Complete Interior">Complete Interior</option>
                                        <option value="Exterior Design">Exterior Design</option>
                                    </select>
                                    {errors.subject && <p>{errors.subject.message}</p>}
                                </div>
                            </div>

                            {/* Notes Field */}
                            <div className="fullwidth col col-lg-12 col-12">
                                <textarea
                                    className="form-control"
                                    placeholder="Message..."
                                    {...register('notes', {
                                        required: 'Please enter your message',
                                    })}
                                ></textarea>
                                {errors.notes && <p>{errors.notes.message}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="submit-area">
                            <button type="submit" className="theme-btn" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                            {isError && <p className="error">Error sending message. Please try again.</p>}
                            {isSuccess && <p className="success">Message sent successfully!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Discuss;
