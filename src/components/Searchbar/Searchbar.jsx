
  import React from 'react';
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  
  const Searchbar = ({onSubmit, isSubmiting}) => {
    const handleSubmit = (values, actions) => {
      onSubmit(values)
      actions.resetForm();

    }
    return (
      <Formik
        initialValues={{ search: " " }}
        onSubmit={handleSubmit}>
          <Form>
            <Field type="text" name="search" />
            <button type="submit" desebled={isSubmiting}>
              Submit
            </button>
          </Form>
      </Formik>
    )
  }
  
  export default Searchbar


