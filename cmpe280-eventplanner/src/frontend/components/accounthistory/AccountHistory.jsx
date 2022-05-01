import React from "react";
import DataGrid from 'react-data-grid';
import "./AccountHistory.css"; 

const columns = [
  { key: 'id', name: 'UserID' },
  { key: 'eventname', name: 'Event Name' },
  { key: 'capacity', name: 'Capacity' },
  { key: 'theme', name: 'Theme' },
  { key: 'address', name: 'Address' },
  { key: 'locality', name: 'Locality' },
  { key: 'date', name: 'Date' },
  { key: 'budget', name: 'Budget' },
  { key: 'cuisinename', name: 'Cuisine Name' },
  { key: 'decorationname', name: 'Decoration Name' },
  { key: 'photography', name: 'Photography' },
  { key: 'videography', name: 'Videography' },
  { key: 'music', name: 'Music' }
];

const rows = [
  { id: 'David', eventname: 'Birthday', capacity: '25', theme: 'Unicorn', address: '312 Gates Dr', 
  locality: 'Milpitas', date: '04-15-22', budget:'$1000', cuisinename:'Indian', decorationname: 'kids', 
  photography: 'NA',videography:'NA', music:'NA'},
  { id: 'David', eventname: 'Birthday', capacity: '25', theme: 'Unicorn', address: '312 Gates Dr', 
  locality: 'Milpitas', date: '04-15-22', budget:'$1000', cuisinename:'Indian', decorationname: 'kids', 
  photography: 'NA',videography:'NA', music:'NA'},
  { id: 'David', eventname: 'Birthday', capacity: '25', theme: 'Unicorn', address: '312 Gates Dr', 
  locality: 'Milpitas', date: '04-15-22', budget:'$1000', cuisinename:'Indian', decorationname: 'kids', 
  photography: 'NA',videography:'NA', music:'NA'},
  { id: 'David', eventname: 'Birthday', capacity: '25', theme: 'Unicorn', address: '312 Gates Dr', 
  locality: 'Milpitas', date: '04-15-22', budget:'$1000', cuisinename:'Indian', decorationname: 'kids', 
  photography: 'NA',videography:'NA', music:'NA'},
  { id: 'David', eventname: 'Birthday', capacity: '25', theme: 'Unicorn', address: '312 Gates Dr', 
  locality: 'Milpitas', date: '04-15-22', budget:'$1000', cuisinename:'Indian', decorationname: 'kids', 
  photography: 'NA',videography:'NA', music:'NA'},
  { id: 'David', eventname: 'Birthday', capacity: '25', theme: 'Unicorn', address: '312 Gates Dr', 
  locality: 'Milpitas', date: '04-15-22', budget:'$1000', cuisinename:'Indian', decorationname: 'kids', 
  photography: 'NA',videography:'NA', music:'NA'},
];

export default function AccountHistory() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1 id='heading'>Customer Booking Details</h1>
    <DataGrid 
      columns={columns} 
      rows={rows}
      
    />
  </div>
  )
}
