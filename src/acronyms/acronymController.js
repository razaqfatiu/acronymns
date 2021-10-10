import { ErrorHandler } from '../utils/error';
import { sampleResponse } from '../utils/response';
import Acronym from './acronymModel';

export const getAcronymns = async (req, res) => {
  try {
    let { from = 50, limit = 10, search } = req.query;

    const isInteger = new RegExp('^[1-9][0-9]*$');
    if (!isInteger.test(from) || !isInteger.test(limit)) {
      throw new ErrorHandler(
        400,
        'Invalid parameters, from and limit should be a positive integer'
      );
    }

    limit = parseInt(limit);
    from = parseInt(from);

    let checkSearch = {};

    if (search) {
      search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      checkSearch = { acronym: { $regex: search, $options: 'i' } };
      from = 1;
    }

    const acronyms = await Acronym.find(checkSearch)
      .limit(limit)
      .skip((from - 1) * limit);

    const total = Math.ceil((await Acronym.count()) / limit);

    res.set('X-page-max', total);
    res.set('X-page', from);
    res.set('X-limit', limit);

    return res.status(200).json(sampleResponse('success', acronyms));
  } catch (error) {
    next(error);
  }
};

export const newAcronym = async (req, res, next) => {
  try {
    const { acronym, description } = req.body;

    if (!acronym || !description) {
      throw new ErrorHandler(
        400,
        'Invalid parameters, acronyms and description are required'
      );
    }

    const findAcronym = await Acronym.findOne({ acronym });
    if (findAcronym) {
      throw new ErrorHandler(400, 'Acronym Exists');
    }

    const data = await Acronym.create({ ...req.body });

    return res.status(200).json(sampleResponse('success', data));
  } catch (error) {
    next(error);
  }
};

export const updateAcronym = async (req, res, next) => {
  try {
    const { acronym } = req.params;
    const { description } = req.body;

    if (!acronym || !description) {
      throw new ErrorHandler(
        400,
        'Invalid parameters, acronyms and description are required'
      );
    }

    const findAcronym = await Acronym.findOne({ acronym });
    if (!findAcronym) {
      throw new ErrorHandler(404, 'Acronym not found');
    }

    const updateAcronym = await Acronym.findOneAndUpdate(
      { acronym },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(sampleResponse('success', updateAcronym));
  } catch (error) {
    next(error);
  }
};

export const deleteAcronym = async (req, res, next) => {
  try {
    const { acronym } = req.params;

    if (!acronym) {
      throw new ErrorHandler(400, 'Acronmyns is required');
    }
    const deletedAcronym = await Acronym.findOneAndDelete({ acronym });

    return res.status(200).json(sampleResponse('success', deletedAcronym));
  } catch (error) {
    next(error);
  }
};
