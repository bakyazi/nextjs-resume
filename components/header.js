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
        <Link href="/redirect/blog">
          <div className="header-item">
            Blog
          </div>
        </Link>
      </nav>
      <hr/>
    </header>
  )
}