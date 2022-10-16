import React, { ForwardedRef } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <NavItem label="Home" />
      </Link>
      <Link href="/catalog" passHref>
        <NavItem label="Catalog" />
      </Link>
      <Link href="/contacts" passHref replace={true}>
        <NavItem label="Contacts" />
      </Link>
    </nav>
  )
};

export default Navbar;

interface NavItemProps {
  label: string;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = React.forwardRef((props, ref: ForwardedRef<HTMLAnchorElement>) => {
  return (
    <div>
      <a className="navitem" href={props.href} ref={ref}>{props.label}</a>
    </div>
  )
})

NavItem.displayName = 'NavItem';