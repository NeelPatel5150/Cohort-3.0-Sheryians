import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../../context/useAuth";


const initialForm = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const { register, loading, error: requestError } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (form.name.trim().length < 3) {
      nextErrors.name = "Name must be at least 3 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    return nextErrors;
  };

  const handleChange = ({ target }) => {
    setForm((currentForm) => ({ ...currentForm, [target.name]: target.value }));
    setErrors((currentErrors) => ({ ...currentErrors, [target.name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });
      navigate("/profile");
    } catch (requestError) {
      const fieldErrors = requestError.fieldErrors || {};
      setErrors(fieldErrors);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f0e8] px-6 py-10 text-[#17211b] sm:px-10 lg:px-16">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-[2rem] bg-[#17211b] shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative flex flex-col justify-between overflow-hidden p-8 text-[#f4f0e8] sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e7b75b]" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[3rem] border-[#d86f45]" />
          <div className="relative z-10">
            <p className="mb-16 text-sm font-bold uppercase tracking-[0.25em] text-[#e7b75b]">
              Access / Refresh
            </p>
            <h1 className="max-w-lg text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              Your next session starts here.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#c9d0c7]">
              Create your account and keep your profile ready wherever you sign
              in.
            </p>
          </div>
          <p className="relative z-10 mt-16 text-sm text-[#9da99e]">
            Secure account creation with refresh-ready sessions.
          </p>
        </section>

        <section className="bg-[#fffdf8] p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d86f45]">
              New account
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#17211b]">
              Create your profile
            </h2>
            <p className="mt-3 text-[#687168]">
              Use your real details so your profile is ready immediately.
            </p>

            {requestError && !requestError.fieldErrors && (
              <p className="mt-6 rounded-xl bg-[#fbe5df] px-4 py-3 text-sm font-medium text-[#a5402e]">
                {requestError.message}
              </p>
            )}

            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
              <label className="block text-sm font-bold text-[#344039]">
                Name
                <input
                  className="mt-2 w-full rounded-xl border border-[#d5d8d0] bg-white px-4 py-3.5 font-normal outline-none transition focus:border-[#d86f45] focus:ring-4 focus:ring-[#d86f45]/15"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Avery Morgan"
                  autoComplete="name"
                  required
                />
                {errors.name && (
                  <span className="mt-1 block text-xs font-medium text-[#b34a36]">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="block text-sm font-bold text-[#344039]">
                Email
                <input
                  className="mt-2 w-full rounded-xl border border-[#d5d8d0] bg-white px-4 py-3.5 font-normal outline-none transition focus:border-[#d86f45] focus:ring-4 focus:ring-[#d86f45]/15"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <span className="mt-1 block text-xs font-medium text-[#b34a36]">
                    {errors.email}
                  </span>
                )}
              </label>

              <label className="block text-sm font-bold text-[#344039]">
                Password
                <input
                  className="mt-2 w-full rounded-xl border border-[#d5d8d0] bg-white px-4 py-3.5 font-normal outline-none transition focus:border-[#d86f45] focus:ring-4 focus:ring-[#d86f45]/15"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  required
                />
                {errors.password && (
                  <span className="mt-1 block text-xs font-medium text-[#b34a36]">
                    {errors.password}
                  </span>
                )}
              </label>

              <button
                className="w-full rounded-xl bg-[#d86f45] px-5 py-4 font-bold text-white transition hover:bg-[#bd5938] focus:outline-none focus:ring-4 focus:ring-[#d86f45]/25 disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#687168]">
              Already have an account?{" "}
              <Link
                className="font-bold text-[#d86f45] hover:underline"
                to="/profile"
              >
                View profile
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
