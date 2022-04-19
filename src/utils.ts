export const strToBoolean = (str: string): boolean => str === 'true'

export const createTables = async (db: any): Promise<any> => {
  await db.sync()
}
