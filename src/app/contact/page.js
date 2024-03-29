import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: 'Contact',
  description: 'This is Contact',
};

const Contact = () => {
  return (
    <div className={styles.container}> 
    <h1 className={styles.title}></h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
        src="/contact.png"
        fill={true}
        alt=''
        className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder='name' className={styles.input}/>
        <input type="text" placeholder='email' className={styles.input} />
        <textarea className={styles.textArea} placeholder='message' id="" cols="30" rows="10"></textarea>
        <Button url='https://www.facebook.com/' text="send"/>
      </form>
    </div>
    </div>
  )
}

export default Contact