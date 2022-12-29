import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Theme } from "../src/context/theme";
import PageUserList from "../src/screens/app&page/PageUserList";
import HomeCard from "../src/screens/home/HomeCard";
import HomeCardTwo from "../src/screens/home/HomeCardTwo";
import HomeMenu from "../src/screens/home/HomeMenu";


export default function Home() {

  return (
    <>
      <HomeCard />
      <HomeCardTwo />
      <PageUserList />
    </>
  )
}
