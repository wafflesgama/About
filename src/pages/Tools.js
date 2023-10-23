import React from 'react'
import res from '../images/Resume.png'
import MiniEntry from '../components/MiniEntry'
import data_tools from '../assets/minientries_tools.json'
function Tools() {
  return (
    <section id="main">
      <div className="container">

        <div className="row">
          <div className="col-12">

            <section>
              <header className="major">
                <h2 className="bodyHeader">Featured Tools</h2>
              </header>
              <div className="row">
              {data_tools.map((x, i) => <MiniEntry thumbnail={x.thumbnail} title={x.title} desc={x.desc} link={x.link} />)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools