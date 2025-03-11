
"use server"


import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function uploadFilesToDirectus(formData: FormData) {
  const session = await getServerSession(options);
  
  if (!session || !session.accessToken) {
    throw new Error("Unauthorized: No valid session");
  }

  try {
    const folder = formData.get("folder");
    
    // Create a new FormData instance for the API request
    const apiFormData = new FormData();
    
    // Add the folder if it exists
    if (folder) {
      apiFormData.append("folder", folder.toString());
    }
    
    // Get the file from the form data
    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
      throw new Error("No valid file provided");
    }
    
    // Add the file to the API form data
    apiFormData.append("file", file);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/files`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        // Don't set Content-Type when sending FormData, the browser will set it with the proper boundary
      },
      body: apiFormData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Upload failed:", response.status, errorData);
      throw new Error(`File upload failed: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, fileId: data.data.id };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, error: error.message };
  }
}