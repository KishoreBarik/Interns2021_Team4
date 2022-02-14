import React from "react";
import NavBar from '../NavBar';
import "./Reports.css";
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'


function Reports(){
 
     return(
        <div><NavBar />
        <div className="container">
        
      <h2>REPORT</h2>
    
   <br/>
   <DateRangePickerComponent 
   placeholder="Enter Date Range"
   ></DateRangePickerComponent>


     </div>

</div>
    );

}
export default Reports;