export const createTables = async (db: any): Promise<any> => {
  await db.sync()
}
