import Sidebar from "./components/sidebar"
import Approuter from "./components/Approuter"
import "./assets/css/style.css"


function App() {
  return (
    <main className="wrapper">
      <Sidebar />
      <div className="content">
        <Approuter />
      </div>
    </main>
  )
}

export default App
