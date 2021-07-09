import React from "react";
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
const SignIn: React.FC = () => {
    const history = useHistory();
    return (
        <Formik
            initialValues={{
                fullName: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object().shape({
                fullName: Yup.string()
                    .required('Full Name is required'),
                username: Yup.string()
                    .required('Username is required'),

                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required')
                    .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                    ),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
            })}

            onSubmit={(values, actions) => {
                // setting API errors
                console.log('values', values);
                localStorage.setItem('userInfor', JSON.stringify(values));
                const password = window.btoa(values.password)
                localStorage.setItem('username',values.username);
                localStorage.setItem("password", password);
                toast.success('Register sucess.');
                history.push('/signin')
            }}
            render={({ errors, status, touched }) => (
                <Form style={{ padding: "30px" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <Field name="fullName" type="text" className={'form-control' + (errors.fullName && touched.fullName ? ' is-invalid' : '')} />
                                <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col-md-12" style={{ margin: 'auto', textAlign: 'center' }}>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </div>

                    </div>

                </Form>
            )}
        />
    );
}
export default SignIn;