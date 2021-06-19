class FileFolders {
  jsonForFolderV1(parent,obj){
    var id = parent.getId();
    var json = JSON.parse(JSON.stringify({}));
    json['name'] = parent.getName();json['id'] = id;json['children'] = {};
    obj[id] = json;
    var folders = parent.getFolders();
    while(folders.hasNext()){
      var folder = folders.next();
      jsonForFolderV1(folder,obj[id]['children']);
    }
    var files = parent.getFiles();
    while(files.hasNext()){
      var child = JSON.parse(JSON.stringify({}));
      var file = files.next();
      var childId = file.getId();
      child['name'] = file.getName();
      child['id'] = childId;
      obj[id]['children'][childId] = child;
    }
    return obj;
  }
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