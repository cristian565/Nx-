import './detail-item.module.css';
import {CarDetails} from '@example/ecommerce/ui';
import { useSinglePost } from '../../../../data-access/src/useSinglePost';

/* eslint-disable-next-line */
export interface DetailItemProps {
  id: string
}

export function DetailItem(props: DetailItemProps) {
  const {todos}=useSinglePost(props.id)
  return (
    <CarDetails post={todos}/>
  );
}

export default DetailItem;
