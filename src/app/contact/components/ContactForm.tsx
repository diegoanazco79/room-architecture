'use client'
import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('* Este campo es requerido'),
    lastName: Yup.string().required('* Este campo es requerido'),
    email: Yup.string()
      .email('Email inválido')
      .required('* Este campo es requerido'),
    phone: Yup.string(),
    subject: Yup.string().required('* Este campo es requerido'),
    message: Yup.string().required('* Este campo es requerido')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <label className='text-sm font-semibold'>* Nombre</label>
              <Field
                className='w-full p-2 text-sm bg-white border border-black focus-visible:border-black focus-visible:outline-none'
                type='firstName'
                name='firstName'
              />
              <ErrorMessage
                className='text-sm text-red-600'
                name='firstName'
                component='div'
              />
            </div>
            <div>
              <label className='text-sm font-semibold'>* Apellido</label>
              <Field
                className='w-full p-2 text-sm bg-white border border-black focus-visible:border-black focus-visible:outline-none'
                type='lastName'
                name='lastName'
              />
              <ErrorMessage
                className='text-sm text-red-600'
                name='lastName'
                component='div'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5 mt-4'>
            <div>
              <label className='text-sm font-semibold'>* Correo Electrónico</label>
              <Field
                className='w-full p-2 text-sm bg-white border border-black focus-visible:border-black focus-visible:outline-none'
                type='email'
                name='email'
              />
              <ErrorMessage
                className='text-sm text-red-600'
                name='email'
                component='div'
              />
            </div>
            <div>
              <label className='text-sm font-semibold'>Celular</label>
              <Field
                className='w-full p-2 text-sm bg-white border border-black focus-visible:border-black focus-visible:outline-none'
                type='phone'
                name='phone'
              />
              <ErrorMessage
                className='text-sm text-red-600'
                name='phone'
                component='div'
              />
            </div>
          </div>
          <div className='mt-4'>
            <label className='text-sm font-semibold'>* Asunto</label>
            <Field
              className='w-full p-2 text-sm bg-white border border-black focus-visible:border-black focus-visible:outline-none'
              type='subject'
              name='subject'
            />
            <ErrorMessage
              className='text-sm text-red-600'
              name='subject'
              component='div'
            />
          </div>
          <div className='mt-4'>
            <label className='text-sm font-semibold'>* Descripción</label>
            <Field
              as='textarea'
              className='w-full h-20 p-2 text-sm bg-white border border-black resize-none focus-visible:border-black focus-visible:outline-none'
              type='message'
              name='message'
            />
            <ErrorMessage
              className='text-sm text-red-600'
              name='message'
              component='div'
            />
          </div>
          <div className='flex mt-2'>
            <button className='px-5 py-2 mx-auto text-base text-white bg-black border hover:underline hover:transition-all hover:duration-300' type='submit' disabled={isSubmitting}>
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
