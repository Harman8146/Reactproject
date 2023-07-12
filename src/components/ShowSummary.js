import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleBookTicket = () => {
    setBookingFormVisible(true);
  };


  const handleSubmit = e => {
    e.preventDefault();
    setBookingFormVisible(false);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image?.medium} alt={show.name} />
      <p>{show.summary}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>

      {bookingFormVisible && (
        <form onSubmit={handleSubmit}>
          <h2>Book Ticket</h2>
          <input
            type="text"
            name="movieName"
            value={show.name}
            placeholder="Movie Name"
           
          />
           <br/>
          <input
            type="text"
            name="Name"
            value={Name}
            placeholder="Name"
            onChange={(e)=> setName(e.target.value)}
          />
          <br/>
          <input
            type="Number"
            name="Phone No"
            value={Phone}
            placeholder="Phone no"
            onChange={(e)=> setPhone(e.target.value)}
          />
           <br/>
          <input
            type="Email"
            name="Email"
            value={Email}
            placeholder="Email"
            onChange={(e)=> setEmail(e.target.value)}
          />
           <br/>
          
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ShowSummary;
