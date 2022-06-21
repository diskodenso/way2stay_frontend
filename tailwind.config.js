module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'green': '#32BD081',
            'lightgreen': '#CCEFAB',
            'red': '#F66867',
            'yellow': '#F7DD7D',
            'lightblue': '#5BCEA',
            'blue': '#3D93DD',
            'gray': '#505050',
        },
        extend: {
            fontFamily: {
                heading: ['Josefin Sans', 'sans-serif'],
                text: ['Maven Pro', 'serif'],
                script: ['Handlee'],
            },
        },
    },
    plugins: [],
}