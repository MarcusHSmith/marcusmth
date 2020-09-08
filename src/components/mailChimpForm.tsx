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
      <header>To receive updates from Marcus consider joining the mailing list</header>
      <Form>
        <Form.Field>
          <small>Name</small>
          <Input type="text" name="Name" onChange={formik.handleChange}  value={formik.values.firstName} />
        </Form.Field>
        <Form.Field>
          <small>Email</small>
          <Input type="email" name="Email" onChange={formik.handleChange}  value={formik.values.email} />
        </Form.Field>
        <Button
          type="submit"
          content="Submit"
          color="blue"
        />
    </Form>
  </Segment>
  )
}

export default MailChimpForm
