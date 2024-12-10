import Link from "next/link";
import Image from "next/image";
import "../static/css/pages/home.css";

import landingImage from '@static/images/pages/home/anime-night-sky-illustration.jpg'

export default function Home() {
  return (
    <div className="page">
      <div id="home" className="page-content">
        <div className="page-wrapper">
          <div className="dashboard-art">
            <div className="art-overlay"></div>
            <h1>Welcome To Arcadia</h1>
            <Image src={landingImage} alt="Night skyline of an anime world" />
          </div>
          <div className="app-container">
            <Link href="/miru">
              <div className="app">
                <div className="icon-container miru miru--has-hover">
                  <img src="../../static/images/app_icons/miru.svg" />
                </div>
                <p>Miru</p>
              </div>
            </Link>
            <Link href="/yomu">
              <div className="app">
                <div className="icon-container yomu yomu--has-hover">
                  <img src="../../static/images/app_icons/yomu.svg" />
                </div>
                <p>Yomu</p>
              </div>
            </Link>
            <Link href="/asobu">
              <div className="app">
                <div className="icon-container asobu asobu--has-hover">
                  <img src="../../static/images/app_icons/asobu.svg" />
                </div>
                <p>Asobu</p>
              </div>
            </Link>
            <Link href="/kau">
            <div className="app">
              <div className="icon-container kau kau--has-hover">
                <img src="../../static/images/app_icons/kau.svg" />
              </div>
              <p>Kau</p>
            </div>
            </Link>
            <Link href="/tsunagu">
              <div className="app">
                <div className="icon-container tsunagu tsunagu--has-hover">
                  <img src="../../static/images/app_icons/tsunagu.svg" />
                </div>
                <p>Tsunagu</p>
              </div>

            </Link>
            <Link href="/iku">
              <div className="app">
                <div className="icon-container iku iku--has-hover">
                  <img src="../../static/images/app_icons/iku.svg" />
                </div>
                <p>Iku</p>
              </div>
            </Link>
            <Link href="/shiru">
              <div className="app">
                <div className="icon-container shiru shiru--has-hover">
                  <img src="../../static/images/app_icons/shiru.svg" />
                </div>
                <p>Shiru</p>
              </div>
            </Link>
            <Link href="/hiku">
              <div className="app">
                <div className="icon-container hiku hiku--has-hover">
                  <img src="../../static/images/app_icons/hiku.svg" />
                </div>
                <p>Hiku</p>
              </div>
            </Link>
            <Link href="/kiku">
              <div className="app">
                <div className="icon-container kiku kiku--has-hover">
                  <img src="../../static/images/app_icons/kiku.svg" />
                </div>
                <p>Kiku</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
