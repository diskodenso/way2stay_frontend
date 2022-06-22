module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "green": '#32d081',
            "lightgreen": '#ccefab',
            "red": '#f66867',
            "yellow": '#f7dd7d',
            "lightblue": '#5bc5ea',
            "blue": '#3d93dd',
            "gray": "#505050",
            "white": "#ffffff",
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