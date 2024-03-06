import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import styles from './Sign.styles'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Formik } from 'formik'
import { showMessage } from 'react-native-flash-message'
import auth from '@react-native-firebase/auth'

const initialFormikValues = {
    userMail: '',
    password: '',
    repassword: ''
}

export default ({ navigation }) => {

    const [signLoading, setSignLoading] = useState(false)

    const handleSign = async (formValues) => {
        if (formValues.userMail === '' || formValues.password === '' || formValues.repassword === '')
            showMessage({
                message: 'Boş alan bırakma!',
                type: 'warning'
            })
        else if (formValues.password !== formValues.repassword)
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: 'warning'
            })
        else {
            setSignLoading(true)
            try {
                await auth().createUserWithEmailAndPassword(formValues.userMail, formValues.password)
                showMessage({
                    message: 'Kullanıcı oluşturdu',
                    type: 'success'
                })
                navigation.navigate('LoginPage')
                setSignLoading(false)
            } catch (error) {
                setSignLoading(false)
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
            <Formik initialValues={initialFormikValues} onSubmit={handleSign} >
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
                        <Input
                            iconName={['eye-off', 'eye']}
                            placeholder='Şifre Terarı'
                            text={values.repassword}
                            changeableIcon={true}
                            isSecure={true}
                            onChangeText={handleChange('repassword')} />
                        <Button text='Kayıt ol' loading={signLoading} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </ScrollView>
    )
}