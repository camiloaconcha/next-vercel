export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Categories Navigation</nav>
      {children}
    </main>
  );
}
 