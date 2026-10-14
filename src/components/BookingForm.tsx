'use client'

import DateReserve from "@/components/DateReserve";
import { MenuItem, Select, TextField } from "@mui/material";
import { useSession } from "next-auth/react";

export default function BookingForm({ profile }: { profile: Object }) {

    var createdAt = new Date(profile.createdAt);

    return (
        <form className="w-full min-h-[calc(100vh-50px)] flex flex-col gap-y-5 justify-center items-center py-10 px-4">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg items-center justify-center p-8 space-y-6">
                <table className="border-separate border-spacing-y-2 border-spacing-x-5">
                    <tbody>
                        <tr><td>Name</td><td>{profile.name}</td></tr>
                        <tr><td>Email</td><td>{profile.email}</td></tr>
                        <tr><td>Tel.</td><td>{profile.tel}</td></tr>
                        <tr><td>Member since</td><td>{createdAt.toString()}</td></tr>
                    </tbody>
                </table>
            </div>
            
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-8 space-y-6">
                <div className="text-2xl font-bold text-gray-800 text-center">
                    Venue Booking
                </div>

                <div className="w-full flex flex-col space-y-4">
                    <TextField 
                        variant="standard" 
                        name="Name-Lastname" 
                        label="Name-Lastname" 
                        className="w-full"
                    />
                    <TextField 
                        variant="standard" 
                        name="Contact-Number" 
                        label="Contact-Number" 
                        className="w-full"
                    />
                </div>

                <div className="w-full">
                    <Select 
                        variant="standard" 
                        id="venue" 
                        defaultValue="Bloom"
                        className="w-full text-left"
                    >
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </div>

                <div className="w-full">
                    <DateReserve />
                </div>

                <button 
                    type="submit" 
                    name="Book Venue"
                    className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
                >
                    Book Venue
                </button>
            </div>
        </form>
    );
}