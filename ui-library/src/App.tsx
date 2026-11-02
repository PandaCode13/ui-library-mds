import { Button } from "@/components/ui/button"
import { CardGallery } from "./stories/Card"

function App() {
  return (
    <main className="card-page">
      <h1 className="card-page-title">Nos cartes</h1>
      <CardGallery />
      <div className="mt-8">
        <Button variant="default" size="default">Default Button</Button>
      </div>
    </main>
  )
}

export default App
