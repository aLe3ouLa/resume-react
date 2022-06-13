import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import theme, { Defaults } from './styles'
import { ThemeProvider } from 'styled-components'

const container = document.getElementById('root')
const root = createRoot(container!)

const reactRoot: React.ReactNode = (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Defaults />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)

root.render( reactRoot)
