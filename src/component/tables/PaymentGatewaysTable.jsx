// src/component/tables/PaymentGatewaysTable.jsx
import React from "react";
import CountryFlag from "@/component/base/CountryFlag";

export default function PaymentGatewaysTable({ data, onDelete, onToggleStatus, onEdit }) {
	if (data.length === 0) {
		return <div className="text-center py-8 text-gray-500">No payment gateways found</div>;
	}

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
						<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Code</th>
						<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Countries</th>
						<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Fees</th>
						<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
						<th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{data.map((gateway) => (
						<tr key={gateway.id} className="hover:bg-gray-50">
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm font-medium text-gray-900">{gateway.name}</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-700 font-mono">{gateway.code}</div>
							</td>
							<td className="px-6 py-4">
								<div className="flex flex-wrap gap-1">
									{Object.keys(gateway.supported_countries || {}).map((countryCode) => (
										<CountryFlag key={countryCode} code={countryCode} />
									))}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-700">
									{gateway.fee_percentage}% + {gateway.fee_fixed}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<button
									onClick={() => onToggleStatus(gateway)}
									className={`px-3 py-1 rounded-full text-xs font-medium ${
										gateway.is_active ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-emerald-800 hover:bg-red-200"
									}`}>
									{gateway.is_active ? "Active" : "Inactive"}
								</button>
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-3">
								<button onClick={() => onEdit(gateway)} className="text-emerald-600 hover:text-red-900 font-medium">
									Edit
								</button>
								<button onClick={() => onDelete(gateway.id)} className="text-gray-600 hover:text-gray-900 font-medium">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
