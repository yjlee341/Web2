import { atom } from "recoil";

const boothName = atom({
  key: "boothRegistName", //이때 key는 중복되지 않는 값
  default: "", //초기값
});
const boothDate = atom({
  key: "boothRegistDate", //이때 key는 중복되지 않는 값
  default: "", //초기값
});
const boothImage = atom({
  key: "boothRegistImage", //이때 key는 중복되지 않는 값
  default: "", //초기값
});

const boothLocation = atom({
  key: "boothRegistLocation", //이때 key는 중복되지 않는 값
  default: "", //초기값
});

const boothDescription = atom({
  key: "boothRegistDescription", //이때 key는 중복되지 않는 값
  default: "", //초기값
});

const boothAccount = atom({
  key: "boothRegistAccount", //이때 key는 중복되지 않는 값
  default: "", //초기값
});

export {
  boothAccount,
  boothDate,
  boothDescription,
  boothImage,
  boothLocation,
  boothName,
};
