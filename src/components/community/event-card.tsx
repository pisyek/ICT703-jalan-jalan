import { MapPin, Calendar, TicketCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface EventCardProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  type: string;
  badges: string[];
  imageGradient?: string;
  image?: string;
}

export function EventCard({
  title,
  subtitle,
  date,
  location,
  type,
  badges,
  imageGradient = "bg-gradient-to-br from-slate-200 to-slate-300",
  image,
}: EventCardProps) {
  const imagePath = image
    ? image.startsWith("http") || image.startsWith("/")
      ? image
      : `/community/${image}`
    : null;

  return (
    <Card className="w-full border border-purple-950 shadow-sm rounded-lg overflow-hidden gap-0 py-0 flex flex-col">
      <div className="p-6 space-y-1 h-[88px] flex flex-col justify-center">
        <h3 className="font-semibold text-slate-700">{title}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      {imagePath ? (
        <div className="h-64 relative flex-shrink-0">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className={`h-64 ${imageGradient} flex-shrink-0`} />
      )}
      <div className="p-6 flex flex-col gap-3 h-[200px]">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="w-6 h-6" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="w-6 h-6" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <TicketCheck className="w-6 h-6" />
          <span>{type}</span>
        </div>
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, i) => (
              <Badge key={i} variant="outline" className="rounded-lg border-purple-950">
                {badge}
              </Badge>
            ))}
          </div>
          <span className="text-sm font-medium text-slate-700">View More</span>
        </div>
      </div>
    </Card>
  );
}

