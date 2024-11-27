import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import BorderButton from "../Button/BorderButton";
export const Modal = ({ isOpenModal, onHandlerUserAdd, setIsOpenModal }) => {
  const onAddRdnUSer = () => {
    onHandlerUserAdd();
  };

  return (
    isOpenModal && (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
        <div className="p-6 shadow-lg bg-grey-400">
          <h2 className="text-lg font-semibold text-white-50 mb-6 ">Confirm</h2>
          <div className="mb-10 text-white-100">
            Are you sure you want to send RND?
          </div>
          <div className="flex gap-4">
            <BorderButton
              text="No"
              className="w-[161px]"
              onClick={() => {
                setIsOpenModal(false);
              }}
            />
            <PrimaryButton
              text="Yes"
              className="w-[161px] text-white-50"
              onClick={onAddRdnUSer}
            />
          </div>
        </div>
      </div>
    )
  );
};
