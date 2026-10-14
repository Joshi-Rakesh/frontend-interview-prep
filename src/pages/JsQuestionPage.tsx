import CodeViewer from "../components/CodeViewer";
import { jsQuestions } from "../questions/js/hands-on";
import { useDifficultyFilter } from "../hooks/useDifficultyFilter";

export default function JsQuestionPage() {
  const { selectedDifficulties } = useDifficultyFilter();

  const filteredQuestions = jsQuestions.filter((question) =>
    selectedDifficulties.includes(question.difficulty),
  );

  if (!jsQuestions.length) {
    return <div>No questions available.</div>;
  }

  if (!filteredQuestions.length) {
    return <div>No questions available for the selected filter.</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      {filteredQuestions.map((question, index) => (
        <CodeViewer
          key={question.id}
          title={`${index + 1}. ${question.title}`}
          difficulty={question.difficulty}
          component={question.component}
          files={question.files}
          description={question.description}
          runnable={question.runnable}
        />
      ))}
    </div>
  );
}
