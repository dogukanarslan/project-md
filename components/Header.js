import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          <h2 className="header__logo">Project MD</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header
