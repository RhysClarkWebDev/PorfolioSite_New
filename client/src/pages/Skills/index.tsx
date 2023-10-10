import React from 'react'
import { Helmet } from 'react-helmet'

// COMPONENTS
import PageIntro from '@/Components/PageIntro'
import SkillProgess from '@/Components/SkillProgress'


// META DATA
import meta from '@/Data/metaData'

import './style.scss'

function Skills (): React.ReactElement {
    const thisPage = 'skills'

    return (
        <>
            <Helmet>
                <title>{meta[thisPage].title}</title>
                <meta name="description" content={meta[thisPage].description} />
            </Helmet>

            <main id="page-content">
                <PageIntro
                    title="Skills"
                    paragraphs={[
                        `I possess a strong drive to constantly expand my knowledge of both front-end and 
                        back-end languages, ensuring my ability to contribute effectively to a wide range 
                        of projects. My goal is to secure a position within a collaborative team where I 
                        can apply my skills and make a meaningful impact.`,

                        `I am actively seeking employment opportunities and would be thrilled to be part 
                        of a dynamic organization. If you are a recruiter looking for a dedicated and 
                        skilled professional, check out my CV / Resume.`
                    ]}
                />
                <section className="skills">
                    <div className='skills-segment'>
                        <h2>LANGUAGES / FRAMEWORKS</h2>
                        <div className="skills-grid">
                            <SkillProgess name="React" percentage={90}/>
                            <SkillProgess name="CSS / SCSS" percentage={90}/>
                            <SkillProgess name="HTML" percentage={90}/>
                            <SkillProgess name="Javascript" percentage={80}/>
                            <SkillProgess name="jQuery" percentage={70}/>
                            <SkillProgess name="Node.js" percentage={70}/>
                            <SkillProgess name="Express" percentage={70}/>
                            <SkillProgess name="EJS" percentage={50}/>
                            <SkillProgess name="PHP" percentage={55}/>
                            <SkillProgess name="MongoDB" percentage={70}/>
                            <SkillProgess name="MySQL" percentage={60}/>
                        </div>
                    </div>


                    <div className='skills-segment'>
                        <h2>OTHER SKILLS</h2>
                        <div className='skills-grid'>
                            <SkillProgess name="REST API" percentage={90}/>
                            <SkillProgess name="GIT" percentage={85}/>
                            <SkillProgess name="UI/UX" percentage={70}/>
                            <SkillProgess name="SEO" percentage={90}/>
                            <SkillProgess name="Google Cloud" percentage={90}/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}




export default Skills
