import Git from '../../public/images/git.svg';
import Jest from '../../public/images/jest.svg';
import Js from '../../public/images/js.svg';
import Ts from '../../public/images/ts.svg';
import MongoDb from '../../public/images/mongodb.svg';
import Next from '../../public/images/nextjs.svg';
import Node from '../../public/images/nodejs.svg';
import Postgres from '../../public/images/postgres.svg';
import ReactJs from '../../public/images/react.svg';
import Sass from '../../public/images/sass.svg';
import TypeORM from '../../public/images/typeorm.svg';
import Css from '../../public/images/css.svg';

interface Fw {
	name: string;
	src: any;
	alt: string;
}

export const frameworks: Fw[] = [
	{ src: Node, alt: 'node.js', name: 'Node.js' },
	{ src: Ts, alt: 'typescript', name: 'TypeScript' },
	{ src: TypeORM, alt: 'typeORM', name: 'TypeORM' },
	{ src: Postgres, alt: 'postgres', name: 'Postgres' },
	{ src: MongoDb, alt: 'mongodb', name: 'MongoDB' },
	{ src: Jest, alt: 'jest', name: 'Jest' },
	{ src: Js, alt: 'javascript', name: 'JavaScript' },
	{ src: ReactJs, alt: 'react.js', name: 'React.Js' },
	{ src: Next, alt: 'next.js', name: 'Next.Js' },
	{ src: Css, alt: 'css', name: 'CSS' },
	{ src: Sass, alt: 'Sass', name: 'Sass' },
	{ src: Git, alt: 'git', name: 'Git' },
];
