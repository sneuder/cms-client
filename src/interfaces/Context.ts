import { NextApiRequest, NextApiResponse } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
  params: ParsedUrlQuery;
}

export default Context;
