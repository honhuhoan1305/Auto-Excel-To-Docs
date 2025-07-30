# 📄 Tự Động Tạo Google Docs từ Google Sheets với Google Apps Script

Một script đơn giản giúp bạn **tạo hàng loạt tài liệu Google Docs từ dữ liệu trong Google Sheets** dựa trên một file template có sẵn. Phù hợp với các tình huống như: tạo hợp đồng, giấy xác nhận, thư mời... chỉ với một cú click chuột.

---

## 🚀 Tính năng

- ✅ Đọc dữ liệu từ Google Sheets
- ✅ Dùng template Google Docs để điền dữ liệu tự động
- ✅ Tạo một bản Google Docs cho mỗi dòng dữ liệu
- ✅ Hỗ trợ nhiều trường thông tin (họ tên, địa chỉ, CCCD, mã số thuế, v.v.)
- ✅ Tự động điền 11 biến số (so1 → so11)
- ✅ Bỏ qua dòng trống trong sheet

---

## 🧠 Cách hoạt động

1. Bạn chuẩn bị một **Google Docs template** có chứa các biến kiểu `{{ten}}`, `{{diachi}}`, `{{cccd}}`, `{{so1}}`, ...
2. Trên Google Sheets, bạn nhập dữ liệu tương ứng vào các cột.
3. Chạy Apps Script, mỗi dòng trong Sheets sẽ tạo ra một Google Docs mới được điền sẵn thông tin.

---

## 🛠️ Hướng dẫn sử dụng

### 1. Tạo Google Docs Template

Trong tài liệu, chèn các placeholder như:

```text
Họ tên: {{ten}}
Địa chỉ: {{diachi}}
CCCD: {{cccd}}
Ngày cấp: {{ngaycap}}
Nơi cấp: {{noicap}}
MST: {{mst}}

Số liệu:
- {{so1}}, {{so2}}, ..., {{so11}}


2. Chuẩn bị Google Sheets
Tạo một Google Sheet có dữ liệu theo thứ tự cột như sau:

STT	CCCD	Họ tên	...	Địa chỉ	Ngày cấp	Nơi cấp	MST	...	so1	so2	...	so11

3. Thêm Script vào Sheets
Vào Extensions > Apps Script

Dán đoạn code sau vào:

javascript
Sao chép
Chỉnh sửa
function createDocsFromSheetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var templateFileId = 'YOUR_TEMPLATE_FILE_ID'; // <-- Thay ID tại đây

  for (var i = 1; i < data.length; i++) {
    var ten = data[i][2];
    if (!ten) continue;

    var diachi = data[i][6];
    var cccd = data[i][1];
    var ngaycap = data[i][7];
    var noicap = data[i][8];
    var mst = data[i][9];

    var doc = DriveApp.getFileById(templateFileId).makeCopy("Hợp đồng - " + ten);
    var docId = doc.getId();
    var docBody = DocumentApp.openById(docId).getBody();

    docBody.replaceText('{{ten}}', ten);
    docBody.replaceText('{{diachi}}', diachi);
    docBody.replaceText('{{cccd}}', cccd);
    docBody.replaceText('{{ngaycap}}', ngaycap);
    docBody.replaceText('{{noicap}}', noicap);
    docBody.replaceText('{{mst}}', mst);

    for (var j = 1; j <= 11; j++) {
      docBody.replaceText('{{so' + j + '}}', data[i][10 + j]);
    }
  }
}
4. Chạy script
Nhấn nút ▶️ để chạy hàm createDocsFromSheetData

Cấp quyền truy cập nếu được yêu cầu (Google sẽ hỏi một lần đầu)

📁 Kết quả
Các file Google Docs sẽ được tạo trong Google Drive của bạn

Tên file theo định dạng: Hợp đồng - [Họ tên]

📌 Ghi chú
Script này chỉ chạy trong cùng tài khoản Google (không dùng được cho người ngoài nếu không cấp quyền).

Có thể kết hợp thêm:

Xuất file PDF

Gửi email đính kèm

Lưu vào thư mục cụ thể

🧪 Demo (tuỳ chọn)
[link đến video hoặc ảnh demo nếu có]

❤️ Tác giả
Anh Hoan
Lập trình viên web & yêu tự động hoá
