import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { FormField } from '../components/forms/FormField';
import { Button } from '../components/ui/Button';
import { MicrosoftIcon } from '../components/ui/MicrosoftIcon';
import { Logo } from '../components/ui/Logo';
import { authService } from '../services/authService';
import type { LoginFormData } from '../types/auth';
import './LoginPage.scss';




// Validation schema using Yup
const loginValidationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    rememberMe: Yup.boolean()
});

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isMicrosoftLoading, setIsMicrosoftLoading] = useState(false);

    const initialValues: LoginFormData = {
        username: '',
        password: '',
        rememberMe: false
    };

    const handleSubmit = async (values: LoginFormData) => {
        setIsLoading(true);
        try {
            const response = await authService.login(values);

            if (response.success) {
                message.success('Login successful!');
                navigate('/dashboard');
            } else {
                message.error(response.message || 'Login failed');
            }
        } catch (error) {
            message.error('An error occurred during login');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleMicrosoftLogin = async () => {
        setIsMicrosoftLoading(true);
        try {
            const response = await authService.loginWithMicrosoft();

            if (response.success) {
                message.success('Microsoft login successful!');
                navigate('/dashboard');
            } else {
                message.error(response.message || 'Microsoft login failed');
            }
        } catch (error) {
            message.error('An error occurred during Microsoft login');
            console.error('Microsoft login error:', error);
        } finally {
            setIsMicrosoftLoading(false);
        }
    };

    const handleForgotPassword = () => {
        message.info('Forgot password functionality will be implemented');
    };

    return (
        <div className="login-page">
            {/* Left Panel - Background Image with Logo */}
            <div className="login-page__left-panel">
                <div className="login-page__background-overlay">
                    {/* Logo */}
                    <div className="login-page__logo">
                        <Logo width={122} height={32} />
                    </div>

                    {/* Main Content */}
                    <div className="login-page__left-content">
                        <h1 className="login-page__title">Housecalls Pro</h1>
                        <p className="login-page__subtitle">
                            Modernize your digital patient outreach and drive communications from your EHR
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="login-page__right-panel">
                <div className="login-page__form-container">
                                         <div className="login-page__form-header">
                         <h2 className="login-page__form-title">Login to your account</h2>
                         <p className="login-page__form-subtitle">
                             Please enter credentials to access your account
                         </p>
                     </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form className="login-page__form">
                                <FormField
                                    name="username"
                                    label="Username"
                                    type="text"
                                    placeholder="Enter Name"
                                />

                                <FormField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Password"
                                />

                                <div className="login-page__form-options">
                                    <FormField
                                        name="rememberMe"
                                        label="Remember me"
                                        type="checkbox"
                                        className="login-page__remember-me"
                                    />

                                    <button
                                        type="button"
                                        className="login-page__forgot-password"
                                        onClick={handleForgotPassword}
                                    >
                                        Forgot Password?
                                    </button>
                                </div>

                                <div className="login-page__form-actions">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        fullWidth
                                        loading={isLoading}
                                    >
                                        Login
                                    </Button>

                                    <div className="login-page__divider">
                                        <div className="login-page__divider-line" />
                                        <span className="login-page__divider-text">OR</span>
                                    </div>

                                    <Button
                                        type="button"
                                        variant="microsoft"
                                        fullWidth
                                        loading={isMicrosoftLoading}
                                        onClick={handleMicrosoftLogin}
                                        icon={<MicrosoftIcon size={20} />}
                                    >
                                        Login with Microsoft
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
