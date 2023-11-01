import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { Global } from './Global.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Global/>
    <App />
  </>,
)
