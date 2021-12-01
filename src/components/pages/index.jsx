import { BrowserRouter } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { DefaultLayout } from "../templates/DefaultLayout";

const user = {
  name: "ema",
  image: "https://source.unsplash.com/N04FIfHhv_k",
  email: "ema@test.com",
  phone: "080-2550-9100",
  company: {
    name: "yoyoichi.inc"
  },
  website: "https://yoyoichi.co.jp"
};

export const Top = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>button1</PrimaryButton>
        <SecoundaryButton>button2</SecoundaryButton>
        <br />
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
};
