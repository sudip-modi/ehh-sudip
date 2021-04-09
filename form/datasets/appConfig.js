var activeListerners = {
    'window': {
        'onhashchange': 'callback',
        'onclick':'callback',
    }
}

console.log("loaded",Object.keys(activeListerners['window']))