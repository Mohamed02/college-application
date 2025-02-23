// src/components/ChatWindow.js
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { io } from "socket.io-client";
import TypingIndicator from "./TypingIndicator";
// import './ChatWindow.css';

type ChatWindowProps = {
  open: boolean;
  onClose: () => void;
};
type ChatMessageType = {
  text: string;
  isUser: boolean;
};
const socketUrl = import.meta.env.VITE_SOCKET_URL;
const socket = io(socketUrl); // WebSocket server URL
const ChatWindow = ({ open, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on("bot_typing", () => {
      setLoading(true);
    });
    socket.on("chat_response", (message: string) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUser: false },
      ]);

      setLoading(false);
    });

    return () => {
      socket.off("chat_response");
    };
  }, []);
  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, isUser: true },
      ]);
      window.console.log("messages", messages);
      socket.emit("chat_message", input);
      setInput("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle id="alert-dialog-title">Ask AI Assistant</DialogTitle>
      <DialogContent className="h-screen" dividers>
        <Box
          sx={{
            height: "85%",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mb: 2,
          }}
          className="message"
        >
          {" "}
          <div aria-live="polite" aria-atomic="true">
            {messages.map((msg, index) => (
              <Box
                key={index}
                className={msg.isUser ? "message user" : "message bot"}
                sx={{ textAlign: msg.isUser ? "right" : "left" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "16px",
                    backgroundColor: msg.isUser ? "#007bff" : "#e0e0e0",
                    color: msg.isUser ? "#fff" : "#000",
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            ))}
          </div>
        </Box>
        {loading && <TypingIndicator />}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Handle key down events
            sx={{ mr: 1 }}
          />
          <Button variant="contained" color="primary" onClick={handleSend}>
            Send
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ChatWindow);
