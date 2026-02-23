import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

type Props = {
    onClick?: () => void;
    className?: string;
}

export default function HamburgerMenu({ onClick, className }: Props) {
    return (
        <IconButton
            onClick={onClick}
            className={`md:hidden ${className || ""}`}
            aria-label="menu"
            size="large"
        >
            <MenuIcon className="text-gray-700 dark:text-gray-200" />
        </IconButton>
    );
}
