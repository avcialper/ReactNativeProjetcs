import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import styles from './Login.styles'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'

const intialFormikValues = {
    userMail: '',
    password: '',
}

export default ({ navigation }) => {

    const [loginLoading, setLoginLoading] = useState(false)

    const handleSign = () => navigation.navigate('SignPage')

    const handleLogin = async (formValues) => {
        if (formValues.userMail === '' || formValues.password === '')
            showMessage({
                message: 'Boş alan bırakma!',
                type: 'warning'
            })
        else {
            setLoginLoading(true)
            try {
                await auth().signInWithEmailAndPassword(formValues.userMail, formValues.password)
                navigation.navigate('MessagesPage')
                setLoginLoading(false)
            } catch (error) {
                setLoginLoading(false)
                showMessage({
                    message: error.code,
                    type: 'danger'
                })
            }
        }

    }

    return (
        <ScrollView style={styles.container} >
            <Text style={styles.title} >bana ne?</Text>
            <Formik initialValues={intialFormikValues} onSubmit={handleLogin} >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            iconName={[null, 'account']}
                            placeholder='E-posta'
                            text={values.userMail}
                            onChangeText={handleChange('userMail')} />
                        <Input
                            iconName={['eye-off', 'eye']}
                            placeholder='Şifre'
                            text={values.password}
                            changeableIcon={true}
                            isSecure={true}
                            onChangeText={handleChange('password')} />
                        <Button text='Giriş Yap' loading={loginLoading} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text='Kayıt ol' loading={false} onPress={handleSign} theme='secondary' />
        </ScrollView>
    )
}