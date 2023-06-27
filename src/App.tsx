import { RecoilState, useRecoilValue } from "recoil";
import { useMemo } from "react";
import RowDescription from "./components/row-description";
import { OddsArray, SummaryAtom } from "./state";
import Form from "./components/form";

export const App: React.FC = () => {
	const summary = useRecoilValue(SummaryAtom);
	const rowData: Array<
		[id: number, summaryState: [percentage: number, isSafe: boolean], valueState: RecoilState<number>]
	> = useMemo(() => OddsArray.map((value, index) => [index + 1, summary[index], value]), [summary]);

	return (
		<div className="container">
			<RowDescription key="RowDescription" />
			<Form rowData={rowData} key="Form" />
		</div>
	);
};

export default App;
