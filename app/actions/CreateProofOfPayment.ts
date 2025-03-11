
"use server"


import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function createProofOfPayment(fileId : string, lotId : string) {
  const session = await getServerSession(options);
  console.log(fileId, lotId)
  
  if (!session || !session.accessToken) {
    throw new Error("Unauthorized: No valid session");
  }

  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/proof_of_payments`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type" : "application/json",
      },
       body : JSON.stringify({
        Lot : lotId,
        proof_of_payment : fileId,
        User:  session?.id,
        status : "pending"
    })
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