import styles from './example.module.css';

/* eslint-disable-next-line */
export interface ExampleProps {}

export function Example(props: ExampleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Example!</h1>
    </div>
  );
}

export default Example;
