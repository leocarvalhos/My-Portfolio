import Image from 'next/image';
import Header from '../components/header';
import styles from '../styles/Skills.module.sass';
import { frameworks } from '../utils';
export default function Skills() {
	return (
		<Header>
			<main className={styles.skills}>
				<section className={styles.title}>
					<h1>Habilidades</h1>
					<p>São com essas ferramentas com que tenho trabalhado.</p>
				</section>
				<section className={styles.frameworks}>
					<div>
						{frameworks.map((tech) => {
							return (
								<div key={tech.name} className={styles.organization}>
									<Image className={styles.icons} src={tech.src} alt='git' width={125} height={125} />
									<span>{tech.name}</span>
								</div>
							);
						})}
					</div>
				</section>
			</main>
		</Header>
	);
}
