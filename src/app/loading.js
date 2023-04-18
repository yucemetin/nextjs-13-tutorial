import React from 'react'
import styles from "./styles.module.css"

export default function Loading() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
