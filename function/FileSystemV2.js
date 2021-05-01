var fileHandle,defaultGetStoreFunc;;
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
    // static async readFile(event){
    //     event.preventDefault();
    //     if(fileHandle){
    //         if(confirm('Want to erase all the changes made it to the file')){
    //             await processFS.Open(event);
    //         }
    //     }else{
    //         await processFS.Open(event);
    //     }
    // }
    // async OpenFileV2(event, handle) {
    //     var response={};
    //     event.preventDefault();
    //     if(!handle){
    //         [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    //     }else{
    //         fileHandle = handle;
    //     }
    //    // console.log(fileHandle);
    //     var contents;
    //     var file = await fileHandle.getFile();
    //     if(file['name'].includes('.json') || file['name'].includes('.txt')|| file['name'].includes('.html')|| file['name'].includes('.js')||file['name'].includes('.xml')){
          
    //         response['name'] = file['name'];
    //         response['file'] = file;
    //         response['content'] = await file.text();
    //       // console.log(file['name'], response);
    //         return response;
    //       //  ActionView.updateTitle(file['name']);
    //        // ActionView.updateInnerText(contents);
    //     }else if(file['name'].includes('.xlx') || file['name'].includes('.xlsx')|| file['name'].includes('.csv')){
    //         console.log("Work In Progress");
    //     }else if(file['type'].includes('image') ||file['name'].includes('.JPG') ||file['name'].includes('.JPEG') ||file['name'].includes('.PNG')){
    //        var reader = new FileReader();
    //        reader.addEventListener("load", function () {
    //         var image = new Image();
    //         image.title = file.name;
    //         image.width = '460';image.height = '380';
    //            image.src = reader.result;
    //            console.log(image);
    //        // ActionView.updateTitle(file['name']);
    //       //  ActionView.displayImage(image);
    //        }, false);
    //         console.log(image);
    //         reader.readAsDataURL(file);
    //     }else if(file['name'].includes('mp4')){
    //         var reader = new FileReader();
    //         reader.addEventListener("load", function () {
    //          var html = '<video src="' + reader.result + '" width="460" height="380" controls></video>'
    //       //   ActionView.updateTitle(file['name']);
    //         // ActionView.updateText(html);
    //        }, false);
    //        reader.readAsDataURL(file);
    //     }else{
    //         console.log("Not supported");
    //     }

    // }
    // async OpenDirectoryV2(event) {
    //     event.preventDefault();
    //     try {
    //         const response = await window.showDirectoryPicker();
    //         console.log("returning", response);
    //         return response;
 
    //     } catch (err) {
    //         console.log(err);
    //     }

    // }
    // static async saveFile(event){
    //     event.preventDefault();
    //     console.log("Saving File");
    //     var editor = document.getElementById('inlineContent');
    //     var fileHandle = await indexDB.get(editor.getAttribute('fileid'));
    //     if(operate.isArray(fileHandle))
    //         fileHandle = fileHandle[0];
    //     var writable =  await fileHandle.createWritable();
    //     await writable.write(editor.innerText);
    //     await writable.close();
    // }
    // static async OpenDirectory(event){
    //     event.preventDefault();
    //     try {
    //         const dirHandle = await window.showDirectoryPicker();
    //         if(await processFS.verifyPermission(dirHandle,true)){
    //             var dirID = uid();await indexDB.set(dirID, dirHandle);

    //             var input = JSON.parse(JSON.stringify(directoryJSON));
    //             input['li']['span']['textContent'] = dirHandle.name; input['li']['list']['id'] = dirID;
    //             var json = await processFS.jsonForDirectory(input['li']['list'], dirHandle);
    //             var data = new Entity(input, document.getElementById('myCollection'));
    //             localStorage.setItem('UsermyCollection',document.getElementById('myCollection').innerHTML);
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // static verifyPermissions() {
    //     // Check for the various File API support.
    //     if (window.File && window.FileReader && window.FileList && window.Blob) {
    //         console.log("Great success! All the File APIs are supported.");
    //         return true; // 
    //     } else {
    //         alert('The File APIs are not fully supported in this browser.');
    //         return false; // 
    //     }
    // }
     /**
     * 
     * @param {*} fileID - id of File with which FileHandle is stored
     * @param {*} collectionId - whether JSON is required for myFiles/RecentFiles
     * @param {*} fileHandle - FileHandle of the file
     * jsonForFile
     * Appends fileName, id in a fileJSON 
     * Build a HTML from fileJSON using Entity and modifies Local Storage Item
     */
    // static async jsonForFile(fileID,collectionId,fileHandle){
    //     try{
    //         var input = {};
    //         input[fileID] = JSON.parse(JSON.stringify(fileJSON));
    //         input[fileID]['id'] = fileID;
    //         if(operate.isNotEmpty(fileHandle)){
    //             var file =await  fileHandle.getFile();
    //             input[fileID]['textContent'] = file.name;
    //         }else{
    //             input[fileID]['textContent'] = fileID;
    //         }
    //         console.log(input);
    //         var data = new Entity(input,document.getElementById(collectionId));
    //         localStorage.setItem('User'+collectionId,document.getElementById(collectionId).innerHTML);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    //file folder
    /**
     * 1.saves the Previous viewed by User
     * 2.Makes the entry of previous file in RecentFiles
     * 3.Opens a new  action story
     */
    // static async newFile(){
    //     try{
    //         await engine.processReq(saveFileFlowRequest);//processFS.saveFile(event);
    //         await engine.processReq(recentFilesFlowRequest);
    //         await engine.processReq(newFileFlowRequest);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    /**
     * OpenFile 
     * 1.saves the Previous viewed by User
     * 2.Makes the entry of previous file in RecentFiles
     * 3.Opens a new File makes a entry in myFiles
     */
    // static async OpenFile(){
    //     try{
    //         await engine.processReq(saveFileFlowRequest);//processFS.saveFile(event);
    //         await engine.processReq(recentFilesFlowRequest);
    //         await engine.processReq(OpenAFileFlowRequest);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    /**
     * 
     * @param {*} event - To Know which file name is clicked by the user
     * File
     * 1.saves the Previous viewed by User
     * 2.Makes the entry of previous file in RecentFiles
     * 3.Set Attribute fileID to Id of the file on which user has clicked
     * 4.Open that file in the editor
     */
    // static async File(event){
    //     event.preventDefault();
    //     try{
    //         await engine.processReq(saveFileFlowRequest);
    //         await engine.processReqArray(recentFilesFlowRequest);
    //         document.getElementById('inlineContent').setAttribute('fileid',event.target.id);
    //         await processFS.OpenFileInEditor(event.target.id);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
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
        console.log(id);
        if(localStorage.getItem(id)!== null){
            ActionView.addInnerText(localStorage.getItem(id),document.getElementById('inlineContent'));
        }else{
            var fileHandle = await indexDB.get(id);
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