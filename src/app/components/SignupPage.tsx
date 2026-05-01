import React from "react";
import svgPaths from "../../imports/SigninWithEmail5/svg-y7tkg23vjj";

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
        <p className="-translate-x-1/2 absolute font-semibold h-[20px] leading-[21px] left-[27px] not-italic text-[16px] text-black text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
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

function PasswordField({
  value,
  onChange,
  label,
  placeholder,
  showPassword,
  onTogglePassword,
  helperText,
  inputRef,
  isValid = false,
  error,
  onBlur
}: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  showPassword: boolean;
  onTogglePassword: () => void;
  helperText?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  isValid?: boolean;
  error?: string;
  onBlur?: () => void;
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const hasValue = value.length > 0;
  const stateClass = error
    ? "border-red text-red"
    : isValid
    ? "border-green text-green"
    : "border-black text-black";

  return (
    <div className="relative w-full">
      <div className="bg-white content-stretch flex gap-xs h-[44px] items-center justify-center p-sm relative rounded-sm shrink-0 w-full" data-name="Field">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-sm transition-colors duration-200 ${stateClass}`} />
        {(hasValue || isFocused) && (
          <div className={`absolute font-sans font-medium left-sm text-overline top-[-8px] bg-white px-xxs transition-all duration-200 z-10 ${stateClass}`}>
            {label}
          </div>
        )}
        <input
          ref={inputRef}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => { setIsFocused(false); onBlur?.(); }}
          placeholder={placeholder}
          autoComplete="new-password"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint={label === "Confirm password" ? "done" : "next"}
          className="flex flex-[1_0_0] flex-col font-sans font-medium justify-center leading-[1.4] min-w-px relative bg-transparent border-none outline-none w-full text-black text-body placeholder:text-grey-600 placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0"
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="relative shrink-0 size-[20px] cursor-pointer bg-transparent border-none outline-none p-0"
        >
          {!showPassword ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5C5.83333 5 2.5 10 2.5 10C2.5 10 5.83333 15 10 15C14.1667 15 17.5 10 17.5 10C17.5 10 14.1667 5 10 5Z" stroke="var(--color-grey-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="var(--color-grey-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 3.33334L16.6667 16.6667" stroke="var(--color-grey-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.25001 8.25C7.91758 8.58078 7.65422 8.97533 7.47569 9.40935C7.29716 9.84338 7.20703 10.3101 7.21095 10.7806C7.21487 11.2512 7.31275 11.7162 7.49848 12.1471C7.6842 12.5781 7.95393 12.9668 8.29167 13.2917C8.62942 13.6167 9.02545 13.871 9.46143 14.0388C9.89741 14.2065 10.3643 14.2844 10.8348 14.2675C11.3053 14.2507 11.7657 14.1394 12.1896 13.9406C12.6135 13.7418 12.9915 13.4598 13.3 13.1117" stroke="var(--color-grey-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.89166 5.89166C5.13883 6.92499 3.74166 8.60832 2.5 10.4167C2.5 10.4167 5.41666 15.8333 10 15.8333C11.4733 15.8583 12.9217 15.45 14.1583 14.6583" stroke="var(--color-grey-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.8667 13.0333C16.7717 12.0917 17.5167 11.0083 17.5 10C17.5 10 14.5833 4.58334 10 4.58334C9.55 4.58334 9.11667 4.64167 8.69167 4.73334" stroke="var(--color-grey-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5833 7.58334C11.0671 7.70506 11.5069 7.95632 11.8537 8.30863C12.2005 8.66094 12.4411 9.10153 12.55 9.58334" stroke="var(--color-grey-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
      {error ? (
        <div className="font-sans font-medium text-caption text-red mt-xxs ml-sm">
          {error}
        </div>
      ) : helperText ? (
        <div className="font-sans text-caption text-grey-600 mt-xxs ml-sm">
          {helperText}
        </div>
      ) : null}
    </div>
  );
}

export default function SignupPage({ onBack, active = false, onContinue }: { onBack?: () => void; active?: boolean; onContinue?: () => void }) {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [passwordTouched, setPasswordTouched] = React.useState(false);
  const [confirmTouched, setConfirmTouched] = React.useState(false);
  const isPasswordValid = password.length >= 8;
  const isConfirmValid = isPasswordValid && confirmPassword === password;
  const canContinue = isPasswordValid && isConfirmValid;

  const passwordError =
    passwordTouched && !isPasswordValid
      ? password.length === 0
        ? "Password is required"
        : "Password must be at least 8 characters"
      : "";
  const confirmError =
    confirmTouched && !isConfirmValid
      ? confirmPassword.length === 0
        ? "Please confirm your password"
        : "Passwords do not match"
      : "";

  React.useEffect(() => {
    if (active) {
      const t = setTimeout(() => passwordRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [active]);

  return (
    <div className="relative size-full bg-grey-100" data-name="Signup Page">
      <div className="pt-[140px] px-sm">
        <h1 className="font-sans text-title-3 text-black mb-lg">
          Create a password
        </h1>

        <div className="flex flex-col gap-md">
          <PasswordField
            value={password}
            onChange={setPassword}
            label="Password"
            placeholder="Password"
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            helperText="Your password should contain at least 8 characters"
            inputRef={passwordRef}
            isValid={isPasswordValid}
            error={passwordError}
            onBlur={() => setPasswordTouched(true)}
          />

          <PasswordField
            value={confirmPassword}
            onChange={setConfirmPassword}
            label="Confirm password"
            placeholder="Confirm password"
            showPassword={showConfirmPassword}
            onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            isValid={isConfirmValid}
            error={confirmError}
            onBlur={() => setConfirmTouched(true)}
          />

          <button
            type="button"
            onClick={onContinue}
            disabled={!canContinue}
            className="bg-sunflower h-[44px] rounded-sm w-full mt-xs font-sans font-semibold text-caption text-black cursor-pointer transition-colors disabled:bg-grey-400 disabled:text-grey-500 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
