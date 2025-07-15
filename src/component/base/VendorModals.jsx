// components/base/ViewVendorModal.jsx

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IconWrapper, DownloadIcon, PDFIcon, VisibleEyeIcon } from "@/resources/icons";
import { formatDateTime, formatNumber } from "../../resources/helpers";
import { Link } from "react-router";

const receiptBaseURL = `${import.meta.env.VITE_API_BASE_URL}`;

export default function ViewVendorModal({ open, setOpen, vendor }) {
	if (!vendor) return null;

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="lg:min-w-4xl sm:min-w-2xl w-full overflow-y-auto max-h-[90vh]">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold">Vendor Details</DialogTitle>
				</DialogHeader>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 mt-4 pb-10">
					<Detail label="Tracking ID" value={vendor.tracking_id} />
					<Detail label="Feeding Capacity" value={vendor.feeding_capacity} />
					<Detail label="Amount" value={`&#8358;${formatNumber(vendor.amount)}`} />
					<Detail label="Payment Link" value={vendor.payment_link} isLink />
					<Detail label="Business Name" value={vendor.business_name} />
					<Detail label="Business Address" value={vendor.business_address} />
					<Detail label="Applicant Name" value={vendor.applicant_name} />
					<Detail label="Phone Number" value={vendor.phone_number} />
					<Detail label="Email Address" value={vendor.email_address} />
					<Detail label="State" value={vendor.state} />
					<Detail label="LGA" value={vendor.lga} />
					<Detail label="Nominator Email" value={vendor.nominator_email} />
					<Detail label="Catering Experience" value={vendor.catering_experience} />
					<Detail label="Nominator Phone" value={vendor.nominator_phone} />
					<Detail label="Catering Experience Description" value={vendor.catering_experience_description} />
					<Detail label="Capacity Tier" value={vendor.capacity_tier} />
					<Detail label="Registration Status" value={vendor.registration_status} />
					<Detail label="Created At" value={new Date(vendor.created_at).toLocaleString()} />
					<Detail label="Updated At" value={new Date(vendor.updated_at).toLocaleString()} />
				</div>

				{vendor.receipts && vendor.receipts.length > 0 && (
					<div className="mt-0">
						<h3 className="text-md font-semibold mb-2">All Receipts</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{vendor.receipts.map((receipt, idx) => (
								<ReceiptCard url={`${receiptBaseURL}/${receipt.file_path}`} index={idx} date={receipt.created_at} />
							))}
						</div>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}

function Detail({ label, value, isLink }) {
	if (!value) return null;
	return (
		<div className="flex flex-col">
			<span className="text-[.8rem] font-medium text-gray-600">{label}</span>
			{isLink ? (
				<Link to={value} target="_blank" rel="noopener noreferrer" className="text-emerald-700 break-words underline">
					{value}
				</Link>
			) : (
				<span className="break-words text-black text-sm" dangerouslySetInnerHTML={{ __html: value }} />
			)}
		</div>
	);
}

export function ViewReceiptsModal({ open, setOpen, receipts = [] }) {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className={`${receipts.length ? "lg:min-w-3xl" : "max-w-3xl"} overflow-y-auto max-h-[90vh]`}>
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold">Vendor Receipts</DialogTitle>
				</DialogHeader>

				<div className="min-h-[300px]">
					{!receipts || receipts.length === 0 ? (
						<p className="text-center text-sm text-gray-500 my-6">No receipts available for this vendor.</p>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
							{receipts.map((receipt, idx) => (
								<ReceiptCard key={idx} date={receipt.created_at} url={`${receiptBaseURL}/${receipt.file_path}`} index={idx} />
							))}
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}

function ReceiptCard({ url, date, index }) {
	const isPdf = url?.toLowerCase().endsWith(".pdf");

	if (!url) return null;

	return (
		<div className="flex flex-col gap-y-2">
			<div className="font-semibold">Receipt {index + 1}</div>
			<div className="border rounded-md overflow-hidden shadow-xs bg-white flex flex-col justify-between">
				{isPdf ? (
					<div className="flex flex-col items-center justify-center p-4 text-center">
						<IconWrapper className="text-5xl text-red-500">
							<PDFIcon />
						</IconWrapper>
						<p className="text-xs text-gray-700 mt-2">Receipt {index + 1}.pdf</p>
						<div className="flex gap-4 mt-3">
							<Link to={url} target="_blank" rel="noopener noreferrer" className="text-emerald-700 text-sm flex items-center gap-1">
								<IconWrapper>
									<VisibleEyeIcon />
								</IconWrapper>
								<span>View</span>
							</Link>
							<Link to={url} target="_blank" download className="text-emerald-700 text-sm flex items-center gap-1">
								<IconWrapper>
									<DownloadIcon />
								</IconWrapper>
								<span>Download</span>
							</Link>
						</div>
					</div>
				) : (
					<>
						<figure className="h-[300px]">
							<img src={url} alt={`Receipt ${index + 1}`} className="object-cover w-full h-full" />
						</figure>
						<Link
							to={url}
							download={url}
							target="_blank"
							className="flex items-center justify-center gap-1 py-2 text-sm text-emerald-700 bg-emerald-50 hover:bg-emerald-100">
							<IconWrapper className="text-xl">
								<DownloadIcon />
							</IconWrapper>
							<span>Download</span>
						</Link>
					</>
				)}
			</div>
			<div className="flex items-center gap-1 font-medium">
				<h5 className="text-sm tracking-tight">Payment Date:</h5>
				<span className="text-sm opacity-70 tracking-tighter">{new Date(date).toLocaleString()}</span>
			</div>
		</div>
	);
}
