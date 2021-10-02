import { useEffect, useState } from 'react';
import {Todo} from '@example/ecommerce/utils'
const url=`https://jsonplaceholder.typicode.com/todos?_limit=15`

export function useTodos():{todos: Todo[]}{ 
    const [todos, settodos] = useState([])
    useEffect(()=>{
        const respuesta=fetch(url).then((resp)=>{
            return resp.json();
        }).then((datos)=>{
       settodos(datos);
        })
    },[])
    
return {todos};
}