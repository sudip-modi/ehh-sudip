//https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js
//https://github.com/jimmywarting/StreamSaver.js
//https://web.dev/file-system-access/
//https://wicg.github.io/file-system-access/
//https://github.com/bronzwikgk/text-editor/blob/main/src/inline-scripts/fs-helpers.js
//https://github.com/itibbers/iojson/blob/master/src/index.js
//https://github.com/mixu/react-native-fs/blob/master/FS.common.js


//https://web.dev/file-system-access/
/**
 * processFile version 2 is a file [Object] processor.
 * this module has service workers which allows the conductor/workflow to handle any kind of fileOperations.
 * A model defining a file Object || Directory Object. [ this could be loaded during Installation].
 * method to execute CRUD operations of files.
 * method to verify permissions / mimeTypes. BackGround Save.
 *
 * @return {!mostly FileBlob, with Object and methods useful for other ServiceWorkers.}
 */


//For Eg.createFile should be able to take an input(blob, metadata for attributes, location) and should be able to create a file of mimeTypes 
//allowed in javaScipt


/**
 * fileParts – is an array of Blob/BufferSource/String values.
fileName – file name string.
options – optional object:
lastModified – the timestamp (integer date) of last modification.
 */
//new File(fileParts, fileName, [options])

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
    console.log("file System Supported")
} else {
    alert('The File APIs are not fully supported in this browser.');
}

/**
 * Chrome allows the use of a maximum of 50% of the available disk space to store files temporarily, with each website limited to using 20% of that space.
 * 
 */

// window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024, SaveDatFileBro);
// window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024, SaveDatFileBro);



// navigator.webkitPersistentStorage.requestQuota(1024 * 1024, function () {
//     console.log("requesting permission")
//     window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024, SaveDatFileBro);

// })

class processFile { 
    constructor() { 
        var reader;
        var progress = document.querySelector('.percent');
        var files = evt.target.files;// FileList object// files is a FileList of File objects. 
    }
    static newfile() {
        var file = new File(["foo"], "foo.txt", {
            type: "text/plain",
        });
        var file = new File([fileData[name].data], name, { type: fileData[name].type, lastModified: Date.now() });
        // See http://docs.webplatform.org/wiki/apis/file/URL/createObjectURL
        var url = URL.createObjectURL(file, { oneTimeOnly: true });
    }
    readFile() { 

    }

     static download(text, name, type) {
         var a = document.getElementById("actionBlockCollection");
         var file = new Blob([text], { type: type });
         a.href = URL.createObjectURL(file);
    a.download = name;
}
    getMetadataForFileList(fileList) {
        for (const file of fileList) {
            // Not supported in Safari for iOS.
            const name = file.name ? file.name : 'NOT SUPPORTED';
            // Not supported in Firefox for Android or Opera for Android.
            const type = file.type ? file.type : 'NOT SUPPORTED';
            // Unknown cross-browser support.
            const size = file.size ? file.size : 'NOT SUPPORTED';
            console.log({ file, name, type, size });
        }
    }
    
    readImage(file) {
        // Check if the file is an image.
        if (file.type && file.type.indexOf('image') === -1) {
            console.log('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            img.src = event.target.result;
        });
        reader.readAsDataURL(file);
    }

/**
 * Writes the contents to disk.
 *
 * @param {FileSystemFileHandle} fileHandle File handle to write to.
 * @param {string} contents Contents to write.
 */
   static async writeFile(fileHandle, contents) {
    // Support for Chrome 82 and earlier.
    if (fileHandle.createWriter) {
        // Create a writer (request permission if necessary).
        const writer = await fileHandle.createWriter();
        // Write the full length of the contents
        await writer.write(0, contents);
        // Close the file and write the contents to disk
        await writer.close();
        return;
    }
    // For Chrome 83 and later.
    // Create a FileSystemWritableFileStream to write to.
    const writable = await fileHandle.createWritable();
    // Write the contents of the file to the stream.
    await writable.write(contents);
    // Close the file and write the contents to disk.
    await writable.close();
}

    saveFile() { 

    }
    abortRead() {
        reader.abort();
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
       errorHandler(evt) {
           switch (evt.target.error.code) {
               case evt.target.error.NOT_FOUND_ERR:
                   alert('File Not Found!');
                   break;
               case evt.target.error.NOT_READABLE_ERR:
                   alert('File is not readable');
                   break;
               case evt.target.error.ABORT_ERR:
                   break; // noop
               default:
            alert('An error occurred reading this file.');
    };
    }
    static verifyPermissions() {
        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            console.log("Great success! All the File APIs are supported.");
            return true; // 
        } else {
            alert('The File APIs are not fully supported in this browser.');
            return false; // 
        }
    }
   /**
 * Create a handle to a new (text) file on the local file system.
 *
 * @return {!Promise<FileSystemFileHandle>} Handle to the new file.
 */
    static getNewFileHandle() {
    // For Chrome 86 and later...
    if ('showSaveFilePicker' in window) {
        const opts = {
            types: [{
                description: 'Text file',
                accept: { 'text/plain': ['.txt'] },
            }],
        };
        return window.showSaveFilePicker(opts);
    }
    // For Chrome 85 and earlier...
    const opts = {
        type: 'save-file',
        accepts: [{
            description: 'Text file',
            extensions: ['txt'],
            mimeTypes: ['text/plain'],
        }],
    };
    return window.chooseFileSystemEntries(opts);
}
    static getFileHandle() {
        const opts = {
            types: [
                {
                    description: 'Text Files',
                    accept: {
                        'text/plain': ['.txt', '.text'],
                        'text/html': ['.html', '.htm']
                    }
                }
            ]
        };
        return window.showOpenFilePicker(opts);
    }
    static saveNewFileHandle() {
        // For Chrome 86 and later...
        if ('showSaveFilePicker' in window) {
            const opts = {
                types: [{
                    description: 'Text file',
                    accept: { 'text/plain': ['.txt'] },
                }],
            };
            return window.showSaveFilePicker(opts);
        }
        // For Chrome 85 and earlier...
        const opts = {
            type: 'save-file',
            accepts: [{
                description: 'Text file',
                extensions: ['txt'],
                mimeTypes: ['text/plain'],
            }],
        };
        return window.chooseFileSystemEntries(opts);
    }
}

//https://code-boxx.com/create-save-files-javascript/
//https://gist.github.com/liabru/11263260
//https://github.com/GoogleChromeLabs/text-editor/blob/main/src/inline-scripts/idb-keyval-iife.js

//processFile.writeFile();

function saveBlob(blob, fileName) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};

saveBlob(file, 'test.zip');