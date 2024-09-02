import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineClose,
} from "react-icons/ai";
import React, { useState, useRef } from "react";
import CardWrapper from "./CardWrapper";
import galleryImage1 from "../public/images/galleryImage1.png";
import galleryImage2 from "../public/images/galleryImage2.png";
import galleryImage3 from "../public/images/galleryImage3.png";
import galleryImage4 from "../public/images/galleryImage4.png";
import galleryImage5 from "../public/images/galleryImage5.png";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage1,
    galleryImage2,
  ]);

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");

  const nextImageHandler = () => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const newPosition = Math.min(scrollPosition + clientWidth, maxScroll);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const prevImageHandler = () => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      const newPosition = Math.max(scrollPosition - clientWidth, 0);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setNewImageUrl("");
  };

  const handleInputChange = (e) => {
    setNewImageUrl(e.target.value);
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (newImageUrl) {
      setGalleryImages([...galleryImages, newImageUrl]);
      setNewImageUrl("");
      setShowForm(false);
    }
  };

  return (
    <CardWrapper rightIcon={false}>
      <ul className="flex justify-between items-center">
        <li>
          <h2 className="select-none px-4 text-sm lg:text-md xl:px-8 py-2 xl:py-4 rounded-2xl bg-[#171717] text-white">
            Gallery
          </h2>
        </li>
        {/* hidding next and prev buttons and add image button when user clicks on add image*/}
        {!showForm && (
          <li className="flex items-center gap-3">
            <button
              onClick={toggleForm}
              className="rounded-full  flex items-center gap-
              px-3 py-2 xl:px-6 xl:py-3 text-white
              shadow-[6px_6px_12px_1px_rgba(0,0,1),-4px_-4px_12px_0_rgba(255,255,255,0.5)]
              "
            >
              <AiOutlinePlus className="box-content" />
              <span className="uppercase lg:text-md text-xs">add image</span>
            </button>
            <button
              onClick={prevImageHandler}
              className="rounded-full p-2 xl:p-3 bg-[#272a2e] shadow-[5px_5px_12px_0_rgba(0,0,0,0.5),-0px_-0px_12px_10px_#3c4854]"
            >
              <AiOutlineArrowLeft className="text-[#6f787c] box-content" />
            </button>
            <button
              onClick={nextImageHandler}
              className="rounded-full p-2 xl:p-3 bg-[#272a2e] shadow-[5px_5px_12px_0_rgba(0,0,0,0.5),-0px_-0px_12px_10px_#3c4854]"
            >
              <AiOutlineArrowRight className="text-[#6f787c] box-content" />
            </button>
          </li>
        )}
      </ul>

      {/* showing adding image url form only when user clicks on add image */}
      {showForm ? (
        <div className="mt-6">
          <form onSubmit={handleAddImage} className="relative">
            <input
              type="url"
              value={newImageUrl}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="mt-2 px-4 rounded-xl w-1/2 py-2 bg-[#1d1d1d] text-white hover:bg-[#0d0d0d]"
            >
              Add Image
            </button>
            <button
              type="button"
              onClick={toggleForm}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 "
            >
              <AiOutlineClose size={20} />
            </button>
          </form>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex justify-between pt-12 gap-4 lg:gap-5 xl:gap-6 overflow-x-auto no-scrollbar"
        >
          {galleryImages.map((image, index) => (
            <img
              src={image}
              className="w-[30.5%] lg:w-[29%] xl:w-[30%] object-cover grayscale rounded-3xl cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] transition-all hover:grayscale-0 aspect-square flex-shrink-0"
              alt={`gallery image ${index + 1}`}
              key={index}
            />
          ))}
        </div>
      )}
    </CardWrapper>
  );
}

export default Gallery;
