import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", () => {
  // ACTIONS
  const checkNoteSerial = async (serialNumber) => {
    const { data } = await useFetch(`/api/checknote?serial=${serialNumber}`);

    return data;
  };

  return { checkNoteSerial };
});
