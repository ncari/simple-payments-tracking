import Navigation from "./navigation";
import { DatabaseProvider } from "./services/context/DatabaseContext";

export default function App() {
  return (
    <DatabaseProvider>
      <Navigation />
    </DatabaseProvider>
  );
}
