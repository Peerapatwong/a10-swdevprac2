import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  const profile = await getUserProfile(session.user.token);

  return <BookingForm profile={profile.data} />;
}