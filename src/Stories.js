import React, { useContext } from 'react'
import { AppContext } from './context'


const Stories = () => {
  // console.log("Stories")
  const { isLoading, hits, removeStory } = useContext(AppContext)
  if (isLoading) {
    return <div className="loading"> </div>
  }
  return (
    <section className="section"  >
      {
        hits.map(item => {
          let data = item.webPublicationDate.slice(0, 19);
          const date2 = new Date(data);
          let day = date2.getDate();
          day = day < 10 ? day = `0${day}` : day;
          let month = date2.getMonth() + 1;
          month = month < 10 ? month = `0${month}` : month;
          return (
            <article key={item.id}>
              <h4 className='title'>{item.webTitle}</h4>
              <div> Section Name: {item.sectionName} </div>
              <div> Publication Date: {`${day}.${month}.${date2.getFullYear()}`} </div>
              <div> Pillar Name: {item.pillarName} </div>
              <div>
                <a href={item.webUrl} className='read-link' target='_blank' > read more</a>
                <button className='remove-btn' onClick={removeStory.bind(this, item.id)}> remove </button>
              </div>
            </article>
          );
        })
      }
    </section>
  )
}

export default Stories
