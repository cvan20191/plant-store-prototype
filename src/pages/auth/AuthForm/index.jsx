const AuthForm = (props) => {
  const {fields} = props;

  return <form className="p-4 m-4 bg-white border rounded-lg font-lato border-slate-200">
    {
      fields.map((field) => <div key={field.label} className="flex flex-col my-4">
        <label htmlFor={field.label} className="pl-1 text-slate-500">{field.label}</label>
        <input id={field.label} type={field.type} className="w-64 px-2 py-1 border rounded-lg bg-slate-50 border-slate-200 focus:outline-emerald-600" />
      </div>)
    }
    <button className="w-full py-2 mt-4 text-white rounded-lg bg-emerald-700">
      click me
    </button>
  </form>
};

export default AuthForm;
