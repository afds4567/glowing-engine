import { Concert } from "@prisma/client";

interface ConcertListItemProps {
  concert: Concert;
}

export default function ConcertListItem({
  concert: { id, description, date, location, approved, createdAt, updatedAt },
}: ConcertListItemProps) {
  return (
    <div>
      <h2>{description}</h2>
      <p>{location}</p>
    </div>
  );
}
