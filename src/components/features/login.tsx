import React from 'react'
import { useFirebase } from '../../contexts/use-firebase';
import {Formik} from "formik";
import * as Yup from "yup";
import {TextField, Typography} from '@mui/material';
import "./styles/signup.css";
import { LoadingButton } from "@mui/lab";
import { AuthPage } from '../layouts/AuthPage';

const PASSWORD_CHARACTER_REQUIRED = 8;

interface SignInFormValues {
    email: string;
    password: string;
}

const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Check your email").required(),
    password: Yup.string().required().matches(
        new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\$@\$!%\*?&])([A-Za-z\\d\$@\$!%\*?&]){${PASSWORD_CHARACTER_REQUIRED},}$`), 'Your password must have at least 8 characters'
        ),
});

export const Login = () => {
    const {login} = useFirebase(); 

    const handleRegister = async (values : SignInFormValues) => {
        try{
            await login(values.email, values.password);
        }catch (error){
            console.error(error);
        }
    }
   return (
    <AuthPage>
        <main>        
            <Formik<SignInFormValues>
                initialValues={{
                    email:'',
                    password:''
                }}
                validationSchema={SignInSchema}
                onSubmit={handleRegister}
                validateOnBlur
                validateOnChange
                validateOnMount  
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    isValid,
                    isValidating
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant='h2' component="h2">Login</Typography>
                        <TextField 
                            error={touched.email && !!errors.email}
                            required
                            label="Email"
                            type="email"
                            placeholder='bpalma@gmail.com'
                            value={values.email}
                            onChange={handleChange('email')} 
                            onBlur={handleBlur('email')} 
                            helperText={touched.email && errors.email}
                            />
                        <TextField 
                            error={touched.password && !!errors.password}
                            required
                            label="Password"
                            type="password"
                            placeholder='********'
                            value={values.password}
                            onChange={handleChange('password')} 
                            onBlur={handleBlur('password')} 
                            helperText={touched.password && errors.password}
                            />
                        
                        <LoadingButton loading={isSubmitting || isValidating} disabled={!isValid} variant='outlined' type='submit'>SignIn</LoadingButton>
                    </form>
                )}
            </Formik>        
        </main>
    </AuthPage>
  )
}
