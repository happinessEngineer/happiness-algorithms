import React from 'react';

const Me = () => {

  doMorningRoutine = () => {
    drinkGlassOfWater();
    takeColdShower();
    doGratitudeJournal();
  }
  
  return (
    <Me onWake={doMorningRoutine} />
  )
}

export default Me;
