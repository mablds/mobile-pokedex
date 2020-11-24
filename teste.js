const a = require('./src/public/pokeList.json')

const a = [
    {
        "slot": 1, 
        "type": {
            "name": "fire", 
            "url": "https://pokeapi.co/api/v2/type/10/"
        }
    }, 
    {
        "slot": 2, 
        "type": {
            "name": "flying", 
            "url": "https://pokeapi.co/api/v2/type/3/"
        }
    }
]

a.map((el) => {
    if(el.name == 'charizard') {
        el.types.map(ele => {
            console.log(ele.type.name)
        })
    }
})