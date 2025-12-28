import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { App } from './App'

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)
reactRoot.render(<App />)
