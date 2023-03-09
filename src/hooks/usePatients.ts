import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Patient } from "../@types/Patient";

import Swal from "sweetalert";

export function usePatients() {
	const [patients, setPatients] = useState<Patient[]>([]);

	async function fetchPatients() {
		try {
			const response = await api.get("/patients");
			setPatients(response.data);
		} catch {
			console.log("Erro ao buscar pacientes");

			Swal({
				title: "Erro!",
				text: "Erro ao buscar pacientes",
				icon: "error",
			});
		}
	}

	useEffect(() => {
		fetchPatients();
	}, []);

	return { patients, fetchPatients };
}
