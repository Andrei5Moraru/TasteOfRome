import { Redirect, useHistory } from 'react-router';
import React, { useState } from 'react';
import axios from 'axios';
import { FIRSTNAME_ATOM } from '../util/UserContext';
import { useAtom } from 'jotai';


const Book = (props) => {

	const [nrguest, setNrGuest] = useState("");
	const [date, setDate] = useState("");
	const [hour, setHour] = useState("");
	const [suggestion, setSuggestion] = useState("");
	const history = useHistory();
	const [firstName] = useAtom(FIRSTNAME_ATOM);


	const onChangeNrGuest = (e) => {
		const nrguest = e.target.value;
		setNrGuest(nrguest);
	};

	const onChangeDate = (e) => {
		const date = e.target.value;
		setDate(date);
	};

	const onChangeHour = (e) => {
		const hour = e.target.value;
		setHour(hour);
	};

	const onChangeSuggestion = (e) => {
		const suggestion = e.target.value;
		setSuggestion(suggestion);
	};

	const handleBook = (e) => {
		e.preventDefault()
		axios.post("http://localhost:8080/api/v1/book", {
			nrguest,
			date,
			hour,
			suggestion,

		})
			.then(axios.spread((req1, req2) => {

			}));
		history.push("/thankyou");

	}
	return (
		<div>
			{!firstName ?
				<Redirect to="/login"></Redirect>

				: <div className="bg-white bg-opacity-70 mr-96 ml-96 mt-16 mb-16 rounded" >

					<div className="inner_content">

						<form method="post" className="hr_book_form" onSubmit={handleBook} action="">

							<h2 className="form_head">BOOK A TABLE</h2>

							<div className=" mt-16 border-8 rounded border-red-900  ">

								<div className="former">

									<label className="text-black font-bold">No of Guest</label>
									<input className="p-2 rounded text-black font-bold" type="number" placeholder="How many guests" min="1" name="guest" onChange={onChangeNrGuest} required />

								</div>

								<div className="former">

									<label className="text-black font-bold">Date</label>
									<input className="p-2 rounded text-black font-bold" type="date" name="date" placeholder="Select date for booking" onChange={onChangeDate} required />

								</div>

								<div className="former">

									<label className="text-black font-bold">Hour</label>
									<input className="p-2 rounded text-black font-bold" type="time" name="time" placeholder="Select time for booking" onChange={onChangeHour} required />

								</div>


							</div>

							<div className="mt-6">

								<div className="former">

									<label className="text-black font-bold">Suggestions <small><b className="text-black font-bold">(E.g Where do you want your table to be[inside,outside])</b></small></label>
									<textarea name="suggestions" placeholder="your suggestions" onChange={onChangeSuggestion}></textarea>

								</div>

								<div>

									<input type="submit" className="submit mr-96 ml-64 hover:bg-red-600" name="submit" value="MAKE YOUR BOOKING" />

								</div>

							</div>

						</form>

					</div>

				</div>}



		</div>




	);
}

export default Book;