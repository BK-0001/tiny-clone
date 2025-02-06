import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { deleteUrl } from "@/lib/actions/urls";
import { Url } from "@prisma/client";
import { Trash2 } from "lucide-react";
import Form from "next/form";

type Props = {
  id: Url["id"];
};

export default function DeleteUrlDialog({ id }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Your record would be permanently deleted. Do you want to proceed?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Form action={deleteUrl.bind(null, id)}>
            <Button type="submit" variant="destructive">
              Confirm
            </Button>
          </Form>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
