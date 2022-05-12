import './App.css'
import JsExpression from "./jsx/jsx_expression"
import Functioncomponent from './jsx/function_component'
import ReactStateFunction from './jsx/react_state'
import ComponentCommunication from './jsx/component_communication'
import ContextCommunication from './jsx/context_communication'
import RenderList from './jsx/render_list'
import PropTypesExample from './jsx/props_type'
import RenderCycle from './jsx/render_cycle'
import TodoSearch from './jsx/todo_search'
function App () {
  return (
    <div className="App">
      <JsExpression />
      <Functioncomponent />
      <ReactStateFunction />
      <ComponentCommunication />
      <ContextCommunication />
      <RenderList />
      <PropTypesExample />
      <RenderCycle />
      <TodoSearch />
    </div>
  )
}

export default App
