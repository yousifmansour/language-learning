import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Available mini apps</div>
      <br />
      <div>
        <button>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/translate"
          >
            A Better Translator ™
          </a>
        </button>
      </div>
    </main>
  );
}
