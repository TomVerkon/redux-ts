import React, { FC, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const PackageList: FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  let content: JSX.Element | JSX.Element[] = <li>Loading...</li>;
  if (!loading) {
    if (error) {
      content = <li>{error}</li>;
    } else {
      content = data.map((item) => <li key={item}>{item}</li>);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <ul>{content}</ul>
    </div>
  );
};

export default PackageList;
