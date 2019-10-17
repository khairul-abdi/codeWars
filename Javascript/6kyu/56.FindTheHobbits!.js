function findHobbitsIn(manifest) {
    let arr = []
    for (const key in manifest) {
        // console.log(manifest[key])
        let sentences = manifest[key].race
        if (sentences.includes('Hobbit')) {
            arr.push(manifest[key])
        }
    }
    return arr
}

manifest = [{
        name: 'Aragorn',
        race: 'Human',
        home: 'Kingdom of Men'
    },
    {
        name: 'Bilbo',
        race: 'Hobbit',
        home: 'The Shire'
    },
    {
        name: 'Tom Bombadil',
        race: null,
        home: 'The Forest'
    }
]

console.log(findHobbitsIn(manifest), [{
    name: 'Bilbo',
    race: 'Hobbit',
    home: 'The Shire'
}])