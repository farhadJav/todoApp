export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
      <h1>TODO APP by FARHAD JAVED!</h1>
        {children}</body>
    </html>
  )
}
