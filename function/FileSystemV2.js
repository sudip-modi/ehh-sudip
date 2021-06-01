var defaultGetStoreFunc;;
class processFS{
    static newfileObjectURL() {
        var file = new File(["foo"], "foo.txt", {
            type: "text/plain",
        });
        var file = new File([fileData[name].data], name, { type: fileData[name].type, lastModified: Date.now() });
        //  See http://docs.webplatform.org/wiki/apis/file/URL/createObjectURL
        var url = URL.createObjectURL(file, { oneTimeOnly: true });
        return url;
    }
    /**
     * 
     * @param {*} id - File id of file whose content should be displayed in the editor
     * OpenFileInEditor
     * Checks whether id id from LocalStorage or not
     * if from local Storage loads the content in editor
     * or else
     * checks for the type of file and displays it's content in the editor
    */
    async OpenFileInEditor(id) {
        try{  
        if(localStorage.getItem(id)!== null){
            ActionView.addInnerText(localStorage.getItem(id),document.getElementById('inlineContent'));
        }else{
            var fileHandle = await indexDB.get(id);
            console.log(fileHandle);
            if(await processFSInstance.verifyPermission(fileHandle,true)){
                var file = await fileHandle.getFile();
                if (file['name'].includes('.json') || file['name'].includes('.txt') || file['name'].includes('.html') || file['name'].includes('.js') || file['name'].includes('.css')) {
                    var contents = await file.text();
                    ActionView.addInnerText(contents,document.getElementById('inlineContent'));
                }else if (file['type'].startsWith('image/')||file['name'].includes('.JPG') ||file['name'].includes('.JPEG') ||file['name'].includes('.PNG')) {
                    var reader = new FileReader();
                    reader.addEventListener("load", function () {
                        var html = '<image src="' + reader.result + '"width="460" height="380" title="' + file.name + '"></image>';
                        ActionView.addInnerHTML(html, document.getElementById('inlineContent'));
                    }, false);
                    reader.readAsDataURL(file);
                }else if (file['name'].includes('mp4')) {
                    var reader = new FileReader();
                    reader.addEventListener("load", function () {
                        var html = '<video src="' + reader.result + '" width="460" height="380" controls></video>';
                        ActionView.addInnerHTML(html,document.getElementById('inlineContent'));
                    }, false);
                    reader.readAsDataURL(file);
                }else {
                    console.log("Work in Progress");
                }
            }
        } 
    }catch(err){
            console.log(err);
        }
    }
    /**
     * 
     * @param {*} obj - JSON has to be appended to include as a folder in myCollection
     * @param {*} parentHandle - directory Handle for which JSON is required
     * @returns obj
     * jsonForDirectory
     * Loops over dirHandle
     * Checks if Directory - Appends directoryJSON it's id,file and calls jsonForDirectory to loop over it's directoryHandle
     * else if file - appends FileJSON it's id, file
     * 
     */
    async jsonForDirectory(obj, parentHandle) {
        for await (var entry of parentHandle.values()) {
            var id = uid();
            if (entry.kind == 'directory') {
                var directory = JSON.parse(JSON.stringify(directoryJSON));
                directory['li']['span']['textContent'] = entry.name; 
                directory['li']['list']['id'] = id;
                var directoryHandle = await parentHandle.getDirectoryHandle(entry.name);
                await indexDB.set(id, directoryHandle);
                obj[entry.name] = directory;
                await processFSInstance.jsonForDirectory(obj[entry.name]['li']['list'], directoryHandle);
            } else if (entry.kind == 'file' && entry.name.includes('.')) {
                var fileData = JSON.parse(JSON.stringify(fileJSON));
                fileData['id'] = id; fileData['textContent'] = entry.name;
                var getfileHandle = await parentHandle.getFileHandle(entry.name);
                await indexDB.set(id, getfileHandle);
                obj[entry.name] = fileData;
            }
        }
        console.log(obj);
        return obj;
    }
    async jsonForGDriveFolder(folderjson,HTMLjson){
        if(folderjson.hasOwnProperty('children')){
            var directory = JSON.parse(JSON.stringify(directoryJSON));
            directory['li']['span']['textContent'] = folderjson['name']; 
            directory['li']['list']['id'] = folderjson['id'];
            HTMLjson[folderjson['id']] = directory;
            var SubData = HTMLjson[folderjson['id']]['li']['list'];
            for await(var child of folderjson.children){
                    if(child.hasOwnProperty('children')){
                        await processFSInstance.jsonForGDriveFolder(child,SubData);
                    }else{
                        var file = JSON.parse(JSON.stringify(GDrivefileJSON));
                        file['id'] = child['id'];file['textContent'] = child['name'];
                        SubData[child['id']] = file;
                    }
            }
        }
        return HTMLjson[folderjson['id']] ;
    }
    /**
     * 
     * @param {*} obj - JSON to include the tags included in the currentActionStory
     * @param {*} json - children to included in obj
     * @returns 
     */
    async CurrentActionStory(obj,json){
        for(var i =0;i < json.length ;i++){
            var element = json[i];
            var id = uid();
            var name = element.tagName ;
            if(element.attributes.hasOwnProperty('id'))
                name = name + "( " + element.attributes.id.nodeValue + ")";
            if(element.hasOwnProperty('children') &&  (!operate.isEmpty(element.children))){
                var parent = JSON.parse(JSON.stringify(parentJSON));
                parent['li']['list']['id'] = id;parent['li']['span']['textContent'] = name; 
                obj[id] = parent;
                await processFSInstance.CurrentActionStory(obj[id]['li']['list'],element.children);
            }else{
                var child = JSON.parse(JSON.stringify(childJSON));
                child['id'] = id;child['textContent'] = name;
                obj[id] = child;
            }
        }
        return obj;
    }
    /**
     * 
     */
    async ActionStories(data){
        var cardsDivJSON = JSON.parse(JSON.stringify({'div':{'name':'div','class':'cards_wrap'}}))
        for(let i = 0; i < data.length ;i ++){
             var name = 'div'+i;
             var CardJSON = JSON.parse(JSON.stringify(CardViewJSON));
             CardJSON['p']['textContent'] = data[i][0];
             cardsDivJSON['div'][name] = CardJSON;
        }
        return cardsDivJSON;
    }
    /**
     * 
     * @param {*} Handle - FileHandle/DirectoryHandle for which permission is required
     * @param {*} readWrite - if read and write permission needed - True or else if read permission needed false
     * @returns true/false - whether user has given permission or not
     * verifyPermission
     * Checks if permission granted by user or else requests user permission
     */
    async verifyPermission(Handle, readWrite) {
        const options = {};
        if (readWrite) {
            options.mode = 'readwrite';
        }
        // Check if permission was already granted. If so, return true.
        if ((await Handle.queryPermission(options)) === 'granted') {
            return true;
        }
        // Request permission. If the user grants permission, return true.
        if ((await Handle.requestPermission(options)) === 'granted') {
            return true;
        }
        // The user didn't grant permission, so return false.
        return false;
    }
    updateProgress(evt) {
        // evt is an ProgressEvent.
        if (evt.lengthComputable) {
            var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
            // Increase the progress bar length.
            if (percentLoaded < 100) {
                progress.style.width = percentLoaded + '%';
                progress.textContent = percentLoaded + '%';
            }
        }
    }
}
var processFSInstance = new processFS();
//console.log("iam loaded, fs,processFS", processFSInstance)