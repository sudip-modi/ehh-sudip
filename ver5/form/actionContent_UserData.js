//This is user data
var actionStorySample = {
    name: 'actionStorySample',
    id:'actionStorySample',
    innerHTML: actionUserContent,
    class: 'editable actionContent',
    'before': 'name'
    //  contentEditable: true
}

var actionUserContent = [
    {
        "name": 'block',
        'id': "block1",
        'innerHTML': `
        Welcome! This is a private page for you to play around with.
        <br>Bring the cursor to the end of this line and start styping.
        <br>https://alistapart.com/article/javascript-mvc/
        <br>https://github.com/bronzwikgk/everything-Happens-Here-Ver-O.1 
        <br>https://web.dev/local-fonts/
        <br> https://www.youtube.com/watch?v=Troaz3rGzTY
        <br>https://bgrins.github.io/devtools-snippets
        <br>https://htmldom.dev/make-a-resizable-element/
        <br>https://htmldom.dev/create-resizable-split-views/`
        }

        ]

// const sampleNote0 = {
//     id: uuid(),
//     text: `# Scratchpad The easiest note to find.`,
//     category: '',
//     scratchpad: true,
//     class:'richText',
//     favorite: false,
//     created: dayjs().format(),
//     lastUpdated: dayjs().format(),
// }