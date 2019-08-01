import Link from "next/link";

function Header() {
  return (
    <header className="link link-theme link-arrow">
      <Link href="/">
        <a className="logo">Org Name Here</a>
      </Link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon" />
      </label>
      <ul className="menu">
        <Link href="/whoweare">
          <a className="link link-theme link-arrow">Who We Are</a>
        </Link>
        <Link href="/whatwedo">
          <a className="link link-theme link-arrow">What We Do</a>
        </Link>
        <Link href="/getinformed">
          <a className="link link-theme link-arrow">Get Informed</a>
        </Link>
        <Link href="/getinvolved">
          <a className="link link-theme link-arrow">Get Involved</a>
        </Link>
        <Link href="/events">
          <a className="link link-theme link-arrow">Events</a>
        </Link>
        <Link href="/contact">
          <a className="link link-theme link-arrow">Contact</a>
        </Link>
        <Link href="/donate">
          <button className="link link-theme link-arrow">Donate</button>
        </Link>
      </ul>
      <style jsx>{`
        a {
          color: #777;
          text-decoration: none;
        }
        .header {
          background-color: #fff;
          position: fixed;
          width: 80%;
          z-index: 3;
          margin-left: 10%;
          margin-right: 10%;
          padding: 20px 0;
        }
        .header ul {
          margin: 0;
          padding: 0;
          list-style: none;
          overflow: hidden;
          background-color: #fff;
        }
        .header li a {
          display: block;
          padding: 20px 20px 4px 20px;
          text-decoration: none;
        }
        .header li a:hover,
        .header .menu-btn:hover {
          background-color: #fff;
        }
        .header .logo {
          color: #ffd300;
          display: block;
          float: left;
          font-size: 2em;
          padding: 2px 0px;
          text-decoration: none;
        }
        .header .menu {
          clear: both;
          max-height: 0;
          transition: max-height 0.2s ease-out;
        }
        .header .menu-icon {
          cursor: pointer;
          display: inline-block;
          float: right;
          padding: 28px 20px;
          position: relative;
          user-select: none;
        }
        .header .menu-icon .navicon {
          background: #333;
          display: block;
          height: 2px;
          position: relative;
          transition: background 0.2s ease-out;
          width: 18px;
        }
        .header .menu-icon .navicon:before,
        .header .menu-icon .navicon:after {
          background: #333;
          content: "";
          display: block;
          height: 100%;
          position: absolute;
          transition: all 0.2s ease-out;
          width: 100%;
        }
        .header .menu-icon .navicon:before {
          top: 5px;
        }

        .header .menu-icon .navicon:after {
          top: -5px;
        }

        .header .menu-btn {
          display: none;
        }

        .header .menu-btn:checked ~ .menu {
          max-height: 240px;
        }

        .header .menu-btn:checked ~ .menu-icon .navicon {
          background: transparent;
        }

        .header .menu-btn:checked ~ .menu-icon .navicon:before {
          transform: rotate(-45deg);
        }

        .header .menu-btn:checked ~ .menu-icon .navicon:after {
          transform: rotate(45deg);
        }

        .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
        .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
          top: 0;
        }

        .link-arrow:after {
          content: "";
          background-size: 100% 100%;
          width: 16px;
          height: 12px;
          position: absolute;
          top: 5px;
          right: -28px;
          -webkit-transition: all 0.4s cubic-bezier(0.35, 1, 0.33, 1);
          transition: all 0.4s cubic-bezier(0.35, 1, 0.33, 1);
        }

        .link-arrow:hover:after {
          right: -35px;
        }

        .link-arrow.link-arrow-white:after {
          background-size: 100% 100%;
        }

        .link-arrow-hover:after {
          right: -35px;
        }

        .link {
          display: inline-block;
          position: relative;
          border: none;
          padding-bottom: 4px;
          text-transform: uppercase;
          font-family: Montserrat, helvetica, arial, sans-serif;
          font-weight: 700;
        }

        .link:active,
        .link:focus,
        .link:hover {
          outline: 0;
        }

        .link:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          background: #000;
          width: 0;
          height: 2px;
          -webkit-transition: all 0.4s cubic-bezier(0.35, 1, 0.33, 1);
          transition: all 0.4s cubic-bezier(0.35, 1, 0.33, 1);
        }

        .link:hover {
          color: #000;
        }

        .link:hover:before {
          width: 100%;
        }

        .link-theme:before {
          background: #ffd300;
        }

        @media (min-width: 875px) {
          .header li {
            float: left;
          }
          .header li a {
            padding: 20px 0px 0px 0px;
            margin-left: 30px;
          }
          .header .menu {
            clear: none;
            float: right;
            max-height: none;
          }
          .header .menu-icon {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
