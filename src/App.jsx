import ElementList from "./components/ElementList"
import Header from "./components/header"
import {date} from './data'
export default function App(){

  return(
    <div>
      <Header>

      </Header>
    <main>
      <div className="card">
    
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
        <ul className="list-group list-group-flush">
          
          <ElementList title="" content="">

          </ElementList>
      
        </ul>
      </div>
      

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
