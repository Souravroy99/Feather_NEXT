import Image from 'next/image'
import styles from './page.module.css'

const Footer = () => {
  return (
    <div>
      <div className={styles.contactContainer}>@2026 Feather. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt="Lama Dev" />
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt="Lama Dev" />
        <Image src="/4.png" width={20} height={20} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  )
}

export default Footer
