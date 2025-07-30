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
🛠️ Hướng dẫn sử dụng
1. Tạo Google Docs Template
Mở Google Docs mới

Chèn các biến placeholder ở những chỗ cần điền dữ liệu, ví dụ:

text
Sao chép
Chỉnh sửa
Họ tên: {{ten}}
Địa chỉ: {{diachi}}
CCCD: {{cccd}}
Ngày cấp: {{ngaycap}}
Nơi cấp: {{noicap}}
Mã số thuế: {{mst}}

Số liệu bổ sung:
- {{so1}}, {{so2}}, ..., {{so11}}
💡 Tip: Đừng bỏ sót {{}}, vì đó là cách script nhận biết chỗ cần thay dữ liệu.

2. Lấy ID file template
Sau khi tạo xong template, copy ID trên URL:

bash
Sao chép
Chỉnh sửa
https://docs.google.com/document/d/1sWRwNjPROTxANN7IC6xNdlP9AyB9twanUUTImORjhy8/edit
                             ↑↑↑ Đây là ID
Gán ID này vào biến templateFileId trong đoạn script.

3. Chuẩn bị Google Sheets
Dòng đầu tiên là tiêu đề cột (có hoặc không đều được)

Từ dòng 2 trở đi là dữ liệu

Các cột cần có đúng vị trí (ví dụ cột ten ở cột C – index 2)

STT	CCCD	Họ tên	...	Địa chỉ	Ngày cấp	Nơi cấp	MST	...	so1	so2	...	so11

4. Thêm Script vào Google Sheets
Mở file Google Sheets

Vào menu: Extensions > Apps Script

Xoá code cũ, dán đoạn script vào

Thay templateFileId bằng ID bạn vừa lấy ở bước 2

Nhấn lưu (Ctrl+S hoặc Cmd+S)

5. Chạy script
Chọn hàm createDocsFromSheetData

Nhấn nút ▶️ (Run)

Google sẽ hỏi cấp quyền (làm theo hướng dẫn để đồng ý)

Script sẽ bắt đầu tạo file Google Docs mới cho từng dòng dữ liệu

6. Xem kết quả
Mỗi dòng trong Sheets sẽ tạo ra 1 Google Docs

File sẽ có tên kiểu "Hợp đồng - [Tên]", nằm trong Google Drive của bạn

🔧 Troubleshooting (nếu có lỗi)
Vấn đề	Giải pháp
Lỗi Exception: Document not found	Kiểm tra ID template đúng chưa
File không có dữ liệu	Kiểm tra đúng vị trí cột trong Sheets
Script không chạy	Nhớ cấp quyền lần đầu chạy