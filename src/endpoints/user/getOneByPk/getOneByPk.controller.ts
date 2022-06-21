import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService/user';
import GetOneByPkControllerType from './getOneByPk.description';

const getOneByPk: GetOneByPkControllerType = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await userService.getOneByPk(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('something went wrong while getting one person');
  }
};

export default getOneByPk;
