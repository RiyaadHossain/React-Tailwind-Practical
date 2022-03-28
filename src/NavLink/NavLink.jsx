import React from 'react';

const NavLink = ({route}) => {
    const {link, name} = route
    return (
        <li className='list-none font-bold text-lg md:py-0 px-4'><a href={link}>{name}</a></li>
    );
};

export default NavLink;