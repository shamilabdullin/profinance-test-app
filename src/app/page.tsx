'use client'
import styles from "./page.module.sass"
import Menu from "@/components/Menu/Menu"
import InfoCard from "@/components/InfoCard/InfoCard"
import LinkButton from "@/components/LinkButton/LinkButton"
import Header from "@/components/Header/Header"
import Main from "@/components/Main/Main"
import Table from "@/components/Table/Table"
import { useState } from "react"

export type Products = {
  id: string,
  subject: string,
  article: string,
  size: string,
  availableForOrder: string,
  goodsOnTheWay: string,
  totalAmount: string
}

export default function Home() {

  const [products, setProducts] = useState<Products[]>([])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.main__leftBlock}>
          <Menu />
          <InfoCard />
          <LinkButton />
        </div>
        <div className={styles.main__rightBlock}>
          <Header />
          <Main products={products} setProducts={setProducts} />
          <Table products={products} setProducts={setProducts} />
        </div>
      </main>
    </div>
  );
}
