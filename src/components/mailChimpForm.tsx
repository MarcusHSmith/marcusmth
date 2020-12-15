import React from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"
import { Formik } from "formik"
import { Form, Input, Button, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const MailChimpForm = () => {
  return (
    <Segment color="purple">
      <Header>Join Marcus's mailing list</Header>
      <Formik
      initialValues={{
        email: "",
        firstName: "",
      }}
      onSubmit={async (values) => {
        addToMailchimp(values.email, {NAME: values.firstName})
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
            color="purple"
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
