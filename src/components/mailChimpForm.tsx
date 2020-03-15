import React from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"
import { useFormik } from "formik"

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
        }
      })
    },
  })
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MailChimpForm
