import styled from "styled-components";
import dayjs from "dayjs";

export default function FinanceLine(props) {
  const { date, description, type, value } = props.item;
  return (
    <Line type={type}>
      <div className="date">{dayjs(date).format("DD/MM")}</div>
      <span className="description">{description}</span>
      <p className="value">{parseFloat(value).toFixed(2) / 100}</p>
    </Line>
  );
}

const Line = styled.li`
  width: 100%;
  display: flex;

  margin-bottom: 20px;
  font-size: 16px;

  .date {
    width: 48px;

    padding: 0;
    margin: 0px 8px 0 0;
    color: #c6c6c6;
    font-size: 16px;
    font-weight: normal;
  }
  .description {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  }
  .value {
    color: ${(props) => (props.type === "revenue" ? "green" : "red")};
    text-align: right;
    font-size: 16px;
  }
`;
