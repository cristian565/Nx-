import { useEffect, useState } from 'react';
import {Todo} from '@example/ecommerce/utils'
const url=`https://jsonplaceholder.typicode.com/todos`

export function useSinglePost(id:string):{todos: Todo|null}{ 
    const [todos, settodos] = useState(null)

    useEffect(()=>{
        fetch(`${url}/${id}`).then((resp)=>{
            return resp.json();
        }).then((datos)=>{
       settodos(datos);
        })
    },[id])
    
return {todos};
}