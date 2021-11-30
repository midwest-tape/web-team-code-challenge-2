import React from 'react';

export default function Card({ character }) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    fetch(
      `${character.resourceURI}?apikey=${process.env.REACT_APP_MARVEL_PUBLIC}`
    )
      .then(res => {
        res.json().then(json => {
          setData(json?.data?.results[0]);
          setLoading(false);
        });
      })
      .catch(e => {
        setLoading(false);
      });
  }, [character.resourceURI]);

  if (loading) {
    return <div>loading</div>;
  }

  const { thumbnail, comics, name, series } = data;
  return (
    <>
      <div className='flex flex-col mb-4 border-solid border-4 border-purple-900'>
        <img
          className='max-w-md'
          src={`${thumbnail?.path}.${thumbnail?.extension}`}
          alt={name}
        />
        <div className='px-4 text-center'>
          <h2 className='text-4xl mb-4 mt-3'>{name}</h2>
          <p className='mb-1'>Available Comics: {comics?.available}</p>
          <p className='mb-1'>Available Series: {series?.available}</p>
        </div>
      </div>
    </>
  );
}
