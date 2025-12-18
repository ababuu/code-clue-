import { useActionState, useState } from "react";
import { explain } from "../../actions";
import CodeExplanation from "../CodeExplanation";
import Error from "../Error";

export default function CodeExplainForm() {
  const [formState, formAction, isPending] = useActionState(explain, null);
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
      <form action={formAction} className="flex flex-col">
        <label htmlFor="language" className="block mb-2 font-semibold">
          Language:
        </label>
        <select
          name="language"
          id="language"
          className="border rounded-lg p-2 w-full mb-4 bg-transparent"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
        <label htmlFor="code" className="block mb-2 font-semibold">
          Code Snippet:
        </label>
        <textarea
          name="code"
          id="code"
          className="border rounded-lg p-3 w-full bg-transparent font-mono text-sm min-h-[150px]"
          //   rows={10}
          required
          placeholder="Paste your code snippet here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex justify-center items-center w-40 cursor-pointer"
          disabled={isPending}
        >
          {isPending ? (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          ) : (
            "Explain Code"
          )}
        </button>
      </form>
      {isPending ? (
        <p className="bg-gray-50 my-3 w-64 p-2 rounded-sm">
          Generating explanation...
        </p>
      ) : formState?.success ? (
        <CodeExplanation explanation={formState?.data.explanation} />
      ) : (
        formState?.success === false && <Error error={formState?.error} />
      )}
    </div>
  );
}
