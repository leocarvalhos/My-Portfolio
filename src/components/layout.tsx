import Image from 'next/image';
import I from '../../public/images/eu.jpg';
import Gear from '../../public/images/gear.svg';
import GitHub from '../../public/images/github.svg';
import Adjustable from '../../public/images/adjustable.svg';

import Header from './header';
import styles from '../styles/Layout.module.sass';
import Link from 'next/link';
export default function Layout() {
	return (
		<Header>
			<main className={styles.layout}>
				<section className={styles.introduction}>
					<Image className={styles.img} src={I} alt='Picture of the author' width={200} height={200} style={{ borderRadius: '15px' }} />
					<h1>Leandro Carvalho</h1>
					<span>Developer Full-Stack</span>
					<p>
						Olá, me chamo Léo! Vou lhe contar um pouco sobre mim. Comecei na programação em junho de 2021, ingressando na faculdade de Engenharia de Software.
						Em abril de 2022 iniciei o curso de Desenvolvimento de Software Full-Stack na Cubos Academy. Realizei alguns projetos pessoais com objetivo de
						desenvolver minhas habilidades.
					</p>
				</section>
				<section className={styles.skills}>
					<Link href='/projects'>
						<div style={{ width: '120px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
							<Image className={styles.icons} src={Adjustable} alt='adjustable' width={120} height={120} />
							<span>Projetos</span>
						</div>
					</Link>

					<a href='https://www.github.com/leocarvalhos' target='_blank' rel='noopener noreferrer'>
						<div style={{ width: '120px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
							<Image className={styles.icons} src={GitHub} alt='github' width={120} height={120} />
							<span>GitHub</span>
						</div>
					</a>

					<Link href='/skills'>
						<div style={{ width: '120px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
							<Image className={styles.icons} src={Gear} alt='gear' width={120} height={120} />
							<span>Habilidades</span>
						</div>
					</Link>
				</section>
			</main>
		</Header>
	);
}
