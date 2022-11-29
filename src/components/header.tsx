import Link from 'next/link';
import styles from '../styles/Header.module.sass';

export default function Header(props: any) {
	return (
		<>
			<header className={styles.header}>
				<Link href='/'>
					<strong> Início</strong>
				</Link>
				<Link href='/projects'>
					<strong>Projetos</strong>
				</Link>
				<Link href='/skills'>
					<strong>Habilidades</strong>
				</Link>
				<a href='https://www.linkedin.com/in/leocarvalhos' target='_blank' rel='noopener noreferrer'>
					<strong>Contato</strong>
				</a>
			</header>
			{props.children}
		</>
	);
}
