import TheoryViewer from "../components/TheoryViewer";
import { jsQuestions } from "../questions/js/theory";
import { useDifficultyFilter } from "../hooks/useDifficultyFilter";

const JsTheoryPage = () => {
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
        <TheoryViewer
          key={question.id}
          title={`${index + 1}. ${question.title}`}
          difficulty={question.difficulty}
          description={question.description}
        />
      ))}
    </div>
  );
};

export default JsTheoryPage;
