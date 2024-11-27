import React from "react";
import classnames from "classnames";
import dayjs from "dayjs";
import { DateFormats } from "../../data/constants/date.constants";

const UserHistory = ({ rndData }) => {
  return (
    <>
      {rndData.length ? (
        <div className="text-white-100">
          {(rndData || [])?.map((file, i) => {
            return (
              <div
                className={classnames(
                  "flex justify-between text-white-100 items-center text-sm h-9 font-normal",
                  {
                    "bg-grey-400": i % 2 === 0,
                    "bg-black-charcol": i % 2 !== 0,
                  }
                )}
                key={i}
              >
                <div className="flex justify-between">
                  <div className="px-3">
                    {i + 1 < 10 ? (i + 1).toString().padStart(2, "0") : i + 1}
                  </div>
                  <div className="px-4">{file.name}</div>
                </div>
                <div className="px-4 mr-7">
                  {dayjs(file?.lastModifiedDate).format(DateFormats.DATE_ISO)}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-white-100">Data Not Available</div>
      )}
    </>
  );
};
export default UserHistory;
