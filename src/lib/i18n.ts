export type Lang = "en" | "vi";

export const languages = {
  en: "English",
  vi: "Tiếng Việt",
} satisfies Record<Lang, string>;

export const ui = {
  en: {
    home: "Home",
    planIndex: "Plan index",
    contentPlan: "Content Plan",
    contents: "Contents",
    eyebrow: "Internal campaign document",
    title: "UniHackfest 2026 Content Plan",
    intro:
      "A section-by-section content plan for reading, reference, and team execution.",
    openPlan: "Open Content Plan",
    readIntro: "Read introduction",
    snapshot: "Snapshot",
    sections: "Sections",
    year: "Year",
    snapshotBody:
      "Includes messaging, campaign pillars, posting calendar, KPIs, workflow, and content templates.",
    planIntro:
      "The document is split into short sections for easier reading. Pick a section from the sidebar, or choose from the list below.",
    quickGuides: "Quick guides",
    universityGuide: "Universities",
    clubGuide: "Clubs",
    sponsorGuide: "Sponsors",
    partnerGuide: "Partners",
    readingGuide: "How to read this plan",
    readStartTitle: "Start with strategy",
    readStartBody:
      "Read the strategic context, objective, message architecture, and campaign pillars first.",
    readRoleTitle: "Jump to your role",
    readRoleBody:
      "Use the quick guides for universities, clubs, sponsors, or partners when you need action-ready instructions.",
    readExecutionTitle: "Then plan execution",
    readExecutionBody:
      "Move to timeline, content calendar, frequency, workflow, KPIs, and priority content.",
    coreSections: "Core plan",
    roleGuides: "Role-specific guides",
    passwordBody: "Enter the password to open this internal document.",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter password",
    passwordError: "That password is not correct. Please try again.",
    passwordSubmit: "Open document",
    switchLanguage: "Tiếng Việt",
  },
  vi: {
    home: "Trang chủ",
    planIndex: "Mục lục",
    contentPlan: "Kế hoạch nội dung",
    contents: "Nội dung",
    eyebrow: "Tài liệu chiến dịch nội bộ",
    title: "Kế hoạch nội dung UniHackfest 2026",
    intro:
      "Bản kế hoạch nội dung được chia theo từng phần để dễ đọc, tra cứu và triển khai cùng đội ngũ.",
    openPlan: "Mở kế hoạch nội dung",
    readIntro: "Đọc phần giới thiệu",
    snapshot: "Tóm tắt",
    sections: "Phần",
    year: "Năm",
    snapshotBody:
      "Bao gồm thông điệp, trụ cột chiến dịch, lịch đăng, KPI, workflow và các mẫu bài viết.",
    planIntro:
      "Tài liệu được tách thành từng phần nhỏ để đọc theo page. Chọn một mục ở sidebar, hoặc chọn từ danh sách dưới đây.",
    quickGuides: "Chọn nhanh",
    universityGuide: "Trường đại học",
    clubGuide: "CLB",
    sponsorGuide: "Sponsor",
    partnerGuide: "Partner",
    readingGuide: "Cách đọc tài liệu",
    readStartTitle: "Bắt đầu từ chiến lược",
    readStartBody:
      "Đọc bối cảnh chiến lược, mục tiêu truyền thông, kiến trúc thông điệp và trụ cột chiến dịch trước.",
    readRoleTitle: "Nhảy đến đúng vai trò",
    readRoleBody:
      "Dùng các guide cho trường đại học, CLB, sponsor hoặc partner khi cần hướng dẫn triển khai ngay.",
    readExecutionTitle: "Sau đó xem phần triển khai",
    readExecutionBody:
      "Tiếp tục với timeline, lịch nội dung, tần suất đăng, workflow, KPI và nội dung ưu tiên.",
    coreSections: "Kế hoạch chính",
    roleGuides: "Guide theo vai trò",
    passwordBody: "Nhập mật khẩu để mở tài liệu nội bộ.",
    passwordLabel: "Mật khẩu",
    passwordPlaceholder: "Nhập mật khẩu",
    passwordError: "Mật khẩu chưa đúng. Vui lòng thử lại.",
    passwordSubmit: "Mở tài liệu",
    switchLanguage: "English",
  },
} satisfies Record<Lang, Record<string, string>>;

export function localizedPath(path: string, lang: Lang) {
  if (lang === "vi") {
    return path === "/" ? "/vi" : `/vi${path}`;
  }

  return path;
}
