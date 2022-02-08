import React from "react";
//import { DateRangePicker } from "rsuite";
import "./Style.css";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
// import "rsuite/dist/styles/rsuite-default.css";

const Reports = () => {
  const startValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );
  const endValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    15
  );
  const minDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    8
  );
  const maxDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    20
  );

  return (
    <div align="center">
      <DateRangePickerComponent
        placeholder="Enter Date Range"
        startDate={startValue}
        endDate={endValue}
        min={minDate}
        max={maxDate}
        minDays={1}
        maxDays={29}
        format="dd-MMM-yy"
      ></DateRangePickerComponent>
    </div>
  );
};
export default Reports;
