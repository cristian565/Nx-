import './hello.module.css';

/* eslint-disable-next-line */
export interface HelloProps {}

export function Hello(props: HelloProps) {
  return (
    <div>
      <h1>Welcome to Hello!</h1>
    </div>
  );
}

export default Hello;
