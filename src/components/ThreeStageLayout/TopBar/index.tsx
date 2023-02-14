import * as React from 'react';
import styles from './index.less';
import { ReactNode } from 'react';

export type Props = {
  content: ReactNode;
};
const TopBar: React.FC<Props> = (props) => {
  return <div className={styles.content}>{props.content}</div>;
};

export default TopBar;
