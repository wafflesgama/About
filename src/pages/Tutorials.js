import React from 'react'
import res from '../images/Resume.png'
import MiniEntry from '../components/MiniEntry'
import MiniArticle from '../components/MiniArticle'
function Tutorials() {
  return (
    <section id="main">
      <div className="container">

        <div className="row">
          <div className="col-12">

            <section>
              <header className="major">
                <h2 className="bodyHeader">All Tutorials</h2>
              </header>

              <div className="row">
                <div className="col-6 col-12-small">
                  <MiniArticle
                    title="Article under Construction"
                    date="31st Jan 2019"
                    desc="Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros
                    lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae
                    mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos lorem ipsum dolor sit amet."
                    link="/About/Tutorials/Test" />
                </div>
                <div className="col-6 col-12-small">

                  <MiniArticle
                    title="Article under Construction"
                    date="31st Jan 2019"
                    desc="Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros
                    lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae
                    mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos lorem ipsum dolor sit amet."
                    link="/About/Tutorials/Test" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tutorials