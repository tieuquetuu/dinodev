import Image from "next/image";
import styles from "./page.module.css";
import AppProducts from "@/app/components/AppProducts";

export default function Home() {
  return (
    <div className={styles.page}>
      <AppProducts />
    </div>
  );
}
