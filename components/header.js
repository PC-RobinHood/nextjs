function Header() {
  return (
    <header className="header">
      <a className="logo" href=".page-top">
        Charity
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li>
          <a href="#one" className="link link-theme link-arrow">
            Who We Are
          </a>
        </li>
        <li>
          <a href="#two" className="link link-theme link-arrow">
            Our Mission
          </a>
        </li>
        <li>
          <a href="#three" className="link link-theme link-arrow">
            Adopt
          </a>
        </li>
        <li>
          <a href="#four" className="link link-theme link-arrow">
            Get Involved
          </a>
        </li>
        <li>
          <a href="#four" className="link link-theme link-arrow">
            Donate
          </a>
        </li>
      </ul>
      <style jsx>{`
        a{color:#777;text-decoration:none;}
        .header{width:80%;}
        .link-arrow:after{content:'';background-size:100% 100%;width:16px;height:12px;position:absolute;top:5px;right:-28px;-webkit-transition:all .4s cubic-bezier(.35, 1, .33, 1);transition:all .4s cubic-bezier(.35, 1, .33, 1);}
        .link-arrow:hover:after{right:-35px;}
        .link{display:inline-block;position:relative;border:none;padding-bottom:4px;text-transform:uppercase;font-family:Montserrat, helvetica, arial, sans-serif;font-weight:700;}
        .link:active,.link:focus,.link:hover{outline:0;}
        .link:before{content:'';position:absolute;left:0;bottom:0;background:#000;width:0;height:2px;-webkit-transition:all .4s cubic-bezier(.35, 1, .33, 1);transition:all .4s cubic-bezier(.35, 1, .33, 1);}
        .link:hover{color:#000;}
        .link:hover:before{width:100%;}
        .link-theme:before {background:#ffd300}
        .header{width:80%;}
        .header{background-color:#fff;position:fixed;width:80%;z-index:3;margin-left:10%;margin-right:10%;padding:20px 0;}
        .header ul{margin:0;padding:0;list-style:none;overflow:hidden;background-color:#fff;}
        .header li a{display:block;padding:20px 20px 4px 20px;text-decoration:none;}
        .header li a:hover,.header .menu-btn:hover{background-color:#fff;}
        .header .logo{color:#ffd300;display:block;float:left;font-size:2em;padding:2px 0px;text-decoration:none;}
        .header .menu{clear:both;max-height:0;transition:max-height .2s ease-out;}
        .header .menu-icon{cursor:pointer;display:inline-block;float:right;padding:28px 20px;position:relative;user-select:none;}
        .header .menu-icon .navicon{background:#333;display:block;height:2px;position:relative;transition:background .2s ease-out;width:18px;}
        .header .menu-icon .navicon:before,.header .menu-icon .navicon:after{background:#333;content:'';display:block;height:100%;position:absolute;transition:all .2s ease-out;width:100%;}
        .header .menu-icon .navicon:before{top:5px;}
        .header .menu-icon .navicon:after{top:-5px;}
        .header .menu-btn{display:none;}
        .header .menu-btn:checked ~ .menu{max-height:240px;}
        .header .menu-btn:checked ~ .menu-icon .navicon{background:transparent;}
        .header .menu-btn:checked ~ .menu-icon .navicon:before{transform:rotate(-45deg);}
        .header .menu-btn:checked ~ .menu-icon .navicon:after{transform:rotate(45deg);}
        .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after{top:0;}
        @media (min-width: 875px){
        .header li{float:left;}
        .header li a{padding:20px 0px 0px 0px;margin-left:30px;}
        .header .menu{clear:none;float:right;max-height:none;}
        .header .menu-icon{display:none;}
        }
        /*! CSS Used fontfaces */
        @font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}
        @font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}
        @font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;}
        @font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
        @font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
      `}</style>
    </header>
  );
}

export default Header;
