import { useUser } from "../../../context/useUser";

const Profile = () => {
  const { user, loading, error } = useUser();

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f4f0e8] px-6 py-10 text-[#17211b] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="animate-pulse">
            <div className="h-4 w-32 rounded bg-[#d5d8d0]" />
            <div className="mt-5 h-12 w-80 rounded bg-[#d5d8d0]" />
            <div className="mt-3 h-5 w-96 max-w-full rounded bg-[#d5d8d0]" />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div className="h-80 rounded-[2rem] bg-white" />
              <div className="h-80 rounded-[2rem] bg-white" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f0e8] px-6">
        <div className="w-full max-w-md rounded-[2rem] bg-[#17211b] p-10 text-center text-[#f4f0e8] shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fbe5df] text-2xl text-[#d86f45]">
            !
          </div>

          <h1 className="mt-6 text-3xl font-black">Unable to load profile</h1>

          <p className="mt-3 leading-7 text-[#c9d0c7]">
            We couldn't retrieve your profile information. Please try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-7 rounded-xl bg-[#d86f45] px-6 py-3 font-bold text-white transition hover:bg-[#bd5938]"
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  const initials = user.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-[#f4f0e8] px-6 py-10 text-[#17211b] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d86f45]">
              Account / Profile
            </p>

            <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-6xl">
              Welcome back.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-8 text-[#687168]">
              Your account is active and your session is ready.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#e5eadf] px-4 py-2 text-sm font-bold text-[#344039]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#5f9f70]" />
            Authenticated
          </div>
        </header>

        {/* Main Grid */}
        <section className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          {/* Profile Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#17211b] p-8 text-[#f4f0e8] shadow-2xl sm:p-10">
            {/* Decorative shapes */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e7b75b]" />

            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border-[3rem] border-[#d86f45]" />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e7b75b]">
                Personal information
              </p>

              {/* Avatar */}
              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.75rem] bg-[#d86f45] text-3xl font-black text-white shadow-lg">
                  {initials}
                </div>

                <div>
                  <h2 className="text-3xl font-black sm:text-4xl">
                    {user.name}
                  </h2>

                  <p className="mt-2 text-[#c9d0c7]">{user.email}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#364139] bg-[#202b23] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9da99e]">
                    Full name
                  </p>

                  <p className="mt-2 font-semibold">{user.name}</p>
                </div>

                <div className="rounded-2xl border border-[#364139] bg-[#202b23] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9da99e]">
                    Email address
                  </p>

                  <p className="mt-2 break-all font-semibold">{user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Session Card */}
          <div className="rounded-[2rem] bg-[#fffdf8] p-8 shadow-xl sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d86f45]">
              Session
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              You're signed in
            </h2>

            <p className="mt-3 leading-7 text-[#687168]">
              Your authentication session is currently active.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-[#f4f0e8] p-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#687168]">
                    Account
                  </p>
                  <p className="mt-1 font-bold text-[#17211b]">Active</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5eadf] text-[#4f8b60]">
                  ✓
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-[#f4f0e8] p-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#687168]">
                    Authentication
                  </p>
                  <p className="mt-1 font-bold text-[#17211b]">Access token</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fbe5df] text-[#d86f45]">
                  🔐
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-[#f4f0e8] p-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#687168]">
                    Session
                  </p>
                  <p className="mt-1 font-bold text-[#17211b]">Refresh-ready</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8edcf]">
                  ↻
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Banner */}
        <section className="mt-6 rounded-[2rem] border border-[#d5d8d0] bg-[#fffdf8] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d86f45]">
                Security
              </p>

              <h2 className="mt-2 text-xl font-black">
                Your session is protected
              </h2>

              <p className="mt-1 text-sm leading-6 text-[#687168]">
                Access tokens handle API requests while refresh tokens keep your
                session alive.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#17211b] text-2xl text-[#e7b75b]">
              🔒
            </div>
          </div>
        </section>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-[#8a928a]">
          Secure account creation with refresh-ready sessions.
        </p>
      </div>
    </main>
  );
};

export default Profile;
