import Button from '../buttons/Button';
import './header.scss'
const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="logo">
            <img src="/assets/Group.png" alt="logo" />
            <div className='text'>ClearLink 
              <span>.</span> 
            </div>
          </div>

          <ul>
            <li>
              <span>Products</span>
              <img src="/assets/chevron-down.svg" alt="chev-down" />
            </li>

            <li>
              <span>Solutions</span>
              <img src="/assets/chevron-down.svg" alt="chev-down" />
            </li>

            <li>
              <span>Resources</span>
              <img src="/assets/chevron-down.svg" alt="chev-down" />
            </li>

            <li>
              <span>Pricing</span>
              <img src="/assets/chevron-down.svg" alt="chev-down" />
            </li>
          </ul>

          <Button />
        </nav>
      </div>
    </>
  );
}

export default Header