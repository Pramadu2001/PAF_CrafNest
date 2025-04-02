import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightPart = () => {
    const handleChangeTheme = () => {
        console.log('theme Changed');
    };

    return (
        <div className="py-5 sticky top-0">
            <div className="relative flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search here.."
                    className="py-3 rounded-full text-gray-500 pl-12 pr-4 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <div className="absolute top-0 left-0 pl-3 pt-3">
                    <SearchIcon className="text-gray-500" />
                </div>
                <Brightness4Icon
                    className="cursor-pointer text-gray-500 hover:text-blue-500"
                    onClick={handleChangeTheme}
                />
            </div>
            <section className="my-5">
                <h1 className="text-xl font-bold">Get Verified</h1>
                <h1 className="font-bold my-2 text-gray-700">Subscribe to unlock new features</h1>
                <Button
                    variant="contained"
                    sx={{
                        padding: "10px",
                        paddingX: "20px",
                        borderRadius: "25px",
                        textTransform: 'none',
                        fontSize: '14px',
                    }}
                >
                    Get Verified
                </Button>
            </section>
            <section className="mt-7 space-y-5">
                <h1 className="font-bold text-xl py-1">What's Happening</h1>
                <div className="space-y-1">
                    <p className="text-sm text-gray-600">FIFA Women's World Cup - LIVE</p>
                    <p className="font-bold text-gray-800">Philippines vs Switzerland</p>
                </div>
                <div className="flex justify-between w-full">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-600">Entertainment · Trending</p>
                        <p className="font-bold text-gray-800">#TheMarvels</p>
                        <p className="text-sm text-gray-600">34.3k watching</p>
                    </div>
                    <MoreHorizIcon className="text-gray-500 hover:text-blue-500" />
                </div>
            </section>
        </div>
    );
};

export default RightPart;