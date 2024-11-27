import React, { useState } from "react";
import Dropzone from "../../components/Dropzone/Dropzone";
import classnames from "classnames";
import UserHistory from "../../components/History/UserHistory";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Modal } from "../../components/Modal/Modal";

const Index = () => {
  const [rndData, setRndData] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAddUser, setIsAddUser] = useState(false);

  const onHandlerUserAdd = () => {
    setIsAddUser(true);
  };

  return (
    <div className="px-[160px] py-[112px] ">
      <div className="flex gap-2">
        <button
          className={classnames(
            "w-[56px] font-bold h-9 cursor-pointer text-xs",
            {
              "text-grey-400 bg-white-50 border-none": isActive,
              "bg-grey-400 border-solid border-white-50 text-white-50":
                !isActive,
            }
          )}
          onClick={() => {
            setIsActive(true);
          }}
        >
          New
        </button>
        <button
          className={classnames(
            "w-[70px] font-bold h-9 cursor-pointer text-xs",
            {
              "bg-grey-400 border-solid border-white-50 text-white-50":
                isActive,
              "text-grey-400 bg-white-50 border-none": !isActive,
            }
          )}
          onClick={() => {
            setIsActive(false);
          }}
        >
          History
        </button>
      </div>
      {isActive === true && (
        <>
          <div className="grid grid-cols-2 gap-12 mt-10">
            <div>
              <div className="text-white-50 font-bold text-lg">
                Upload Email CSV
              </div>
              <div className="text-sm font-normal text-white-100 pt-4">
                Max file size is 500kb, Supported file types is CSV.
              </div>
              <div className="mt-4">
                <Dropzone
                  setRndData={setRndData}
                  isAddUser={isAddUser}
                  setIsAddUser={setIsAddUser}
                  setIsOpenModal={setIsOpenModal}
                />
              </div>
            </div>
            <div>
              <div className="text-white-50 font-bold text-lg">
                Upload SMS CSV
              </div>
              <div className="text-sm font-normal text-white-100 pt-4">
                Max file size is 500kb, Supported file types is CSV.
              </div>
              <div className="mt-4">
                <Dropzone
                  setRndData={setRndData}
                  isAddUser={isAddUser}
                  setIsAddUser={setIsAddUser}
                  setIsOpenModal={setIsOpenModal}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {isActive === false && (
        <div className="mt-12">
          <UserHistory rndData={rndData} />
        </div>
      )}
      <Modal
        isOpenModal={isOpenModal}
        onHandlerUserAdd={onHandlerUserAdd}
        setIsOpenModal={setIsOpenModal}
      />
      {isActive === true && (
        <div className="mt-10">
          <PrimaryButton
            text="Send RND"
            className="w-[117px] text-white-50 text-base"
            onClick={() => {
              setIsOpenModal(true);
            }}
          />
        </div>
      )}
    </div>
  );
};
export default Index;
