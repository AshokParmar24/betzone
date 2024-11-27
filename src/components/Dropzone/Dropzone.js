import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "../Icon/Icon";
import classnames from "classnames";
const Dropzone = ({ setIsOpenModal, setRndData, isAddUser, setIsAddUser }) => {
  const [isValidation, setIsValidation] = useState(true);
  const [currentFile, setCurrentFile] = useState([]);
  const [fileData, setFileData] = useState({});
  const nameLengthValidator = (file) => {
    if (file.size < 512000 && file.type === "text/csv") {
      setIsValidation(true);
    } else {
      setIsValidation(false);
    }
    setCurrentFile([file]);
    setFileData(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    validator: nameLengthValidator,
  });

  useEffect(() => {
    if (fileData && currentFile.length) {
      if (fileData.type === "text/csv") {
        setRndData((previewState) => [...previewState, fileData]);
      }
    }
    setFileData({});
    setCurrentFile([]);
    setIsOpenModal(false);
    setIsAddUser(false);
    setIsValidation(true);
    // eslint-disable-next-line
  }, [isAddUser]);

  const clearSelectedFiles = () => {
    setIsValidation(true);
    setCurrentFile([]);
    setFileData({});
  };

  return (
    <>
      <section
        className={classnames(
          "flex justify-center items-center border-dashed border-orange-50 cursor-pointer h-[104px] hover:bg-orange-200",
          {
            border: isValidation,
            "bg-orange-300 bored-orange-400": !isValidation,
          }
        )}
      >
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div
            className={classnames("font-normal text-sm", {
              "text-orange-50": isValidation,
              "text-white-50": !isValidation,
            })}
          >
            {isValidation ? "Drag and Drop files here " : "Unsupported"}
          </div>
        </div>
      </section>
      {currentFile.length ? (
        <aside className="text-white-100 bg-grey-400 min-h-5 mt-5 text-sm p-2 font-normal flex justify-between items-center">
          {!!currentFile?.length ? (
            <div>
              {[...currentFile].map((file) => (
                <div key={file.size}>
                  {file.name || "".slice(0, 70).concat("...")}
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
          <div
            className="items-center flex justify-items-end cursor-pointer"
            onClick={clearSelectedFiles}
          >
            <Icon option="CANCEL" size={20} />
          </div>
        </aside>
      ) : (
        <div />
      )}
    </>
  );
};
export default Dropzone;
