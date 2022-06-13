import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/styles'

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

const ThemeDecorator = (storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
