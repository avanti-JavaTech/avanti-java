var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Contact -  Book My Courier</title>
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
        <br />
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Contact</h2>
              <p>Need Help? <span>Contact Us</span></p>
            </div>
            <div className="mb-3">
              <iframe style={{border: 0, width: '100%', height: '350px'}} id="gmap_canvas" src="https://maps.google.com/maps?q=Samruddhi%20Co-operative%20IT%20Park%20-%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
            </div>{/* End Google Maps */}
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-map flex-shrink-0" />
                  <div>
                    <h3>Our Address</h3>
                    <p>Samruddhi Co-operative IT Park - Mumbai , Goregaon West -400060</p>
                  </div>
                </div>
              </div>{/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>contact@bookmycourier.com</p>
                  </div>
                </div>
              </div>{/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 7602933365</p>
                  </div>
                </div>
              </div>{/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-share flex-shrink-0" />
                  <div>
                    <h3>Opening Hours</h3>
                    <div><strong>Mon-Sat:</strong> 11 AM - 6 PM;
                      <strong>Sunday:</strong> Closed
                    </div>
                  </div>
                </div>
              </div>{/* End Info Item */}
            </div>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form p-3 p-md-4">
              <div className="row">
                <div className="col-xl-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-xl-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
            {/*End Contact Form */}
          </div>
        </section>{/* End Contact Section */}
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