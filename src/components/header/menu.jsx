const menuList = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/#Blog" },
  { label: "Contact", link: "/#ContactUS" },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex text-gray-600 gap-10">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
