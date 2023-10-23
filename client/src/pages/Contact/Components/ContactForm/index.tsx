import React, { useState } from 'react'

// COMPONENTS
import ContactInput from '../ContactInput'

// SVG
import User from '@/SVG/user.svg'
import Email from '@/SVG/email.svg'
import Edit from '@/SVG/edit.svg'

// STYLES
import './style.scss'

interface FormValues {
    name: string
    email: string
    message: string
    [key: string]: string
}

function ContactForm (): React.ReactElement {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        message: ''
    })

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const [activeInput, setActiveInput] = useState(0)

    const inputs = [
        {
            type: 'text',
            placeholder: 'Your Name Here',
            name: 'name',
            Icon: <User fill="#b6b6b6" />
        },
        {
            type: 'text',
            placeholder: 'Your Email Here',
            name: 'email',
            Icon: <Email stroke="#b6b6b6" />
        },
        {
            type: 'text',
            placeholder: 'Your Message Here',
            name: 'message',
            Icon: <Edit stroke="#b6b6b6" />
        }
    ]

    const handleSuccess = (): void => {
        setError(false)
        setSuccess(true)
        setActiveInput(0)
    }

    const handleFailure = (): void => {
        setError(true)
        setSuccess(false)
    }

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()

        if (formValues.name !== '' && formValues.email !== '' && formValues.message !== '') {
            try {
                const result = await fetch('/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formValues)
                })

                if (result.status === 200) {
                    handleSuccess()
                } else {
                    handleFailure()
                }
            } catch (err) {
                handleFailure()
            }
        }
    }

    function updateFormValues (id: string, value: string): void {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [id]: value
        }))
    }

    const handleNextClick = (): void => {
        console.log(activeInput)
        setActiveInput((prevActiveInput) =>
            (prevActiveInput < inputs.length - 1 ? prevActiveInput + 1 : prevActiveInput))
    }


    const handleInputClick = (index: number): void => {
        setActiveInput(index)
    }

    return (
        <form>
            <div className="input-values">
                {formValues.name.length > 0 && activeInput > 0 &&
                    <div className="input-value name" onClick={() => {
                        handleInputClick(0)
                    }}>
                        {<User fill="#b6b6b6" />}
                        <p>{formValues.name}</p>
                    </div>}

                {formValues.email.length > 0 && activeInput > 1 &&
                    <div className="input-value email" onClick={() => {
                        handleInputClick(1)
                    }}>
                        {<Email stroke="#b6b6b6" />}
                        <p>{formValues.email}</p>
                    </div>}
            </div>
            <div className="input-containers">
                {inputs.map((input, index) => (
                    <div key={input.name} className={`input-container ${index === activeInput ? 'active' : ''}`}>
                        <ContactInput
                            type={input.type}
                            placeholder={input.placeholder}
                            name={input.name}
                            Icon={input.Icon}
                            onChange={(id, value) => {
                                updateFormValues(id, value)
                            }}
                        />
                    </div>
                ))}
            </div>
            {error && <div className="feedback-message error-message">
                <p>Something went wrong, please try again...</p>
            </div>}

            {success && <div className="feedback-message success-message">
                <p>Your email was sent successfully!</p>
            </div>}


            <div className="form-buttons">
                <button
                    className="button next-button"
                    onClick={handleNextClick}
                    disabled={
                        (formValues[inputs[activeInput].name]).trim().length < 3 ||
                            activeInput === inputs.length - 1
                    }
                    type="button"
                >
                    NEXT
                </button>
                <button
                    disabled={formValues.message.trim().length < 3}
                    className="button send-button"
                    onClick={handleSubmit}
                    type="submit"
                >
                SUBMIT MESSAGE
                </button>
            </div>

        </form>
    )
}



export default ContactForm
