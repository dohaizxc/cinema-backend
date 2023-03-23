const asyncHandler = require("express-async-handler");

const offers = [
  {
    id: "d_1",
    name: "LỄ HỘI MERCHANDISE",
    img: "/src/assets/img/news_detail_img_d1.jpg",
    date: "Từ ngày 07/12/2022 - 09/12/2022.",
    contents: [
      "- Mua 01 Merchandise (có kèm nước) trị giá 149K, có ngay 01 phần Bắp mix.",
      "- Chương trình không áp dụng cho sản phẩm ly Avatar II.",
    ],
    address: "Các cụm rạp CGV Hồ Chí Minh, Hà Nội và Huế.",
    objects: ["- Tất cả đối tượng khách hàng."],
    others: [
      "- Chỉ áp dụng khi mua trực tiếp (offline) tại rạp.",
      "- Áp dụng tại tất cả các cụm rạp CGV trên toàn quốc.",
      "- Mỗi khách hàng được mua tối đa 02 sản phẩm merchandise trong suốt chương trình.",
      "- Mẫu sản phẩm merchandise tùy thuộc vào các sản phẩm merchandise hiện đang có tại mỗi rạp.",
      "- Chương trình áp dụng cho tất cả các mẫu sản phẩm Merchandise trừ sản phẩm ly Avatar II.",
      "- Không áp dụng tách hoặc gộp hóa đơn để tham gia.",
      "- Không áp dụng đồng thời cùng các chương trình khuyến mãi khác đang diễn ra.",
      "- Sản phẩm merchandise có hạn, chương trình có thể kết thúc sớm.",
    ],
  },
  {
    id: "d_2",
    name: "TUẦN LỄ PHIM KHOA HỌC CÔNG NGHỆ QUỐC TẾ VINFUTURE 2022",
    img: "/src/assets/img/news_detail_img_d2.jpg",
    date: "Từ ngày 06/12 - 11/12/2022.",
    contents: [
      `- 25.000 vé mời sẽ được VinFuture dành tặng miễn phí cho công chúng trên toàn quốc từ 6-11/12, 
      nhằm góp phần thúc đẩy niềm hứng khởi và lan tỏa tình yêu khoa học công nghệ tới mọi người.`,
      `- Khán giả có thể dễ dàng nhận vé miễn phí trực tiếp tại quầy vé khi tới xem phim hoặc lựa chọn 
      đăng ký vé trực tuyến thông qua website, ứng dụng CGV để thưởng thức các bộ phim từ 06.12 – 11.12 
      tại 37 cụm rạp CGV trên toàn quốc.`,
    ],
    address: "Tất cả các cụm rạp CGV trên toàn quốc.",
    objects: ["- Tất cả đối tượng khách hàng."],
    others: [
      "- Mỗi tài khoản chỉ được đặt 02 vé Miễn phí trong toàn bộ chương trình.",
    ],
  },
  {
    id: "d_3",
    name: "MÙA BOM TẤN CUỐI NĂM ZALOPAY TẶNG VÉ 9K!",
    img: "/src/assets/img/news_detail_img_d3.jpg",
    date: "Từ ngày 5/12 - 31/12/2022.",
    contents: [
      "- Bạn mới: Chỉ 9.000đ/vé khi thanh toán bằng Ví điện tử ZaloPay.",
      "- Bạn thân: Chỉ 79.000đ/vé CGV khi thanh toán bằng Ví điện tử ZaloPay",
    ],
    address: "Tất cả các cụm rạp CGV trên toàn quốc.",
    objects: [
      `- Bạn mới: Lần đầu tiên liên kết thẻ/ tài khoản ngân hàng mới với ZaloPay trong thời gian diễn ra 
      chương trình và chưa từng thực hiện giao dịch thanh toán trên ZaloPay.`,
      `- Bạn thân: Tất cả khách hàng của ZaloPay đã từng có ít nhất 01 giao dịch thanh toán.`,
    ],
    others: [
      `- Trường hợp bạn không đủ điều kiện tham gia chương trình do tài khoản Zalo không hoạt động thường 
      xuyên hoặc nằm trong danh sách có hoạt động bất thường được ghi nhận tự động bởi hệ thống ZaloPay.`,
      `- Quý khách cần nạp tiền vào Ví ZaloPay tối thiểu từ 10.000đ (đối với các chương trình vé 1K hoặc vé 9K).`,
      `- Thẻ quốc tế VISA, MasterCard, JCB áp dụng thanh toán trực tiếp đơn hàng từ 10.000đ trở lên. Chỉ áp dụng 
      cho khách hàng đã thực hiện xác minh thông tin tài khoản hoặc liên kết ngân hàng với ZaloPay.`,
      `- Đối với Agribank và một số ngân hàng khác, cần nạp tối thiểu 50.000đ.`,
    ],
  },
  {
    id: "d_4",
    name: "PHIM TƯƠNG TÁC PHI VỤ NỬA ĐÊM: HƯỚNG DẪN TƯƠNG TÁC TẠI RẠP",
    img: "/src/assets/img/news_detail_img_d4.jpg",
    date: "Từ ngày 25/11/2022.",
    contents: ["- Tương tác với phim tại rạp CGV."],
    address: "Các cụm rạp CGV Hồ Chí Minh, Hà Nội.",
    objects: ["- Tất cả đối tượng khách hàng."],
    others: [
      "- Luôn giữ điện thoại kết nối với internet trong suốt quá trình xem phim.",
      "- Chỉ có 5-6s để đưa ra quyết định cho 1 tình huống => Luôn giữ điện thoại ở chế độ mở khoá để dễ dàng tương tác.",
      "- Khi không cần lựa chọn, màn hình sẽ tự động giảm độ sáng.",
      "- Mỗi suất chiếu sẽ có một QR code khác nhau.",
      "- Việc được chơi lại hay không chỉ áp dụng cho một vài trường hợp.",
      "- Phim tương tác PHI VỤ NỬA ĐÊM chỉ có tại 4 rạp:",
    ],
  },
  {
    id: "d_5",
    name: "BÙNG CHÁY WORLD CUP ĐI GROUP THÊM VUI",
    img: "/src/assets/img/news_detail_img_d5.jpg",
    date: "24/11/2022 - 14/12/2022.",
    contents: [
      "- Khách hàng mua 05 vé xem phim bất kì + 01 Warm Up Combo, sẽ được tặng 02 Ly Coca-Cola Contour.",
      "- 01 Warm Up Combo 249k gồm : 03 Nước siêu lớn + 02 Coke Zero Sugar hoặc Chanh sả + 02 Bắp mix.",
    ],
    address: "Tất cả các cụm rạp CGV trên toàn quốc.",
    objects: ["- Tất cả đối tượng khách hàng."],
    others: [
      "- Áp dụng cho các giao dịch trực tuyến và giao dịch tại quầy.",
      "- Áp dụng cho khách khi mua theo package offline (gồm vé + bắp nước), hoặc mua online vé riêng bắp nước riêng.",
      "- Số lượng quà tặng có hạn Chương trình có thể kết thúc sớm khi hết quà tặng.",
      "- Chỉ áp dụng đối với khách hàng mua vé xem phim và Warm Up Combo tại các rạp áp dụng.",
      "- Khách hàng tùy chọn quyết định loại vé xem phim, miễn đủ 05 vé bất kỳ.",
      "- Các chương trình dành cho thẻ thành viên CGV như U22, HSSV, Culture Day, Happy Day vẫn áp dụng miễn không xuất vé 0 VND.",
    ],
  },
  {
    id: "d_6",
    name: "RA RẠP GẶP LUFFY RINH QUÀ XINH HẾT Ý",
    img: "/src/assets/img/news_detail_img_d6.jpg",
    date: "Từ ngày 02/12/2022 đến khi hết quà tặng.",
    contents: [
      "- Khách hàng mua một lần 2 vé xem phim ONE PIECE FILM RED sẽ được tặng 1 huy hiệu và 1 bìa hồ sơ hoặc 2 huy hiệu hoặc 2 bìa hồ sơ.",
      "- Khách hàng mua một lần 4 vé xem phim ONE PIECE FILM RED sẽ được tặng 1 huy hiệu, 2 bìa hồ sơ và 1 giá đỡ điện thoại.",
    ],
    address: "Các cụm rạp CGV Hồ Chí Minh, Hà Nội, Huế, Cần Thơ, Bình Dương...",
    objects: ["- Tất cả đối tượng khách hàng."],
    others: [
      "- Chỉ áp dụng đối với các suất chiếu phim One Piece Film Red trong thời gian diễn ra chương trình.",
      "- Áp dụng mua vé xem phim One Piece Film Red online và offline.",
      "- Khách chỉ được nhận quà tại rạp đã mua vé.",
      "- Mỗi khách hàng chỉ được tặng đúng với số lượng quà theo thể lệ.",
      "- Chương trình có thể kết thúc sớm hơn đến khi hết quà tặng.",
      "- Các chương trình dành cho thẻ thành viên CGV như U22, HSSV, Culture Day, Happy Day vẫn áp dụng miễn không xuất vé 0đ.",
    ],
  },
  {
    id: "d_7",
    name: "NHẬP HỘI U22 ZALOPAY VỚI CHỈ 1K/VÉ CGV! GIẢM TƯNG BỪNG, GIẢM ĐẬM SÂU",
    img: "/src/assets/img/news_detail_img_d7.jpg",
    date: "Từ ngày 05/12 - 31/12/2022.",
    contents: [
      "- Bạn mới: Chỉ 1.000đ/vé khi thành viên U22 thanh toán bằng Ví điện tử ZaloPay.",
    ],
    address: "Website cgv.vn, Ứng dụng CGV Cinemas.",
    objects: [
      "- Chỉ áp dụng cho Khách hàng là thành viên U22 của CGV.",
      "- Khách hàng có độ tuổi từ 12 – 22 (trước ngày sinh nhật lần thứ 23).",
      "- Bạn mới: Lần đầu tiên liên kết thẻ/ tài khoản ngân hàng mới với ZaloPay trong thời gian diễn ra chương trình và chưa từng thực hiện giao dịch thanh toán trên ZaloPay.",
    ],
    others: [
      `- Trường hợp bạn không đủ điều kiện tham gia chương trình do tài khoản Zalo không hoạt động thường xuyên hoặc nằm trong danh sách có hoạt động bất thường được ghi nhận 
      tự động bởi hệ thống ZaloPay.`,
      `- Quý khách cần nạp tiền vào Ví ZaloPay tối thiểu từ 10.000đ (đối với các chương trình vé 1K hoặc vé 9K).`,
      `- Thẻ quốc tế VISA, MasterCard, JCB áp dụng thanh toán trực tiếp đơn hàng từ 10.000đ trở lên. Chỉ áp dụng cho khách hàng đã thực hiện xác minh thông tin tài khoản hoặc liên 
      kết ngân hàng với ZaloPay.`,
      `- Đối với Agribank và một số ngân hàng khác, cần nạp tối thiểu 50.000đ.`,
      `- Chương trình có thể kết thúc trước thời hạn nếu hết ngân sách khuyến mãi hoặc tạm dừng nếu có dấu hiệu gian lận, đầu cơ.`,
    ],
  },
  {
    id: "d_8",
    name: "QUÀ TẶNG SINH NHẬT THÀNH VIÊN CGV THÁNG 12",
    img: "/src/assets/img/news_detail_img_d8.jpg",
    date: "Từ ngày 01/12/2022 - 31/12/2022.",
    contents: [
      `- CGV xin gửi lời chúc mừng đến các thành viên có sinh nhật trong tháng 12. Và với quyền lợi thành viên, CGV tặng bạn Combo 1 Bắp 2 Nước. Hy vọng bạn sẽ có một sinh nhật thật vui và ý nghĩa.`,
    ],
    address: "Các cụm rạp CGV trên toàn quốc.",
    objects: ["- Khách hàng là thành viên có sinh nhật trong tháng 12."],
    others: [
      `- Khi nhận quà sinh nhật, bạn vui lòng xuất trình: (1) CMND/CCCD và (2) Thẻ cứng thành viên/Ứng dụng CGV đã đăng nhập tài khoản để đối soát.`,
      `- Thông tin ngày tháng năm sinh trên CMND/CCCD của khách hàng phải trùng khớp với thông tin được sử dụng để đăng ký tài khoản thành viên CGV. Nếu 2 thông tin này không khớp nhau, nhân viên có 
      quyền từ chối trao quà sinh nhật cho khách hàng.`,
      `- Nếu chưa đủ điều kiện, thành viên có thể thực hiện giao dịch và nhận quà sau 02 ngày với điều kiện thời điểm đó vẫn còn trong tháng sinh nhật. Ví dụ: Thành viên thực hiện giao dịch trong ngày 29/12
      sẽ nhận quà SN vào ngày 31/12. Thành viên thực hiện giao dịch trong ngày 30/12 sẽ không được nhận quà SN.`,
    ],
  },
  {
    id: "d_9",
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ CITI TẠI CGV “MUA 02 VÉ XEM PHIM TẶNG 01 MY COMBO”",
    img: "/src/assets/img/news_detail_img_d9.jpg",
    date: "Áp dụng vào thứ 6 hàng tuần từ 02/12/2022 – 02/06/2023  từ 6:00 đến 23:59.",
    contents: [
      `- Khách hàng sẽ nhận một (01) ưu đãi MY COMBO bao gồm một (01) phần Bắp lớn (44oz) và một (01) Ly Nước Ngọt cỡ vừa (32oz) khi mua hai (02) vé xem phim có xuất chiếu tại các cụm rạp CGV tại Hồ Chí Minh và Hà Nội, 
      và thanh toán trực tuyến trên trang www.cgv.vn hoặc ứng dụng CGV trên điện thoại di động (sau đây gọi chung là “Website CGV”) với Thẻ Tín Dụng Citi vào mỗi thứ Sáu.`,
      `- Áp dụng cho suất chiếu vào Thứ Sáu cùng ngày.`,
    ],
    address: "Các cụp rạp CGV Hồ Chí Minh, Hà Nội.",
    objects: [
      `- Khách hàng là chủ chẻ tín dụng Citi Việt Nam có đầu BIN: 437374, 533948, 531922, 534763, 546079.`,
    ],
    others: [
      `- Mỗi Chủ Thẻ Tín Dụng Citi hưởng tối đa một (01) My Combo/ngày của Thời hạn chương trình và có giá trị quy đổi trong cùng ngày thứ Sáu mà khách hàng mua vé xem phim.`,
      `- Chương trình khyến mại áp dụng cho giao dịch mua vé xem phim cùng một bộ phim, một suất chiếu và cùng hạng ghế, áp dụng cho tất cả loại vé, suất chiếu và phòng chiếu của CGV (2D, 3D, IMAX, 4DX, GOLD CLASS, STARIUM, 
        L’AMOUR, SCREENX, PREMIUM, SWEETBOX…).`,
      `- My Combo áp dụng quy đổi tại tất cả các cụm rạp CGV tại Thành phố Hồ Chí Minh và Hà Nội.`,
      `- Chương trình khyến mại có thể kết thúc trước thời hạn nếu số lượng vé ưu đãi tặng khách hàng đạt số lượng vé quy định trước thời gian kết thúc chương trình và theo quy tắc mua trước, hưởng khuyến mại trước.`,
      `- Chương trình khyến mại không áp dụng đồng thời với các chương trình khuyến mãi khác của CGV và đối tác.`,
    ],
  },
  {
    id: "d_10",
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ NGÂN HÀNG BẢN VIỆT TẠI CGV",
    img: "/src/assets/img/news_detail_img_d10.jpg",
    date: "Thứ Năm, Thứ Sáu, Thứ Bảy và Chủ Nhật hàng tuần từ ngày  30/11/2022– 31/12/2023.",
    contents: [
      "- Mua 02 vé xem phim CGV chỉ với 90.000 đồng khi mua vé trực tuyến trên ứng dụng CGV Cinema hoặc website www.cgv.vn.",
      "- Số lượt ưu đãi áp dụng: Từ 01/12/2022 – 31/03/2023 áp dụng 20 ưu đãi/ ngày khuyến mãi.",
      "- Chương trình bắt đầu từ 09h00 - 23h59 các ngày Thứ Năm,Thứ Sáu,Thứ Bảy và Chủ Nhât hàng tuần.",
      "- Áp dụng cho vé xem phim 2D tại tất cả rạp CGV trên toàn quốc.",
      "- Mỗi chủ thẻ được hưởng ưu đãi không quá 02 lần/ tháng.",
    ],
    address: "Các cụm rạp BHD Star Hồ Chí Minh, Hà Nội và Huế..",
    objects: ["- Áp dụng cho tất cả Chủ thẻ với những đầu BIN sau: 356515"],
    others: [
      `- Chương trình chỉ áp dụng cho hạng ghế thường và hạng ghế VIP cho phim 2D. Mỗi cặp vé được áp dụng cho cùng một bộ phim, một suất chiếu và cùng hạng ghế.`,
      `- Khuyến mãi không áp dụng vào các ngày lễ tết.`,
      `- Không áp dụng cho suất chiếu sớm, suất chiếu đặc biệt, và các phòng chiếu đặc biệt như: IMAX, 4DX, GOLD CLASS, STARIUM, L’AMOUR, SWEETBOX…`,
      `- Chương trình áp dụng cho tất cả các cụm rạp chiếu phim CGV trên toàn quốc.`,
      `- Khuyến mãi được áp dụng với số lượng giới hạn mỗi ngày Thứ sáu, Thứ Bảy và Chủ Nhật hàng tuần.`,
      `- Vé xem phim không có giá trị đổi thành tiền mặt hay hoàn trả.`,
      `- Chương trình không áp dụng đồng thời với các chương trình khuyến mãi khác.`,
    ],
  },
  {
    id: "d_11",
    name: "THỨ TƯ VUI VẺ - VÉ PHIM ƯU ĐÃI",
    img: "/src/assets/img/news_detail_img_d11.jpg",
    date: "Thứ tư hàng tuần từ ngày 30/11/2022.",
    contents: [
      `- Đến CGV vào thứ tư hàng tuần để tận hưởng những bộ phim cực hay với giá cực ưu đãi các bạn nhé! Không cần chờ đợi đến cuối tuần, hãy đến CGV để nạp lại năng lượng nào!`,
      `- Khu vực Hồ Chí Minh, Hà Nội, Bình Dương: Giá chỉ từ 75k - 95k/Vé.`,
      `- Khu vực khác: Giá chỉ từ 45k - 65k/ Vé.`,
    ],
    address:
      "Các cụm rạp khu vực Hồ Chí Minh, Hà Nội, Bình Dương và các khu vực khác.",
    objects: ["- Tất cả đối tượng khách hàng."],
    others: [
      `- Giá vé Thứ Tư Vui Vẻ áp dụng cho ghế thường, ghế VIP, ghế Deluxe và ghế đôi. Giá vé trên chưa bao gồm phụ thu cho ghế Sweetbox và các phim định dạng Dolby Atmos.`,
      `- Giá vé Thứ Tư Vui Vẻ không áp dụng vào các ngày lễ, Tết, suất chiếu đặc biệt, suất chiếu sớm và định dạng phim IMAX.`,
      `- Giá vé Thứ Tư Vui Vẻ sẽ không áp dụng vào ngày công chiếu của phim.`,
      `- Không áp dụng cùng các chương trình khuyến mãi khác.`,
    ],
  },
  {
    id: "d_12",
    name: "NĂNG LƯỢNG TRÀN ĐẦY - NHẬN NGAY TÚI HOT",
    img: "/src/assets/img/news_detail_img_d12.jpg",
    date: "Từ ngày 25/11 - 11/12/2022 hoặc đến khi hết quà tặng",
    contents: [
      "- Khách hàng mua 01 Milo Premium Combo sẽ được tặng 01 Túi Milo Eco Friendly.",
      "- 01 Milo Premium Combo (109K) gồm 02 Milo Active 01 Bắp Mix 44Oz.",
    ],
    address: "Các cụm rạp CGV Hồ Chí Minh, Hà Nội.",
    objects: ["- Tất cả đối tượng khách hàng."],
    others: [
      "-  Áp dụng cho các giao dịch trực tuyến và giao dịch tại quầy.",
      "- Khách hàng có thể thêm 9,000 VND để thay thế 01 hộp Milo Active bằng 01 ly Coke siêu lớn.",
      "-  Không giới hạn số lượng quà tặng mỗi khách hàng đủ điều kiện.",
      "- CGV có quyền thay đổi thể lệ mà không cần báo trước.",
      "- Số lượng quà tặng có hạn. Chương trình có thể kết thúc sớm khi hết quà tặng.",
      "- Các chương trình dành cho thẻ thành viên CGV như U22, HSSV, Culture Day, Happy Day vẫn áp dụng miễn không xuất vé 0Đ.",
      "- Tích điểm thành viên CGV giảm tiền vé vẫn áp dụng miễn không xuất vé 0Đ.",
      `- Không áp dụng chương trình đối với Vé 0Đ, Voucher 0Đ từ đối tác, CGVian, Thẻ CJ Membership, sử dụng điểm thưởng CGV quy đổi vé 0Đ và các CTKM giảm giá riêng của các ứng dụng 
      thanh toán điện tử như Zalo Pay, MoMo,.. và các ứng dụng ngân hàng.`,
    ],
  },
];

