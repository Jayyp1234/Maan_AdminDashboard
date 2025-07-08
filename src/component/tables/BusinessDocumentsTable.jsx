import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, Building2, X } from "lucide-react";
import { IMAGE_BASE_URL } from "@/utils/api";
export function BusinessDocumentsTable({ documents = [], loading, filter }) {
	const [selectedDoc, setSelectedDoc] = useState(null);

	const getTypeBadge = (type) => {
		const variants = {
			certificate: "bg-blue-100 text-blue-800",
			license: "bg-purple-100 text-purple-800",
			other: "bg-gray-100 text-gray-800",
		};
		return <Badge className={`${variants[type] || "bg-gray-100 text-gray-800"} capitalize`}>{type}</Badge>;
	};

	const isPdf = (url) => url?.toLowerCase().endsWith(".pdf");

	const closeModal = () => setSelectedDoc(null);

	if (loading && documents.length === 0) {
		return (
			<div className="space-y-4">
				{[...Array(5)].map((_, i) => (
					<Skeleton key={i} className="h-12 w-full rounded-lg" />
				))}
			</div>
		);
	}

	if (documents.length === 0) {
		return (
			<div className="text-center py-12">
				<FileText className="mx-auto h-12 w-12 text-gray-400" />
				<h3 className="mt-2 text-sm font-medium text-gray-900">No documents found</h3>
				<p className="mt-1 text-sm text-gray-500">
					{filter === "all" ? "No business documents have been uploaded yet." : `No ${filter} documents found.`}
				</p>
			</div>
		);
	}

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Business</TableHead>
						<TableHead>Document Name</TableHead>
						<TableHead>Type</TableHead>
						<TableHead>Size</TableHead>
						<TableHead>Uploaded</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{documents.map((doc) => (
						<TableRow key={doc.id}>
							<TableCell>
								<div className="flex items-center gap-3">
									<div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
										<Building2 className="h-5 w-5 text-emerald-600" />
									</div>
									<div>
										<div className="font-medium text-gray-900">{doc?.business_account?.business_name}</div>
										<div className="text-sm text-gray-500">{doc?.business_account?.business_reference_id}</div>
									</div>
								</div>
							</TableCell>
							<TableCell className="font-medium">{doc.name}</TableCell>
							<TableCell>{getTypeBadge(doc.type)}</TableCell>
							<TableCell>{(doc.size / 1024).toFixed(2)} KB</TableCell>
							<TableCell>{new Date(doc.created_at).toLocaleDateString()}</TableCell>
							<TableCell className="text-right">
								<Button variant="outline" size="sm" onClick={() => setSelectedDoc(doc)}>
									View
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			{/* Modal Overlay */}
			{selectedDoc && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-light bg-opacity-60"
					onClick={closeModal}
					aria-modal="true"
					role="dialog"
					tabIndex={-1}>
					<div
						className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
						onClick={(e) => e.stopPropagation()} // prevent modal close on content click
					>
						<button onClick={closeModal} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" aria-label="Close">
							<X className="h-6 w-6" />
						</button>

						<div className="p-4">
							<h2 className="text-lg font-semibold mb-4">{selectedDoc.name}</h2>
							<div className="border rounded-md overflow-hidden bg-gray-50">
								{isPdf(selectedDoc.file_path) ? (
									<iframe src={`${IMAGE_BASE_URL}/${selectedDoc.path}`} title={selectedDoc.name} className="w-full h-[600px]" frameBorder="0" />
								) : (
									<img src={`${IMAGE_BASE_URL}/storage/${selectedDoc.path}`} alt={selectedDoc.name} className="w-full object-contain max-h-[600px]" />
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
