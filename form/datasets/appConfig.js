var activeListerners = {
    document: {
        'onhashchange': 'callback',
        'onclick':'callback',
    }
}

console.log("loaded",Object.values(activeListerners))