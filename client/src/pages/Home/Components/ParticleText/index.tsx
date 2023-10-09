import React, { useEffect, useRef } from 'react'
import './style.scss'

function ParticleText (): React.ReactElement {
    const textRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef(null)
    const particles = []


    class Particle {
        constructor (x, y, vx, vy) {
            this.x = x
            this.y = y
            this.vx = vx || Math.random() * 2 - 1
            this.vy = vy || Math.random() * 2 - 1
            this.color = '#9a9a9a'
            this.size = Math.random() * 2 + 1
        }

        update (): void {
            this.x += this.vx
            this.y += this.vy
        }

        draw (ctx): void {
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }


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
                        text: 'Portfolio Page',
                        link: '/portfolio'
                    }
                }
            ]
        }
    ]

    async function typeText (): Promise<void> {
        introText.forEach((textElement) => {
            // IF THE TEXT IS AN ARRAY
            if (Array.isArray(textElement.text)) {
                const el = document.createElement(textElement.element)

                textElement.text.map((child): null => {
                    console.log(el)
                    const initialLetters = child.initial.split('')

                    initialLetters.forEach((letter: string) => {
                        const letterContainer = document.createElement('span')
                        letterContainer.classList.add('hide')
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
                        letterContainer.classList.add('hide')
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
                    letterContainer.classList.add('hide')
                    letterContainer.innerText = letter
                    el.appendChild(letterContainer)
                })

                textRef.current?.appendChild(el)
            }
        })
    }

    // Function to create particles at a given position
    function createParticlesAtPosition (x, y, numParticles): void {
        for (let i = 0; i < numParticles; i++) {
            const angle = Math.random() * 2 * Math.PI // Random angle in radians
            const speed = Math.random() * 3 + 1 // Random speed
            const vx = Math.cos(angle) * speed
            const vy = Math.sin(angle) * speed
            particles.push(new Particle(x, y, vx, vy))
        }
    }


    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')

        if (canvas !== undefined) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', () => {
            if (canvas !== null) {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            }
        })

        function updateParticles (): void {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((particle) => {
                particle.update()
                particle.draw(ctx)
            })

            requestAnimationFrame(updateParticles)
        }

        // Start the animation loop
        updateParticles()

        // Add an initial delay before starting the text typing
        const initialDelay = 1000

        setTimeout(() => {
            typeText()
                .then(() => {
                    const allLetters = document.querySelectorAll('.hide')

                    for (let i = 0; i < allLetters.length; i++) {
                        const letter = allLetters[i]
                        const cursor = document.createElement('span')
                        cursor.className = 'typing-cursor'

                        setTimeout(() => {
                            letter.classList.remove('hide')
                            letter.parentNode?.insertBefore(cursor, letter.nextSibling)

                            // Create particles at the cursor position
                            const rect = cursor.getBoundingClientRect() // Get cursor position

                            const centerX = rect.x
                            const centerY = rect.y

                            createParticlesAtPosition(centerX, centerY, 4) // Emit particles from cursor

                            if (i !== allLetters.length - 1) {
                                setTimeout(() => {
                                    cursor.style.display = 'none' // Hide it first
                                    cursor.remove() // Remove it from the DOM
                                }, 19)
                            }
                        }, i * 20)
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        }, initialDelay)
    }, [])




    return (
        <div className='about-container '>
            <div className="particle-text">
                <div ref={textRef}/>
                <canvas ref={canvasRef} width="1000px" height="1000px"/>
            </div>
        </div>

    )
}

export default ParticleText
