import styles from "./Navbar.module.css";

const Navbar = () => {

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`p-3 text-bg-dark ${styles.navbarCustom}`}>
        <div className={styles.container}>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul
              className={`nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ${styles.navRight}`}
            >
              <li>
                <a
                  href="#"
                  className={`nav-link px-2 text-white ${styles.navLink}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`nav-link px-2 text-white ${styles.navLink}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleScrollToSection("about");
                  }}
                
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`nav-link px-2 text-white ${styles.navLink}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleScrollToSection("project");
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`nav-link px-2 text-white ${styles.navLink}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleScrollToSection("ContactMe");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-outline-light">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.content}>{/* Page content here */}</div>
    </>
  );
};

export default Navbar;
