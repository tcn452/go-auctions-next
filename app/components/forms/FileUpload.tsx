"use client";

import { createProofOfPayment } from "@/app/actions/CreateProofOfPayment";
import { uploadFilesToDirectus } from "@/app/actions/uploadProof";
import React, { useState } from "react";


const DragAndDropUpload = ({ userId, lotId }: { userId: string; lotId: string }) => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    validateAndSetFiles(droppedFiles);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    validateAndSetFiles(selectedFiles);
  };

  const validateAndSetFiles = (selectedFiles: File[]) => {
    const validFiles = selectedFiles.filter((file) =>
      ["application/pdf", "image/jpeg"].includes(file.type)
    );

    if (validFiles.length === 0) {
      setError("Only PDF and JPG files are allowed.");
      return;
    }

    setFiles(validFiles);
    setError(null);
  };

  const uploadFile = async () => {
    setUploading(true);
    try {
      const newUploadedFiles = [];
      
      for (const file of files) {
        const formData = new FormData();
        formData.append("folder", "0c245cf2-196e-4b1d-8c04-5391bf3841da");
        formData.append("file", file);

        const result = await uploadFilesToDirectus(formData);
        console.log(result)
        if (!result.success) {
          throw new Error(`File upload failed for ${file.name}: ${result.error}`);
        }

        const response = await createProofOfPayment(result.fileId, lotId)

        if (!response.success) {
          throw new Error(`Proof of Payment failed to upload`)
        }
        newUploadedFiles.push(result.fileId);
      }

      setUploadedFiles((prev) => [...prev, ...newUploadedFiles]);
      setFiles([]); // Clear selected files after upload
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to upload files. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          dragging ? "border-green-500 bg-green-50" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-gray-600">
          Drag and drop your Proof of Payment file here, or{" "}
          <label className="text-blue-500 underline cursor-pointer">
            browse
            <input
              type="file"
              className="hidden"
              accept=".pdf,.jpg"
              multiple
              onChange={handleFileChange}
            />
          </label>
        </p>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Selected Files:</h4>
          <ul className="list-disc ml-6">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={uploadFile}
        disabled={files.length === 0 || uploading}
        className={`mt-4 w-full bg-green-800 text-white py-2 rounded hover:bg-blue-500 ${
          uploading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {uploading ? "Uploading..." : "Upload Files"}
      </button>

      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold text-green-800">File uploaded successfully</h4>
          
        </div>
      )}
    </div>
  );
};

export default DragAndDropUpload;
