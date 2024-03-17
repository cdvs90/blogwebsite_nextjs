import Image from "next/image";
import styles from "./page.module.css"
import Hero from "./img-home/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
   
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Better design for your digital products.
        </h1>
        <p className={styles.desc}>
        Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See our work"/>
        
        {/* <button className={styles.button}> See our work</button> */}
      </div>
   
   <div className={styles.item}>
     {/* <Image src="/hero.png" width={500} height={500} alt="" className={styles.img} /> */}
      <Image src={Hero} alt="" className={styles.img} />
   </div>
 </div>
   
  );
}
