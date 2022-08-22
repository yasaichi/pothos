export const renderGraphiQL = (): string => {
  const BASE_URL = 'https://cdn.jsdelivr.net/npm/graphiql@2.0.0-next.2';

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>GraphiQL</title>
      <meta name="robots" content="noindex" />
      <meta name="referrer" content="origin" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        body {
          height: 100%;
          margin: 0;
          width: 100%;
          overflow: hidden;
        }

        .graphiql {
          height: 100vh;
        }
      </style>
      <script
        type="application/javascript"
        src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js"
      ></script>
      <script
        type="application/javascript"
        src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js"
      ></script>
      <link rel="stylesheet" href="${BASE_URL}/graphiql.min.css" />
      </style>
    </head>
    <body>
      <div class="graphiql" id="graphiql">Loading...</div>
      <script
        src="${BASE_URL}/graphiql.min.js"
        type="application/javascript"
      ></script>
      <script>
      function graphQLFetcher(graphQLParams) {
        return fetch(
          '/api/graphql',
          {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphQLParams),
            credentials: 'omit',
          },
        ).then(function (response) {
          return response.json().catch(function () {
            return response.text();
          });
        });
      }

      ReactDOM.render(
        React.createElement(GraphiQL, {
          fetcher: graphQLFetcher,
          headerEditorEnabled: true,
        }),
        document.getElementById('graphiql'),
      );
    </script>
    </body>
  </html>
  `;
};

export function shouldRenderGraphiQL({ headers, method }: Request): boolean {
  return method === 'GET' && !!headers?.get('accept')?.includes('text/html');
}
