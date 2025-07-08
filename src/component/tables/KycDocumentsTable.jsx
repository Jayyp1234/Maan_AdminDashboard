import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, User } from "lucide-react";

export function KycDocumentsTable({ documents, loading, filter }) {
	const getStatusBadge = (status) => {
		const variants = {
			pending: "bg-yellow-100 text-yellow-800",
			approved: "bg-green-100 text-green-800",
			rejected: "bg-red-100 text-emerald-800",
		};
		return <Badge className={`${variants[status]} capitalize`}>{status}</Badge>;
	};

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
					{filter === "all" ? "No KYC documents have been uploaded yet." : `No ${filter} KYC documents found.`}
				</p>
			</div>
		);
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>User</TableHead>
					<TableHead>Document Type</TableHead>
					<TableHead>Document Number</TableHead>
					<TableHead>Status</TableHead>
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
									<User className="h-5 w-5 text-emerald-600" />
								</div>
								<div>
									<div className="font-medium text-gray-900">{doc.user.fullname}</div>
									<div className="text-sm text-gray-500">{doc.user.email}</div>
								</div>
							</div>
						</TableCell>
						<TableCell className="font-medium">{doc.document_type}</TableCell>
						<TableCell>{doc.document_number}</TableCell>
						<TableCell>{getStatusBadge(doc.status)}</TableCell>
						<TableCell>{new Date(doc.created_at).toLocaleDateString()}</TableCell>
						<TableCell className="text-right">
							<Link to={`${doc.id}`}>
								<Button variant="outline" size="sm">
									Review
								</Button>
							</Link>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
