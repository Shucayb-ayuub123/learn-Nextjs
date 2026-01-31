

export const metadata = {
  title : {
    absolute: "",
    default: "code evalution",
    template :"%s | Evalution"
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <header style={{width : 1380 , height : 100, backgroundColor : "#ff8795"}}>
          I am the header
        </header>
        {children}
        
        <footer style={{width : 1380 , height : 100, backgroundColor : "#5cd1ff"}}>
          Now I am here to complete this footer
        </footer>
        
        </body>
    </html>
  )
}