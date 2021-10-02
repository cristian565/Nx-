import {DetailItem} from '@example/ecommerce/feature-shell';
import { useRouter } from 'next/dist/client/router';

export function PostDetail() {
const router=useRouter();
const {id}=router.query
  return (
    <div>
   
      <DetailItem id={id as string}/>
    </div>
  );
}

export default PostDetail;
