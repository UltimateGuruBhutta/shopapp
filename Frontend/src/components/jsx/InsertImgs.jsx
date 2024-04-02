//  This component allows users to upload multiple images.
//  When the file input changes, it updates the state with the new images and
//   generates previews for them using object URLs.
//  It cleans up object URLs when the component unmounts or the previews change
//  to prevent memory leaks.
//  Clicking the custom upload trigger triggers the hidden file input.
//  It conditionally renders the most recently selected image's
//   preview prominently and smaller previews of all selected images.
import { useState, useRef } from "react";
import css from "../styles/InsertImgs.module.css";
import { GoUpload } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types, react/display-name
const InsertImgs = ({ assignData, dataList }) => {
  const inputRef = useRef(null);

  const [preview, setPreview] = useState([]);

  useEffect(() => {
    if (dataList.images.length > 0) {
      const temp = dataList.images.map((curr) => {
        return URL.createObjectURL(curr);
      });

      setPreview((prevPreviews) => [...(prevPreviews || []), ...temp]);
    } else {
      setPreview([]);
    }
  }, [dataList.images]);

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

  /// remove slice for unlimitied addition of pictures;
  const getImgs = (e) => {
    const file = Array.from(e.target.files).slice(0, 7);

    assignData("images", file);
  };

  return (
    <div className={css.abc}>
      {preview.length > 0 ? (
        <>
          {" "}
          <img
            className={css.mImg}
            src={preview[preview.length - 1]}
            alt="Placeholder image"
          />
          {console.log("preview:", preview)}
        </>
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