const news = [
  {
    id: "n_1",
    name: "BHD STAR GARDEN",
    img: "/src/assets/img/news_detail_img_n1.jpg",
    title:
      "- TƯNG BỪNG KHAI TRƯƠNG RẠP CHIẾU PHIM BHD STAR THE GARDEN - RỘN RÀNG CÙNG CHUỖI ƯU ĐÃI SIÊU KHỦNG.",
    contents: [
      `- Cụm rạp thứ 10 của BHD Star Cineplex sẽ chính thức khai trương vào ngày 21/12/2019 tại Hà Nội với ưu đãi xem phim miễn phí cùng hàng ngàn chương trình khuyến mãi siêu khủng!`,
      `- Tọa lạc tại tầng 4 TTTM The Garden Shopping Center thuộc khu đô thị The Manor, một trong những khu vực sầm uất và tấp nập, BHD Star The Garden sẽ là cụm rạp thứ 3 của hệ thống 
      rạp chiếu phim BHD Star tại Hà Nội. Với cơ sở vật chất hiện đại, trang thiết bị phòng chiếu tối tân, cụm rạp hứa hẹn sẽ là địa điểm vui chơi, giải trí được yêu thích của người dân 
      Thủ đô, đặc biệt là trong giai đoạn Giáng Sinh 2019 và Tết Canh Tý 2020.`,
      `- Đến rạp BHD Star The Garden, khách hàng sẽ được thưởng thức những siêu phẩm điện ảnh quốc tế mới nhất từ Hollywood. Với 6 phòng chiếu cùng hệ thống Digital đạt chuẩn quốc tế, 
      công nghệ âm thanh Dolby 7.1 và các dịch vụ có 1-0-2 như ghế hạng First Class đi kèm các quyền lợi độc quyền: Welcome drink, lối vào ưu tiên, gối và chăn ấm, tủ đồ cá nhân và đặc 
      biệt là được phục vụ tận ghế xem phim. Bên cạnh đó, đội ngũ phục vụ năng động và chuyên nghiệp sẽ mang đến cho khách hàng những trải nghiệm thoải mái tuyệt đối. Dù mang chất lượng 
      tối ưu và hiện đại bậc nhất nhưng giá thành hoàn toàn phải chăng, hợp với túi tiền của mọi lứa tuổi.`,
      `- Ngoài những dịch vụ chất lượng 5 sao, BHD Star The Garden còn có chuỗi chương trình ưu đãi cực hoành tráng dành cho các tín đồ yêu thích môn nghệ thuật thứ 7 này.`,
    ],
  },
  {
    id: "n_2",
    name: "QUÉT MÃ QR NHANH VÀO RẠP!",
    img: "/src/assets/img/news_detail_img_n2.jpg",
    title:
      "- Với tiêu chí GO GREEN chung tay bảo vệ môi trường của BHD Star Cineplex ☘️ chúng tôi hy vọng đóng góp nho nhỏ sẽ tạo nên kết quả to to.",
    contents: [
      `- Không những tăng sự tiện lợi cũng như tiết kiệm thời gian của các bạn, BHD Star mong muốn lượng vé in ra sẽ ít hơn, đồng nghĩa với việc giảm lượng cây xanh bị đốn để sản xuất giấy tiêu dùng.`,
      `– Bước 1: Sau khi đặt vé thành công trên website hoặc ứng dụng BHD Star, bạn sẽ được gửi mã đặt vé dưới dạng MÃ QR.`,
      `– Bước 2: Xuất trình Mã QR tại trụ soát vé để quét mã.`,
      `– Bước 3: Xong rồi, các bạn chỉ việc tiến thẳng vào rạp xem phim thôi nè!!
      Ứng dụng đã có mặt trên 2 hệ điều hành iOS và Android. Quét mã QR tải liền tay về chiếc dế yêu của mình nhé.`,
    ],
  },
  {
    id: "n_3",
    name: "ỨNG DỤNG MUA VÉ MỚI",
    img: "/src/assets/img/news_detail_img_n3.jpg",
    title: `Tin vui cho đại gia đình BHD Star đây!!!
    Từ hôm nay, việc đặt vé trở nên tiện lợi hơn bao giờ hết với phiên bản ứng dụng di động BHD Star.`,
    contents: [
      `- Với ứng dụng đặt vé chính thức từ BHD Star Cineplex, bạn có thể:`,
      `+ Đặt trước ghế đẹp mà không phải xếp hàng tại rạp.`,
      `+ Đồng bộ hóa quyền lợi thành viên, đặt trước đồ ăn thức uống với ưu đãi đến 20%.`,
      `+ Quản lý tài khoản thành viên dễ dàng với lịch sử tích điểm qua từng giao dịch.`,
      `+ Cập nhật lịch chiếu và thông tin phim nhanh nhất.`,
      `+ Tra cứu vị trí rạp BHD Star gần bạn nhất.`,
      `+ Và còn nhiều chức năng thú vị khác đang chờ bạn khám phá.`,
      `- Còn chần chừ gì mà không trải nghiệm dịch vụ đặt vé nhanh chóng và tiện lợi hơn trên ứng dụng mới toanh.`,
    ],
  },
  {
    id: "n_4",
    name: "ĐIỂM HẸN MỚI CỦA GIỚI TRẺ",
    img: "/src/assets/img/news_detail_img_n4.jpg",
    title: "- Điểm hẹn của giới trẻ Sài Thành.",
    contents: [
      `- Rạp chiếu phim BHD Star 3/2 vừa thực hiện một khu vực chụp hình siêu đáng yêu với chú gấu Brown “nổi tiếng” 
      cao hơn 2m thu hút các bạn trẻ và nhiều ca sĩ, diễn viên như Lynk Lee, Annie (LipB), Dũng Khánh, Phạm Lịch thích thú tìm đến.`,
      `- Cụm rạp chiếu phim BHD Star 3/2 toạ lạc tại địa chỉ Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM vốn đã rất quen 
      thuộc với giới trẻ bởi chính sách giá vé hấp dẫn.`,
      `- Mới đây, cụm rạp vừa thực hiện thêm một khu vực chụp hình siêu đáng yêu với điểm nhấn chính là bộ đôi gấu Brown và thỏ Cony “huyền thoại”.`,
      `- Không chỉ khán giả, rất nhiều ca sĩ, diễn viên trẻ cũng hào hứng góp “hình” cùng với chú gấu mặt rầu siêu cool này.`,
      `- Với góc chụp ảnh đơn giản mà chất và một chương trình “tâm lý”, dễ hiểu vì sao rạp BHD Star 3/2 luôn được “play-dân” ưu ái lựa chọn. 
      Thế nên, hãy thử đi và trải nghiệm điểm hẹn này ngay nhé.`,
    ],
  },
  {
    id: "n_5",
    name: "THẺ THÀNH VIÊN ĐIỆN TỬ",
    img: "/src/assets/img/news_detail_img_n5.jpg",
    title: "- Hướng dẫn mua vé trên ứng dụng CGV.",
    contents: [
      `- Bước 1: Quét mã QR Code để tải app CGV.`,
      `- Bước 2: Đăng kí hoặc đăng nhập thành viên.`,
      `- Bước 3: Lựa chọn thông tin cần tìm hiểu.`,
      `- Bước 4: Xem lịch chiếu và đặt vé.`,
      `- Bước 5: Kiểm tra thông tin giao dịch vừa hoàn thành.`,
    ],
  },
  {
    id: "n_6",
    name: "BHD STAR HUẾ",
    img: "/src/assets/img/news_detail_img_n6.jpg",
    title:
      "- HCM, ngày 04/04/2018 – Cụm rạp chiếu phim BHD Star Cineplex sẽ khai trương rạp đầu tiên tại TP. Huế vào ngày 19/05/2018 với 4 phòng chiếu gần 800 ghế.",
    contents: [
      `- Thành Phố Huế là điểm hẹn du lịch nổi tiếng trong và ngoài nước, chính vì thế nhu cầu vui chơi, giải trí của du khách và cả người dân Cố Đô cũng rất cao và đa dạng. 
      Nắm bắt và thấu hiểu được điều này, BHD Star sẽ chính thức khai trương rạp chiếu phim đầu tiên của mình tại mảnh đất mộng mơ sau chuỗi các rạp phim tại TPHCM và Hà Nội.`,
      `- BHD Star Huế sẽ “chào làng” vào ngày 19/5/2018, tại địa chỉ Vincom Huế, 50A Hùng Vương tổ 10, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế.`,
      `- Được trang bị cơ sở vật chất hiện đại, phòng chiếu với hệ thống âm thanh hình ảnh tân tiến và dịch vụ chuyên nghiệp, đến với BHD STAR, khán giả sẽ cảm nhận được một 
      “thần thái” khác biệt và “chất như nước cất.”`,
      `- Với mong muốn trở thành điểm giải trí hấp dẫn mới cho khán giả Huế, BHD Star Huế còn sẵn sàng nhiều cơn bão khuyến mãi siêu hấp dẫn và sự kiện khai trương đặc sắc chờ 
      đón khán giả “phá đảo”.`,
      `- Cuộc hẹn tháng 5 đã đến rất gần, hãy sẵn sàng cùng hội cạ cứng khám phá những bất ngờ tại cụm rạp chiếu phim BHD Star.`,
    ],
  },
  {
    id: "n_7",
    name: "ĐƯỜNG DÂY NÓNG BHD STAR",
    img: "/src/assets/img/news_detail_img_n7.jpg",
    title:
      "- Từ ngày 15.10.2017, Đường Dây Nóng của BHD Star chính thức hoạt động.",
    contents: [
      `- Các khách hàng thân thiết của BHD Star sẽ có thêm kênh thông tin để cập nhật tin tức, giải đáp thắc mắc một cách nhanh chóng và dễ dàng nhất.`,
      `- Bao điều thắc mắc không biết giải bày cùng ai, hãy gọi ngay số: 1900 2099 để được tư vấn nhanh chóng nhất.`,
    ],
  },
  {
    id: "n_8",
    name: "BHD STAR PHẠM NGỌC THẠCH",
    img: "/src/assets/img/news_detail_img_n8.jpg",
    title:
      "- Bắt đầu từ 02/11/2016, BHD Star chính thức khai trương cụm rạp đầu tiên tại Hà Nội: BHD STAR VINCOM PHẠM NGỌC THẠCH, tầng 8 TTTM Vincom, số 2 Phạm Ngọc Thạch, Đống Đa, Hà Nội.",
    contents: [
      `- Là cụm rạp đầu tiên được trang bị phòng chiếu FIRST CLASS, hệ thống âm thanh Atmos, BHD Star Movie Shop, BHD Star Kitchen… BHD Star Vincom Phạm Ngọc Thạch hứa hẹn sẽ là điểm đến thú 
      vị và khác biệt của các tín đồ điện ảnh Hà Nội.`,
      `- Nhân dịp khai trương, BHD Star Vincom Phạm Ngọc Thạch mang đến cho khán giả nhiều chương trình khuyến mãi hấp dẫn: Xem phim Miễn Phí, Phim Bom Tấn giá chỉ 30K, Thăng hạng nhanh chưa từng có, Du lịch Châu Á…`,
    ],
  },
];

module.exports = {
  news,
  offers,
};

const getNews = asyncHandler(async (req, res) => {
  res.json(news);
});

const getOffers = asyncHandler(async (req, res) => {
  res.json(offers);
});

module.exports = {
  getNews,
  getOffers,
};
