import { useIntl } from "react-intl";
import { Button, Card, Table } from "react-bootstrap-v5";
import { usePatients } from "../../../hooks/usePatients";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";

export function PatientsTable() {
	const intl = useIntl();
	const { patients } = usePatients();

	return (
		<Card>
			<Card.Header>
				<Card.Title>{intl.formatMessage({ id: "TABLE.PATIENTS.TITLE" })}</Card.Title>
				<div
					className="card-toolbar"
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-trigger="hover"
					title={intl.formatMessage({ id: "TABLE.BUTTON.TITLE.ADD_PATIENT" })}
				>
					<Button
						href="#"
						className="btn btn-sm btn-light-primary"
						data-bs-toggle="modal"
						data-bs-target="#modal_create_patient"
					>
						<KTSVG
							path="media/icons/duotune/arrows/arr075.svg"
							className="svg-icon-3"
						/>
						{intl.formatMessage({ id: "TABLE.BUTTON.ADD_PATIENT" })}
					</Button>
				</div>
			</Card.Header>

			<Card.Body>
				<Table
					table-responsive
					className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
				>
					<thead>
						<tr className="fw-bolder text-muted">
							<th className="min-w-150px">
								{intl.formatMessage({ id: "TABLE.TH.NAME" })}
							</th>
							<th className="min-w-120px">
								{intl.formatMessage({ id: "TABLE.TH.CPF" })}
							</th>
							<th className="min-w-120px">
								{intl.formatMessage({ id: "TABLE.TH.WHATSAPP" })}
							</th>
							<th className="min-w-150px">
								{intl.formatMessage({ id: "TABLE.TH.AGE" })}
							</th>
							<th className="min-w-100px text-end">
								{intl.formatMessage({ id: "TABLE.TH.ACTIONS" })}
							</th>
						</tr>
					</thead>

					<tbody>
						{patients.map((patient) => (
							<tr key={patient.id}>
								<td>
									<div className="d-flex align-items-center">
										<div className="symbol symbol-45px me-5">
											<img
												src={toAbsoluteUrl("/media/avatars/blank.png")}
												alt=""
											/>
										</div>
										<div className="d-flex justify-content-start flex-column">
											<span className="text-dark fw-bolder text-hover-primary fs-6">
												{patient.name}
											</span>
										</div>
									</div>
								</td>

								<td>
									<span className="text-dark fw-bolder text-hover-primary d-block fs-6">
										{patient.cpf}
									</span>
								</td>

								<td className="text-left">
									<span className="text-dark fw-bolder text-hover-primary d-block fs-6">
										{patient.whatsapp}
									</span>
								</td>

								<td className="text-left">
									<span className="text-dark fw-bolder text-hover-primary d-block fs-6">
										{patient.age}
									</span>
								</td>

								<td>
									<div className="d-flex justify-content-end flex-shrink-0">
										<Button
											href="#"
											className="btn btn-icon btn-bg-light btn-active-color-black btn-sm me-1"
											title={intl.formatMessage({
												id: "BUTTON.TITLE.ATTENDANCE",
											})}
										>
											<KTSVG
												path="/media/icons/duotune/general/gen019.svg"
												className="svg-icon-3"
											/>
										</Button>

										<Button
											href="#"
											variant="warning"
											className="btn btn-icon btn-bg-light btn-active-color-black btn-sm me-1"
											title={intl.formatMessage({ id: "BUTTON.TITLE.EDIT" })}
										>
											<KTSVG
												path="/media/icons/duotune/art/art005.svg"
												className="svg-icon-3"
											/>
										</Button>

										<Button
											href="#"
											variant="danger"
											className="btn btn-icon btn-bg-light btn-active-color-black btn-sm"
											title={intl.formatMessage({
												id: "BUTTON.TITLE.DELETE",
											})}
										>
											<KTSVG
												path="/media/icons/duotune/general/gen027.svg"
												className="svg-icon-3"
											/>
										</Button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}
