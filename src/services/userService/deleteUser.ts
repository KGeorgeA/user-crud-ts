import db from '../../db';

const deleteUser = async (id: number) => {
  await db.user.delete({ id });

  return null;
};

export default deleteUser;
