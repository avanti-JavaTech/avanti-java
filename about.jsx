var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>About - Book My Courier </title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        {/* Template Main CSS File */}
        <link href="assets/css/main.css" rel="stylesheet" />
        {/* =======================================================
  * Template Name: Yummy - v1.1.0
  * Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
        {/* ======= Header ======= */}
        <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="assets/img/logo.png" alt=""> */}
              <h1>Book My Courier<span>.</span></h1>
            </a>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>{/* .navbar */}
            <a className="btn-book-a-table" href="index.html">Book Courier</a>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          </div>
        </header>{/* End Header */}
        {/* ======= About Section ======= */}<br /><br />
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>Learn More <span>About Us</span></p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-7 about-img" style={{backgroundImage: 'url(assets/img/about.png)'}} data-aos="fade-up" data-aos-delay={150}>
                <div className="call-us position-absolute">
                  <h4>Book Your Courier Right now</h4>
                  <p>+91 7602933365</p>
                </div>
              </div>
              <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay={300}>
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Book My Courier is the fastest growing fully-integrated player in India . We aim to build the operating system for commerce, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge engineering and technology capabilities.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all" /> Our mission is to enable customers to operate flexible, reliable and resilient supply chains at the lowest costs.</li>
                    <li><i className="bi bi-check2-all" /> We provided supply chain solutions to a active customers such as e-commerce marketplaces, direct-to-consumer e-tailers and enterprises and SMEs across several verticals such as FMCG, consumer durables, consumer electronics, lifestyle, retail, automotive and manufacturing.</li>
                    <li><i className="bi bi-check2-all" /> This is achieved through high-quality logistics infrastructure and network engineering, a vast network of domestic and global partners and significant investments in automation, all of which are orchestrated by our self-developed logistics operating system that drive network synergies within and across our services and enhance our value proposition to customers.</li>
                  </ul>
                  <div className="position-relative mt-4">
                    <img src="assets/img/about.webp" className="img-fluid" alt="" />
                    <a href="https://youtu.be/lWnHjl3pDtg" className="glightbox play-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End About Section */}
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon" />
                <div>
                  <h4>Address</h4>
                  <p>
                    Samruddhi Co-operative IT Park - Mumbai ,  <br />
                    Goregaon West -400060<br />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-telephone icon" />
                <div>
                  <h4>Contact</h4>
                  <p>
                    <strong>Phone:</strong> +91 7602933365<br />
                    <strong>Email:</strong> info@bookmycourier.com<br />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-clock icon" />
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    <strong>Mon-Sat: 11AM</strong> - 6 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                  <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Book My courier</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">Book My courier</a>
            </div>
          </div>
        </footer>{/* End Footer */}
        {/* End Footer */}
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        <div id="preloader" />
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
    );
  }
});