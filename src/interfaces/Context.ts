import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Context extends GetServerSidePropsContext {
  params: ParsedUrlQuery;
}

export default Context;
