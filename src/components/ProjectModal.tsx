import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

class Props {
  projectImage: string | undefined;
  projectName: string | undefined;
  projectDetails: string | undefined;
}

const ProjectModal = ({ projectImage, projectName, projectDetails }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="view-btn">View</DialogTrigger>
      <DialogContent className="!max-w-[60%] max-lg:!max-w-[70%] max-sm:!max-w-[90%] p-0 overflow-auto border">
        <DialogHeader className="w-full gap-0">
          <DialogTitle className="w-full h-[500px] max-lg:h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={projectImage}
              alt={projectName}
            />
          </DialogTitle>
          <DialogDescription className="p-4 border-t-2 border-#[a2a2a2] text-center">
            {projectName} - {projectDetails}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
