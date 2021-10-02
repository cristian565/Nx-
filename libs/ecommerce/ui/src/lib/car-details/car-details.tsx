import './car-details.module.css';
import { Todo } from '@example/ecommerce/utils';

/* eslint-disable-next-line */
export interface CarDetailsProps {
  post: Todo | null;
}

export function CarDetails(props: CarDetailsProps) {

  return (
    <div>
      {
        props.post && 
        <section>
          <p>id: {props.post.id}</p>
          <p>Title: {props.post.title}</p>
        </section>
      }
    </div>
  );
}

export default CarDetails;
