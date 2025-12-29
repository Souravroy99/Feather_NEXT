import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="Team working on digital products"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle }>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            We design and build meaningful digital experiences that inspire,
            engage, and perform.
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a passionate team of designers and developers who believe
            that great digital products are created at the intersection of
            creativity, strategy, and technology.
            <br />
            <br />
            Our focus is not just on building visually appealing interfaces, but
            on crafting experiences that solve real problems and deliver real
            value to users. Every project we take on is treated with care,
            precision, and a deep understanding of user needs.
            <br />
            <br />
            From concept to launch, we work closely with our clients to ensure
            every detail aligns with their vision and business goals.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We help brands and individuals establish a strong digital presence
            through thoughtful design and scalable development.
            <br />
            <br />
            • Creative illustrations and visual identity  
            <br />
            • Dynamic, responsive, and SEO-friendly websites  
            <br />
            • High-performance and user-focused web applications  
            <br />
            • Mobile-first solutions for modern users  
            <br />
            • Clean, maintainable, and future-ready code
          </p>
          <Button url="/contact" text="Let’s Work Together" />
        </div>
      </div>
    </div>
  )
}

export default About
