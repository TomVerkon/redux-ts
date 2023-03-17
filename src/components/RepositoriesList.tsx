import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchRepositories(term);
  };

  let content;
  if (loading) {
    content = <h3>Loading...</h3>;
  } else if (error) {
    content = <h3>{error}</h3>;
  } else if (!loading && !error) {
    console.log(data);
    content = data.map((name: string) => {
      return <div key={name}>{name}</div>;
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {content}
    </div>
  );
};

export default RepositoriesList;
