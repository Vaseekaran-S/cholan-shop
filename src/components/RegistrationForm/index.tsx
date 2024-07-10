"use client"

import { ErrorMessage, Form, Formik } from "formik";
import * as YUP from "yup";

import PrimaryInput from "../InputFields/primary"

import loginInput from "@/data/inputs/login.json"
import signupInput from "@/data/inputs/signup.json"
import PrimaryBtn from "../Buttons/primary";

function RegistrationForm({ type }: any) {
  const login = type === "login";

  const loginValidationSchema = YUP.object({
    userId: YUP.string().required("Enter Mobile or Email!"),
    password: YUP.string().required("Enter Password!")
  })

  const signupValidationSchema = YUP.object({
    name: YUP.string().required("Enter Name!"),
    mobile: YUP.string().required("Enter Mobile!"),
    email: YUP.string().required("Enter Email!"),
    password: YUP.string().required("Enter Password!")
  })

  const inputs = login ? loginInput : signupInput;
  const validationSchema = login ? loginValidationSchema : signupValidationSchema;
  const initialValues = { userId: "", name: "", email: "", password: "", mobile: "" }

  const submitForm = () => {

  }

  return (
    <div className="p-10 border shadow-lg rounded lg:min-w-[350px]">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
        <Form>
          <div className="flex flex-col gap-4">
            {
              inputs.map(input => [
                <div key={input?.name} className="w-full">
                  <PrimaryInput {...input} />
                  <ErrorMessage name={input?.name} component="div" className="text-sm text-red-900 font-medium mt-1 ml-2"/>
                </div>
              ])
            }
            <div>
              <PrimaryBtn text="Login"/>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm
