import Layout from "@/components/layout/Layout";

const videos = [
  {
    title: "Intro",
    url: "https://youtube.com/shorts/oGH8jPC0tVQ?feature=share",
  },
  {
    title: "Presentation",
    url: "https://youtube.com/shorts/AiEX_4E67Mg?feature=share",
  },
  {
    title: "Presentation Part 2",
    url: "https://youtube.com/shorts/LtDF4voRLDE?feature=share",
  },
  {
    title: "Presentation Part 3",
    url: "https://youtube.com/shorts/LtDF4voRLDE?feature=share",
  },
  {
    title: "Lose Something",
    url: "https://youtube.com/shorts/pYP4GQ4ewIY?feature=share",
  },
  {
    title: "Managing Time",
    url: "https://youtube.com/shorts/4RWP9rB0Ujs?feature=share",
  },
  {
    title: "Hard Concepts",
    url: "https://youtu.be/JTL42vBSJ64",
  },
];

function getEmbedUrl(url: string): string {
  // Handle YouTube Shorts
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }
  // Handle youtu.be short links
  const shortLinkMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortLinkMatch) {
    return `https://www.youtube.com/embed/${shortLinkMatch[1]}`;
  }
  // Handle standard youtube.com/watch?v=
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  return url;
}

const Social = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Social Aspect
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
            Real stories, real experiences — watch how biology shapes the world around us.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16">
            {videos.map((video, index) => {
              const embedUrl = getEmbedUrl(video.url);
              const isShort = video.url.includes("/shorts/");

              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Title */}
                  <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {video.title}
                  </h2>

                  {/* Video Embed */}
                  <div
                    className={`w-full overflow-hidden rounded-xl border border-border card-shadow ${
                      isShort
                        ? "mx-auto max-w-sm"
                        : "max-w-3xl"
                    }`}
                  >
                    <div
                      className={`relative w-full ${
                        isShort ? "pb-[177.78%]" : "pb-[56.25%]"
                      }`}
                    >
                      <iframe
                        src={embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>

                  {/* Divider — not after last item */}
                  {index < videos.length - 1 && (
                    <div className="w-full max-w-3xl border-b border-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Social;
