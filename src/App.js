import './App.css'
import JsExpression from "./jsx/jsx_expression"
import Functioncomponent from './jsx/function_component'
import ReactStateFunction from './jsx/react_state'
import ComponentCommunication from './jsx/component_communication'
import ContextCommunication from './jsx/context_communication'
import RenderList from './jsx/render_list'
function App () {
  return (
    <div className="App">
      <JsExpression />
      <Functioncomponent />
      <ReactStateFunction />
      <ComponentCommunication />
      <ContextCommunication />
      <RenderList />
    </div>
  )
}

export default App
