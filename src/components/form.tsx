import FormRow from "./form-row";
import type { RecoilState } from "recoil";

export interface IFormProperties {
  rowData: Array<
    [
      id: number,
      summaryState: [percentage: number, isSafe: boolean],
      valueState: RecoilState<number>
    ]
  >;
}

export const Form: React.FC<IFormProperties> = ({ rowData }) => {
  return (
    <div role="list">
      {rowData.map(([id, summaryState, valueState]) => (
        <FormRow
          key={`Row${id}`}
          id={id}
          summaryState={summaryState}
          valueState={valueState}
        />
      ))}

      {/* <br />
			<button type="button" className="bg-green-500 text-white text-lg py-2 px-4 rounded" id="calculate">
				Calculate
			</button> */}
    </div>
  );
};

export default Form;
