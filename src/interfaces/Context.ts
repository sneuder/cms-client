import { NextApiRequest, NextApiResponse } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
  params: ParsedUrlQuery;
  query: {
    [key: string]: string;
  };
}

export default Context;
