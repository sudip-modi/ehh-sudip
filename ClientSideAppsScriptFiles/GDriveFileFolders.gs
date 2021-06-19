class FileFolders {
  jsonForFolderV2(parent,obj){
    obj['name'] = parent.getName();
    obj['id'] = parent.getId();
    obj['children'] = [];
    var folders = parent.getFolders();
    while(folders.hasNext()){
      var folder = folders.next();
      obj.children.push({});
      FileFolderInstance.jsonForFolderV2(folder,obj.children[obj.children.length -1]);
    }
    var files = parent.getFiles();
    while(files.hasNext()){
      var child = JSON.parse(JSON.stringify({}));
      var file = files.next();
      var childId = file.getId();
      child['name'] = file.getName();
      child['id'] = childId;
      obj.children.push(child);
    }
    return obj;
  }
}
var FileFolderInstance = new FileFolders();