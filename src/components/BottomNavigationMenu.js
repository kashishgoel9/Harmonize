import * as React from "react";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, useLocation } from "react-router-dom";


/* eslint-disable jsx-a11y/alt-text */
import "../css/bottom_navigation_menu.css";

function BottomNavigationMenu({ }) {
    const navigate = useNavigate();
    const location = useLocation();

    const exclusionList = [
        '/',
        '/signup',
        '/signin',
        // 'home',
        '/callback',
        '/profiledetails',
        '/iam',
        '/passions',
        // 'matched',
        // 'matches',
        // 'profile'
    ]

    // React.useEffect(()=>{
    //     console.log(exclusionList.includes(location.pathname))
    // })

    const [value, setValue] = React.useState(0);
    return (

        <Box sx={{ width: 500 }}>
            <BottomNavigation
                className={!exclusionList.includes(location.pathname)?"bottom_nav":"hide_item"}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    navigate(newValue === 0 ? '/home' : (newValue === 1 ? '/matches' : '/profile'))
                }}
            >
                <BottomNavigationAction className={value === 0 ? "bottom_nav_icon" : "bottom_nav_icon_inactive"} label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction className={value === 1 ? "bottom_nav_icon" : "bottom_nav_icon_inactive"} label="Matches" icon={<FavoriteIcon />} />
                <BottomNavigationAction className={value === 2 ? "bottom_nav_icon" : "bottom_nav_icon_inactive"} label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Box>
    );
};
export default BottomNavigationMenu;