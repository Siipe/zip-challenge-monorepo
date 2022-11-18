import React from "react";

import { useGetLastSearchesQuery } from "generated/graphql";

const App = () => {
  const { data } = useGetLastSearchesQuery({
    variables: {
      limit: 5,
    },
  });

  return (
    <div>
      {data?.getLastSearches && (
        <ul>
          {data.getLastSearches.map(({ country, places }) => (
            <li>
              {country}
              <ul>
                {places.map(({ name, state }) => (
                  <li>
                    {name} - {state}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
