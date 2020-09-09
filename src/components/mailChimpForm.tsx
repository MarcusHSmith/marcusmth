import React from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"
import { useFormik, Formik } from "formik"
import { Form, Header, Input, Button, Segment } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'


const MailChimpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
    },
    onSubmit: values => {
      addToMailchimp(values.email, {FNAME: values.firstName})
      .then(data => {
        if (data.result === "error") {
            alert("error: likely a duplicate email");
        } else {
          alert("Subscribed")
        }
      })
    },
  })
  return (
    <Segment>
      <header>To receive updates from Marcus consider joining the mailing list</header>
      <Formik
      initialValues={{
        email: "",
        firstName: "",
      }}
      onSubmit={async (values) => {
        addToMailchimp(values.email, {FNAME: values.firstName})
      .then(data => {
        if (data.result === "error") {
            alert("error: likely a duplicate email");
        } else {
          alert("Subscribed")
        }
      })
    }}
      
    >
      {({ values, handleChange, handleSubmit}) => (
        <Form>
          <Form.Field>
            <small>Name</small>
            <Input type="text" name="firstName" onChange={handleChange} value={values.firstName} />
          </Form.Field>
          <Form.Field>
            <small>Email</small>
            <Input type="email" name="email" onChange={handleChange} value={values.email} />
          </Form.Field>
                  <Button
            type="submit"
            content="Submit"
            color="blue"
            onClick={() => {
                handleSubmit();
            }}
          />
        </Form>
      )}
    </Formik>
  </Segment>
  )
}

export default MailChimpForm
