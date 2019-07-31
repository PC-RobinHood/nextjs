import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/whoweare">
      <a style={linkStyle}>Who We Are</a>
    </Link>
    <Link href="/whatwedo">
      <a style={linkStyle}>What We Do</a>
    </Link>
    <Link href="/getinformed">
      <a style={linkStyle}>Get Informed</a>
    </Link>
    <Link href="/getinvolved">
      <a style={linkStyle}>Get Involved</a>
    </Link>
    <Link href="/events">
      <a style={linkStyle}>Events</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    <Link href="/donate">
      <button style={linkStyle}>Donate</button>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        background-color: transparent;
      }
      a:active,
      a:hover {
        outline: 0;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default Header;
