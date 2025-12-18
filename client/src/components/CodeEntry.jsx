import CodeExplainForm from "./forms/CodeExplainForm";
import Header from "./Header";

export default function CodeEntry() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <Header />
      <CodeExplainForm />
    </div>
  );
}
