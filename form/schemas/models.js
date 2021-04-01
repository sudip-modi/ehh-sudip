
var directoryJSON = {
    'li': {
        'name': 'li',
        'span': {
            'name': 'span',
            'class': 'parent',
            "textContent": '', //inner Text will be included
        },
        'list': {
            'name': 'ul',
            'class': 'nested',
            'id': '' //id - Unique ID with which directory handle of this folder can ke retrieved from indexDB
        }
    }
}
var fileJSON = {
    'name': 'li',
    'id': '', //id - Unique ID with which file handle of this file retrieved from indexDB
    //'class':'file'//used for opening a file
    "textContent": '',
    //innerText - name of the file
    'data-command': `[{"command":"file"}]`,
}
const pickerOpts = {
    types: [
        {
            description: '.txt,.html,.js,.json,.csv,.xml,.xlsx,.jpg,.jpeg,.png,.mp4',
            accept: {
                'text/*': ['.txt', '.html', '.json', '.js', '.xml', '.csv'],
                'image/*': ['.jpg', '.jpeg', '.png'],
                'video/*': ['.mp4'],
            }
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false
};