import { Card, Tag } from "antd";
import {
  DifficultyColor,
  type DifficultyType,
} from "../utility/difficultyColor";
import CodeBlock from "./CodeBlock";

type Props = {
  title: string;
  description?: string;
  difficulty: DifficultyType;
};

const TheoryViewer = ({ title, description, difficulty }: Props) => {
  return (
    <Card
      title={<p className="text-wrap p-2 mr-5">{title}</p>}
      extra={
        difficulty && (
          <Tag color={DifficultyColor[difficulty]}>{difficulty}</Tag>
        )
      }
    >
      <CodeBlock file={description || ""} markdown />
    </Card>
  );
};

export default TheoryViewer;
