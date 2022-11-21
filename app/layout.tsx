import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="grid-layout">
          <header className="p-2">
            <h1 className="text-8xl font-bold">GitHub Hub</h1>
          </header>
          {children}
          <footer className="p-2">
            <p className="text-4xl font-semibold">Footer</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
