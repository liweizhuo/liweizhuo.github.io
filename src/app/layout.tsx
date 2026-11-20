import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '李韦卓 | 数据分析 · AI应用 · 在读硕士',
  description:
    '李韦卓，天津医科大学生物信息与计算生物学在读硕士。擅长数据分析、SQL、Python建模与AI应用开发。百度智能云与朗姿股份实习经历，RAG智能问答系统与电商用户分层项目。',
  keywords: [
    '数据分析师',
    '数据分析',
    'AI应用',
    'RAG',
    'Text-to-SQL',
    'Python',
    'SQL',
    '天津医科大学',
    '简历',
    'portfolio',
  ],
  authors: [{ name: '李韦卓' }],
  openGraph: {
    title: '李韦卓 | 数据分析 · AI应用 · 在读硕士',
    description:
      '天津医科大学生物信息与计算生物学在读硕士，擅长数据分析、SQL、Python建模与AI应用开发。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
