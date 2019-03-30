import errorEvent from './longidata/errorEvent.json';
import successTotal from './longidata/successTotal.json';
import test from './longidata/test.json';

function getErrorEvent(req, res) {
  return res.json(errorEvent);
}

function getSuccessTotal(req, res) {
  return res.json(successTotal);
}

function getTest(req, res) {
  return res.json(test);
}

export default {
  'GET /api/longidata/errorevent': getErrorEvent,
  'GET /api/longidata/successtotal': getSuccessTotal,
  'GET /api/longidata/test': getTest,
};
