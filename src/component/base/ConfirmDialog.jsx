import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'

export const ConfirmDialog = ({
  open,
  onOpenChange,
  onConfirm,
  title = 'Are you sure?',
  description = 'This action cannot be undone.',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'default'
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <p className='text-sm text-gray-600'>{description}</p>
        <DialogFooter>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            {cancelText}
          </Button>
          <Button variant={confirmVariant} onClick={onConfirm}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
