import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('0G5GAQY8CM', 'a2e36d70b367177343b8ba972a24d874');

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <RefinementList attribute="brand" />
    </InstantSearch>
  );
}