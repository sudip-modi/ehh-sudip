
/**
 * The class provides several interfaces for accessing files from a 'local' filesystem:

File - an individual file; provides readonly information such as name, file size, mimetype, and a reference to the file handle.
FileList - an array-like sequence of File objects. (Think <input type="file" multiple> or dragging a directory of files from the desktop).
Blob - Allows for slicing a file into byte ranges.
 */


// Some in-memory attributes of the new File objects that will be constructed.
var fileData = {
    'sample.xml': {
        data: '<test>Hello!</test>',
        type: 'application/xml'
    },
    'sample.csv': {
        data: 'Test1,Test2\nHello1,Hello2',
        type: 'text/csv'
    },
    'sample.json': {
        data: JSON.stringify({ test: 'Hello!' }),
        type: 'application/json'
    }
}


/**
 * An entry is either a file entry or a directory entry.

Each entry has an associated name (a string).

A valid file name is a string that is not an empty string, is not equal to "." or "..", and does not contain '/' or any other character used as path separator on the underlying platform.

*/


// var entryModel = {
//     'value': 'null',
//     operate :[operate.isString(value, true)]
    
// }
// var FileSystemPermissionMode = {
//     value : 'null',
//     operate :[isOneOf(value, ["read", "readwrite"], true)]
// }



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
       //  See http://docs.webplatform.org/wiki/apis/file/URL/createObjectURL
        var url = URL.createObjectURL(file, { oneTimeOnly: true });
        return url;

    }

    static async writeURLToFile(fileHandle, url) {
    // Create a FileSystemWritableFileStream to write to.
    const writable = await fileHandle.createWritable();
    // Make an HTTP request for the contents.
    const response = await fetch(url);
    // Stream the response into the file.
    await response.body.pipeTo(writable);
    // pipeTo() closes the destination pipe by default, no need to close it.
}

    /**
       * Writes the contents to disk.
       *
       * @param {FileSystemFileHandle} fileHandle File handle to write to.
       * @param {string} contents Contents to write.
       */
     static async writeFile(fileHandle, contents) {
        console.log("writing File", fileHandle, contents)

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
    /**
 * Reads the raw text from a file.
 *
 * @param {File} file
 * @return {!Promise<string>} A promise that resolves to the parsed string.
 */
    static readFile(file) {
    // If the new .text() reader is available, use it.
    if (file.text) {
        return file.text();
    }
    if (file.type && file.type.indexOf('image') != -1) { 
        return this.readImage(file);
    }
    // Otherwise use the traditional file reading technique.
    return _readFileLegacy(file);
}

/**
 * Reads the raw text from a file.
 *
 * @private
 * @param {File} file
 * @return {Promise<string>} A promise that resolves to the parsed string.
 */
    static _readFileLegacy(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', (e) => {
            const text = e.srcElement.result;
            resolve(text);
        });
        reader.readAsText(file);
    });
}
    static readImage(file) {
        // Check if the file is an image.
        if (file.type && file.type.indexOf('image') === -1) {
            console.log('File is not an image.', file.type, file);
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            img.src = event.target.result;
        });
        return reader.readAsDataURL(file);
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
    static openFileHandle() {
        console.log("opening open file handle")
        const opts = {
            suggestedStartLocation: 'pictures-library',
            multiple: false,
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
    static async openFolderHandle() { 
    const dirHandle = await window.showDirectoryPicker();
    }


    static download(text, name, type) {
        var a = document.getElementById("actionBlockCollection");
        var file = new Blob([text], { type: type });
        a.href = URL.createObjectURL(file);
        a.download = name;
    }
   static getMetadataForFileList(fileList) {
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
  
    static abortRead() {
        reader.abort();
    }
    static updateProgress(evt) {
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
    static errorHandler(evt) {
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
    static async verifyPermission(fileHandle, readWrite) {
    const options = {};
    if (readWrite) {
        options.mode = 'readwrite';
    }
    // Check if permission was already granted. If so, return true.
    if ((await fileHandle.queryPermission(options)) === 'granted') {
        return true;
    }
    // Request permission. If the user grants permission, return true.
    if ((await fileHandle.requestPermission(options)) === 'granted') {
        return true;
    }
    // The user didn't grant permission, so return false.
    return false;
}
}

// processFile.verifyPermissions()