import { RecoilValueReadOnly, atom, selector } from "recoil";
import Horse from "./classes/horse";
import Race from "./classes/race";

export const Horse1OddsAtom = atom({
	default: 1,
	key: "Horse1OddsAtom",
});

export const Horse2OddsAtom = atom({
	default: 1,
	key: "Horse2OddsAtom",
});

export const Horse3OddsAtom = atom({
	default: 1,
	key: "Horse3OddsAtom",
});

export const Horse4OddsAtom = atom({
	default: 1,
	key: "Horse4OddsAtom",
});

export const Horse5OddsAtom = atom({
	default: 1,
	key: "Horse5OddsAtom",
});

export const Horse6OddsAtom = atom({
	default: 1,
	key: "Horse6OddsAtom",
});

export const SummaryAtom: RecoilValueReadOnly<Array<[percentage: number, isSafe: boolean]>> = selector({
	key: "SummaryAtom",
	get: ({ get }) => {
		const odds = [
			get(Horse1OddsAtom),
			get(Horse2OddsAtom),
			get(Horse3OddsAtom),
			get(Horse4OddsAtom),
			get(Horse5OddsAtom),
			get(Horse6OddsAtom),
		];

		const race = new Race();
		for (const oddsValue of odds) race.AddHorse(new Horse(oddsValue, 1));
		race.CalculateOdds();

		const summaries = new Array<[percentage: number, isSafe: boolean]>();

		for (const summary of race.Summary) {
			const [percentage, truePercentage] = summary;
			const newPercentage = Number.parseFloat(percentage.toFixed(2));
			const newTruePercentage = Number.parseFloat(truePercentage.toFixed(2));
			summaries.push([newTruePercentage, newTruePercentage > newPercentage]);
		}

		return summaries;
	},
});

export const OddsArray = [
	Horse1OddsAtom,
	Horse2OddsAtom,
	Horse3OddsAtom,
	Horse4OddsAtom,
	Horse5OddsAtom,
	Horse6OddsAtom,
];

export const OddsMap = {
	1: Horse1OddsAtom,
	2: Horse2OddsAtom,
	3: Horse3OddsAtom,
	4: Horse4OddsAtom,
	5: Horse5OddsAtom,
	6: Horse6OddsAtom,
};
