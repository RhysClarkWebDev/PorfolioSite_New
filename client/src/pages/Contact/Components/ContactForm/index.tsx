import React, { useState, useEffect } from 'react'

// COMPONENTS
import ContactInput from '../ContactInput'

// SVG
import User from '@/SVG/user.svg'

// STYLES
import './style.scss'

function ContactForm (): React.ReactElement {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault()
    }

    function updateFormValues (id: string, value: string): void {
        setFormValues({
            ...formValues,
            [id]: value
        })
    }




    return (
        <form onSubmit={handleSubmit}>
            <ContactInput
                type={'text'}
                placeholder={'Your Name Here'}
                name={'name'}
                Icon={<User fill="#b6b6b6"/>}
                onChange={(id, value) => {
                    updateFormValues(id, value)
                }}
            />
        </form>
    )
}



export default ContactForm
