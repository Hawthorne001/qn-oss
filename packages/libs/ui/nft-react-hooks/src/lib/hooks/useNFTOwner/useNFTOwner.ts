import { useCustomQuery } from 'lib/utils/useCustomQuery';

import { nftOwnerQuery, NFTOwnerQuery, NFTOwnerQueryVariables } from './query';

interface Args {
  contractAddress: string;
  tokenId: string;
}

function useNFTOwner(args: Args) {
  const { data, loading } = useCustomQuery<
    NFTOwnerQuery,
    NFTOwnerQueryVariables
  >(nftOwnerQuery, {
    variables: args,
  });

  return {
    loading,
    owner: data?.token?.owner ?? null,
  };
}

export default useNFTOwner;
