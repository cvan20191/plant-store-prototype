export default function Field({ label, value, type, onChange }) {
  return (
    <div key={label} className="flex flex-col my-4">
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        className="w-64 px-2 py-1 border rounded-lg bg-slate-50 border-slate-200 focus:outline-emerald-600 text-gray-800"
        id={label}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
