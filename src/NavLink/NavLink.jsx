import React from 'react';

const NavLink = ({route}) => {
    const {link, name} = route
    return (
        <li className='list-none font-bold text-lg lg:py-0 py-6'><a href={link}>{name}</a></li>
    );
};

export default NavLink;