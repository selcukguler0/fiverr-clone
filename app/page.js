import Image from 'next/image'
import styles from './page.module.css'
import Logo from '@/components/Logo';

export default function Home() {
  return (
		<>
			<img src="/bg-hero.png" className={styles.bgImage} />
			<div className={styles.container}>
				<nav className={styles.navbar}>
					<Logo />
					<div className={styles.navLinks}>
						<a href="#">Fiverr Business</a>
						<a href="#">Explore</a>
						<a href="#">English</a>
						<a href="#">Become a Seller</a>
						<a href="#">Join</a>
					</div>
				</nav>
				<div className={styles.searchContainer}>
					<h1>
						Find the perfect <span>freelance services,</span> for your business
					</h1>
					<div>
						<input type="text" placeholder='Search for a service...' />
					</div>
					<div>
						<span>Populer:</span>
						<a href="#">Logo Design</a>
						<a href="#">WordPress</a>
						<a href="#">Web Development</a>
					</div>
				</div>
			</div>
		</>
	);
}
