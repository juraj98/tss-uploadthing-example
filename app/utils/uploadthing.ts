import { generateUploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "~/server/uploadthing";

const UploadButton = generateUploadButton<OurFileRouter>();

export default UploadButton;
