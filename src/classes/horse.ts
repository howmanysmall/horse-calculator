export default class Horse {
	private Odds: [left: number, right: number];
	private Percentage?: number;
	private RealPercentage: number;

	public constructor(left: number, right: number) {
		this.Odds = [left, right];
		this.RealPercentage = 0;
	}

	public get OddsFraction() {
		return this.Odds.join("/");
	}

	public get OddsPercentage() {
		return this.Percentage === undefined ? Number.NaN : Number.parseFloat(this.Percentage.toString());
	}

	public set TruePercentage(truePercentage: number) {
		this.RealPercentage = truePercentage;
	}

	public get TruePercentage() {
		return this.RealPercentage;
	}

	public CalculatePercentage() {
		const [left, right] = this.Odds;
		this.Percentage = (1 / (left / right + 1)) * 100;
	}
}
