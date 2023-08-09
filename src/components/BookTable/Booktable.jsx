import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booktable.css';

const Booktable = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
	const [thanks, setThanks] = useState(false);

	const handleDateChange = (date) => setDate(date);

  const handleSubmit = (event) => {
    event.preventDefault();
		setThanks(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'time':
        setTime(value);
        break;
      default:
        break;
    }
  };


  return (
    <div className="booktable__container" id="table" onClick={onClose}>
			<div className="booktable__modal-content" onClick={(event) => event.stopPropagation()}>
      <div className="booktable__header">
			{thanks ? (
            <h2>Thank you for your reservation {name}!</h2>
          ) : (
            <h2>Book a table</h2>
          )}
        <button className="booktable__close" onClick={onClose}>X</button>
      </div>
			{thanks ? (
				<p style={{color: 'black', fontFamily:'Cormorant Upright', fontSize:'20px'}}>
					We look forward to seeing you on {date.toDateString().slice(3)} at {time}.
				</p>
				) : (
				<form onSubmit={handleSubmit}>
					<div className="booktable__form-group">
						<label htmlFor="name" className="booktable__label">
							Name:
						</label>
						<input
						type="text"
						id="name"
						className="booktable__input"
						name="name"
						value={name}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="booktable__form-group">
					<label htmlFor="phone" className="booktable__label">
						Phone:
					</label>
					<input
						type="tel"
						id="phone"
						className="booktable__input"
						name="phone"
						value={phone}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="booktable__form-group">
					<label htmlFor="date" className="booktable__label">
						Date:
					</label>
					<DatePicker
						wrapperClassName="datePicker"
						id="date"
						className="booktable__input"
						selected={date}
						onChange={handleDateChange}
						required
					/>
				</div>
				<div className="booktable__form-group">
					<label htmlFor="time" className="booktable__label">
						Time:
					</label>
					<input
						type="time"
						id="time"
						className="booktable__input"
						name="time"
						value={time}
						onChange={handleInputChange}
						required
					/>
				</div>
				<button type="submit" className="booktable__button">
					Submit
				</button>
			</form>
			)}
			</div>
    </div>
  );
};

export default Booktable;