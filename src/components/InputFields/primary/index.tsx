"use client"

import { Field } from "formik"

type Input = {
    name: string,
    type: string,
    placeholder: string
}

function PrimaryInput(props: Input){
    return (
        <>
            <Field {...props} className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none focus:border-black"/>
        </>
    ) 
}

export default PrimaryInput