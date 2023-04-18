import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from "./style.module.css"

export default function BlogCard({ title, body, id }) {
    return (
        <Link href={`/${id}`} className={styles.card}>
            <div className={styles.cardImage}>
                <Image src={`https://picsum.photos/200?random=${id}`} alt={title} fill />
            </div>
            <div className={styles.cardBody}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </Link>
    )
}
