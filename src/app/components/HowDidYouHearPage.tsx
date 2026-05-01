import React from "react";

const OPTIONS = [
  "TikTok",
  "Instagram",
  "Facebook",
  "Youtube",
  "From an influencer",
  "From a friend",
  "Google search",
  "Online forum (e.g Discord, Reddit)",
  "Other"
];

export default function HowDidYouHearPage({ onBack, onSuccess }: { onBack?: () => void; onSuccess?: () => void }) {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const isLoading = status === "loading";
  const hasSelection = selected !== null;

  const handleCreate = () => {
    if (!selected || status !== "idle") return;
    setStatus("loading");
    setTimeout(() => { setStatus("success"); onSuccess?.(); }, 1500);
  };

  if (status === "success") {
    return (
      <div className="relative size-full bg-grey-100 flex flex-col items-center justify-center px-lg">
        <div className="size-[72px] rounded-full bg-green flex items-center justify-center mb-lg animate-[scaleIn_0.3s_ease-out]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5L10 17.5L19 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-sans text-title-3 text-black mb-xs text-center">
          Account created
        </h1>
        <p className="font-sans font-medium text-footnote text-grey-600 text-center">
          Welcome to Fleek!
        </p>
      </div>
    );
  }

  return (
    <div className="relative size-full bg-grey-100" data-name="How Did You Hear">
      <div className="pt-[140px] px-sm">
        <h1 className="font-sans text-title-3 text-black mb-lg">
          How did you hear about us?
        </h1>
        <div className="flex flex-col gap-lg items-start w-full">

          <div className="flex flex-col gap-[2px] w-full">
            {OPTIONS.map((opt, i) => {
              const isSelected = selected === opt;
              return (
                <React.Fragment key={opt}>
                  <button
                    type="button"
                    onClick={() => setSelected(opt)}
                    className="flex items-center gap-xs py-sm rounded-sm w-full bg-transparent cursor-pointer"
                  >
                    <span className="flex items-center justify-center size-lg shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d={
                            isSelected
                              ? "M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                              : "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                          }
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span className="font-sans font-medium leading-[1.4] text-body text-[rgba(0,0,0,0.87)] whitespace-nowrap">
                      {opt}
                    </span>
                  </button>
                  {i < OPTIONS.length - 1 && <div className="h-px w-full bg-grey-300" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute left-sm right-sm top-[740px] flex flex-col gap-xxs">
        <button
          type="button"
          onClick={handleCreate}
          disabled={!hasSelection || isLoading}
          className={`h-[44px] rounded-sm w-full font-sans font-semibold text-caption transition-colors flex items-center justify-center ${
            hasSelection
              ? "bg-sunflower text-black cursor-pointer"
              : "bg-grey-400 text-grey-500 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <svg className="animate-spin" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <circle cx="8.5" cy="8.5" r="7" stroke="black" strokeOpacity="0.2" strokeWidth="2" />
              <path d="M15.5 8.5a7 7 0 0 0-7-7" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            "Create account"
          )}
        </button>
      </div>
    </div>
  );
}
