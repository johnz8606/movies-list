import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';

const ContactForm = () => {

    const initalValues = {
        name: '',
        email: '',
        message: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required("Required")
    });

    const handleSubmint = (values, { setSubmitting, resetForm }) => {
        console.log("formdata", values)
        setSubmitting(false);
        resetForm();
    }


    return (
        <div className='contact-form'>
            <h1>Contact us</h1>
            <Formik
                initialValues={initalValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmint}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor='name'>
                                Name:
                            </label>
                            <Field type='text' id='name' name='name'>

                            </Field>
                            <ErrorMessage name='name' component='div' className='error' />

                        </div>
                        <div>
                            <label htmlFor='email'>

                            </label>
                            <Field type='text' id='email' name='email'>

                            </Field>
                            <ErrorMessage name='emial' component='div' className='error' />

                        </div>
                        <div>
                            <label htmlFor='message'>

                            </label>
                            <Field as='textarea' id='message' name='message'>

                            </Field>
                            <ErrorMessage name='message' component='div' className='error' />

                        </div>
                        <button type='submit' disabled={isSubmitting}>
                            Submit
                        </button>

                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default ContactForm
