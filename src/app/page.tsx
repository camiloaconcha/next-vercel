import BarContainer from './../components/BarContainer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Generar Código de Barras</h1>
        <BarContainer/>
      </div>
    </main>
  );
}
