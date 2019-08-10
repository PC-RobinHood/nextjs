function Footer() {
  return (
<div className="container footer">
  <article className="foot-content-left">
    <ul>&copy;2019 - Donated by PC RobinHood</ul>
  </article>

  <article className="foot-content">
    <ul>
      <li><a href="support@pcrobinhood.com">support@pcrobinhood.com</a></li>
      <li className="social"><a href="https://www.facebook.com/">Facebook</a></li>
      <li className="social"><a href="https://twitter.com/">Twitter</a></li>
      <li className="social"><a href="https://www.linkedin.com/company/">LinkedIn</a></li>
    </ul>
  </article>
<style jsx>{`
.footer {
  font-size: 14px;
  padding: 40px 0;
  background: #fff;
  color: #888
}

.footer .container {
  position: relative
}

.footer ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 35px
}

.footer ul li {
  margin-bottom: 10px
}

.footer ul a {
  display: inline-block;
  position: relative;
  border: none;
  padding-bottom: 4px;
  text-transform: uppercase;
  color: #000;
  font-family: Montserrat, helvetica, arial, sans-serif;
  font-weight: 700;
  font-family: Montserrat, helvetica, arial, sans-serif;
  font-weight: 400;
  color: #888;
  text-transform: none
}

.footer ul a:active,
.footer ul a:focus,
.footer ul a:hover {
  outline: 0
}

.footer ul a:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  background: #000;
  width: 0;
  height: 2px;
  -webkit-transition: all .4s cubic-bezier(.35, 1, .33, 1);
  transition: all .4s cubic-bezier(.35, 1, .33, 1)
}

.footer ul a:hover {
  color: #000
}

.footer ul a:hover:before {
  width: 100%
}

.footer ul a:before {
  background: #ffd300
}

.footer .col-logo .path-letter {
  -webkit-transition: all .3s cubic-bezier(.35, 1, .33, 1);
  transition: all .3s cubic-bezier(.35, 1, .33, 1);
  opacity: 0;
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0)
}

.footer .col-logo:hover .path-letter {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 1
}

@media only screen and (min-width:768px) {
  .footer {
    padding: 70px 0
  }
  .footer ul {
    margin-top: 15px
  }
  .footer ul li {
    display: inline-block;
    margin: 0 0 0 10px
  }
 
  .footer .foot-content-left {
    float: left
  }
  .footer .foot-content {
    float: right
  }
}
`}</style>
</div>
  );
}

export default Footer