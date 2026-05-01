import React from "react";
import svgPaths from "./svg-y7tkg23vjj";

function Notch() {
  return (
    <div className="-translate-x-1/2 absolute h-[32px] left-1/2 top-0 w-[172px]" data-name="Notch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 32">
        <g id="Notch">
          <path d={svgPaths.p29d69840} fill="var(--fill-0, black)" id="notch" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(16.67%-11px)] top-[14px]" data-name="Left Side">
      <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-[24px] top-[14px] w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[21px] left-[27px] not-italic text-[16px] text-black text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(83.33%-0.3px)] top-[19px]" data-name="Right Side">
      <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+25.2px)] top-[19px] w-[27.401px]" data-name="_StatusBar-battery">
        <div className="-translate-y-1/2 absolute h-[13px] left-0 right-[2.4px] top-1/2" data-name="Outline">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p3f827980} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[4.22px] right-0 top-[calc(50%+0.61px)] w-[1.401px]" data-name="Battery End">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[9px] left-[2px] right-[4.4px] top-1/2" data-name="Fill">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="var(--fill-0, black)" id="Fill" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[11.834px] left-[calc(83.33%-4px)] top-[20px] w-[17px]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.8339">
          <path d={svgPaths.p370a1200} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[12px] left-[calc(83.33%-29.5px)] top-[20px] w-[18px]" data-name="Icon / Mobile Signal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Device() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Device">
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0" data-name="StatusBar">
        <Notch />
        <LeftSide />
        <RightSide />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-[calc(50%+0.5px)] w-[390px]" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.07 9.57c-.02-2.13 1.74-3.16 1.82-3.21-.99-1.45-2.54-1.65-3.09-1.67-1.31-.13-2.56.77-3.23.77-.67 0-1.7-.75-2.79-.73C4.34 4.75 3 5.55 2.27 6.79c-1.45 2.5-.37 6.21 1.04 8.24.69.99 1.51 2.11 2.59 2.07 1.04-.04 1.43-.67 2.69-.67 1.25 0 1.6.67 2.7.65 1.12-.02 1.83-1.01 2.51-2.01.79-1.15 1.12-2.27 1.13-2.33-.03-.01-2.16-.83-2.18-3.29zM10.95 3.31c.57-.7.96-1.66.85-2.62-.83.04-1.83.55-2.42 1.24-.53.61-.99 1.59-.87 2.53.92.07 1.87-.47 2.44-1.15z" fill="white"/>
      </svg>
      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">Continue with Apple</p>
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.68 8.18c0-.57-.05-1.11-.15-1.64H8v3.1h4.31c-.19 1-.75 1.85-1.6 2.42v2.01h2.59c1.52-1.4 2.38-3.46 2.38-5.89z" fill="#4285F4"/>
        <path d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.59-2.01c-.72.48-1.63.77-2.71.77-2.08 0-3.85-1.41-4.48-3.3H.85v2.07C2.18 14.14 4.86 16 8 16z" fill="#34A853"/>
        <path d="M3.52 9.52c-.16-.48-.25-.99-.25-1.52s.09-1.04.25-1.52V4.41H.85C.31 5.49 0 6.71 0 8s.31 2.51.85 3.59l2.67-2.07z" fill="#FBBC05"/>
        <path d="M8 3.18c1.17 0 2.23.4 3.06 1.19l2.29-2.29C11.97.79 10.16 0 8 0 4.86 0 2.18 1.86.85 4.41l2.67 2.07C4.15 4.59 5.92 3.18 8 3.18z" fill="#EA4335"/>
      </svg>
      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Continue with Google</p>
      </div>
    </div>
  );
}

function Frame3({ onSSO }: { onSSO?: (provider: "apple" | "google") => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="bg-black h-[44px] relative rounded-[4px] shrink-0 w-full cursor-pointer" data-name="Text Button" onClick={() => onSSO?.("apple")}>
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
            <Base />
          </div>
        </div>
      </div>
      <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full cursor-pointer" data-name="Text Button" onClick={() => onSSO?.("google")}>
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
            <Base1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 1">
            <path d="M0 0.5H151" id="Vector 1" stroke="var(--stroke-0, #667085)" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Montserrat',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#667085] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">OR</p>
      </div>
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 1">
            <path d="M0 0.5H151" id="Vector 1" stroke="var(--stroke-0, #667085)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Field({
  value,
  onChange,
  error,
  isValid,
  hasAttemptedSubmit,
  type = "text",
  placeholder = "Enter your email",
  showPasswordToggle = false,
  onTogglePassword,
  helperText
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  isValid?: boolean;
  hasAttemptedSubmit?: boolean;
  type?: string;
  placeholder?: string;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  helperText?: string;
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const showError = hasAttemptedSubmit && error;
  const showValid = hasAttemptedSubmit && isValid && value;
  const hasValue = value.length > 0;

  let borderColor = "#667085";

  if (showError) {
    borderColor = "#DC2626";
  } else if (showValid) {
    borderColor = "#10B981";
  } else if (hasValue || isFocused) {
    borderColor = "black";
  }

  return (
    <div className="relative w-full">
      <div className="bg-white content-stretch flex gap-[8px] h-[44px] items-center justify-center p-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
        <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor }} />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          inputMode={type === "email" ? "email" : undefined}
          autoComplete={type === "email" ? "email" : type === "password" ? "current-password" : undefined}
          autoCapitalize={type === "email" || type === "password" ? "none" : undefined}
          autoCorrect={type === "email" || type === "password" ? "off" : undefined}
          spellCheck={type === "email" || type === "password" ? false : undefined}
          enterKeyHint={type === "email" ? "next" : "go"}
          className="flex flex-[1_0_0] flex-col font-['Montserrat',sans-serif] font-medium justify-center leading-[1.4] min-w-px relative text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#667085] placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0"
          style={{ color: "black", fontSize: "16px" }}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="relative shrink-0 size-[20px] cursor-pointer bg-transparent border-none outline-none p-0"
          >
            {type === "password" ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5C5.83333 5 2.5 10 2.5 10C2.5 10 5.83333 15 10 15C14.1667 15 17.5 10 17.5 10C17.5 10 14.1667 5 10 5Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 3.33334L16.6667 16.6667" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.25001 8.25C7.91758 8.58078 7.65422 8.97533 7.47569 9.40935C7.29716 9.84338 7.20703 10.3101 7.21095 10.7806C7.21487 11.2512 7.31275 11.7162 7.49848 12.1471C7.6842 12.5781 7.95393 12.9668 8.29167 13.2917C8.62942 13.6167 9.02545 13.871 9.46143 14.0388C9.89741 14.2065 10.3643 14.2844 10.8348 14.2675C11.3053 14.2507 11.7657 14.1394 12.1896 13.9406C12.6135 13.7418 12.9915 13.4598 13.3 13.1117" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.89166 5.89166C5.13883 6.92499 3.74166 8.60832 2.5 10.4167C2.5 10.4167 5.41666 15.8333 10 15.8333C11.4733 15.8583 12.9217 15.45 14.1583 14.6583" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.8667 13.0333C16.7717 12.0917 17.5167 11.0083 17.5 10C17.5 10 14.5833 4.58334 10 4.58334C9.55 4.58334 9.11667 4.64167 8.69167 4.73334" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5833 7.58334C11.0671 7.70506 11.5069 7.95632 11.8537 8.30863C12.2005 8.66094 12.4411 9.10153 12.55 9.58334" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        )}
      </div>
      {showError ? (
        <div className="font-['Montserrat',sans-serif] font-medium text-[12px] text-[#DC2626] mt-[4px] ml-[12px]">
          {error}
        </div>
      ) : helperText ? (
        <div className="font-['Montserrat',sans-serif] text-[12px] text-[#667085] mt-[4px] ml-[12px]">
          {helperText}
        </div>
      ) : null}
    </div>
  );
}

function Base2({ label = "Continue" }: { label?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">{label}</p>
      </div>
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">
        <p className="leading-[1.5]">Forgot your password?</p>
      </div>
    </div>
  );
}

function Frame({ onCreateAccount, onLoginSuccess, email, setEmail }: { onCreateAccount?: () => void; onLoginSuccess?: () => void; email: string; setEmail: (v: string) => void }) {
  const [password, setPassword] = React.useState("");
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = React.useState(false);
  const [showPasswordField, setShowPasswordField] = React.useState(false);
  const [showPasswordText, setShowPasswordText] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = validateEmail(email);
  const emailError = !email ? "Enter is required to login or signup" : !isEmailValid ? "Please enter a valid email address" : "";
  const isNewUser = email.toLowerCase() === "newuser@gmail.com";
  const submitLabel = showPasswordField ? (isNewUser ? "Create account" : "Login") : "Continue";

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    if (showPasswordField) {
      setShowPasswordField(false);
      setPassword("");
      setHasAttemptedSubmit(false);
      setPasswordError("");
    }
  };

  const handleContinue = () => {
    setHasAttemptedSubmit(true);
    if (isLoading) return;
    if (isEmailValid && !showPasswordField) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowPasswordField(true);
      }, 1200);
    } else if (showPasswordField) {
      setPasswordError("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        if (isNewUser) {
          if (password.length >= 8) {
            onCreateAccount?.();
          } else {
            setPasswordError("Your password should contain at least 8 characters");
          }
        } else if (email.toLowerCase() === "existinguser@gmail.com" && password === "password") {
          onLoginSuccess?.();
        } else {
          setPasswordError("Password you've entered is incorrect. Try again.");
        }
      }, 1200);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input Field">
          <Field
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            isValid={isEmailValid}
            hasAttemptedSubmit={hasAttemptedSubmit}
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-200 ease-in-out w-full"
        style={{
          maxHeight: showPasswordField ? "100px" : "0px",
          opacity: showPasswordField ? 1 : 0
        }}
      >
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input Field">
            <Field
              value={password}
              onChange={(v) => { setPassword(v); if (passwordError) setPasswordError(""); }}
              type={showPasswordText ? "text" : "password"}
              placeholder="Enter your password"
              hasAttemptedSubmit={!!passwordError}
              error={passwordError}
              showPasswordToggle={true}
              onTogglePassword={() => setShowPasswordText(!showPasswordText)}
              helperText={isNewUser ? "Your password should contain at least 8 characters" : undefined}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f8c642] h-[44px] relative rounded-[4px] shrink-0 w-full cursor-pointer" data-name="Text Button" onClick={handleContinue}>
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
            {isLoading ? (
              <svg className="animate-spin" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="7" stroke="black" strokeOpacity="0.2" strokeWidth="2" />
                <path d="M15.5 8.5a7 7 0 0 0-7-7" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <Base2 label={submitLabel} />
            )}
          </div>
        </div>
      </div>
      {showPasswordField && !isNewUser && (
        <div className="h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Text Button">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
              <Base3 />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame2({ onCreateAccount, onLoginSuccess, onSSO, email, setEmail }: { onCreateAccount?: () => void; onLoginSuccess?: () => void; onSSO?: (provider: "apple" | "google") => void; email: string; setEmail: (v: string) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[12px] top-[140px] right-[12px]">
      <div className="flex flex-col gap-[8px] w-full">
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[24px] leading-[1.4] text-black">
          Unlock access to 1000+ suppliers
        </h1>
        <p className="font-['Montserrat',sans-serif] font-medium text-[14px] leading-[1.4] text-[#667085]">
          All in one app.
        </p>
      </div>
      <Frame3 onSSO={onSSO} />
      <Frame1 />
      <Frame onCreateAccount={onCreateAccount} onLoginSuccess={onLoginSuccess} email={email} setEmail={setEmail} />
    </div>
  );
}

function TopRow() {
  return (
    <div className="absolute h-[42px] left-0 right-0 top-0" data-name="Top Row">
      <div className="absolute h-[42px] left-0 right-[calc(90%+4.7px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">Q</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(10%+1.3px)] right-[calc(80%+5.4px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">W</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(20%+0.6px)] right-[calc(70%+4.1px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">E</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(30%+1.9px)] right-[calc(60%+3.8px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">R</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(40%+2.2px)] right-[calc(50%+2.5px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">T</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(50%+3.5px)] right-[calc(40%+2.2px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">Y</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(60%+3.8px)] right-[calc(30%+1.9px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">U</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(70%+4.1px)] right-[calc(20%+0.6px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">I</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(80%+5.4px)] right-[calc(10%+1.3px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">O</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(90%+4.7px)] right-0 top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">P</p>
        </div>
      </div>
    </div>
  );
}

function MiddleRow() {
  return (
    <div className="absolute h-[42px] left-[19px] right-[19px] top-[54px]" data-name="Middle Row">
      <div className="absolute h-[42px] left-0 right-[calc(88.89%+4.78px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">A</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(11.11%+1.22px)] right-[calc(77.78%+4.56px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">S</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(22.22%+1.44px)] right-[calc(66.67%+4.33px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">D</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(33.33%+1.67px)] right-[calc(55.56%+3.11px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">F</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(44.44%+2.89px)] right-[calc(44.44%+2.89px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">G</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(55.56%+3.11px)] right-[calc(33.33%+1.67px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">H</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(66.67%+4.33px)] right-[calc(22.22%+1.44px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">J</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(77.78%+4.56px)] right-[calc(11.11%+1.22px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">K</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(88.89%+4.78px)] right-0 top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">L</p>
        </div>
      </div>
    </div>
  );
}

function Keys1() {
  return (
    <div className="absolute h-[42px] left-[58px] right-[58px] top-0" data-name="Keys">
      <div className="absolute h-[42px] left-0 right-[calc(85.71%+4.71px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">Z</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(14.29%+1.29px)] right-[calc(71.43%+5.43px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">X</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(28.57%+0.57px)] right-[calc(57.14%+4.14px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">C</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(42.86%+1.86px)] right-[calc(42.86%+1.86px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">V</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(57.14%+4.14px)] right-[calc(28.57%+1.57px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">B</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(71.43%+4.43px)] right-[calc(14.29%+1.29px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">N</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(85.71%+4.71px)] right-0 top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">M</p>
        </div>
      </div>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="absolute h-[42px] left-0 right-0 top-[108px]" data-name="Bottom Row">
      <Keys1 />
      <div className="absolute left-0 size-[42px] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.3px] left-[calc(50%+0.5px)] top-[calc(50%+0.15px)] w-[19px]" data-name="Shift Active">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.3">
            <path d={svgPaths.p1fa9a780} fill="var(--fill-0, black)" id="Shift Active" />
          </svg>
        </div>
      </div>
      <div className="absolute right-0 size-[42px] top-0" data-name="_Key">
        <div className="absolute bg-[#abb0bc] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[23px]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
            <g id="Union">
              <path d={svgPaths.p308e9e00} fill="var(--fill-0, black)" />
              <path clipRule="evenodd" d={svgPaths.p320b9800} fill="var(--fill-0, black)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Keys() {
  return (
    <div className="absolute h-[150px] left-[3px] right-[3px] top-[8px]" data-name="Keys">
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </div>
  );
}

function BottomRow1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-start left-[3px] right-[3px] top-[170px]" data-name="Bottom Row">
      <div className="h-[42px] relative shrink-0 w-[91px]" data-name="_Key">
        <div className="absolute bg-[#abb0bc] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.32px]">
          <p className="leading-[21px]">123</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.32px]">
          <p className="leading-[21px]">space</p>
        </div>
      </div>
      <div className="h-[42px] relative shrink-0 w-[91px]" data-name="_Key">
        <div className="absolute bg-[#abb0bc] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.32px]">
          <p className="leading-[21px]">next</p>
        </div>
      </div>
    </div>
  );
}

function EmojiDictation() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[31px] right-[31px] top-[235px]" data-name="Emoji & Dictation">
      <div className="relative shrink-0 size-[27px]" data-name="Icon / Emoji">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path clipRule="evenodd" d={svgPaths.p7205000} fill="var(--fill-0, #50555C)" fillRule="evenodd" id="Icon / Emoji" />
        </svg>
      </div>
      <div className="h-[28px] relative shrink-0 w-[19px]" data-name="Icon / Dictation">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 28">
          <path d={svgPaths.p33b21b00} fill="var(--fill-0, #50555C)" id="Icon / Dictation" />
        </svg>
      </div>
    </div>
  );
}

function LoginSignin({ onCreateAccount, onLoginSuccess, onSSO, email, setEmail }: { onCreateAccount?: () => void; onLoginSuccess?: () => void; onSSO?: (provider: "apple" | "google") => void; email: string; setEmail: (v: string) => void }) {
  return (
    <div className="absolute bg-[#f9fafb] h-[852px] left-0 right-0 overflow-clip top-0" data-name="Login | Signin">
      <Frame2 onCreateAccount={onCreateAccount} onLoginSuccess={onLoginSuccess} onSSO={onSSO} email={email} setEmail={setEmail} />
      <div className="absolute backdrop-blur-[54.366px] bg-[#d1d3d9] h-[290px] left-0 right-0 overflow-clip top-[862px]" data-name="AlphabeticKeyboard">
        <Keys />
        <BottomRow1 />
        <EmojiDictation />
        <div className="absolute bottom-0 h-[34px] left-px right-0" data-name="HomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[67px] flex flex-col font-['Montserrat',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#667085] text-[0px] text-center translate-y-1/2 w-[289px]">
        <p className="text-[12px]">
          <span className="leading-[1.5]">{`By signing up you agree to Fleek’s `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Montserrat',sans-serif] font-medium leading-[1.5] underline">privacy policy</span>
          <span className="font-['Montserrat',sans-serif] font-medium leading-[1.5]">,</span>
          <span className="leading-[1.5]">{` `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Montserrat',sans-serif] font-medium leading-[1.5] underline">terms and conditions</span>
          <span className="font-['Montserrat',sans-serif] font-medium leading-[1.5]">{` and marketing communications.`}</span>
        </p>
      </div>
    </div>
  );
}

function LeftContent({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[2px]" data-name="Left Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0 size-[32px] cursor-pointer" data-name="Icon Button" onClick={onClick}>
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
            <div className="relative shrink-0 size-[18px]" data-name="arrow_back">
              <div className="absolute inset-[16.67%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p83cd500} fill="var(--fill-0, #323232)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CenterContent() {
  return <div className="h-[44px] rounded-[2px] shrink-0 w-[35px]" data-name="Center Content" />;
}

function RightContent() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[2px]" data-name="Right Content">
      <div className="size-full" />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35.093px] left-1/2 top-[calc(50%-0.02px)] w-[38px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 35.0938">
        <g id="Group 1">
          <path d={svgPaths.p5aa6500} fill="var(--fill-0, #F8C642)" id="Subtract" />
          <path d={svgPaths.p3a3fffc0} fill="var(--fill-0, #F8C642)" id="Vector 9" />
          <path d={svgPaths.p2dbbf4c0} fill="var(--fill-0, #F8C642)" id="Vector 10" />
          <path d={svgPaths.p3ff7f500} fill="var(--fill-0, #F8C642)" id="Vector 11" />
          <path d={svgPaths.p4c9570} fill="var(--fill-0, #F8C642)" id="Vector 12" />
          <path d={svgPaths.p11d25b00} fill="var(--fill-0, #F8C642)" id="Vector 13" />
          <path d={svgPaths.p360667c0} fill="var(--fill-0, #F8C642)" id="Vector 14" />
          <path d={svgPaths.pfe03a00} fill="var(--fill-0, #F8C642)" id="Vector 15" />
          <path d={svgPaths.p2fdfd200} fill="var(--fill-0, #F8C642)" id="Vector 16" />
          <path d={svgPaths.p2b73c600} fill="var(--fill-0, #F8C642)" id="Vector 17" />
          <path d={svgPaths.p2d7742c0} fill="var(--fill-0, #F8C642)" id="Vector 18" />
        </g>
      </svg>
    </div>
  );
}

export default function SigninWithEmail({ onBack, onCreateAccount, onLoginSuccess, onSSO, email, setEmail }: { onBack?: () => void; onCreateAccount?: () => void; onLoginSuccess?: () => void; onSSO?: (provider: "apple" | "google") => void; email: string; setEmail: (v: string) => void }) {
  return (
    <div className="relative size-full" data-name="Signin with Email - 5">
      <LoginSignin onCreateAccount={onCreateAccount} onLoginSuccess={onLoginSuccess} onSSO={onSSO} email={email} setEmail={setEmail} />
    </div>
  );
}