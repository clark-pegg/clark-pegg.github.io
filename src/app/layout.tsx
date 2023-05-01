import './globals.css'

export const metadata = {
  title: 'Clark Pegg',
  description: 'Clark Pegg\'s Portfolio on GitHub',
}

const RootLayout = ({ children }: { children: React.ReactNode }) =>
  (
    <body>
      {children}
    </body>
  )

export default RootLayout
