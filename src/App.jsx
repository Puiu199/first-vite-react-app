import ElementList from "./components/ElementList"
import Header from "./header/Header"
import {date} from './data'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App(){
  return(
    <div>
      <Header>

      </Header>
    <main>
     

    </main>
    <footer>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Item</li>
        <li className="list-group-item">Item</li>
        <li className="list-group-item">Item</li>
        <li className="list-group-item">Item</li>
        <li className="list-group-item">Item</li>
      </ul>
      
    </footer>
    </div>
    
  )
}
