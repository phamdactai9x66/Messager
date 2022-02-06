import React from 'react';
import { Box, TextField, Button } from '@mui/material'
import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


const validateSchema = yup.object({
    message: yup.string().required('Message is required !')
})
interface SendMessage<T> {

}
const initialValue = {
    message: ''
}

const SendMessage: React.FC<SendMessage<any>> = ({ ...props }) => {
    const submitForm = (value: any, helperAction: FormikHelpers<any>) => {
        (async () => {
            try {
                const data = {
                    ...value,
                    createTime: serverTimestamp(),
                    idRoom: '',
                    idUser: ''
                }
                const addMessage = await addDoc(collection(db, 'Messages'), { ...data })
            } catch (error) {
                console.log(error)
            }
            // console.log(addMessage)
        })()
    }
    return <React.Fragment>
        <Formik
            initialValues={{ ...initialValue }}
            validateOnChange={false}
            onSubmit={submitForm}
            validationSchema={validateSchema}
            validateOnBlur={false}
        >
            {(formik) => {
                // console.log(formik.errors['message'])
                return <Form style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField id="outlined-basic" label="Message" {...formik.getFieldProps('message')}
                        helperText={formik.errors['message']}
                        variant="outlined" fullWidth />
                    <Button disabled={formik.isValidating} type='submit'>Send</Button>
                </Form>
            }}
        </Formik>
    </React.Fragment>;
};

export default SendMessage;
