const Navbar = ({ navValue }) => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        {navValue !== "" ? <li>{navValue}</li> : null}
      </ul>
    </div>
  );
};

export default Navbar;
