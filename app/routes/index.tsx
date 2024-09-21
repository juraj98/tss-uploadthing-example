import { createFileRoute } from "@tanstack/react-router";
import UploadButton from "~/utils/uploadthing";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-4">
      <div className="px-2 py-1 rounded mb-4 bg-red-300 border border-red-800">
        Don't forget to add UPLOADTHING_TOKEN to .env
      </div>
      <UploadButton endpoint="imageUploader" />
    </div>
  );
}
