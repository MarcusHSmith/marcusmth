import React from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"
import { useFormik } from "formik"
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
      <Form>
        <Form.Field>
          <Header content="Name" />
          <Input type="text" name="Name" onChange={formik.handleChange}  value={formik.values.firstName} />
        </Form.Field>
        <Form.Field>
          <Header content="Email" />
          <Input type="email" name="Email" onChange={formik.handleChange}  value={formik.values.email} />
        </Form.Field>
        <Button
          type="submit"
          content="Submit"
        />
      </Form>
      </Segment>
  )
}

export default MailChimpForm
