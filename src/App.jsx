import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Storybook Design System</h1>
        <p>A collection of reusable React components</p>
      </header>
      
      <main className="app-main">
        <section className="demo-section">
          <h2>Button Variants</h2>
          <div className="button-group">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Card Component</h2>
          <Card 
            title="Welcome to the Design System"
            description="Build beautiful, consistent UIs with our component library."
          />
        </section>
      </main>
    </div>
  )
}

export default App


