import React from 'react'
import { useParams } from 'react-router-dom';

export default function Comic() {
  const [loading, setLoading] = React.useState(true)
  const [comic, setComic] = React.useState()

  let {id} = useParams()
  // React.useEffect(() => {
  //   fetch(`${process.env.REACT_APP_MARVEL_URL}/comics/${id}?apikey=${process.env.REACT_APP_MARVEL_PUBLIC}`)
  //     .then(res => {
  //       res.json().then(json => {
  //         setComic(json?.data?.results[0])
  //         setLoading(false)
  //       })
  //     })
  //     .catch(e => {
  //       setLoading(false)
  //     })
  // }, [id])

  if (loading) {
    return <div>loading</div>
  }

  const { thumbnail, description, title, pageCount, issueNumber, characters } = comic
  return (
    <>
      <div className="flex flex-row mb-4">
        <img className="max-w-md" src={`${thumbnail.path}.${thumbnail.extension}`} alt={title}/>
        <div className="px-4">
          <h2 className="text-4xl mb-4">{title}</h2>
          <p className="mb-2">{description}</p>
          <p className="mb-1">{pageCount} Pages</p>
          <p className="mb-1">Issue Number {issueNumber}</p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mb-2">Characters</h3>
        {/*TODO ADD CHARACTER CODE HERE*/}
        <ul>
          {characters.items.map(character => {
            return <li>{character.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}
