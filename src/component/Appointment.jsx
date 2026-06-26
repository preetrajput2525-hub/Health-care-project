import { useState } from "react";

function Appointment() {
	const [form, setForm] = useState({ name: "", email: "", date: "", time: "", doctor: "" });

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert(`Appointment requested for ${form.name} with ${form.doctor} on ${form.date} at ${form.time}`);
		setForm({ name: "", email: "", date: "", time: "", doctor: "" });
	}

	return (
		<form onSubmit={handleSubmit} className="max-w-lg p-6 bg-white rounded shadow">
			<h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
			<label className="block mb-2">
				<span className="text-sm">Full name</span>
				<input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1" />
			</label>

			<label className="block mb-2">
				<span className="text-sm">Email</span>
				<input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1" />
			</label>

			<div className="grid grid-cols-2 gap-2">
				<label className="block mb-2">
					<span className="text-sm">Date</span>
					<input type="date" name="date" value={form.date} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1" />
				</label>
				<label className="block mb-2">
					<span className="text-sm">Time</span>
					<input type="time" name="time" value={form.time} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1" />
				</label>
			</div>

			<label className="block mb-4">
				<span className="text-sm">Doctor</span>
				<select name="doctor" value={form.doctor} onChange={handleChange} className="mt-1 block w-full border rounded px-2 py-1">
					<option value="">Select a doctor</option>
					<option>Dr. Amina Rahman</option>
					<option>Dr. John Smith</option>
					<option>Dr. Priya Patel</option>
				</select>
			</label>

			<button type="submit" className="px-4 py-2 bg-amber-500 text-white rounded">Request Appointment</button>
		</form>
	);
}

export default Appointment;

