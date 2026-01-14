export default function AdSense() {
  return (
    <div className="my-12 py-8 border-y border-border">
      <div className="text-center text-sm text-muted-foreground mb-4">Advertisement</div>
      <div
        className="bg-muted rounded-lg p-8 text-center min-h-[250px] flex items-center justify-center"
        role="region"
        aria-label="Advertisement"
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "250px" }}
          data-ad-client="ca-pub-YOUR_ADSENSE_ID"
          data-ad-slot="YOUR_AD_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}
