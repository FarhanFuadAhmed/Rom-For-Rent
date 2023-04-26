import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AccountNav from '../components/AccountNav';
import axios from 'axios';
import AddressLink from '../components/AddressLink';
import BookingDates from '../components/BookingDates';
import PlaceGallery from '../components/PlaceGallery';
import Spinner from '../components/Spinner';
import PlaceCard from '../components/PlaceCard';
import BookingsPage from './BookingsPage';

const BookedPlacesPage = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id) {
      const getBookings = async () => {
        const { data } = await axios.get('/bookings');
        if(data.error){
          toast.error(data.error.message)
        }
        setBookings(data);
        setLoading(false);
      };
      getBookings();
    }
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <AccountNav />
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <PlaceCard place={booking.place} key={booking._id} />
        ))
      ) : (
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">No bookings... yet!</h1>
          <p className="font-">
            Time to dust off your bags and start planning your next adventure
          </p>
          <div className="">
            <button 
            onClick={BookingsPage}
            className="font-semibold border border-black px-4 py-2 rounded-lg bg-transparent hover:bg-slate-100 hover:transition-all">
              Start planning
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedPlacesPage;
