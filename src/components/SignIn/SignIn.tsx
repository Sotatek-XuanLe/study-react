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
                username: '',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string()
                    .required('Username is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required')
                    .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                    ),
            })}

            onSubmit={(values, actions) => {
                // setting API errors
                const confirmUser = localStorage.getItem("username");
                const pass: any = localStorage.getItem("password");
                const valuePass = window.atob(pass);
                console.log('valuePass', valuePass);
                if (values.username != confirmUser) {
                    toast.warning('Username not exist!');
                }
                if (values.username == confirmUser && values.password != valuePass) {
                    toast.warning('Password incorect!');
                }
                if (values && values.username === confirmUser && valuePass === values.password) {
                    toast.success('Login success!');
                    localStorage.setItem("token", valuePass);
                    history.push('/menu')
                }

            }}
            render={({ errors, status, touched }) => (
                <Form style={{ padding: "30px" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="col-md-12" style={{ margin: 'auto', textAlign: 'center' }}>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Login</button>
                            </div>
                        </div>

                    </div>

                </Form>
            )}
        />
    );
}
export default SignIn;