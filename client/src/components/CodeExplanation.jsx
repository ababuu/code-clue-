import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CodeExplanation({ explanation }) {
  return (
    <div className="w-full max-w-4xl bg-gray-50 p-6 rounded-2xl mt-6 shadow-lg font-sans">
      <h2 className="text-xl font-semibold mb-2">Code Explanation:</h2>
      <Markdown remarkPlugins={[remarkGfm]}>{explanation}</Markdown>
    </div>
  );
}
