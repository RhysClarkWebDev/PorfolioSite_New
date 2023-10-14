import React, { useState, useEffect } from 'react'

// COMPONENTS
import ContactInput from '../ContactInput'

// SVG
import User from '@/SVG/user.svg'
import Email from '@/SVG/email.svg'
import Edit from '@/SVG/edit.svg'

// STYLES
import './style.scss'

function ContactForm (): React.ReactElement {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    })

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

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault()
    }

    function updateFormValues (id: string, value: string): void {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [id]: value
        }))
    }

    const handleNextClick = (): void => {
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
            <div className="form-buttons">
                <button
                    className="button next-button"
                    onClick={handleNextClick}
                    disabled={
                        formValues[inputs[activeInput].name].trim().length < 3 &&
                        activeInput > 1
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
