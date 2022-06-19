import { Card } from "./components/Card/Card";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { PreviewItem } from "./components/PreviewItem/PreviewItem";
import { Navbar } from "./pages/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <Card padding="16px">
          <PreviewItem />
        </Card>
      </MainContainer>
    </div>
  );
}

export default App;
