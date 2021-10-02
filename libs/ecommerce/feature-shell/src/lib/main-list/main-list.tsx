import './main-list.module.css';
import { useTodos } from '../../../../data-access/src/useTodos';
import {PostCar} from '@example/ecommerce/ui';

/* eslint-disable-next-line */
export interface MainListProps {}

export function MainList(props: MainListProps) {
 
const {todos}=useTodos();

  return (
    <div>
          <h1 className="text-center text-green-500 text-8xl m-8">Datos</h1>
         <table>

           <thead>
             <tr>
               <th scope="col">ID</th>
               <th scope="col">TITULO</th>
             </tr>
           </thead>
         {
               todos.map((data)=>(
                     <PostCar key={data.id} post={data} />    
                ))
         }
         </table>
        
    </div>
  );
}

export default MainList;
