"use client";
export const initialState = {
    isOpen: false,
};

export const reducerModal = (state: any, action: any) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                isOpen: true,
            };
        case "CLOSE_MODAL":
            return {
                isOpen: false,
            };
        default:
            return state;
    }
};
