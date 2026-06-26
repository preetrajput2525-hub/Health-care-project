function Doctor() {
	const doctors = [
		{ id: 1, name: "Dr. Amina Rahman", specialty: "General Physician" },
		{ id: 2, name: "Dr. John Smith", specialty: "Cardiologist" },
		{ id: 3, name: "Dr. Priya Patel", specialty: "Pediatrician" },
	];

	return (
		<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-6">
			{doctors.map((d) => (
				<article key={d.id} className="rounded-lg border p-4 bg-white shadow">
					<h3 className="text-lg font-semibold">{d.name}</h3>
					<p className="text-sm text-gray-600">{d.specialty}</p>
					<div className="mt-4">
						<button className="px-3 py-1 bg-amber-500 text-white rounded">View</button>
						<button className="ml-2 px-3 py-1 border rounded">Book</button>
					</div>
				</article>
			))}
		</section>
	);
}

export default Doctor;

