import React from 'react'
import useHandlePageChange from '@/Helpers/HandlePageChange'



// STYLES
import './style.scss'


interface PageType {
    name: string
    link: string
}

interface ButtonType {
    previousPage?: PageType
    nextPage?: PageType
}

function NextPrevButtons ({ previousPage, nextPage }: ButtonType): React.ReactElement {
    const handlePageChange = useHandlePageChange()


    function handleClick (to: string): void {
        handlePageChange(to)
    }

    return (
        <div className="page-controls">
            <div className="next-prev-buttons">
                {previousPage !== undefined &&
                <div
                    className="arrow-button-container previous link-hover-effect"
                    onClick={() => { handleClick(previousPage.link) }}
                >
                    <p>{previousPage?.name}</p>
                    <div className="arrow-button"/>
                </div>
                }

                {nextPage !== undefined &&
                <div
                    className="arrow-button-container next link-hover-effect"
                    onClick={() => { handleClick(nextPage.link) }}
                >
                    <p>{nextPage?.name}</p>
                    <div className="arrow-button"/>
                </div>
                }
            </div>
        </div>

    )
}




export default NextPrevButtons
