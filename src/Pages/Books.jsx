import React from 'react'

export default function Books() {
  return (
    <div>
    <div id ='books__body'>
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All Books</h2>
                            <select id="filter">
                                <option value="" selected disabled> Sort</option>
                                <option value="LOW__TO__HIGH">Price, Low to High</option>
                                <option value="HIGH__TO__LOW"> Price , High to Low</option>
                                <option value="Rating"> Rating</option>
                            </select>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    </div>
    </div>
  )
}
