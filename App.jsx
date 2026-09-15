import './App.css'
import { useState } from 'react'
import profileImg from './assets/WhatsApp Image 2026-08-11 at 11.51.27.jpeg'
import hobi from './assets/WhatsApp Image 2026-09-08 at 07.54.40.jpeg'
import gambar from './assets/WhatsApp Image 2026-09-08 at 07.54.40 (1).jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navigasi */}
      <nav className="navbar">
        <a href="#about">About Me</a>
        <a href="#hobi">Hobi</a>
        <a href="#kontak">Kontak</a>
      </nav>

      {/* Profile */}
      <img 
        alt="Profile" 
        src={profileImg} 
        className="Logo" 
      />

      {/* About Me */}
      <section id="about">
        <h1>About me</h1>
        <p>Ini adalah informasi baru saya.</p>
        <p>Nama : Fath Ad Dafi Ali Al Iskandar</p>
        <p>NIM : 2503618</p>
        <p>Tempat, Tanggal Lahir : Majalengka, 11 Mei 2007</p>
        <p>Asal Sekolah : SMA Negeri 2 Majalengka</p>
      </section>

      <hr />

      {/* Hobi */}
      <section id="hobi">
        <h1>Hobi</h1>

        <div className="hobi-container">

          <div className="hobi-card">
            <h2>🎮 Bermain Game</h2>
            <img 
              src={gambar} 
              alt="Bermain Game" 
              className="Hobi" 
            />
            <p>
              Salah satu kegiatan yang sering saya lakukan 
              di waktu luang.
            </p>
          </div>

          <div className="hobi-card">
            <h2>🎨 Menggambar</h2>
            <img 
              src={hobi} 
              alt="Menggambar" 
              className="Hobi" 
            />
            <p>
              Saya suka menggambar ketika sedang ingin 
              mengisi waktu luang.
            </p>
          </div>

        </div>
      </section>

      <hr />

      {/* Kontak */}
      <section id="kontak">
        <h1>Kontak & Media Sosial</h1>

        <p>
          Instagram: 
          <a href="https://www.instagram.com/dsni_dafiiii" target="_blank" rel="noreferrer">
            Instagram Saya
          </a>
        </p>

        <p>
          Whatsapp: 
          <a href="https://wa.me/6285794333555" target="_blank" rel="noreferrer">
            Whatsapp Saya
          </a>
        </p>
      </section>
    </>
  )
}

export default App