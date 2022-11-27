import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

function PressReleasePage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to backend server
  // fetch piece of data with slug of router.query.slug

  return (
    <main className={styles.main}>
      <h1>AppWork Press Release--Single Page</h1>
    </main>
  );
}

export default PressReleasePage;
