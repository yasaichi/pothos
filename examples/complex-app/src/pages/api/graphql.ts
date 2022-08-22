import type { NextApiRequest, NextApiResponse } from 'next';
import { createServer } from '@graphql-yoga/node';
import { schema } from '../../graphql/schema';
import { renderGraphiQL, shouldRenderGraphiQL } from '../../utils/graphiql';

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphiql: false,
  plugins: [
    {
      onRequest: ({ request, endResponse }) => {
        if (shouldRenderGraphiQL(request)) {
          endResponse(
            new Response(renderGraphiQL(), {
              status: 200,
              statusText: 'OK',
              headers: {
                'Content-Type': 'text/html',
              },
            }),
          );
        }
      },
    },
  ],
});
