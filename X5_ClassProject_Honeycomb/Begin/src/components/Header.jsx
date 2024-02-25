import styles from './Header.module.css';

export function Header({ date, editor }) {

    return (
        <header>
            <h1 className={styles.title}>Spelling Bee</h1>
            <p className={styles.date}>{ date }</p>
            <p className={styles.editor}>NYT game edited by { editor }</p>
        </header>
    );
}