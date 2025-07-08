import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CustomModal = ({ children, isOpen, onClose, title, message = "" }) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-emerald-600">{title}</DialogTitle>
					{message.trim() !== "" && <DialogDescription className="text-emerald-500">{message}</DialogDescription>}
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	);
};

export default CustomModal; // Standard export
