import React, { createContext, useContext, useRef } from 'react'

// Define a custom type to represent the shape of the context value
interface CursorContextValue {
    mouseOuter: React.RefObject<HTMLDivElement> | null
    mouseInner: React.RefObject<HTMLDivElement> | null
}

// Create a context with the specified context value type
const CursorContext = createContext<CursorContextValue | undefined>(undefined)

export function useCursor (): CursorContextValue | undefined {
    return useContext(CursorContext)
}

export function CursorProvider ({ children }: { children: React.ReactElement }): React.ReactElement {
    const mouseOuter = useRef<HTMLDivElement | null>(null)
    const mouseInner = useRef<HTMLDivElement | null>(null)

    const contextValue: CursorContextValue = {
        mouseOuter,
        mouseInner
    }

    return (
        <CursorContext.Provider value={contextValue}>
            {children}
        </CursorContext.Provider>
    )
}
