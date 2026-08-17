
import { todos } from "./Todo"
import {atomFamily} from 'recoil'

export  const todosAtomFamily=atomFamily({
    key:"todosAtomFamily",
    default: id=>{
        let foundTodos=null;
        for(let i=0;i<todos.length;i++){
            if(todos[i].id===id){
                foundTodos=todos[i]
            }
        }
        return foundTodos;
    }
    
}
)
