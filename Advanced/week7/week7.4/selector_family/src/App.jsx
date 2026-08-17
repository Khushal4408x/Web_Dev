import{ RecoilRoot, useRecoilState} from 'recoil'
import { todosAtomFamily } from './atom' 

function App() {


  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}
function Todo ({id}){
    const [todo,setTodos]=useRecoilState(todosAtomFamily(id));
    return (
      <>
      {todo.title}
      {todo.description}
      </>
    )
}

export default App
