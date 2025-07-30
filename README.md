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
