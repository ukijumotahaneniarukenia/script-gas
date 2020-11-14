function doGet(e) {
  let response = {
    data: getRootFolderDirectBelowList(),
    meta: { status: "success" },
  };
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function getRootFolderDirectBelowList() {
  let rootFolderId = DriveApp.getRootFolder().getId();
  let files = DriveApp.getFolderById(rootFolderId).getFiles();
  let resultList = [];
  while (files.hasNext()) {
    let file = files.next();
    resultList.push({
      name: file.getName(),
      description: file.getDescription(),
      url: file.getUrl(),
    });
  }
  return resultList;
}

// console.log(getRootFolderDirectBelowList());
