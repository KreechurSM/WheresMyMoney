const recordExists = async (db, serial) => {
  // await db.read();
  // Ensure the data structure is initialized
  db.data ||= { notes: [] };

  // Use the find method to check if a record with the given serial exists
  const record = db.data.notes.find((note) => note.serial === serial);

  // Return true if the record is found, otherwise false
  return !!record;
};

export { recordExists };
