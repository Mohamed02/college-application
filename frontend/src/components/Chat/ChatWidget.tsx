import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat"; // Use MUI icon
import React from "react";
type ChatWidgetProps = {
  onClick: () => void;
};
const ChatWidget = ({ onClick }: ChatWidgetProps) => {
  return (
    <div className="fixed bottom-10 right-10 lg:right-20 z-1000 bg-blue-700 rounded-4xl hover:bg-blue-300">
      <IconButton onClick={onClick} aria-label="Start Chat with Gemini">
        <Avatar sx={{ bgcolor: "#fff" }}>
          <ChatIcon sx={{ color: "#007bff" }} />
        </Avatar>
      </IconButton>
    </div>
  );
};

export default React.memo(ChatWidget);
