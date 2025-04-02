import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigationMenu } from './NavigationMenu';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Map icon strings to their components
const iconMap = {
    HomeIcon: <HomeIcon style={{ color: '#000000' }} />,
    ExploreIcon: <ExploreIcon style={{ color: '#000000' }} />,
    NotificationIcon: <NotificationIcon style={{ color: '#000000' }} />,
    MessageIcon: <MessageIcon style={{ color: '#000000' }} />,
    ListAltIcon: <ListAltIcon style={{ color: '#000000' }} />,
    GroupIcon: <GroupIcon style={{ color: '#000000' }} />,
    VerifiedIcon: <VerifiedIcon style={{ color: '#1976D2' }} />,
    AccountCircleIcon: <AccountCircleIcon style={{ color: '#000000' }} />,
    PendingIcon: <PendingIcon style={{ color: '#000000' }} />,
};

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        console.log('logout');
        handleClose();
    };

    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between overflow-y-auto no-scrollbar px-4" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
            <div>
                <div className="py-5">
                    <img
                        src="/assets/Logo.png"
                        alt="Logo"
                        width="140"
                        height="140"
                        className="bg-transparent"
                        style={{ filter: 'drop-shadow(0 0 5px rgba(25, 118, 210, 0.3))' }} // Assuming logo has blue gradient
                    />
                </div>
                <div className="space-y-1.5">
                    {navigationMenu.map((item, index) => (
                        <div
                            key={index}
                            className="cursor-pointer flex space-x-3 items-center py-2 hover:bg-gray-100 rounded-md px-2"
                            style={{ color: '#000000' }}
                            onClick={() =>
                                item.title === 'Profile'
                                    ? navigate(`/Profile/5`)
                                    : navigate(item.path)
                            }
                        >
                            {iconMap[item.icon]}
                            <p className="text-xl" style={{ color: '#000000' }}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="py-10">
                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            borderRadius: "29px",
                            py: "15px",
                            fontSize: "16px",
                            backgroundColor: '#1976D2',
                            color: '#FFFFFF',
                            '&:hover': {
                                backgroundColor: '#42A5F5',
                            },
                        }}
                    >
                        Craft
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-3">
                    <Avatar sx={{ bgcolor: '#42A5F5' }} />
                    <div className="flex flex-col">
                        <span className="font-semibold" style={{ color: '#000000' }}>Craft with Shehan</span>
                        <span className="opacity-70 text-sm" style={{ color: '#757575' }}>@CraftwithShehan</span>
                    </div>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ color: '#000000' }}
                        >
                            <MoreHorizIcon style={{ color: '#000000' }} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            PaperProps={{
                                sx: {
                                    backgroundColor: '#FFFFFF',
                                    color: '#000000',
                                },
                            }}
                        >
                            <MenuItem onClick={handleLogout} style={{ color: '#000000' }}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;