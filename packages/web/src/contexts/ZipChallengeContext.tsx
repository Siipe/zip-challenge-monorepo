import React, { createContext, useCallback, useState } from 'react';

import { ZipCodeInputType, ZipCodeType } from 'generated/graphql';

type ZipChallengeContextData = {
  input: ZipCodeInputType;
  updateInput(partialInput: Partial<ZipCodeInputType>): void;
  searchResult: ZipCodeType | null;
  setSearchResult(result: ZipCodeType | null): void;
  hasError: boolean;
  setHasError(hasError: boolean): void;
};

type ZipChallengeProviderProps = {
  children: React.ReactNode;
};

export const ZipChallengeContext = createContext({} as ZipChallengeContextData);

export const ZipChallengeProvider: React.FC<ZipChallengeProviderProps> = ({ children }): JSX.Element => {
  const [input, setInput] = useState<ZipCodeInputType>({
    country: 'US',
    zipCode: '',
  });
  const [searchResult, setSearchResult] = useState<ZipCodeType | null>(null);
  const [hasError, setHasError] = useState(false);

  const updateInput = useCallback(
    (partialInput: Partial<ZipCodeInputType>) =>
      setInput({
        ...input,
        ...partialInput,
      }),
    [input],
  );

  return (
    <ZipChallengeContext.Provider
      value={{
        input,
        updateInput,
        searchResult,
        setSearchResult,
        hasError,
        setHasError,
      }}
    >
      {children}
    </ZipChallengeContext.Provider>
  );
};
