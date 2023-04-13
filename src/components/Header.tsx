import "./Header.css";

interface Props {
  children: JSX.Element;
}

const Header = ({ children }: Props): JSX.Element => {
  return <div className="headerContainer">{children}</div>;
};

export default Header;
