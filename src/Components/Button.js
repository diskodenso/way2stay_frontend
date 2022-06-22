import React from 'react'

const Button = ({ bg, textcolor, link, value, classes }) => {
    return (
        <a href={`${link}`} className={`bg-${bg} text-${textcolor} hover:text-${bg} hover:bg-${textcolor} p-2 rounded border ${classes}`} >{value}</a>
    )
}

export default Button