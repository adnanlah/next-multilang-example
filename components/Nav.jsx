import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/App.module.css';
export default function Nav() {
    const router = useRouter()
    const { locale } = router
    const flagSrc = locale === 'fr' ? 'fr' : locale === 'en' ? 'us' : ''
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>
                    <b>Multilanguage blog</b>
                </a>
            </Link>
            <div>
                <Image
                    src={`/${flagSrc}.png`}
                    width="36"
                    height="27"
                    alt={locale}/>
            </div>
        </nav>
    )
}