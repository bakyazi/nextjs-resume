import Link from 'next/link'

export default function Header() {
  return (
    <header className="header site-container pt-1 pb-1">
      <nav className="header-nav">
        <div className="header-item">
          <Link href="/">
            ABOUT
          </Link>
        </div>
        <div className="header-item">
          <Link href="/skills">
            SKILLS
          </Link>
        </div>
        <div className="header-item">
          <Link href="/resume">
            RESUME
          </Link>
        </div>
        <div className="header-item">
          <Link href="/socials">
            CONTACT
          </Link>
        </div>
        <div className="header-item">
          <a href="https://medium.com/@berkay.akyazi" target="_blank" style={{ all: 'unset' }}>
            BLOG
          </a>
        </div>
      </nav>
      <hr />
    </header>
  )
}