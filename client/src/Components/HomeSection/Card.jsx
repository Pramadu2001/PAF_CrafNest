import React, { useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLiked, setIsLiked] = useState(false);
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
    const handleDeleteCraft = () => {
        console.log("delete post");
        handleClose();
    };
    const handleOpenReplyModel = () => {
        console.log("open model");
    };
    const handleCreateCraft = () => {
        console.log("handle create Craft");
    };
    const handleLikeCraft = () => {
        setIsLiked(!isLiked);
        console.log("handle like Craft");
    };

    return (
        <div className="border-b border-gray-200 py-4">
            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
                <RepeatIcon/>
            </div> */}
            <div className="flex space-x-5">
                <Avatar
                    onClick={() => navigate('/profile/6')}
                    alt="user"
                    className="cursor-pointer"
                />
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex cursor-pointer items-center space-x-2">
                            <span className="font-semibold">Craft with Shehan</span>
                            <span className="text-gray-500 text-sm">@CraftwithShehan .2m</span>
                            <img
                                src="https://via.placeholder.com/20" // Placeholder for verified icon
                                alt="verifiedIcon"
                                className="w-5 h-5"
                            />
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteCraft}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteCraft}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div onClick={()=> navigate('/Craft/${3}')}  className="cursor-pointer">
                            <p className="mb-2 p-0 text-gray-800">DIY Craft idea to make bamboo bag</p>
                            <img
                                src="./assets/Logo.png"
                                className="w-full max-w-[28rem] border border-gray-200 rounded-md object-cover"
                                alt="bamboo bag"
                            />
                        </div>
                        <div className="py-5 flex flex-wrap justify-between items-center gap-3">
                            <div className="space-x-2 flex items-center text-gray-600">
                                <ChatBubbleOutlineIcon
                                    className="cursor-pointer hover:text-blue-500"
                                    onClick={handleOpenReplyModel}
                                />
                                <p className="text-sm">43</p>
                            </div>
                            <div className="space-x-2 flex items-center text-gray-600">
                                <RepeatIcon
                                    onClick={handleCreateCraft}
                                    className="cursor-pointer hover:text-green-500"
                                />
                                <p className="text-sm">54</p>
                            </div>
                            <div
                                className={`space-x-2 flex items-center ${
                                    isLiked ? 'text-pink-600' : 'text-gray-600'
                                }`}
                            >
                                {isLiked ? (
                                    <FavoriteIcon
                                        onClick={handleLikeCraft}
                                        className="cursor-pointer hover:text-pink-700"
                                    />
                                ) : (
                                    <FavoriteBorderIcon
                                        onClick={handleLikeCraft}
                                        className="cursor-pointer hover:text-pink-500"
                                    />
                                )}
                                <p className="text-sm">54</p>
                            </div>
                            <div className="space-x-2 flex items-center text-gray-600">
                                <BarChartIcon
                                    className="cursor-pointer hover:text-blue-500"
                                    onClick={handleOpenReplyModel}
                                />
                                <p className="text-sm">200</p>
                            </div>
                            <div className="space-x-2 flex items-center text-gray-600">
                                <FileUploadIcon
                                    className="cursor-pointer hover:text-blue-500"
                                    onClick={handleOpenReplyModel}
                                />
                                <p className="text-sm">200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;