import { css } from 'styled-components'

import LatoLight from '../fonts/Lato/Lato-Light.ttf'
import LatoRegular from '../fonts/Lato/Lato-Regular.ttf'
import LatoMedium from '../fonts/Lato/Lato-Medium.ttf'
import LatoSemibold from '../fonts/Lato/Lato-Semibold.ttf'

import LatoRegularItalic from '../fonts/Lato/Lato-Italic.ttf'
import LatoMediumItalic from '../fonts/Lato/Lato-MediumItalic.ttf'
import LatoSemiboldItalic from '../fonts/Lato/Lato-SemiboldItalic.ttf'

const latoNormalWeights = {
    300: LatoLight,
    400: LatoRegular,
    500: LatoMedium,
    600: LatoSemibold
}

const latoItalicWeights = {
    400: LatoRegularItalic,
    500: LatoMediumItalic,
    600: LatoSemiboldItalic
}

const lato = {
    name: 'Lato',
    normal: latoNormalWeights,
    italic: latoItalicWeights
}

const createFontFaces = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, file] of Object.entries(family[style])) {
        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${file}) format('ttf');
                font-weight: ${weight};
                font-style: ${styles};
                font-display: auto;
            }
        `
    }

    return styles
}

const latoNormal = createFontFaces(lato)
const latoItalic = createFontFaces(lato, 'italic')

const Fonts = css`
    ${latoNormal + latoItalic}
`

export default Fonts;