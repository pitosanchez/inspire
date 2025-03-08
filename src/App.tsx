import { About } from "./components/About";
import { Header } from "./components/Header";
import { Resources } from "./components/Resources";
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="p-6">
        <About />
        <Resources />
      </main>
    </div>
  );
}
