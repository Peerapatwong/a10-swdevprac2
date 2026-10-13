'use client'

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateReserve() {
    return (
        <div className="w-full flex justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="w-full" />
            </LocalizationProvider>
        </div>
    );
}