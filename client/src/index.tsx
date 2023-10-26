import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CursorProvider } from '@/Contexts/CursorContext'
import { BrowserRouter as Router } from 'react-router-dom'


import { store } from './store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)



root.render(
    <Provider store={store}>
        <CursorProvider>
            <Router>
                <App />
            </Router>
        </CursorProvider>
    </Provider>
)

