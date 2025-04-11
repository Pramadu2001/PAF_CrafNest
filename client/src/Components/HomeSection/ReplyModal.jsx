import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline:"none",
  borderRadius: 4

};

export default function ReplyModal({handleClose,open}) {
  const navigate=useNavigate()
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");
  

  const handleSubmit=(values)=>{
    console.log("handle submit",values)
  }

  const formik=useFormik({
    initialValues:{
      content: "",
      image:"",
      twitId:4
    },
    onSubmit:handleSubmit
  })

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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="flex space-x-5">
                <Avatar
                    onClick={() => navigate(`/profile/${6}`)}
                    className="cursor-pointer"
                    alt="username"
                    src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
                />
                <div className="w-full">
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
                        
                    </div>
                    <div className="mt-2">
                        <div onClick={()=> navigate(`/Craft/${3}`)}  className="cursor-pointer">
                            <p className="mb-2 p-0 text-gray-800">DIY Craft idea to make new craft items</p>
                           
                        </div>
                       
                    </div>
                </div>
                
            </div>
            <section className="py-10">
                <div className="flex space-x-5">
                    <Avatar 
                    src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
                    alt="userName" sx={{ bgcolor: '#42A5F5' }} />
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
        </Box>
      </Modal>
    </div>
  );
}
