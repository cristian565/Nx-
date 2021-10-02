
import { Todo } from '@example/ecommerce/utils';
import Link from 'next/link'
/* eslint-disable-next-line */
export interface PostCarProps {
  post: Todo
}

export function PostCar(props: PostCarProps ) {
  const {id,title}=props.post;
  return (
    <>
      <tbody>
        <Link href={`/post/${id}`}>
          <th scope="id" style={{textDecoration: 'underline', cursor: 'pointer'}}>{id}</th>
          </Link>
        <td scope="title">{title}</td>
      </tbody>
    </>
  );
}

export default PostCar;
