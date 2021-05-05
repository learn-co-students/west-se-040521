import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, nextFour, eatSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(s => <Sushi key={s.id} sushi={s} eatSushi={eatSushi}/>)
        }
        <MoreButton nextFour={nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer