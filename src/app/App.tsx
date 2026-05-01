import { useEffect, useState } from "react";
import VariantA from "../imports/VariantA/VariantA";
import SigninWithEmail from "../imports/SigninWithEmail5/SigninWithEmail5";
import HowDidYouHearPage from "./components/HowDidYouHearPage";
import AppHeader from "./components/AppHeader";

type Screen = "landing" | "signin" | "howDidYouHear";
const order: Screen[] = ["landing", "signin", "howDidYouHear"];

export default function App() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [email, setEmail] = useState("");
  const [hideHeader, setHideHeader] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [ssoProvider, setSsoProvider] = useState<"apple" | "google" | null>(null);

  const index = order.indexOf(screen);

  const onBack = () => {
    if (screen === "howDidYouHear") setScreen("signin");
    else if (screen === "signin") setScreen("landing");
  };

  useEffect(() => {
    if (!ssoProvider) return;
    const t = setTimeout(() => {
      setSsoProvider(null);
      setScreen("howDidYouHear");
    }, 1500);
    return () => clearTimeout(t);
  }, [ssoProvider]);

  if (ssoProvider) {
    return (
      <div className="relative size-full bg-grey-100 flex flex-col items-center justify-center px-sm">
        <svg className="animate-spin mb-lg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="17" stroke="var(--color-grey-300)" strokeWidth="3" />
          <path d="M37 20a17 17 0 0 0-17-17" stroke="var(--color-sunflower)" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <h1 className="font-sans text-title-3 text-black mb-xs text-center">
          Authenticating with SSO
        </h1>
        <p className="font-sans font-medium text-footnote text-grey-600 text-center">
          Connecting to {ssoProvider === "apple" ? "Apple" : "Google"}…
        </p>
      </div>
    );
  }

  if (loggedIn) {
    return (
      <div className="relative size-full bg-grey-100 flex flex-col items-center justify-center px-sm">
        <div className="size-[72px] rounded-full bg-green flex items-center justify-center mb-lg animate-[scaleIn_0.3s_ease-out]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5L10 17.5L19 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-sans text-title-3 text-black mb-xs text-center">
          Welcome back
        </h1>
        <p className="font-sans font-medium text-footnote text-grey-600 text-center">
          You're logged in to Fleek.
        </p>
      </div>
    );
  }

  return (
    <div className="relative size-full overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <div className="relative shrink-0 w-full h-full">
          <VariantA onJoinClick={() => setScreen("signin")} />
        </div>
        <div className="relative shrink-0 w-full h-full">
          <SigninWithEmail
            onBack={() => setScreen("landing")}
            onCreateAccount={() => setScreen("howDidYouHear")}
            onLoginSuccess={() => { setLoggedIn(true); setHideHeader(true); }}
            onSSO={(provider) => setSsoProvider(provider)}
            email={email}
            setEmail={setEmail}
          />
        </div>
        <div className="relative shrink-0 w-full h-full">
          <HowDidYouHearPage onBack={() => setScreen("signin")} onSuccess={() => setHideHeader(true)} />
        </div>
      </div>
      <AppHeader onBack={onBack} visible={screen !== "landing" && !hideHeader} />
    </div>
  );
}
