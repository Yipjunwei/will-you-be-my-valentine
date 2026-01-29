"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "不行",
      "你确定吗？",
      "那如果我很认真地求你呢？",
      "拜托啦",
      "再加一块巧克力米饼当交换",
      "那抹茶冰沙呢",
      "求你了宝贝",
      "可是 :(((((",
      "我要死了",
      "对，我已经死了",
      "现在你在跟 Jun wei 的幽灵说话",
      "拜托啦宝贝",
      ":((((((((",
      "真的真的拜托了",
      "我死了",
      "不嘛 :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">哇！！！太爱你了，我的小瓜子～ </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">2月14号你有空吗？我想预约你当我的情人节～</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              可以
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "不可以" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
