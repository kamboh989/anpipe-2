export default function HalfVideoSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto flex justify-center px-4">
        
        {/* Half Page Video */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl bg-black shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/CJnDfNADgN0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
