import Link from "next/link";
import "../static/css/pages/home.css";

export default function Home() {
  return (
    <div id="home">
      <h1>Welcome to Arcadia</h1>
      <p>Choose from an app below to get started!</p>
      <div className="app-container">
        <Link href="/miru">
          Miru
        </Link>
        <Link href="/miru">
          Yomu
        </Link>
        <Link href="/asobu">
          Yomu
        </Link>
        <Link href="/kau">
          Kau
        </Link>
        <Link href="/tsunagu">
          Tsunagu
        </Link>
      </div>
    </div>
  );
}
