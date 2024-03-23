//  This component allows users to upload multiple images.
//  When the file input changes, it updates the state with the new images and
//   generates previews for them using object URLs.
//  It cleans up object URLs when the component unmounts or the previews change 
//  to prevent memory leaks.
//  Clicking the custom upload trigger triggers the hidden file input.
//  It conditionally renders the most recently selected image's
//   preview prominently and smaller previews of all selected images.

import css from "../styles/InsertImgs.module.css";
import { GoUpload } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const InsertImgs = () => {
  const inputRef = useRef(null);
  const [upImg, setUpimg] = useState([]);
  const [preview, setPreview] = useState();

  useEffect(() => {
    return () => {
      if (preview) {
        preview.forEach((element) => {
          URL.revokeObjectURL(element);
        });
      }
    };
  }, [preview]);

  const giveClick = () => {
    inputRef.current.click();
  };

  const getImgs = (e) => {
    const file = Array.from(e.target.files);

    setUpimg((preupImg) => {
      return [...preupImg, ...file];
    });
    const temp = file.map((curr) => {
      return URL.createObjectURL(curr);
    });
    setPreview((prevPreviews) => [...(prevPreviews || []), ...temp]);
  };

  return (
    <div className={css.abc}>
      {preview ? (
        <img
          className={css.mImg}
          src={preview[preview.length - 1]}
          alt="Placeholder image"
        />
      ) : (
        <CiImageOn style={{ width: "420px", height: "100%" }} />
      )}

      <div className={css.insHold}>
        <div className={css.addImg}>
          <input
            onChange={getImgs}
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            multiple
          />

          <div className={css.uploader} onClick={giveClick}>
            <GoUpload />
            <CiImageOn />
            <IoIosAddCircleOutline />
          </div>

          {preview ? (
            preview.map((curr, i) => {
              return (
                <img
                  src={curr}
                  alt={`PreviewImgNo:${i}`}
                  key={i}
                  className={css.subImg}
                />
              );
            })
          ) : (
            <div style={{ display: "none" }}> </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsertImgs;
