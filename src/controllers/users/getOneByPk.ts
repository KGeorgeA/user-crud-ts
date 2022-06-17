import usersService from 'src/db/services/users.service';
import { StatusCodes } from 'http-status-codes';
import type { RequestHandler } from 'express';
import type { UserType } from 'src/utils/types';

type GetOneRequestBody = UserType;
type GetOneParams = Pick<UserType, 'id'>;
type GetOneType = RequestHandler<GetOneParams, unknown, GetOneRequestBody>;
const getOneByPk: GetOneType = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await usersService.getOneByPk(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong while getting one person');
  }
};

export default getOneByPk;
