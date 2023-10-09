const list = document.querySelector('#list')
const gifs = document.querySelector('#gifs')
const searchBtn = document.querySelector('#search-btn')
const removeBtn = document.querySelector('#remove-btn')
const input = document.querySelector('#text')

async function getGif() {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'x8h9uRfzFCJmAgLCyQ64QjpR9GFVnkM6', q: `${input.value}`}})
    const resData = res.data.data
    const arr = []
    for (let data of resData) {
        const urlData = data.images.original.url
        arr.push(urlData)
    }
    const random = arr[Math.floor(Math.random() * arr.length)]
    const img = document.createElement('img')
    img.src = random
    gifs.appendChild(img)
}

searchBtn.addEventListener('click', function(e) {
    e.preventDefault()
    getGif()
    input.value = ''
})

removeBtn.addEventListener('click', function(e) {
    e.preventDefault()
    gifs.remove()
})