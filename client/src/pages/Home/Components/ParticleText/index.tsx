import React, { useEffect, useRef } from 'react'
import './style.scss'

function ParticleText (): React.ReactElement {
    const textRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particles: any[] = []


    class Particle {
        x: number
        y: number
        vx: number
        vy: number
        color: string
        size: number
        constructor (x: number, y: number, vx: number, vy: number) {
            this.x = x
            this.y = y
            this.vx = vx
            this.vy = vy
            this.color = '#9a9a9a'
            this.size = Math.random() * 2
        }

        update (): void {
            this.x += this.vx
            this.y += this.vy
        }

        draw (ctx: {
            fillStyle: string
            beginPath: () => void
            arc: (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void
            fill: () => void }): void {
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }


    const introText = [
        {
            element: 'h1',
            text: [
                {
                    initial: 'Hello! My name is  ',
                    child: {
                        element: 'span',
                        text: 'Rhys Clark.',
                        link: '/skills',
                        class: 'name'
                    }
                }
            ]
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
                    initial: 'To see where my knowledge base lies, please view ',
                    child: {
                        element: 'a',
                        text: 'My Skills.',
                        link: '/skills'
                    }
                }
            ]
        },

        {
            element: 'p',
            text: [
                {
                    initial: 'Or, feel free to checkout my recent work on the ',
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

                    if (child.child.class !== null) {
                        childElement.classList.add(child.child.class)
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
    function createParticlesAtPosition (x: number, y: number, numParticles: number): void {
        for (let i = 0; i < numParticles; i++) {
            const angle = Math.PI / 2.2
            const speed = Math.random() * 3 + 3
            const vx = Math.cos(angle) * speed
            const vy = Math.sin(angle) * speed
            particles.push(new Particle(x, y, vx, vy))
        }
    }


    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')

        if (canvas !== null) {
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
            if (ctx !== undefined && ctx !== null && canvas !== null) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                particles.forEach((particle) => {
                    particle.update()
                    particle.draw(ctx)
                })

                requestAnimationFrame(updateParticles)
            }
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

                            createParticlesAtPosition(centerX, centerY,
                                Math.floor(Math.random() * (4 - 2 + 1) + 2)) // Emit particles from cursor

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
        <section className='about-container '>
            <div className="particle-text">
                <div ref={textRef}/>
                <canvas ref={canvasRef}/>
            </div>
        </section>

    )
}

export default ParticleText
