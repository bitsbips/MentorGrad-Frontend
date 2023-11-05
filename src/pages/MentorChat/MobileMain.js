import { useState } from "react";
// import TabBar from "../../components/ChatComponents/TabBar";
// import LatestMessages from "./LatestMessages";
import Users from "./Users";
// import Groups from "./Groups";
import Conversation from "./Conversation";
import { useStateContext } from "../../Context/state";

const MobileMain = () => {
  const { selectedChat } = useStateContext();
  const [tab, setTab] = useState("chat");

  return (
    <div>
      {!selectedChat ? (
        <div>
          <Users />
        </div>
      ) : (
        <Conversation />
      )}
    </div>
  );
};

export default MobileMain;
