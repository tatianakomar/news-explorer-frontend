import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <header className="header">
        <HeaderNav />
        <SearchForm />
    </header>
  );
}

export default Header;
