import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Edit, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { openSourceModal, toggleSourceOfFundStatus, deleteSourceOfFund } from "@/store/slices/sourceOfFundSlice";

export function SourceOfFundTable() {
	const dispatch = useDispatch();
	const { items, loading } = useSelector((state) => state.sourceOfFund);

	const handleEdit = (item) => {
		dispatch(openSourceModal({ type: "edit", item }));
	};

	const handleToggleStatus = (id) => {
		dispatch(toggleSourceOfFundStatus(id));
	};

	const handleDelete = (id) => {
		if (confirm("Are you sure you want to delete this source?")) {
			dispatch(deleteSourceOfFund(id));
		}
	};

	if (loading && items.length === 0) {
		return (
			<div className="space-y-4">
				{[...Array(5)].map((_, i) => (
					<Skeleton key={i} className="h-12 w-full rounded-lg" />
				))}
			</div>
		);
	}

	if (items.length === 0) {
		return (
			<div className="text-center py-12">
				<h3 className="mt-2 text-sm font-medium text-gray-900">No sources found</h3>
				<p className="mt-1 text-sm text-gray-500">Get started by adding a new source of fund</p>
			</div>
		);
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Created At</TableHead>
					<TableHead className="text-right">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((item) => (
					<TableRow key={item.id}>
						<TableCell className="font-medium">{item?.name}</TableCell>
						<TableCell>
							<Badge className={item.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>{item?.status}</Badge>
						</TableCell>
						<TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
						<TableCell className="text-right">
							<div className="flex justify-end gap-2">
								<Button variant="ghost" size="icon" onClick={() => handleToggleStatus(item?.id)}>
									{item.status === "active" ? <ToggleRight className="h-4 w-4 text-green-600" /> : <ToggleLeft className="h-4 w-4 text-gray-600" />}
								</Button>
								<Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
									<Edit className="h-4 w-4" />
								</Button>
								<Button variant="ghost" size="icon" onClick={() => handleDelete(item?.id)}>
									<Trash2 className="h-4 w-4 text-emerald-600" />
								</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
