import Link from 'next/link'
import styles from './page.module.css'

const links = [
    { id:1, linkName: "Home", linkURL: '/' },
    { id:2, linkName: "About", linkURL: '/about' },
    { id:3, linkName: "Blog", linkURL: '/blog' },
    { id:4, linkName: "Portfolio", linkURL: '/portfolio' },
    { id:5, linkName: "Contact", linkURL: '/contact' },
    { id:6, linkName: "Dashboard", linkURL: '/dashboard' },
]

const Navbar = () => {
  return (
    <div className={styles.contactContainer}>
      <Link className={styles.logo} href={'/'}>Feather</Link>
      <div className={styles.links}>
        {
          links.map((link) => {
            return <Link className={styles.link} key={link.id} href={link.linkURL}>{link.linkName}</Link>
          })
        }

        <button className={styles.logout} >Logout</button>
      </div>
    </div>
  )
}

export default Navbar
