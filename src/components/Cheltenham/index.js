import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import BorderButton from "../Button/BorderButton";
import app_store from "../../assets/image/app_store.png";
import play_store from "../../assets/image/play_store.png";
import ga from "../../assets/image/ga.png";
import gamstop from "../../assets/image/gamstop.png";
import gamcare from "../../assets/image/gamcare.png";
import plus_eighty from "../../assets/image/plus_eighty.png";
import gamble_aware from "../../assets/image/gamble_aware.png";
import betzone from "../../assets/betzone.png";
import "./index.css";
import { Icon } from "../Icon/Icon";
const Index = () => {
  return (
    <div>
      <div className="w-full h-[88px] bg-black-dark flex justify-between">
        <div className="items-center flex pl-[160px]">
          <img src={betzone} alt="logo" className="w-full p-0 m-0" />
        </div>
        <div className="flex gap-3 items-center pr-[160px]">
          <BorderButton text="Sing Up" className="w-[114px] h-[40px]" />
          <PrimaryButton text="Login" className="w-[96px] h-[40px]" />
        </div>
      </div>
      <div className="background-div">
        <div className="flex flex-col w-[600px] px-[160px]">
          <div className=" text-5xl font-extrabold">
            <div className=" text-green-100">Cheltenham special</div>
            <div>
              <div className=" text-white-50">
                Bet through each card for{" "}
                <span className="text-orange-50">£10 Free Bet</span>
              </div>
            </div>
          </div>
          <div className="font-medium text-2xl text-white-50 mt-5">
            <div>Simply click the opt-in button below</div>
            <div>and enter your account number</div>
          </div>
          <div>
            <div className="mt-10">
              <PrimaryButton
                text="Opt In Now"
                className="w-[240px] h-[56px] bg-gold-safari"
              />
            </div>
            <div className="text-white-50 text-sm font-normal mt-5">
              <div>*For NEW customers only. Requires account opening,</div>
              <div>
                deposit and certain qualifying bets of Evens or greater.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-shade h-[389px] px-[160px]">
        <div className="pt-[72px] flex justify-center gap-10">
          {" "}
          <div>
            <img src={betzone} alt="logo" className="w-[164px] h-[28px]" />
          </div>
          <div className="flex gap-5">
            <Icon option="FACEBOOK" size={28} />
            <Icon option="TWITTER" size={28} />
          </div>
          <div className="flex gap-2">
            <img
              src={app_store}
              alt="logo"
              className="w-[126px] h-[37px] p-0 m-0"
            />
            <img
              src={play_store}
              alt="logo"
              className="w-[126px] h-[37px] p-0 m-0"
            />
          </div>
        </div>
        <div className="h-[52px] bg-black-dark text-white-50 text-sm font-bold flex justify-center items-center mt-5">
          Betzone is committed to supporting Safer Gambling. Underage gambling
          is an offence.
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          <img src={ga} alt="ga" />
          <img src={gamstop} alt="gamstop" />
          <img src={gamcare} alt="gamcare" />
          <img src={plus_eighty} alt="plus_eighty" />
          <img src={gamble_aware} alt="gamble_aware" />
        </div>
        <div className="font-normal text-[10px] text-white-100 ">
          <div className="text-center">
            This site is owned by Bet21 and is operated by Playbook Gaming Ltd,
            trading as Playbook Engineering Ltd, (licence number 50122)
          </div>
          <div className="text-center">
            is licensed and regulated by the Gambling Commission. No.1 Poultry,
            London EC2R 8EJ. This site uses cookies, for more information please
            see our Cookie policy.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
