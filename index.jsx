var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Book My Courier - Book courier in seconds</title>
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
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center section-bg">
          <div className="container">
            <div className="row justify-content-between gy-5">
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <h2 data-aos="fade-up">Book Your Courier in<br />Seconds</h2>
                <p data-aos="fade-up" data-aos-delay={100}>Book My courier is the platform where you can book your courier in few seconds</p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                  <a href="#book-a-table" className="btn-book-a-table">Book a Courier</a>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                <img src="assets/img/hero-img.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay={300} />
              </div>
            </div>
          </div>
        </section>{/* End Hero Section */}
        <main id="main">
          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us section-bg">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="why-box">
                    <h3>Why Choose us?</h3>
                    <p>
                      Book My Courier is the fastest growing fully-integrated player in India . We aim to build the operating system for commerce, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge engineering and technology capabilities.
                    </p>
                    <div className="text-center">
                      <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
                    </div>
                  </div>
                </div>{/* End Why Box */}
                <div className="col-lg-8 d-flex align-items-center">
                  <div className="row gy-4">
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-clipboard-data" />
                        <h4>Our Aim</h4>
                        <p>Our mission is to enable customers to operate flexible, reliable and resilient supply chains at the lowest costs.</p>
                      </div>
                    </div>{/* End Icon Box */}
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-gem" />
                        <h4>Service</h4>
                        <p>We provided supply chain solutions to a active customers such as e-commerce marketplaces, direct-to-consumer e-tailers and enterprises</p>
                      </div>
                    </div>{/* End Icon Box */}
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-inboxes" />
                        <h4>Technology</h4>
                        <p>This is achieved through high-quality logistics infrastructure and network engineering, a vast network of domestic and global partners and significant investments in automation</p>
                      </div>
                    </div>{/* End Icon Box */}
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Why Us Section */}
          {/* ======= Stats Counter Section ======= */}
          <section id="stats-counter" className="stats-counter">
            <div className="container" data-aos="zoom-out">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                    <p>Clients</p>
                  </div>
                </div>{/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start={0} data-purecounter-end={5021} data-purecounter-duration={1} className="purecounter" />
                    <p>Couriers</p>
                  </div>
                </div>{/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
                    <p>Hours Of Support</p>
                  </div>
                </div>{/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
                    <p>Cities</p>
                  </div>
                </div>{/* End Stats Item */}
              </div>
            </div>
          </section>{/* End Stats Counter Section */}
          {/* ======= Book A Table Section ======= */}
          <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Book A Courier</h2>
                <p>Book <span>Your Courier</span> With Us</p>
              </div>
              <div className="row g-0">
                <div className="col-lg-4 reservation-img" style={{backgroundImage: 'url(assets/img/reservation.jpg)'}} data-aos="zoom-out" data-aos-delay={200} />
                <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
                  <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-6">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input type="text" className="form-control" name="from City" placeholder="From" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <input type="text" className="form-control" name="dimensions" placeholder="Lenght * Bridth * Height" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="receiver" rows={5} placeholder="Receiver details - Address , Name and Contact" defaultValue={""} />
                      <div className="validate" />
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Book a Courier</button></div>
                  </form>
                </div>{/* End Reservation Form */}
              </div>
            </div>
          </section>{/* End Book A Table Section */}
        </main>{/* End #main */}
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