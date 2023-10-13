import React, { useState, useEffect } from 'react'


// STYLES
import './style.scss'

interface ContactInputType {
    type: string
    placeholder: string
    name: string
    Icon?: React.ReactElement | undefined
    onChange: (id: string, value: string) => void
}

function ContactInput ({ type, placeholder, name, Icon, onChange }: ContactInputType): React.ReactElement {
    const [thisValue, setThisValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setThisValue(event.target.value)
        onChange(name, event.target.value)
    }

    useEffect(() => {
        if (thisValue.length > 0) {
            setIsTyping(true)
        } else {
            setIsTyping(false)
        }
    }, [thisValue])

    return (
        <div className={`input-with-label ${isTyping ? 'focus' : ''}`}>
            <label>
                {Icon !== null && Icon}
                {placeholder}
            </label>

            <div className="input-holder">
                {Icon !== null && Icon}
                <input
                    type={type}
                    name={name}
                    onChange={event => { handleChange(event) }}
                    value={thisValue}
                />
            </div>

        </div>
    )
}



export default ContactInput
