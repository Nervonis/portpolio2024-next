import "@/assets/scss/style.scss"

export const metadata = {
  title: '포트폴리오 Next.js',
  description: '개발자 안병언의 포트폴리오 사이트',
  keywords: ["포트폴리오", "Next.js"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
};