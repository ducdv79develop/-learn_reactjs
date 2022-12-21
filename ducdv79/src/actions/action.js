import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/const";
export const actAddNote = (content) => {
    return {
        type: ADD_NEW_NOTE,
        content,
    };
};
