import ListingDetailClient from "@/components/listings/ListingDetailClient";

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  return <ListingDetailClient id={params.id} />;
}
