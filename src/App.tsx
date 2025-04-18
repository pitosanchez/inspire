import { About } from "./components/About";
import { Header } from "./components/Header";
import { Resources } from "./components/Resources";
import { Booklet } from "./components/Booklet";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-lg">
      <Header />

      <main className="p-6">
        <About />
        <Resources />
        <Booklet />
      </main>
    </div>
  );
}
