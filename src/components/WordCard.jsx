import { useState } from 'react'

export default function WordCard({
  word,
  phonetic,
  partOfSpeech,
  meaning,
  example,
  onDelete,
}) {
  const [revealed, setRevealed] = useState(false)

  return (
    <article className="card" onClick={() => setRevealed((prev) => !prev)}>
      <div className="card-head">
        <h2 className="card-word">{word}</h2>
        {phonetic && <span className="card-pron">{phonetic}</span>}
      </div>

      <span className="card-pos">{partOfSpeech}</span>

      {revealed ? (
        <>
          <p className="card-meaning">{meaning}</p>
          {example && <p className="card-example">{example}</p>}
        </>
      ) : (
        <p className="card-hint">클릭해서 뜻 보기</p>
      )}

      <button
        className="card-button"
        onClick={(e) => {
          e.stopPropagation()
          onDelete()
        }}
      >
        삭제
      </button>
    </article>
  )
}