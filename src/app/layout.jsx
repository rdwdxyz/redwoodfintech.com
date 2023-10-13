import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Redwood',
    default: 'Redwood - Accessible Financial Data.',
  },
  description:
    'Costly platforms or plugins no more. Get the financial data you need, faster, and more affordably, for investor relations teams and investors.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E83DLB903D"
        ></script>
        <script async src="/gtag.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E83DLB903D');
        `}}></script>
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
