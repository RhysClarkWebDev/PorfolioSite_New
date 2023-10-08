import React, { useEffect, useRef } from 'react'
import './style.scss'

function ParticleText (): React.ReactElement {
    const textRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef(null)

    const introText = [
        {
            element: 'h1',
            text: 'Hello, my name is Rhys Clark.'
        },

        {
            element: 'p',
            text: 'I am a Full-Stack developer, specializing in the MERN stack.'
        },

        {
            element: 'p',
            text: 'I am deeply passionate about UI/UX design, animations, and crafting intuitive user experiences.'
        },

        {
            element: 'p',
            text: [
                {
                    initial: 'Feel free to checkout my recent work on the ',
                    child: {
                        element: 'a',
                        text: 'Portfolio Page.',
                        link: '/portfolio'
                    }
                }
            ]
        }
    ]

    function typeText (): void {
        introText.forEach((textElement) => {
            // IF THE TEXT IS AN ARRAY
            if (Array.isArray(textElement.text)) {
                const el = document.createElement(textElement.element)

                textElement.text.map((child): null => {
                    console.log(el)
                    const initialLetters = child.initial.split('')

                    initialLetters.forEach((letter: string) => {
                        const letterContainer = document.createElement('span')
                        letterContainer.innerText = letter
                        el.appendChild(letterContainer)
                    })

                    const childElement = document.createElement(child.child.element)

                    if (childElement instanceof HTMLAnchorElement) {
                        childElement.href = child.child.link
                    }

                    const childLetters = child.child.text.split('')

                    childLetters.map((letter: string): null => {
                        const letterContainer = document.createElement('span')
                        letterContainer.innerText = letter
                        childElement.appendChild(letterContainer)

                        return null
                    })

                    el.appendChild(childElement)
                    textRef.current?.appendChild(el)

                    return null
                })
            } else if (typeof textElement.text === 'string') {
                const el = document.createElement(textElement.element)
                const letters = textElement.text.split('')

                letters.forEach((letter: string) => {
                    const letterContainer = document.createElement('span')
                    letterContainer.innerText = letter
                    el.appendChild(letterContainer)
                })

                textRef.current?.appendChild(el)
            }
        })
    }

    useEffect(() => {
        typeText()
    }, [])



    return (
        <div className='about-container '>
            <div className="particle-text">
                <div ref={textRef}/>
                <span className="typing-cursor"/>
                <canvas ref={canvasRef}/>
            </div>
        </div>

    )
}

export default ParticleText
