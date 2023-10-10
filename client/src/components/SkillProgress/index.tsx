import React, { useEffect, useState } from 'react'
import './style.scss'

interface SkillProgressType {
    name: string
    percentage: number
}

function SkillProgress ({ name, percentage }: SkillProgressType): React.ReactElement {
    const strokeWidth = 18
    const radius = 70
    const circumference = 2 * Math.PI * radius
    const circleScale = 180

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let currentProgress = 0
        const increment = (): void => {
            if (currentProgress < percentage) {
                setProgress((currentProgress / 100) * circumference)
                currentProgress++
                requestAnimationFrame(increment)
            }
        }
        requestAnimationFrame(increment)
    }, [percentage])

    return (
        <div className="skill">
            <svg className={'progress-ring'} width={circleScale} height={circleScale}>
                <circle
                    className="progress-ring-circle"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={circleScale / 2}
                    cy={circleScale / 2}
                />
                <circle
                    className={'progress-ring-progress'}
                    strokeWidth={strokeWidth - 2}
                    fill="transparent"
                    r={radius}
                    cx={circleScale / 2}
                    cy={circleScale / 2}
                    style={{ strokeDasharray: circumference, strokeDashoffset: circumference - progress }}
                />
            </svg>
            <div className="skill-spec">
                <div className="skill-name">{name}</div>
                <div className="percentage">{percentage}%</div>
            </div>
        </div>
    )
}

export default SkillProgress
