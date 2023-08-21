import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';
import { env } from "~/env.mjs";

const searchClient = algoliasearch(env.NEXT_PUBLIC_ALGOLIA_APP_ID, env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_Categories">
      <RefinementList attribute="brand" />
    </InstantSearch>
  );
}