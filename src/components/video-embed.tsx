import { useState } from "react";
import { Play } from "lucide-react";

// Click-to-load embed: shows a thumbnail until clicked, preserving initial page-load perf.
export function VideoEmbed({
  embedUrl,
  thumbnail,
  title,
}: {
  embedUrl: string;
  thumbnail: string;
  title: string;
}) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black shadow-neon">
        <iframe
          src={embedUrl}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
      className="group relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black shadow-neon"
    >
      <img
        src={thumbnail}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-neon-pink/90 text-neon-pink-foreground shadow-neon transition-transform duration-300 group-hover:scale-110">
          <Play className="h-7 w-7 fill-current" />
        </span>
      </span>
      <span className="absolute bottom-3 left-3 text-xs font-semibold text-foreground/80">
        Click to load video
      </span>
    </button>
  );
}
