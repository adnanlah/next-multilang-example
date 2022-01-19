import GithubIcon from './GithubIcon';
import styles from '../styles/App.module.css';
export default function Footer() {
    return (
        <footer>
            <hr/>
            <div className={styles.footer}>
                <a href="https://github.com/adnanlah/next-multilang-example" rel="noreferrer" target="_blank">
                    <small>
                        <GithubIcon width='40' height='40'/>
                    </small>
                </a>
            </div>
        </footer>
    )
}