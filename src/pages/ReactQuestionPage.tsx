import CodeViewer from "../components/codeViewer";
import { reactQuestions } from "../data/reactQuestions";

export default function ReactQuestionPage() {
  return (
    <div className="flex flex-col gap-6">
      {reactQuestions.map((question, index) => (
        <CodeViewer
          key={question.id}
          title={`${index + 1}. ${question.title}`}
          difficulty={question.difficulty}
          component={question.component}
          code={question.code}
          utilityCode={question.utilityCode}
          description={question.description}
        />
      ))}
    </div>
  );
}
