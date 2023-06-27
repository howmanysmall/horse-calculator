import { useCallback } from "react";
import { RecoilState, useRecoilState } from "recoil";

export interface IFormRowProperties {
	id: number;
	summaryState: [percentage: number, isSafe: boolean];
	valueState: RecoilState<number>;
}

export const FormRow: React.FC<IFormRowProperties> = ({ id, summaryState, valueState }) => {
	const [value, setValue] = useRecoilState(valueState);
	const [percentage, isSafe] = summaryState;
	const onChange = useCallback(
		(element: React.ChangeEvent<HTMLInputElement>) => {
			if (element.target.value === "" || element.target.value === undefined) setValue(1);
			else setValue(Number.parseInt(element.target.value));
		},
		[setValue],
	);

	return (
		<div className="flex flex-col row">
			<div className="w-1/2 ml-auto">
				<div className="flex items-center odds" style={{ float: "right" }}>
					<input
						aria-describedby="basic-addon2"
						className="form-input text-lg w-full oddsInput text-black"
						id={`horse${id}`}
						type="number"
						value={value.toString()}
						onChange={onChange}
					/>

					<span className="ml-2 text-lg" id="basic-addon2">
						/1
					</span>
				</div>
			</div>

			{isSafe ? (
				<h4 className="text-green-500 font-bold mb-0">{percentage}%</h4>
			) : (
				<h4 className="text-red-500 font-bold mb-0">{percentage}%</h4>
			)}
		</div>
	);
};

export default FormRow;
