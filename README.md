## REPORTS

# Thêm `nginx.conf` để quản lý điều hướng
 - Giải quyết vấn đề của react router
# `DiaglogComponent.js`
- Bỏ component thừa 
- Chỉnh sửa get status của edit mode
- Fix handleEdit 
# `App.js` và các component liên quan
- Fix filter search
- Quản lý sản xuất
  - thêm button tạo nguyên liệu
  - xử lý api cho button
- Quản lý công đoạn
  - xử lý api cho button
  - quản lý công đoạn sẽ thêm tạo mới quản lý chất lượng, status dựa trên duyệt hay không duyệt
- Quản lý chất lượng
  - xử lý duyệt hủy quản lý chất lượng
  - duyệt quản lý chất lượng sẽ tạo mới đóng gói
- Quản lý khấu hao
  - thao tác hủy sẽ đổi status của dây chuyền thành ngừng hoặc đang hoạt động (cho hoạt động trở lại)
# Bổ sung phương thức backup cho các service
- quản lý định mức
- quản lý chất lượng
- quản lý khấu hao
# issues cần update:
- khi duyệt kiểm tra chất lượng cần update approve của quality control thành true để disable button