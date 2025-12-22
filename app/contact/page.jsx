import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div>
        <h1 className={styles.title}>Let's Keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image src="/contact.png" fill={true} alt='' className={styles.image}/>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder='Name' className={styles.input}/>
            <input type="text" placeholder='Email' className={styles.input}/>
            <textarea placeholder='Message...' className={styles.textArea} col="30" row="10"></textarea>
            <Button url={"#"} text={"Send"}/>
          </form>
        </div>
    </div>
  ) 
}

export default Contact