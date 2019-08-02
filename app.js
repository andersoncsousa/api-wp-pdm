// https://prazeresdamesa.uol.com.br/wp-json/wp/v2/posts
const axios = require('axios')
const readline = require('readline-sync')

// import { get } from 'axios';
// import { question } from 'readline-sync'; 

async function start(){
    const post = buscaPost()
    const api = await returnJSON(post)

    const title = api.data.title.rendered
    const conteudo =  api.data.content.rendered

    const autor = api.data.author

    console.log(`
        Title: ${title}
        Perfil: ${conteudo}
        Autor: ${autor}
    `)

    document.getElementById('perfil').innerHTML = `<h1>${title}</h1>`
}

async function returnJSON(post){
    const response = await get(`https://prazeresdamesa.uol.com.br/wp-json/wp/v2/posts/${post}`)
    return response
}

function buscaPost(){
    return question('Qual nome do post: ')
}

start()