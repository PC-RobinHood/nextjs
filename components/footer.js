import Link from "next/link";

const linkStyle = {
  float: "left",
  height: "50px",
  padding: "15px 15px",
  fontsize: "18px",
  lineheight: "20px"
};

const navStyle = {
  display: "none"
};

const container = {
  display: "none"
};

export default function Header() {
  return (
    <nav style={navStyle}>
      <div style={container}>
        <div>
          <Link href="/">
            <a class="link link-theme link-arrow">Home</a>
          </Link>
          <Link href="/whoweare">
            <a class="link link-theme link-arrow">Who We Are</a>
          </Link>
          <Link href="/whatwedo">
            <a class="link link-theme link-arrow">What We Do</a>
          </Link>
          <Link href="/getinformed">
            <a class="link link-theme link-arrow">Get Informed</a>
          </Link>
          <Link href="/getinvolved">
            <a class="link link-theme link-arrow">Get Involved</a>
          </Link>
          <Link href="/events">
            <a class="link link-theme link-arrow">Events</a>
          </Link>
          <Link href="/contact">
            <a class="link link-theme link-arrow">Contact</a>
          </Link>
          <Link href="/donate">
            <button class="link link-theme link-arrow">Donate</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}