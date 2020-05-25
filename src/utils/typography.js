import Typography from "typography"

const typography = new Typography({
    googleFonts: [
        {
            name: 'Exo',
            styles: ['700', '600', '500'],
        },
        {
            name: 'PT Sans',
            styles: ['400', '700'],
        },
    ],
    headerFontFamily: ['Exo', 'Helvetica Neue', 'sans-serif'],
    bodyFontFamily: ['PT Sans', 'sans-serif'],
    baseFontSize: '24pt',
    headerWeight: 700,
})

export default typography