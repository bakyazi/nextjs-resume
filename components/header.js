import Link from 'next/link'

export default function Header() {
  return (
    <header className="header site-container pt-1 pb-1">
      <nav className="header-nav">
        <Link href="/">
          <div className="header-item">
            <span >About Me</span>
          </div>
        </Link>
        <Link href="/skills">
          <div className="header-item">
            <span >Skills</span>
          </div>
        </Link>
        <Link href="/resume">
          <div className="header-item">
            Resume
          </div>
        </Link>
        <Link href="/socials">
          <div className="header-item">
            Socials
          </div>
        </Link>
        <div className="header-item">
          <a href="https://blog.imberkay.com/" target="_blank" style={{ all: 'unset' }}>
            Blog
          </a>
        </div>
      </nav>
      <hr />
    </header>
  )
}