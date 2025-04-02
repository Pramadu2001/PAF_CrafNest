import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Button from '@mui/material/Button';
import Card from './Card';

const validationSchema = Yup.object().shape({
    content: Yup.string().required('Content is required'),
});

const HomeSection = () => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleSubmit = (values) => {
        console.log("values", values);
    };

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
        },
        onSubmit: handleSubmit,
        validationSchema,
    });

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgFile = event.target.files[0];

        if (imgFile) {
            formik.setFieldValue("image", imgFile);
            setSelectedImage(URL.createObjectURL(imgFile));
        }

        setUploadingImage(false);
    };

    return (
        <div className="space-y-5" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
            <section>
                <h1 className="py-5 text-xl font-bold opacity-90" style={{ color: '#000000' }}>Home</h1>
            </section>
            <section className="pb-10">
                <div className="flex space-x-5">
                    <Avatar alt="userName" sx={{ bgcolor: '#42A5F5' }} />
                    <div className="w-full">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="content"
                                    placeholder="What is happening?"
                                    className="border-0  text-xl bg-transparent rounded-md px-4 py-2 w-full"
                                    style={{ color: '#000000', borderColor: '#757575' }}
                                    {...formik.getFieldProps('content')}
                                />
                                {formik.errors.content && formik.touched.content && (
                                    <span className="text-red-500 text-sm" style={{ color: '#D32F2F' }}>{formik.errors.content}</span>
                                )}
                            </div>

                            {/* Image Upload Section */}
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex space-x-5 items-center">
                                    <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                                        <ImageIcon className="text-[#1976D2]" style={{ color: '#1976D2' }} />
                                        <input
                                            type="file"
                                            name="imageFile"
                                            className="hidden"
                                            onChange={handleSelectImage}
                                        />
                                    </label>
                                    <FmdGoodIcon className="text-[#1976D2]" style={{ color: '#1976D2' }} />
                                    <TagFacesIcon className="text-[#1976D2]" style={{ color: '#1976D2' }} />
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            width: "100%",
                                            borderRadius: "29px",
                                            paddingY: "8px",
                                            paddingX: "20px",
                                            fontSize: "14px",
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
                        </form>
                    </div>
                </div>
            </section>
            <section className="space-y-4">
                {[1, 1, 1, 1, 1].map((item, index) => (
                    <Card key={index} />
                ))}
            </section>
        </div>
    );
};

export default HomeSection;