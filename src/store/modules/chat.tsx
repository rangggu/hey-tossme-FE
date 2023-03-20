import { createSlice } from "@reduxjs/toolkit";

const initialState: { openChat: boolean; enterChat: boolean; chatId: number } = {
    openChat: false,
    enterChat: false,
    chatId: -1,
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setOpenChat(state) {
            state.openChat = true;
            console.log("채팅창 열림");
        },
        setCloseChat(state) {
            state.openChat = false;
            state.enterChat = false;
            console.log("채팅창 닫힘");
        },
        setEnterChat(state) {
            state.enterChat = true;
            console.log("채팅방 들어감");
        },
        setLeaveChat(state) {
            state.enterChat = false;
            console.log("채팅방 나옴");
        },
        setChatId(state, action) {
            state.chatId = action.payload;
        },
    },
});

export const { setOpenChat, setCloseChat, setEnterChat, setLeaveChat, setChatId } =
    chatSlice.actions;
export default chatSlice.reducer;