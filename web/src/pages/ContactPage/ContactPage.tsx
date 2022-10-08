import {
  FieldError,
  Form,
  Label,
  Submit,
  SubmitHandler,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  name: string
  email: string
  messages: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">
          Your name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />
        <Label name="email" errorClassName="error">
          Your email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />
        <Label name="message" errorClassName="error">
          Your message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
