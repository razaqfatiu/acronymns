import express from 'express';
import auth from '../utils/authMiddleware';
import {
  deleteAcronym,
  getAcronymns,
  newAcronym,
  updateAcronym,
} from './acronymController';

const acronymRouter = express.Router();

acronymRouter.get('/acronym', getAcronymns);
acronymRouter.post('/acronym', newAcronym);
acronymRouter.put('/acronym/:acronym', auth, updateAcronym);
acronymRouter.delete('/acronym/:acronym', auth, deleteAcronym);

export default acronymRouter;
