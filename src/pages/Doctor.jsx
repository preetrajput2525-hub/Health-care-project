import DoctorList from "../component/Doctor";

function Doctor() {
	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Doctors</h1>
			<DoctorList />
		</div>
	);
}

export default Doctor;
