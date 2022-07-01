import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";

const Calendar = () => {
   const [selected, setSelected] = React.useState();

   let footer = <p>Please pick a day.</p>;
   if (selected) {
     footer = <p>You picked {format(selected, 'PP')}.</p>;
   }
   return (
     <div className='text-center flex justify-center '>
       <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
     </div>
   );
};

export default Calendar;


