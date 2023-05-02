import './globals.css'

export const metadata = {
  title: 'Clark Pegg',
  description: 'Clark Pegg\'s Portfolio on GitHub',
}

const RootLayout = ({ children }: { children: React.ReactNode }) =>
  (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )

export default RootLayout
