import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/fetch">
      <a style={linkStyle}>Batman</a>
    </Link>
    <Link href="/styled">
      <a style={linkStyle}>Styled</a>
    </Link>
    <Link href="/quotes">
      <a style={linkStyle}>Quotes</a>
    </Link>
  </div>
);

export default Header;
