import React, { useState } from 'react';
import { Grid } from '@mui/material'; // Ensure correct Grid usage
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
import ReplyModal from './ReplyModal';

const Card = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const open = Boolean(anchorEl);
    const [openReplyModal, setOpenReplyModal] = useState(false);

    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteCraft = () => {
        console.log("delete post");
        handleClose();
    };

    const handleCreateCraft = () => {
        console.log("handle create Craft");
    };

    const handleLikeCraft = () => {
        setIsLiked(!isLiked);
        console.log("handle like Craft");
    };

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                    <Avatar
                        onClick={() => navigate(`/profile/${6}`)}
                        className="cursor-pointer"
                        alt="username"
                        src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
                    />
                </Grid>
                <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                    <div className="flex justify-between items-center">
                        <div className="flex cursor-pointer items-center space-x-2">
                            <span className="font-semibold">Craft with Shehan</span>
                            <span className="text-gray-600">@CraftwithShehan . 2m</span>
                            <img
                                className="ml-2 w-5 h-5"
                                src=""
                                alt=""
                            />
                        </div>
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
                    <div className="mt-2">
                        <div onClick={() => navigate(`/Craft/${3}`)} className="cursor-pointer">
                            <p className="mb-2 p-0 text-gray-800">DIY Craft idea to make new craft items</p>
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/19/10/01/art-1838414_1280.jpg"
                                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                                alt="New Craft"
                            />
                        </div>
                       
                        
                        <div className="py-5 flex flex-wrap justify-between items-center gap-3">
                            <div className="space-x-2 flex items-center text-gray-600">
                                <ChatBubbleOutlineIcon
                                    className="cursor-pointer hover:text-blue-500"
                                    onClick={handleOpenReplyModal}
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
                        </div>
                    </div>
                </Grid>
            </Grid>
            <section>
                <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
            </section>
        </React.Fragment>
    );
};

export default Card;
