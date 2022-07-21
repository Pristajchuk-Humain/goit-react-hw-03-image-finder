import { Form, Formik, Field } from 'formik';


 const Searchbar = () => (
        <Formik
        initialValues={{ search: '' }}
        validate={values => {
          const errors = {};
          if (!values.search) {
            errors.search = 'search';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.search)
          ) {
            errors.search = 'This picture not found';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.search}
            />
            {errors.search && touched.search && errors.search}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
      </Form>
        )}
      </Formik>
    
 )

export default Searchbar