import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          New Town
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/add-booking">
                Add New Booking
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/all-bookings">
                All Booking
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/search-booking">
                Search Booking
              </a>
            </li>
            <button
              onClick={() => {
                localStorage.removeItem("userInfo");
                history.push("/login");
              }}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
