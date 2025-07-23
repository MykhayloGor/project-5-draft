import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
  };

  return (
    <div className={s.container}>
      <div className={s.contentWrapper}>
        <div className={s.textSection}>
          <h1 className={s.title}>Register</h1>
          <p className={s.text}>Join our community of mindfulness and wellbeing!</p>
          
        </div>
        <div className={s.formCard}>
          <div className={s.cardBody}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className={s.fieldset}>
                  <label className={s.label}>Enter your name</label>
                  <Field
                    name="name"
                    type="text"
                    className={s.inputField}
                    placeholder="Name"
                  />
                  <label className={s.label}>Enter your email address</label>
                  <Field
                    name="email"
                    type="email"
                    className={s.inputField}
                    placeholder="Email"
                  />
                  <label className={s.label}>Create a strong password</label>
                  <Field
                    name="password"
                    type="password"
                    className={s.inputField}
                    placeholder="Password"
                  />
                  <label className={s.label}>Repeat your password</label>
                  <Field
                    name="password"
                    type="password"
                    className={s.inputField}
                    placeholder="Password"
                  />
                  <div className={s.signUpLinkContainer}>
                    <Link to="/login" className={s.signUpLink}>
                      Already have an account? Log in
                    </Link>
                  </div>
                  <button type="submit" className={s.submitButton}>
                    Create account
                  </button>
                </fieldset>
              </Form>
            </Formik>
            <div className={s.divider}></div>
            <Link className={s.backHomeLink} to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;