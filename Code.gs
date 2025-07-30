function createDocsFromSheetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var templateFileId = 'YOUR_TEMPLATE_FILE_ID'; // Thay YOUR_TEMPLATE_FILE_ID bằng ID của tài liệu mẫu

  for (var i = 1; i < data.length; i++) {

    var ten = data[i][2];
    var diachi = data[i][6];
    var cccd = data[i][1];
    var ngaycap = data[i][7];
    var noicap = data[i][8];
        var mst = data[i][9];

    var so1 = data[i][11];
    var so2 = data[i][12];
    var so3 = data[i][13];
    var so4 = data[i][14];
    var so5 = data[i][15];
    var so6 = data[i][16];
    var so7 = data[i][17];
    var so8 = data[i][18];
    var so9 = data[i][19];
    var so10 = data[i][20]
    var so11 = data[i][21];




    var doc = DriveApp.getFileById(templateFileId).makeCopy(ten);
    var docId = doc.getId();
    var docBody = DocumentApp.openById(docId).getBody();

    // Điền dữ liệu từ bảng Sheets vào tài liệu Google Docs
    docBody.replaceText('{{ten}}', ten);
    docBody.replaceText('{{diachi}}', diachi);
    docBody.replaceText('{{cccd}}', cccd);
    docBody.replaceText('{{ngaycap}}', ngaycap);
    docBody.replaceText('{{noicap}}', noicap);
    docBody.replaceText('{{mst}}', mst);


  }
}
